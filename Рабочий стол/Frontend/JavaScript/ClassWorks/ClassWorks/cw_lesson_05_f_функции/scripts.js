console.log('Функции');

function hello() { // hello - название фуекции
	alert('Добро пожаловать!');
	// code
}

// hello(); - вызов функции

function getName() {
	var name = prompt('Как вас зовут?');

	alert(name); //ввыведение в алерт имени введенного в prompt

	// code
}

// getName();

function getAge() {
	var age = prompt('Сколько вам лет');

	alert(age);
}

/*getName();
getAge();*/


var user = 'Иван';

function helloUser() {
	var defaultUser = 'Юзер';

	globalUser = 'Супер Юзер';

	user = 'Петя';

	var message = 'Привет ' + user;
	//alert(message);
}

console.log(user); // Иван-значение, присвоенное вне функции (стр.30)

helloUser();

console.log(user); // Петя- после выполнения функции выводится значение, которое внутри функции(стр.37)

//console.log(defaultUser); - is not defind , так как объявлена внутри функции с ключевым словом var

console.log(globalUser); //супер Юзер , выводится, так как была объявлена без ключевого слова (var). Так же становится доступным после объявления самой функции (стр.45)


function showMessage(from, text) { // параметры from, text придуманы
	// Маша: Как дела?
	// Алекс: Привет!

	alert(from + ': ' + text);
}

// Маша: Как дела?
//showMessage('Маша', 'Как дела?');  //('Маша', 'Как дела?')=(from, text)

//showMessage('Алекс', 'Привет');
//showMessage('Сергей', 'Привет всем!'); //('Сергей', 'Привет всем!')=(from, text)

// Петя: undefined
//showMessage('Петя'); // если забыли указать один из параметров, то он принимает значение undef-ined


function createArray(length) { // заполнение массива
	// По умолчанию length = 10;
	length = length || 10; // если length принимает значение оно всегда true (true это i > 0), если переменная будет undefined (значения<0), то переменной присвоится значение 10

	var array = [];

	for(var i = 1; i <= length; i++) { //цикл от 1 до длины включительно
		array.push(i); //внутрь i будем пушить новый индекс
	}

	console.log(array); // вывод згначений в консоль 
}

createArray(3); // выполнение функции по созданию массива  от 1 до 3-х включительно
createArray(20); // выполнение функции по созданию массива  от 1 до 20-ти включительно
createArray(); //


function test(a, b, c) {
	console.log('-----------');// для разделения

	console.log(a, b, c);

	// arguments
	console.log(arguments); //arguments он встроен в каждую функцию 

	if (arguments.length > 3) { //если в функцию выведено больше трех параметров, то (см строки 98-100 )
		/*console.log(arguments[3]); //вывести три аргумента после трех заданных параметров (10,12,8 -стр.109)
		console.log(arguments[4]);
		console.log(arguments[5]);*/

		for(var i = 0; i < arguments.length; i++) { 
			console.log(arguments[i]); //выведение  в консоль все значения аргументся (получится 4,6,2,10,12,8)
		}
	}
}

//test(4,6,2);
test(4,6,2, 10, 12, 8);// 4,6,2 выведит, а остольные нет , потому что задано только три параметра
//test(); undefined 


function checkAge(age) {
	if (age >= 18) { //если возраст больше иои равно 18
		return true; // то возвращаем true
	} else {
		return false; // иначе false;
	}
}

var result = checkAge(32);

if (result == true) console.log('Добро пожаловать'); // если result равно true , то в консоль выводим "добро пожаловать"
else console.log('Доступ запрещен'); // иначе- "доступ запрещен"


function showMove(age) { 
	if (checkAge(age) == true) { // можем использовать код офунуции выше -стр 114, если он true
		return 'Приятного просмотра'; //то вернет значение "приятного просмотра"
	} else { //иначе
		return 'Фильм не для всех'; // функция возвращает, фильм не для всех
	}
}

console.log(showMove(10)); //результат в консоле - фильм не для всех
console.log(showMove(21));//результат в консоле -приятного просмотра


function sum(a, b) {
	return a + b; //возвращаем результат вырожения 
}

var c = sum(2, 8); // 10 -результат функции присвоили переменной с
console.log(c); // вывели с в консоль. Результат 10

var sum2 = sum; // переменная sum2 стала функцией с алгоритмом функции sum;
console.log(sum2(9, 3)); // 12  (sum2 выполняет алгоритм функции sum)



// 1 вариант создания функции
function hello(user) {
	console.log('Привет ' + user);
}

// 2 вариант создания функции (соднание функции через анонимную)
var hello = function (user) {
	console.log('Привет ' + user);
};

hello('Ольга');


var hello2,
	user = prompt('Ты кто?');

if (user != '') { // если юзер не равно пустоте
	hello2 = function() { return 'Привет ' + user }; // то hello2 присваем анонимную функцию , кот будет возвращать Привет + "user"- значение введенное в промт
} else { //иначе
	hello2 = function() { return 'Привет Аноним' };// hello2 присваеваем "Привет аноним"
}

var result = hello2();
console.log(result);


function ask(question, yes, no) { //
	if (confirm(question)) yes() // confirm-функция с вопросом, кот имеет либо да, либо нет. Если true, то выполняется функция yes
	else no();// иначе no
}

ask(
	'Вы согласны?', // =question
	function() { alert('Вы согласились'); },//=yes
	function() { alert('Вы не согласны'); } //=no
);



// Рекурсия -самовызов функции
function printArray(array) {
	console.log(array[i]);
	i++;//наращивание функции пере самовызовам 

	if (i < array.length) printArray(array);// если i < array.length, то вызывать функцию(самовызов функции)
}

var i = 0;

printArray([1, 89, 2, -9, 6]); 