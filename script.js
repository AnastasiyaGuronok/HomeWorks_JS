//task 1
for(let i = 0; i <= 50; i++) console.log(i);
for(let i = 35; i >= 8; i--) console.log(i);

//task2
for(let i = 89; i >=11; i--) {
    document.write(i + '</br>');
}

//task3
let sum1 =0;
 for (let i = 1; i <= 100; i++) {
    sum1 += i;
 }
 console.log(sum1);  

//task4
let a =5;
let sum = 0;
for (let i = 1; i <= a; i++) {
    sum = 0;
    for(let j = 1; j <= i; j++) {
        sum += j;
    }
    console.log('Sum=' + sum);
}

//task 5
let i = 8;
while(i <=56) {
    i++;
    if(i % 2 !== 0) continue;
    console.log(i);
}

for (let i = 8; i <= 56; i++){
    if(i % 2 !== 0) continue;
    console.log(i);
}

//task 6
for (let i = 2; i <= 10;  i ++) {
    for (let j = 1; j <= 10; j ++) {
      console.log(i + ' * ' + j + ' ='  + i*j);
    }
    console.log(); 
  }

//task 7
let n = 1000;
let num = 0;
while (n > 50) {
    num++;
    n /= 2;
}
console.log('число: ' + n + '; число итераций:' + num);

//task 8

let s = 0;
let iter = 0;

while (true) {
    let num = prompt('Введите число');

    if (num === '' || Number(num) === 0) break;
    if (isNaN(num)) {
        alert('Ошибка ввода');
        continue;
    }

    sum += Number(num);
    iter += 1;
}
console.log('сумма:' + s);
console.log('Ср. арифситическое:' + s / iter);

//task 9

let art = '4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36 8 57';
let buf = '';
let min = Infinity;
let max = -Infinity; 

for (let i = 0; i < str.length; i++){
    if (str[i] !== ' ') {
        buf += str[i];
    } else {
        if (min > Number(buf)) min = Number(buf);
        if (max < Number(buf)) max = Number(buf);
        buf = '';
    }
}
console.log (min, max);

//task 10
 let n1 = prompt('Введите число');
 let i1 = n.length;
 let sum2 = 0;
 let rov = '';

 for (let i1 =0; i1 < n1.length; i1++){
    sum += +n1[i1]; //number(n1[i1])
 }
for (let i1 = n1.length - 1; i1 > 0; i1--){
    rov += n1[i1];
}

console.log('Число: ' + n1 + 'цифр в числе: ' +  i1 + 'обратный порядок цифр числа: ' + rov);
