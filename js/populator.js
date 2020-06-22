function Populator() {
}

Populator.prototype.populate = async function() {
    const templates = toArray(document.querySelectorAll('[data-file]'));
    const promises = templates.map(async function(element) {
        let parent = element.parentElement;
        let next = element.nextElementSibling;
        const path = element.dataset.file;

        return getData(path).then(function(data) {
            data.forEach(function(row) {
                let component = element.cloneNode(true);
                component = fillComponent(component, row);
                parent.insertBefore(component, next);
            });

            parent.removeChild(element);
        });

    });

    return Promise.all(promises).then(processDataScr);

    function processDataScr() {
        const elements = toArray(document.querySelectorAll('[data-src]'));
        elements.forEach(function(element) {
            value = element.dataset.src;
            element.setAttribute('src', value);
        });
    }

    async function getData(url) {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Can\'t read data from ${url}. Status code: ${response.status}`);
        }
        return await response.json();
    }

    function toArray(obj) {
        const array = [];
        for (let i = 0; i < obj.length; ++i) {
            array.push(obj[i]);
        }
        return array;
    }

    function fill(str, name, value) {
        return str.split('{{' + name + '}}').join(value);
    }

    function fillValue(value, row) {
        let val = value;
        Object.keys(row).forEach(function(key) {
            val = fill(val, key, row[key]);
        });

        return val;
    }

    function fillComponent(component, row) {
        for (let idx = 0; idx < component.attributes.length; ++idx) {
            const attr = component.attributes[idx];
            attr.value = fillValue(attr.value, row);
        }
        component.innerHTML = fillValue(component.innerHTML, row);

        return component;
    }
};

Populator.prototype.copy = function() {
    const templates = document.querySelectorAll('[data-copy]');
    templates.forEach(function(element) {
        let parent = element.parentElement;
        let next = element.nextElementSibling;
        const count = element.dataset.copy;

        for (let i = 0; i < count - 1; ++i) {
            let component = element.cloneNode(true);
            parent.insertBefore(component, next);
        }
    });
};

Populator.prototype.clone = function() {
    const templates = document.querySelectorAll('[data-clone]');
    templates.forEach(function(element) {
        let parent = element.parentElement;
        const id = element.dataset.clone;
        const source = document.getElementById(id);
        let component = source.cloneNode(true);

        parent.replaceChild(component, element);
    });
};
