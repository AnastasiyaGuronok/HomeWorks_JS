// Операторы сравнения

/*
    >больше
    < меньше 
    >=
    <=
    ==  проверка на равенство значений
    != не равно
    <> не равно
*/

// true, false

console.log(5 > 3); // true
console.log(2 > 6); // false
console.log(4 != 5); // true
console.log(6 == 6); // true
console.log(0 == 1); // false

let a = 45,
    b = 2;

console.log(a < 2); // false

let c = false;

console.log(c == false); // true

console.log('Text' > 5); // false
console.log(false == true); // false

console.log('A' > 'a'); // false
console.log('a' > 'A'); // true

// Unicode

console.log('а' > 'Я'); // true
console.log('Строка' > 'Строка 2'); // false

// 1 == true
// 0 == false

console.log(1 == true); // true
console.log(0 == false); // true

// '', "", `` == false     

console.log('' == false); // true  пустая строка равняется фолс

console.log('5', typeof '5');
console.log('5' >= 2); // true
console.log('56' == 56); // true

console.log('07' < 10); // true

// ===
console.log('5' === 5); // false сравнение с учетом типов данных (===)
console.log('5' == 5); // true 

// ===, !==   - сравнение с учетом типов данных

// null, undefined

console.log(undefined > 0); // false
console.log(undefined < 0); // false
console.log(undefined == 0); // false
console.log(undefined == true); // false

console.log(null > 0); // false
console.log(null < 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true