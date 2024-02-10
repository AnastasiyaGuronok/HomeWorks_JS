console.log('Математические функции');

// Math

console.log(Math.PI); // 3.1415926
console.log(Math.sqrt(9));
console.log(Math.log(4));
console.log(Math.pow(12, 3));
console.log(Math.abs(-5));
console.log(Math.exp(3));
console.log(Math.max(12, 13, 5, 56, 0, -8, 6));
console.log(Math.min(5, 10, 3, -8, 0));

console.log(Math.random()); // 0..1

// 5..15
function getRandom(min, max) {
	return Math.random() * (max - min) + min;
}

console.log(getRandom(5, 15));

console.log(Math.round(20.49));  // 20
console.log(Math.round(5.09)); // 5
console.log(Math.round(12.51)); // 13

console.log(Math.ceil(5.09)); // 6

console.log(Math.floor(5.09)); // 5
console.log(Math.floor(12.51)); // 12

console.log(Math.round(getRandom(5, 15)));