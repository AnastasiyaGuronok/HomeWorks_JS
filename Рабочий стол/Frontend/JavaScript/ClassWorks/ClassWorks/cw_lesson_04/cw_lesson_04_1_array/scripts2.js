console.log('Методы массивов');

let fruits = ['Яблоко', 'Груша', 'Слива'];
console.log(fruits);

// push()

fruits.push('Апельсин');
console.log(fruits);

// unshift()

fruits.unshift('Персик');
console.log(fruits);

// pop()

fruits.pop();
console.log(fruits);

// shift()

fruits.shift();
console.log(fruits);

// pop и shift

let popElem = fruits.pop(),
	shiftElem = fruits.shift();

console.log(fruits);
console.log(popElem) // Слива
console.log(shiftElem) // Яблоко

// push и unshift

fruits.push('Ананас', 'Мандарин');
console.log(fruits);

fruits.unshift('Вишня', 'Клубника');
console.log(fruits);

// splice

let arr = ['Я', 'изучаю', 'JavaScript'];
console.log(arr);

arr.splice(1, 1);
console.log(arr);

arr.splice(1, 0, 'изучаю');
console.log(arr);

arr.splice(2, 0, 'сложный', 'язык');
console.log(arr);

arr.splice(2, 2);
console.log(arr);

// slice

let arr2 = ['Почему', 'надо', 'учить', 'JavaScript'];
let arr22 = arr2.slice(1,3);
console.log(arr22);

let arr23 = arr2.slice(1);
console.log(arr23);

let arr24 = arr2.slice();
console.log(arr24);

let arr2Copy = arr2;
console.log(arr2Copy);

// split

let names = 'Маша,Петя,Иван,Марина';
let namesArr = names.split(',');
console.log(namesArr);

namesArr = names.split(',', 2);
console.log(namesArr);

let txt = 'текст';
console.log(txt.split(''));

// join

let arrNames = ["Маша", "Петя", "Иван", "Марина"];
let strNames = arrNames.join(', ');
console.log(strNames);

// повторение строки
console.log(new Array(10).join('ля'));

// sort

let arrNums = [3, 1, -5, 23, 15, 8];
console.log(arrNums);

arrNums.sort();
console.log(arrNums);

arrNums.sort(function(a, b) {
	return a - b;
});

console.log(arrNums);

// reverse

arrNums.reverse();
console.log(arrNums);

// concat

let arrNums2 = [1, 2, 3, 4, 5, 6],
	arrNums3 = [6, 7, 8, 9],
	arrNums4 = [10, 11, 12, 13, 14];

let arrNums5 = arrNums2.concat(arrNums3, arrNums4);
console.log(arrNums5);

// indexOf и lastIndexOf

let newArrNames = ["Маша", "Петя", "Иван", "Марина", "Петя", "Ольга"];
console.log(newArrNames);

console.log(newArrNames.indexOf('Петя')); // 1
console.log(newArrNames.lastIndexOf('Петя')); // 4