console.log('Поиск элементов');

/*
.getElementById()

.getElementsByTagName()
.getElementsByClassName()

.querySelector()
.querySelectorAll()
*/

let h2 = document.getElementById('header2');
console.log(h2);

let item5 = document.getElementById('listItem5');
console.log(item5);

console.log(document.getElementById('text')); // null


let listP = document.getElementsByTagName('p');
console.log(listP);

let classLink = document.getElementsByClassName('link');
console.log(classLink);

let elements = document.getElementsByClassName('bgc-green');
console.log(elements);

console.log(document.getElementsByClassName('class')); []

// поиск по селектору тегов
let elements2  = document.querySelector('p');
console.log(elements2);

elements2  = document.querySelector('h2');
console.log(elements2);

// ... идентификаторов
elements2  = document.querySelector('#listItem5');
console.log(elements2);

// ... классов
elements2  = document.querySelector('.link');
console.log(elements2);

elements2 = document.querySelectorAll('.link');
console.log(elements2);

elements2 = document.querySelectorAll('p');
console.log(elements2);

// поиск по вложенным селекторам
elements2 = document.querySelectorAll('h2 span em');
console.log(elements2);

// поиск по любым CSS селекторам, например
elements2 = document.querySelectorAll('a[href="#hash2"]');
console.log(elements2);

console.log(document.querySelectorAll('*'));


/*
.querySelector()
.querySelectorAll()
*/

let list = document.querySelectorAll('ul')[0];
console.log(list);

let listA = list.querySelectorAll('a');
console.log(listA);

let subList = list.querySelector('ul');
console.log(subList);

console.log(subList.querySelectorAll('.item3'));