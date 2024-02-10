console.log('Работа со строками');

let a = 'Строка',
	b = "Строка",
	c = new String('Строка'), // очень редко
	d = String('Строка'); // редко

console.log(a, b, c, d);

console.log(c.valueOf()); // очень редко

console.log(a[1], a[4], a[0]);

a[0] = 'М';
console.log(a);

let str = "Hello World!";

console.log(str.indexOf('Привет')); // -1
console.log(str.indexOf('Hello')); // 0
console.log(str.indexOf('World')); // 6
console.log(str.indexOf('d')); // 10

console.log(str.indexOf('o', 6)); // 7

// substring(start, [end])

console.log(str.substring(5)); // " World!"
console.log(str.substring(6, 11)); // World

// substr(start, [length])

console.log(str.substr(5)); // " World!"
console.log(str.substr(6, 6)); // World!

// slice(start, [end])

console.log(str.slice(5)); // " World!"
console.log(str.slice(6, 11)); // World

// соединение строк

let str1 = 'Привет',
	str2 = 'Мир',
	str3 = '!';

console.log(str1 + ' ' + str2 + str3);

console.log(''.concat(str1,' ',str2,str3));
console.log(str1.concat(' ', str2, str3));

// сравнение строк

console.log('а' > 'Я'); // true
console.log('А' > 'Я'); // false
console.log('А' > 'я'); // false

console.log('а'.charCodeAt()); // 1072
console.log('Я'.charCodeAt()); // 1071

console.log(String.fromCharCode(1072)); // а

for(let i = 1040; i <= 1103; i++) {
	console.log(String.fromCharCode(i));
}