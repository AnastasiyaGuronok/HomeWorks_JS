let name = prompt('Ваше имя');
let age = prompt('Ваш возраст');
let city = prompt('Ваш город проживания');
let company= prompt('Компания в которой работаете');
let phone = prompt('Ваш номер телефона');
let email = prompt('Ваш email');
console.log('Меня зовут '+ name + ', мне ' + age + ', я проживаю в городе ' + city + ' и работаю в ' + company + '. Мои контактные данные:' + phone + ', ' + email);

console.log(2023 - age);

let num1 = 3;
let num2 = 2;
let num3 = 1;
let num4 = 3;
let num5 = 0;
let num6 = 3;
if ((num1 + num2 + num3) == (num4 + num5 + num6)) {
    console.log('да');
} else {
    console.log ('нет');
}

let a = -3;
if (a > 0) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

let a1 = 10;
let b = 2;
let sum = a1 + b;
let dif = a1 - b;
let mult = a1 * b;
let div = a1 / b;
console.log('sum=' + sum);
console.log('dif=' + dif);
console.log('mult=' + mult);
console.log('div=' + div);
if (sum > 1) console.log(sum**2);

if (a1 > 2 && a1 < 11 || b >= 6 && b < 14) {
    console.log('Верно');
} else {
    console.log ('Неверно')
}

let n = 12;
if (n >= 1 && n <= 15) {
    console.log('в первую');
} else if (n >= 16 && n <= 30) {
    console.log('во вторую');
} else if (n >= 31 && n <= 45) {
    console.log('в третью');
} else {
    console.log('в четвертую');
}

let day = 12;
if (day >= 1 && day <= 10) {
    console.log('в первую');
} else if (day >= 11 && day <= 20) {
    console.log('во вторую');
} else {
    console.log('в третью');
} 

let days = 4;
let yers = days / 365;
let month = days / 30;
let week = days / 7;
let hour = days * 24;
let minutes = days * 24 * 60;
let second = days *24 * 60 * 60;

if (week < 1) {
    console.log('Меньше недели');
} else if (month < 1) {
    console.log('Меньше месяца');
} else if (yers < 1) {
    console.log('Меньше года');
} else {
    console.log(' ');
}


    if (day>= 1 && day <= 31){
        console.log('Январь');
        let seas = 1;
     } else if (day >= 32 && day <= 60){
        console.log('Февраль');
        let seas = 2;
     } else if (day >= 61 && day <= 91){
        console.log('Март');
        let seas = 3;
     } else if (day >= 92 && day <= 122){
        console.log('Апрель');
        let seas = 4;
    } else if (day >= 123 && day <= 153){
        console.log('Май');
        let seas = 5;
    } else if (day >= 154 && day <= 183){
        console.log('Июнь');
        let seas = 6;
    } else if (day >= 184 && day <= 214){
        console.log('Июль');
        let seas = 7;
    } else if (day >= 215 && day <= 245){
        console.log('Август');
        let seas = 8;
    } else if (day >= 246 && day <= 275){
        console.log('Сентябрь');
        let seas = 9;
    } else if (day >= 76 && day <= 306){
        console.log('Октябрь');
        let seas = 10;
    } else if (day >= 307 && day <= 336){
        console.log('Ноябрь');
        let seas = 11;
    } else if (day >= 337 && day <= 366){
        console.log('Декабрь');
        let seas = 12;
    } else {
        console.log(' ');
    }

    switch (seas) {
        case 1:
        case 2:
        case 12:
            console.log ('зима');
            break;
        case 3:
        case 4:
        case 5:
            console.log ('весна');
            break;
        case 6:
        case 7:
        case 8:
            console.log ('лето');
            break;
        case 9:
        case 10:
        case 11:
            console.log ('осень');
            break;
            default:
                break
    }



    


