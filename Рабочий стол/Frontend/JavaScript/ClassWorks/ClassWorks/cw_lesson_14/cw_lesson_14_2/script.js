// import {a} from './module1.js';
// import {b} from './module2.js';
// import {c} from './module3.js';

// // code

// console.log(a);

// // code

// console.log(b);

// // code

// console.log(c);

/* import() */

// code

// import('./module1.js').then(function(module1) {
//     // console.log(module1);
//     console.log(module1.a); // 1

//     import('./module3.js').then(function(module3) {
//         console.log(module3.c); // 3
//     });
// });

// import('./module2.js').then(function(module2) {
//     console.log(module2.b); // 2
// });

const showResult = function(result) {
    console.log(result);
}

let loadModule = async function(name) {
    await import(name).then(function(data) {
        showResult(data);
    });
}

loadModule('./module2.js');