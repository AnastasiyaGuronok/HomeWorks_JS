let carFord = {
    model: 'Ford',
    color: 'Red',
    doors: 2
};

console.log(carFord);


let Car = function(data) {
    this.model = data.model;
    this.color = data.color;
    this.doors = data.doors;

    this.showModel = function() {
        return this.model;
    }
};

let carOpel = new Car({
    model: 'Opel',
    color: 'Green',
    doors: 4
});

let carBmw = new Car({
    model: 'BMW',
    color: 'Black',
    doors: 4
});

console.log(carOpel);
console.log(carBmw);


class Car2 {
    constructor(data) {
        this.model = data.model;
        this.color = data.color;
        this.doors = data.doors;
    }

    showModel() {
        return this.model;
    }
}

let carMersedes = new Car2({
    model: 'Mersedes',
    color: 'White',
    doors: 2
});

console.log(carMersedes);


for(let key in carBmw) {
    console.log(key);
}

for(let key in carMersedes) {
    console.log(key);
}


function f1() {
    console.log('f1');
}

function f2() {
    console.log('f2');
}

function f3() {
    console.log('f3');
}


// document.createElement
// document.querySelectorAll
// document.insertBefore
// document.appendChild

class DOM {
    static create(type) {
        return document.createElement(type);
    }

    static search(selector) {
        return document.querySelectorAll(selector);
    }

    static insert(to, element, beforeElement) {
        if (!to || !element) return false;

        if (!beforeElement) to.appendChild(element);
        else to.insertBefore(element, beforeElement);
    }
}

// console.log(DOM.create('h1'));
// console.log(DOM.search('body'));

let elemH1 = DOM.create('h1');
elemH1.innerHTML = 'Main header';

DOM.insert(document.body, elemH1);

let container = DOM.create('div');
container.classList.add('container');
container.innerHTML = '<p>Some text</p>';

DOM.insert(document.body, container);

let elemH2 = DOM.create('h2');
elemH2.innerHTML = 'Header 2';

DOM.insert(container, elemH2, DOM.search('.container > p')[0]);