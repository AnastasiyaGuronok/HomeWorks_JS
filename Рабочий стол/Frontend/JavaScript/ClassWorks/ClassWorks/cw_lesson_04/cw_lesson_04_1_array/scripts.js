console.log('Массивы');

let a = 123,
	b = 'Строка',
	c = false;

let arr = [];
console.log(arr);

let fruits = ['Яблоко' , 'Груша', 'Слива'];
console.log(fruits);

console.log(fruits[1]);
console.log(fruits[0]);
console.log(fruits[2]);

fruits[1] = 'Дыня';
console.log(fruits);

fruits[3] = 'Вишня';
console.log(fruits);

fruits[10] = 'Арбуз';
console.log(fruits);

console.log(fruits[5]);

fruits['other'] = 'Огурец';
console.log(fruits);

console.log(fruits['other']);

console.log(fruits.length);

let fruits2 = ['Яблоко' , 'Груша', 'Слива'];
console.log(fruits2);

fruits2[fruits2.length] = 'Дыня';
console.log(fruits2);

let arrNum = [1, 2, ,,,,,, 5, 6];
console.log(arrNum);

arrNum.length = 3;
console.log(arrNum);

arrNum.length = 0;
console.log(arrNum);

let arr3 = new Array();
console.log(arr3);

let arr4 = new Array('Строка', 123, 0, true);
console.log(arr4);

let arr5 = new Array(45);
console.log(arr5);

let arrMix = [
		456,
		-65,
		'Текст',
		true,
		{name: 'Иван'},
		[1, 56, 3]
	];

console.log(arrMix);

let matrix = [
		[1, 2, 3], // 0
		[4, 5, 6], // 1
		[7, 8, 9]  // 2
	];

console.log(matrix);
console.log(matrix[1]); // [4, 5, 6]
console.log(matrix[1][1]); // 5