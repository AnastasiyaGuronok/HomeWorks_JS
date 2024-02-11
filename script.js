//task_1
let str = 'aaa@bbb@ccc';
console.log(str.replace(/@/g,'!'));

//task_2
let date = '2025-12-31';
let str1 = date.split('-');
console.log(str1[2]+'/'+str1[1]+'/'+str1[0]);

//task_3

let str2 = 'Я учу javascript!';
console.log(str2.substr(2,14));
console.log(str2.substring(2,16));
console.log(str2.slice(2,16));

//task_4

let arr = [4, 2, 5, 19, 13, 0, 10];
 let sum = 0;
 for (i=0; i < arr.length; i++){
     sum += Math.pow(arr[i], 3)
 }
console.log(Math.sqrt(sum));

//task_5
function numDifference(a,b) {
    c =Math.abs(a-b);
    console.log(c);
}
numDifference(3,5);
numDifference(6,1);

//task_6
    let date1 = new Date();
    
    function addZero (num) {
        if (num <= 9) {
          return num = '0' + num;  
        } else {
            return num;
        }
    }
    let resDate = addZero(date1.getDate()) + '.' + addZero(date1.getMonth() + 1) + '.' + date1.getFullYear();
    let num = addZero(date1.getHours()) + ':' + addZero(date1.getMinutes()) + ':' + addZero(date1.getSeconds());
    console.log(num + ' ' + resDate);

    //task_7

    let str3 = 'aa aba abba abbba abca abea';
    let reg =/ab{1,}a/g;
    console.log(str3.match(reg));

    //task_8

    function isPhone(phone){
        let regExp = /[+]375(017|33|29|44|25)[0-9]{7}/;

        return[regExp.test(phone)];
    }

   console.log(isPhone('+3756633237'));

   //task_9

   function isEmail(Email){
    let regExp2 = /[0-9a-z\-_\.]{2,}@[a-z]{1}[0-9a-z]{1,11}.[a-z]{2,11}/gi

    return[regExp2.test(Email)];
}

console.log(isEmail('nastya.guronok1994@mail.ru'));





//[0-9a-z\-_\.]{2,}@[a-z]{1}[0-9a-z]{1,11}+\.[a-z]{2,11}/gi
