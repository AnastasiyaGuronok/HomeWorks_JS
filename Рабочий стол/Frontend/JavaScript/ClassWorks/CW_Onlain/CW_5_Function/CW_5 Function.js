// const arrNums = []; задаем пустой массив
//Задача 7 HW4
// while (1) {
//     let num = prompt('Введите число'); // присваеваем переменную
//     if (num === '') break; //если число равно пустой строке, то завершаем цикл 
//     arrNums.push(+num); //иначе в массив пушим наше значение
// }

// console.log(arrNums); //выводим в консоль массив

// arrNums.sort(function(a, b){ //сортировка массива
//     return a - b;
// });
// console.log(arrNums);

-----------------------------
//Задача9  HW4

// let a = [5, 9, 21, , , 9, 78, , , , 6]; //пустые места=undefined
// let count = 0;

// for (let i = 0; i < a.length; i++){ 
//     if (a[i] === undefined) count += 1;// если в а-итое  равно undefined , то прибавляем 1
// }

// console.log(count); //выводим переменную  count

-----------------------------
//Задача 10 HW4

// let arr = [48,9,0,4,21,2,1,0,8,84,76,8,4, 0, 13,2]; //[1,8,0,13,76,8,7,0,22,0,2,3,2]
// let fIndex = arr.indexOf(0); // переменная равная индекса первого нуля
// let lIndex = arr.lastIndexOf(0);// переменная равная индексу последняго нуля
// let summ = 0;

// for (let i = fIndex; i < lIndex; i++){ //i приравниваем к первому индексу(первому нулю), i меньше последнего индекск (последняго нуля)
//     summ += arr[i]; // складываем элементы массива
// }

// console.log(summ); //выводи значение нашей суммы


-----------------------------
//Задача 11 HW4

// let h = +prompt('Введите высоту пирамиды');

// for (let i = 1; i < h; i++){
//     let sp = '';
//     let p = '';

//     for (let j = 0; j < i * 2 - 1; j++){
//         p += '^';
//     }

//     for (let j = 0; j < h - i; j++){
//         sp += ' ';
//     }

//     document.write('<pre>' + sp + p + '</pre>');
//     document.write('<pre>' + (' ').repeat(h - i) + ('^').repeat(i * 2 - 1) + '</pre>');
// }

// IIFE


// Функции:
//ананимные
//функциональные выражения
//самовызывающиеся (IIFE)
//стрелочные  

//замыкание:
// const makeCounter = function () {
//     let counter = 0;

//     return function () { //функция возвращает ананонмную функци. 
//         return counter++; // и увеличевает переменную counter++ на 1 при повторном вызаве
//     }
// }

// const counter1 = makeCounter(); // можем создать переменную , и присвоеть ей результат выполнения функции
// const counter2 = makeCounter(); 

// console.log(counter1()); //вернуло 1
// console.log(counter1());//вернуло 2
// console.log(counter1());//вернуло 3
// console.log(counter2()); //вернет 1
// console.log(counter2());//вернет 1
// console.log(counter2());//вернет 1


//Функция фибаначи 
// function fib(num) { //в функцию передаем число
//     if (num <= 1) return num; //если число меньше либо равно 1, то возвращаем число
//     else return fib(num - 1) + fib(num - 2);// иначе  вызываем функцию (чило минус 1) плюс функцию (число минус два). Чтобы получить результат обязательно указываем return 
// }

// console.log(fib(10)); // результат 55

// const memoize = function (fn) { //memoize сохраняет результат предыдущих вычислений при этом ускоряет сам процесс вычисленяи 
//     let cache = {}; // переменная cache, куда записываем результат предыдущих вычислений
//     return function (...args) {  //возвращаем функцию/   ...(три точки) -рест оператор, позволяющий создать клон другого массива
//         let n = args[0]; //содается переменная
//         if (n in cache) {  //есди число есть в cache, 
//             return cache[n]; //то возвращаем cache с нашим значением 
//         } else { //иначе
//             let result = fn(n);// получаем результат 
//             cache[n] = result; // в cache[n] заносим результат 
//             return result; // и возвращаем результат 
//         }
//     };
// };

// const fib2 = memoize(function (num) { //создаем рекурсивную функцию фибоначи 
//     if (num <= 1) return num; //нсли число меньше либо равно единицы, то возвращаем число 
//     else return fib2(num - 1) + fib2(num - 2);// иначе
// });

// console.log(fib2(100));  // и результат получим быстро

// const f1 = function (...a) {
//     console.log(arguments);
//     return a;
// };

// const f2 = (...a) => {
//     return a;
// };

//() => operation

/**
 * Стрелочная функция не имеет arguments, this, super
 */

// const arF1 = () => false; // const arF1 = () => {return false}; // 

// console.log(arF1());

// const arF2 = (x) => x ** x;

// console.log(arF2(5));

// const arF3 = (a, b) => a + b;

// console.log(arF3(5, 6));

// const a = function () {
//     console.log(this);
// };

// const b = () => console.log(this);

// let arr = [132, 23, 345, 23, 4, 23];

// arr.sort((a, b) => a - b);

// let newArr = arr.map((item, i) => item * i);

// console.log(newArr);

// function arrayMap (arr, fn){
//     let newArr = []
//     for (let i = 0; i < arr.length; i++){
//         newArr.push(fn(arr[i], i, arr));
//     }
//     return newArr;
// }

// let na = arrayMap(arr, (item, i) => item * i);

// console.log(na);

let arr = [5, 9, 21, , , 9, 78, , , , 6];

let summ = arr.reduce((acc, item, i) => ({...acc, [i]: item}), {});// let summ = arr.reduce((acc, item, i) => Object.assign(acc, {[i]: item}), {});

console.log(summ);

function helloWorld(){

}

let a = helloWorld;

console.log(a.name);

let b = ([]).map.apply('abracadabra', [function(i){
    return i
}]);

console.log(b);

// let b = ('abracadabra').map(i => i);
// console.log(b);

let ps = document.getElementsByTagName('p');

console.log(ps);

let texts = ([]).map.call(ps, i => i.innerText);
console.log(texts);

let strMap = ([]).map.bind('abracadabra');

console.log(strMap(i => i.toUpperCase()));