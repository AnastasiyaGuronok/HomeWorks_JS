console.log('Основы ООП. Наследование. Инкапсуляция. Полиморфизм');

console.log({ a: '2', b: 123 });

let obj1 = {
	a: 123,
	b: 'Text'
};

console.log(obj1);

let Obj2 = function() {
	this.a = 'Text';
	this.b = 654;
};

let obj2 = new Obj2();
console.log(obj2);

let obj3 = new Obj2(),
	obj4 = new Obj2(),
	obj5 = new Obj2();

console.log(obj3);
console.log(obj4);
console.log(obj5);


/*Наследование*/

let animal = {
	name: 'Animal',
	showName: function() {
		alert(this.name);
	}
};

let dog = {
	talk: 'Gawww'
};

/*Прототипное наследование*/

dog.__proto__ = animal;

console.log(animal);
console.log(dog);

let cat = {
	name: 'Boris',
	talk: 'Meow'
};

cat.__proto__ = animal;

console.log(cat);
//cat.showName();

//dog.showName();


let Animal = function() {
	this.name = 'Animal';

	this.showName = function() {
		alert(this.name);
	};
};

animal = new Animal();
console.log(animal);

let Rabbit = function(name) {
	this.__proto__ = animal;
	this.name = name;
};

let rabbit = new Rabbit('Peter');
console.log(rabbit);

//rabbit.showName();

let rabbit2 = new Rabbit('Rabbit 2');

//rabbit2.showName();

let rabbit3 = new Rabbit('Rabbit 3');

console.log(rabbit2);
console.log(rabbit3);


/*Правильный и кроссбраузреный способ прототипного наследования*/

let Leo = function(name) {
	this.name = name;
};

Leo.prototype = animal;

let leo = new Leo('King');

leo.walk = true;
leo.eats = true;

console.log(leo);