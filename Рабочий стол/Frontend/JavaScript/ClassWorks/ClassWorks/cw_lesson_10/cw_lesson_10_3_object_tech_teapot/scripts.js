console.log('Основы ООП. Наследование. Инкапсуляция. Полиморфизм');

let Tech = function(power) {
	let status = false;

	power = power || 0;

	this.enable = function() {
		status = true;
	};

	this.disable = function() {
		status = false;
	};

	this.getStatus = function() {
		return status;
	};

	this.getPower = function() {
		return power;
	};
};


let Teapot = function(power, size) {
	Tech.apply(this, arguments);

	size = size || 1000;

	let waterAmount = 0,
		status = false,
		sT = null,
		self = this;

	let parentGetStatus = this.getStatus,
		parentDisable = this.disable;

	this.setWater = function(amount) {
		if (amount > 0 && amount <= size) waterAmount = amount;
		else waterAmount = 0;
	};

	this.getWater = function() {
		return waterAmount;
	};

	this.on = function() {
		if (parentGetStatus() == true && waterAmount > 0) {
			status = true;

			boiling();
		}
	};

	this.off = function() {
		status = false;

		clearTimeout(sT);
	};

	let boiling = function() {
		sT = setTimeout(function() {
			alert("The water's boiled!");

			self.off();
		}, 10000);
	};

	// Переопределение метода getStatus объекта Tech
	this.getStatus = function() {
		// Пример полиморфизма
		parentGetStatus.call(this);

		if (status == true && parentGetStatus() == true) return true;
		return false;
	};

	this.disable = function() {
		parentDisable.call(this);
		parentDisable();

		if (parentGetStatus() == false) this.off();
	};

	this.showInfo = function() {
		return 'Мощность ' + power + ', объем ' + size + '. Залито воды ' + waterAmount + '. ' + (this.getStatus() ? 'Работает' : 'Не работает');
	};
};


let CoffeeMachine = function(power, size, coffee) {
	Teapot.apply(this, arguments);

	coffee = coffee || 100;

	this.on = function() {
		alert("The " + coffee + " grams of coffee is ready!");
	};
};


let coffeeMachine = new CoffeeMachine(8000, 2000, 500);

console.log(coffeeMachine);
console.log(coffeeMachine.showInfo());

coffeeMachine.enable();
coffeeMachine.setWater(1500);

console.log(coffeeMachine.showInfo());

coffeeMachine.on();