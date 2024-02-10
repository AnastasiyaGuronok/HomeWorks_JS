// Преобразование типов данных

// String()

let num = 45;
console.log(num, typeof num);

let strNum = String(num); /*string - преобразовать число в сроку*/ 
console.log(strNum, typeof strNum);

strNum = String(45.89);
console.log(strNum, typeof strNum);

console.log(String(null), typeof String(null));
console.log(String(undefined), typeof String(undefined));

// + ''

strNum = num + '';
console.log(strNum, typeof strNum);

let test = true + 'Text';
console.log(test, typeof test);

test = undefined + 'Text';
console.log(test, typeof test);


// Number()

let string = '000456',
    numString = Number(string);

console.log(numString, typeof numString);

string = '0089.123';
numString = Number(string);
console.log(numString, typeof numString);

string = '0f089.123';
numString = Number(string);
console.log(numString, typeof numString);


// parseInt()
// parseFloat()

string = '0f089.123';
numString = parseInt(string);
console.log(numString, typeof numString);

string = '0089.12f3';
numString = parseInt(string);
console.log(numString, typeof numString);

string = '7894g56';
numString = parseInt(string);
console.log(numString, typeof numString);


string = '0089.12f3';
numString = parseFloat(string);
console.log(numString, typeof numString);


// null, undefined

console.log(null >= 0); // true
console.log(null > 0); // false
console.log(null == 0); // false

console.log(undefined > 0); // false
console.log(undefined == 0); // false
console.log(undefined < 0); // false


// isFinite(), isNaN()

console.log(isFinite('String')); // false
console.log(isFinite(456)); // true
console.log(isFinite(0.43)); // true

console.log(isFinite(Infinity)); // false
console.log(isFinite(NaN)); // false

console.log(isNaN('String')); // true
console.log(isNaN(65)); // false

console.log(!isNaN(65)); // true