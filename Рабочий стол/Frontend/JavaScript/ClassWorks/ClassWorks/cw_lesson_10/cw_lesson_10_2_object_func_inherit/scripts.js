console.log('Основы ООП. Наследование. Инкапсуляция. Полиморфизм');

/*Функциональное наследование*/

let Animal = function(name, eats, walk) {
	this.name = name;
	this.eats = eats;
	this.walk = walk;

	this.showName = function() {
		alert(this.name);
	};
};

let Dog = function(name) {
	Animal.apply(this, arguments);

	this.name = name;

	this.showName = function() {
		alert('Dog name is ' + this.name);
	};
};

let animal = new Animal(),
	dog = new Dog('Bob', true, true);

console.log(animal);
console.log(dog);

dog.showName();