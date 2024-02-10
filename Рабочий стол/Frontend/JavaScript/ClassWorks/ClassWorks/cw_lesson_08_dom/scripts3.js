console.log('Работа с элементами');

let listA = document.querySelectorAll('a');
console.log(listA);

for(let i = 0; i < listA.length; i++) {
    //console.log(listA[i]);

    // .matches()
    // true / false
    if (listA[i].matches('a[href="#hash3"]')) console.log(listA[i]); 
}

// .closest()

let hash3 = document.querySelector('a[href="#hash3"]');
console.log(hash3);

console.log(hash3.closest('li'));
console.log(hash3.closest('ul'));
console.log(hash3.closest('body'));

console.log(hash3.closest('.class')); // null


let p1 = document.querySelector('#p1');
console.log(p1);

/*
.innerHTML
.outerHTML
.textContent
*/

console.log(p1.innerHTML);
console.log(p1.outerHTML);
console.log(p1.textContent);

p1.innerHTML = 'New content';
p1.innerHTML = '<b>Text text</b>';
p1.outerHTML = '<div id="div1">New content</div>';

// .hidden = true / false
document.querySelector('img.align-left').hidden = true;

/*
.value
.id
.href
...
*/

console.dir(p1);
console.log(p1.id);

console.log(document.querySelector('[name="email"]').value);
console.log(hash3.href);


/*
.hasAttribute()
.getAttribute()
.setAttribute()
.removeAttribute()
.attributes
*/

console.log(hash3.hasAttribute('href')); // true
console.log(hash3.hasAttribute('class')); // false
console.log(hash3.getAttribute('href')); // #hash3
console.log(hash3.getAttribute('class')); // null

// name, value
hash3.setAttribute('class', 'link link3');
hash3.setAttribute('id', 'link3');

hash3.setAttribute('style', "background-color: blue; color: #fff;");

hash3.removeAttribute('id');
hash3.removeAttribute('style');

console.log(hash3.attributes);


/*
.className
.classList

.classList.contains()
.classList.add()
.classList.remove()
.classList.toggle()
*/

console.log(hash3.className);
console.log(hash3.classList);

console.log(hash3.classList.contains('text')); // false
console.log(hash3.classList.contains('link3')); // true

hash3.classList.add('some-class');
hash3.classList.add('class-name');
hash3.classList.remove('some-class');
hash3.classList.remove('class-name');

hash3.classList.toggle('active');
hash3.classList.toggle('link');


let header = document.querySelector('h1');
console.log(header.style);

header.style.backgroundColor = 'green';
header.style.color = 'white';
header.style.padding = '10px 20px';
header.style.textTransform = 'uppercase';

header.style.cssText = 'background-color: #c00; color: #fff; text-align: left;';


/* window.getComputedStyle(element) */

console.log(window.getComputedStyle(document.body));
console.log(window.getComputedStyle(header));

let stylesHeader = window.getComputedStyle(header);

console.log(stylesHeader.backgroundColor);
console.log(stylesHeader.margin);

header.style.margin = '0 20px 40px 0';
console.log(stylesHeader.margin);

console.dir(header);