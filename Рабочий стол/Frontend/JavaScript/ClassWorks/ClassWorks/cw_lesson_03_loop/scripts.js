console.log('Циклы while и for');

// while

/*let i = 0;

while(i < 3) {
	console.log(i);
	i++;
}*/

/*let i = 5;

while(i <= 16) {
	console.log(i);
	i++;
}*/

// do while

/*let i = 10;

do {
	console.log(i);
	i++;
} while(i <= 16);*/

// while(true) { console.log('while'); }

// for

/*for(let i = 5; i <= 10; i++) {
	console.log(i);
}*/

/*for(let i = 20; i >= 5; i--) {
	console.log(i);
}*/

// for(let i = 1; i <= 3; i++) console.log(i);

/*let i = 3;
for(; i < 5; i++) {
	console.log(i);
}*/

/*let i = 4;
for(; i < 6;) {
	console.log(i);
	i++;
}*/

// for(;;) {}

// continue, break

/*for(let i = 0; i <= 10; i++) {
	if (i == 5 || i == 7 || i == 9) continue;

	console.log(i);
}*/

/*for(let i = 0; i <= 10; i++) {
	console.log(i);

	if (i == 3) break;
}*/

/*for(let i = 0; i <= 10; i++) {
	if (i % 2 == 0) continue;

	console.log(i);
}*/

let a = 5; // 1+2+3+4+5 = 15
let sum = 0;

for (let i = 1; i <= a; i++) {
	sum = 0;
	
	for (let j = 1; j <= i; j++) {
		sum += j;
	}

	console.log('Sum ' + i + ' = ' + sum);
}