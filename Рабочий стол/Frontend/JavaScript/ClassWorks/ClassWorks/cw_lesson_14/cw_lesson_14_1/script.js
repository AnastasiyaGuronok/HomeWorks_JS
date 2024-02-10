console.log('Script');

// code

import {a, e, arr} from './script2.js';
import {a as a2, b, User} from './script3.js';
import {c, sum} from './script4.js';

import Site from './script6.js';

// let sum = (a + b + c) / e;
// console.log(sum);

console.log(sum(a, b, c));

console.log(arr);
console.log(new User());

console.log(a2);

import * as varObj from './script5.js';

console.log(varObj);
console.log(varObj.userObj.name);

document.body.innerHTML = `
    ${Site.header()}
    ${Site.main()}
    ${Site.footer()}
`;