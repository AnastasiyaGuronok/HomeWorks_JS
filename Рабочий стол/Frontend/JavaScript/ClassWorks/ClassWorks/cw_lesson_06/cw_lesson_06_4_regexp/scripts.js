console.log('Регулярные выражения');

let str = 'Я люблю JavaScript';
console.log(str);

console.log(str.search(/лю/)); // 2
console.log(str.search(/ly/)); // -1

// Флаги
/*
g - глобальный поиск
i - поиск без учета регистра
m - многострочный поиск
*/

console.log(str.search(/лю/gi));

console.log(str.match(/лю/gi)); // Array

// console.log(str.match(/лю/).index);


console.log('12-53-46'.replace('-', ':'));
console.log('12-53-46'.replace(/-/g, ':'));

let str2 = 'Иван Иванов';
console.log(str2.replace(/(Иван)( )(Иванов)/, '$3$2$1'));

console.log(str2.replace(/(Иван)( )(Иванов)/, 'Великий $&'));

// test

console.log(/лю/gi.test(str)); // true
console.log(/ly/gi.test(str)); // false

let email = 'info@myitschool.by';

let regexp = /[a-z]@[a-z].[a-z]{2,6}/gi;

// info@myitschool.by
console.log(regexp.test(email)); // true

email = '98@.asd.h';
console.log(regexp.test(email)); // true

email = 'alex1987@gmail.com';
regexp = /[0-9a-z]@[a-z].[a-z]{2,6}/gi;

console.log(regexp.test(email)); // true