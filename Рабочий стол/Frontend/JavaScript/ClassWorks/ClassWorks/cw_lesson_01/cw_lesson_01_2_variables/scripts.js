// Однострочный комментарий

/* Многострочный
комментарий в
JavaScript */

console.log('Привет!');
console.log('Привет!', 'Я JS', 5);

console.dir("Текст"); /*выполняет тоже, что и console.log*/

/*alert('Уведомление');
alert(12);*/

/*prompt('Как тебя зовут?'); - окошко с вопросом и полем для ввода информации
confirm('Вам есть 18?'); - аналогично prompt но есть два варианта ответа "ок" или "нет"*/

/* (), ; . '' "" = >< ! ... [] {} */

// Переменные

/*
var
let
const
*/

// var a = 5;
// console.log(a);

// var b = 6;

let c = 10;
console.log(c);

const d = 20;
console.log(d);

// var b = 3;

// d = 30;


let test;
let test123;
let message = 'Текст сообщения';
let _text = 5;
let $a = 10;
let _ = 50;
let $ = '025';

let firstName = 'Sergey';


let a = 1,
    b = 2,
    f = 5,
    g = 'Text';

console.log(message);

let h = b;
console.log(h);

let y = 0, 
    p = 3, 
    x = y = p;

console.log(x);
console.log(y);
console.log(p);

console.log(6-8);
console.log(a+b);

console.log(g + 5);
console.log(g + ' text');


// Типы данных

// Число

let n = 123;
let r = 45.34;

console.log(n);
console.log(r);

console.log(1 / 0); // Infinity
console.log(-1 / 0); // -Infinity

r = 'Строка';

console.log(r * 5); // NaN
console.log(0 / 0); // NaN


// Строка

let str = 'Строка в одинарных кавычках',
    str2 = "Строка в двойных кавычках",
    str3 = `Строка в обратных кавычках`;

console.log(str);
console.log(str2);
console.log(str3);


// Логический тип (булевый): true, false

let checked = true;
console.log(checked);

checked = false;
console.log(checked);


// Массив

let arr = [],
    arr2 = [1, 2, 5, 65, 'Строка'];

console.log(arr, arr2);


// Объекты

let obj = {},
    obj2 = {
        name: 'Иван',
        phone: '+375296370980'
    };

console.log(obj);
console.log(obj2);


// Функции

function f1() {
    // code
}

let f2 = function() {
    // code
};


// undefined

let u;
console.log(u);

r = undefined;
console.log(r);


// null

let q = null;
console.log(q);


// --------------------

// значение строкового типа
//firstName = prompt('Как тебя зовут?'); 
//console.log(firstName);

// true или false
//let confirmAge = confirm('Вам есть 18?'); 
//console.log(confirmAge);


// ---------------------

let num = 45,
    numFloat = 78.90,
    string1 = 'Строка 1',
    string2 = "Строка 2",
    string3 = `Строка 3`,
    confirm1 = true,
    confirm2 = false,
    array1 = [1, 'qwerty', 3, 89, 0],
    object1 = { name: 'Иван' },
    func1 = function() {},
    t,
    z = null;

// typeof

console.log(num, typeof num);
console.log(numFloat, typeof numFloat);
console.log(string1, typeof string1);
console.log(string2, typeof string2);
console.log(string3, typeof string3);
console.log(confirm1, typeof confirm1);
console.log(confirm2, typeof confirm2);
console.log(array1, typeof array1);
console.log(object1, typeof object1);
console.log(func1, typeof func1);
console.log(t, typeof t);
console.log(z, typeof z);