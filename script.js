//task_1
function num(a, b, c) {
    return (a-b)/c
}
console.log(num(8,4,2));
 
//task_2

function numDegree(a) {
     num1 = a * a;
     num2 = a * a * a;

}
numDegree(3);

console.log(num1);
console.log(num2);

//task_3

function min (a,b) {
    if (a < b) console.log (a);
    else console.log (b);
    
}
min(10,5);

function max (a,b) {
    if (a > b) console.log (a);
    else console.log (b);
    
}
max(10,5);

//task_4

const makeArray = function(min, max) {
     let arr = [];
    
     if (min < max) {
                 for (let i = min; i <= max; i++){
             arr.push(i);
         }
     } else {
         for (let i = min; i >= max; i--){
             arr.push(i);
         }
     }

     return arr;
 }

const showArray = function(arr){
     console.log(arr);
 }

 showArray(makeArray(10, 40));

//task_5

    function isEven(num) {
       return num % 2 == 0;
     }

     console.log(isEven(5));

// task_6;
let newArr = [];
function getArr(i) {
    for (let i = 0; i < 22; i++) {
        if (isEven (i)) {
            newArr.push(i);
        }
    }  
}
getArr();
console.log(newArr);

//task_7
const pyramid = (h, marker = null) => {
         for (let i = 1; i <= h; i++){
             let s = '';
             for (let j = 0; j < i; j++){
                s += marker ? marker : i; 
                 /**
                  * if (marker){
                  *  s += marker
                  * } else {
                  *  s += i
                  * }
                  */
                }
    
            document.write(s + '<br>');
         }
     }
    
//task_8

function Triangle (){
    let h = +prompt('Введите высоту  треугольника');
    for (let i = 1; i < h; i++){
     let sp = '';
     let p = '';
        
     for (let j = 0; j < i * 2 - 1; j++){
               p += '*';
       }
        
         for (let j = 0; j < h - i; j++){
         sp += ' ';
         }
        
     document.write('<pre>' + sp + p + '</pre>');
    
    }
}
Triangle();


     // task_9
     const fib = num => num <= 1 ? num : fib(num - 1) + fib(num - 2);
    
     const fibArr = function () {
         let rez = [];
         let n = 0;
         while (1) {
             let numFib = fib(n);
             n++;
             if (numFib <= 1000) {
                rez.push(numFib);
             } else {
                 break;
             }
         }
    
         return rez;
     }
    
    console.log(fibArr());

    // task_10
function isSumLess(num) {
    let sum = 0;
    let arr = String(num).split('');
    for (var i = 0; i < arr.length; i++) {
        sum += parseInt(arr[i]);
    }

    if (sum > 9) {
        return isSumLess(sum);
    } else {
        return sum;
    }
}

let num = 2589;
let final_num = isSumLess(num);
console.log('Конечное число = ' + final_num);

// task_11
var arr = [54, 32, 1, 124, 2, 46, 13];
 
function func(i){
    console.log(arr[i++]);
    if(i<arr.length){
        func(i);
    }
}
func(0);

   //task_12
     const bCard = function (name, seconName, lastName, group) {
     let title = 'Домашняя работа: «Функции»';
     let subTitle = 'Выполнил: студент гр. ' + group;
     let fio = `${name} ${seconName} ${lastName}`;
     let maxLength = Math.max(title.length, subTitle.length, fio.length);

     const f = (str, num) => {
         for (let i = str.length; i < num; i++){
             str += ' '
         }
         return `* ${str} *`;
     }

     title = f(title, maxLength);
     subTitle = f(subTitle, maxLength);
     fio = f(fio, maxLength);

     let rm = ('*').repeat(maxLength + 4);

    console.log(`${rm}\n${title}\n${subTitle}\n${fio}\n${rm}`);
 }

 bCard('Иван', 'Иванов', 'Иванович', 'FE_138');
