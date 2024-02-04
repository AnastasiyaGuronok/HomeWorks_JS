//task_1
let Arr = [1, 2, 3, 4, 5];
for (let i = 0; i < Arr.length; i++) {
    console.log(Arr[i]);
}

//task_3
let Arr3 = [];
let i = 23;
while (i < 57) {
    Arr3.push(i);
    i++;
}
console.log(Arr3);

let Arr4 = [];
let result = 0;
for (let i = 23; i < 57; i++) {
    Arr4.push(i);
    result += i;
}
console.log(Arr4);
console.log ('result=' + result);

//task_2
let Arr2 = [-2,-1,-3,15,0,-4,2,-5,9,-15,0,4,5,-6,10,7];
for(i = 0; i < Arr2.length; i++) {
    if(Arr2[i] < -3 && Arr2[i] > -10) {
        console.log(Arr2[i]);
    }
}

//task 4
let Arr1 = ['10', '20', '30', '50', '235', '3000'];

for (let i = 0; i < Arr1.length; i++) {
 let num = String(Arr1[i]);
  let char = num[0];
  if (char == 1 || char == 2 || char == 5) {
    console.log(num);
  }
}

//task_5
let Arr6 = ['Пн','Вт','Ср','Чт','Пт','Сб','Вс'];
for (i = 0; i < Arr6.length; i++){
        if (i === Arr6.length-1 || i === Arr6.length-2) {
            document.write('<br/>'+ '<strong>' + Arr6[i] + '</strong>');
        } else {
            document.write('<br/>' + Arr6[i]);
        }
    }
   
//task_6
let Arr7 = ['Red','Yellow','Orange ','Green']
console.log(Arr7);

Arr7[Arr7.length] = 'Blue';
console.log(Arr7);


//task_7
let Arr5 = [];

while (true) {
    i = prompt('Введите число');
    if( i === '') break;
    Arr5.push(i);
    i++; 
}
console.log (Arr5);

Arr5.sort(function(a, b){
    return a-b;
})
 console.log('Сортировка: '+ Arr5);

 //task_8
let Arr8 = [12, false, 'Текст', 4, 2, -5, 0];

Arr8.reverse();
console.log(Arr8);

document.write('</br>');
let i1=Arr8.length-1;
while(i1 >=0){
    console.log(Arr8[i1]);
    i1--;
   
}

//task_9
let Arr9 = [5, 9, 21, , , 9, 78, , , , 6];
let num =0;

for (let i = 0; i < Arr9.length; i +=1) {
    if( Arr9 [i] == isNaN[i]) {
        num +=1;
    }
}
console.log(num);

//task_10
