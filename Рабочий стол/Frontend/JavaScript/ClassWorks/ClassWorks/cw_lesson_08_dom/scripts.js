console.log('DOM');

console.log(document.body);

let body = document.body;

console.log(body.childNodes);
console.log(body.childNodes[1]);

console.dir(body.childNodes[1]);

console.log(document.body.h1); // undefined
console.log(document.body.p); // undefined

document.body.style.backgroundColor = '#fff';
body.style.padding = '5%';

for(let i = 0; i < body.childNodes.length; i++) {
    console.log(body.childNodes[i]);
}

console.log(body.childNodes[3].childNodes[0]); // Page header
console.log(body.childNodes[3].childNodes[2].childNodes[0].childNodes[0]); // Some text

let list = body.childNodes[17];
console.log(list);

console.log(list.previousSibling.previousSibling);
console.log(list.nextSibling);

console.log(list.firstChild);
console.log(list.lastChild);

console.log(body.children);
console.log(list.children);

for(let i = 0; i < list.children.length; i++) {
    console.log(list.children[i]);
}

console.log(list.firstElementChild);
console.log(list.lastElementChild);

let lastListItem = list.lastElementChild;

console.log(lastListItem.parentElement); // ul
console.log(lastListItem.parentElement.parentElement); // body

console.log(body.parentElement); // html
console.log(body.parentElement.parentElement); // null
console.dir(body.parentElement.parentNode); // #document

console.log(list.previousElementSibling);
console.log(list.nextElementSibling);