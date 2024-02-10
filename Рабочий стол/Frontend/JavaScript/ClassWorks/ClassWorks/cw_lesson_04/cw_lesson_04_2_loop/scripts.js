console.log('Перебор массиво с помощью циклов');

let fruits = ['Яблоко', 'Груша', 'Апельсин'];

console.log(fruits);
console.log(fruits.length); // 3
console.log(fruits[2]); // Апельсин

for (let i = 0; i < fruits.length; i++) {
	document.write(fruits[i]);
}

for (let i = fruits.length-1; i >= 0; i--) {
	console.log(fruits[i]);
}

// while

let i = 0;
while(i < fruits.length) {
	console.log(fruits[i]);
	i++;
}

// Заполнение массива числами

let arr = [];

for(let i = 10; i <= 20; i++) {
	arr.push(i);
}

console.log(arr);