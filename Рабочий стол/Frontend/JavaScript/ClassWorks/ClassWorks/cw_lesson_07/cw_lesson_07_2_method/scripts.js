console.log('Методы объектов');

let user = {
	name: 'Ivan',
	email: 'name@gmail.com',
	age: 28,
	hello: function(){
		alert('Привет');
	}
};

console.log(user);
console.log(user.email);

// user.hello();

user.bye = function() {
	alert('Пока');
};

// user.bye();

user.hello = function() {
	alert('Привет! Меня зовут ' + user.name);
};

// user.hello();

user.setName = function(name) {
	user.name = name;
};

console.log(user);

user.setName('Alex');

console.log(user);

// user.hello();

user.hello = function() {
	alert('Привет! Меня зовут ' + this.name);
};

user.setName = function(name) {
	this.name = name;
};

user.setName('Dmitriy');
// user.hello();


let User = function() {
	this.name = 'NoName';
	this.age = 0;
	this.canWalk = false;
};

let userAlex = new User(),
	userBob = new User(),
	userMike = new User();

console.log(userAlex);
console.log(userBob);
console.log(userMike);

userAlex.name = 'Alex';
userBob.name = 'Bob';
userMike.name = 'Mike';

console.log(userAlex);
console.log(userBob);
console.log(userMike);


let Animal = function(name, walk) {
	this.name = name;
	this.canWalk = walk;
};

let cat = new Animal('Кот', true),
	dog = new Animal('Собака', true);

console.log(cat);
console.log(dog);

cat.canTalk = 'Meow-meow';
dog.canTalk = 'Gaw-gaw!!!';

console.log(cat);
console.log(dog);


let Calc = function() {
	this.get = function() {
		this.a = +prompt('Введите число a');
		this.b = +prompt('Введите число b');
		this.oper= prompt('Введите операцию: +, -, *, /');
		
		this.operation();
	};

	this.operation = function() {
		switch(this.oper) {
			case '+':
				this.result = this.a + this.b;
			break;
			case '-':
				this.result = this.a - this.b;
			break;
			case '*':
				this.result = this.a * this.b;
			break;
			case '/':
				this.result = this.a / this.b;
			break;
			default: this.result = 0;
		}

		this.show();
	};

	this.show = function() {
		alert(this.a + ' ' + this.oper + ' ' + this.b + ' = ' + this.result);
	};
};

let calc = new Calc();
calc.get();