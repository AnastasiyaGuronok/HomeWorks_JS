document.head.innerHTML = '';
document.body.innerHTML = '';

/*
.createElement()
.appendChild()
*/

let title = document.createElement('title');
title.innerHTML = 'New html document';

let metaUtf8 = document.createElement('meta');
metaUtf8.setAttribute('charset', 'UTF-8');

console.log(title);
console.log(metaUtf8);

document.head.appendChild(title);
document.head.appendChild(metaUtf8);

let h1 = document.createElement('h1');
h1.innerHTML = 'Page header';

let p1 = document.createElement('p');
p1.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum ad ipsum nostrum voluptatibus obcaecati iste laborum! Possimus beatae officiis quia amet natus magnam eveniet, eaque aspernatur. Nostrum quibusdam similique deleniti?';

document.body.appendChild(h1);
document.body.appendChild(p1);

let div1 = document.createElement('div');
// div1.innerHTML = 'Text'
div1.classList.add('block');

document.body.appendChild(div1);

let p2 = document.createElement('p');
p2.innerHTML = 'Cum at labore sint voluptates enim doloribus maxime, fuga earum modi ab veritatis nihil dolorum esse unde amet porro ducimus, laudantium blanditiis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum ad ipsum nostrum voluptatibus obcaecati iste laborum! Possimus beatae officiis quia amet natus magnam eveniet, eaque aspernatur. Nostrum quibusdam similique deleniti?';

div1.appendChild(p2);

let span1 = document.createElement('span');
span1.innerHTML = 'Some text';

p2.appendChild(span1);

let ul1 = document.createElement('ul');
ul1.innerHTML = `
<li>Item 1</li>
<li>Item 2</li>
<li>Item 3</li>
<li>Item 4</li>
<li>Item 5</li>
<li>Item 6</li>`;

document.body.appendChild(ul1);

/*
element.insertBefore(elem, next)
*/

let h2 = document.createElement('h2');
h2.innerHTML = 'Header 2';

document.body.insertBefore(h2, document.querySelector('.block'));

let li7 = document.createElement('li');
li7.innerHTML = 'New Item 7';

ul1.insertBefore(li7, ul1.querySelector('li:nth-child(3)'));


let banner = document.createElement('div');
banner.innerHTML = 'Купи Слона недорого с доставкой по РБ';
banner.classList.add('banner-adv');

document.body.insertBefore(banner, document.body.firstElementChild);

banner.style.backgroundColor = 'yellow';
banner.style.fontSize = '48px';
banner.style.fontWeight = 'bold';
banner.style.padding = '40px';
banner.style.width = '500px';

let style = document.createElement('style');
style.innerHTML = `
    .banner-adv {
        position: fixed;
        top: 10%;
        left: 50%;
        margin-left: -290px;
        border-radius: 20px;
        box-shadow: 0 0 20px #ccc;
    }
`;

document.head.appendChild(style);


/* .cloneNode(true) */

let ul1Clone = ul1.cloneNode(true);

document.body.insertBefore(ul1Clone, div1);


/* перемещение эл-тов */

document.body.appendChild(p1);
document.body.appendChild(ul1Clone);


/* удаление эл-тов 
.remove()
.removeChild(elemChild)
*/

ul1Clone.removeChild(ul1Clone.querySelector('li:nth-child(3)'));
ul1Clone.removeChild(ul1Clone.querySelector('li:nth-child(4)'));
ul1Clone.removeChild(ul1Clone.querySelector('li:nth-child(1)'));

ul1Clone.remove();