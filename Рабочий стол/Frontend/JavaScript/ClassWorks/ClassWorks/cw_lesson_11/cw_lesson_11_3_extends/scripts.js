// let Animal = function(name, eats, walk) {
//     this.name = name;
    
// 	this.eats = eats;
// 	this.walk = walk;

// 	this.showName = function() {
// 		alert(this.name);
// 	};
// };

// let Dog = function(name) {
// 	Animal.apply(this, arguments);

// 	this.name = name;

// 	this.showName = function() {
// 		alert('Dog name is ' + this.name);
// 	};
// };

// let dog = new Dog('Bob', true, true);

// console.log(dog);

class Animal {
    constructor(data) {
        this.name = data.name;
        this.eat = data.eat;
    }

    showName() {
        console.log(this.name);
    }
}

let animal = new Animal({ name: 'Animal', eat: false });
// console.log(animal);
// animal.showName();


class Dog extends Animal {
    constructor(data) {
        super(data);

        this.speak = true;
        this.walk = true;
    }

    bark() {
        console.log('Gaw!');
    }

    showName() {
        console.log('Dog: ');
        super.showName();
    }
}

let dogBob = new Dog({ name: 'Bob', eat: true });
// console.log(dogBob);
// dogBob.showName();
// dogBob.bark();


/* Роли пользователей приложения, 
   например, интернет-магазина:

   * пользователь (User)
   * покупатель (Buyer)
   * редактор (Editor)
   * администратор (Admin)
*/


class User {
    constructor(data) {
        this.name = data.name;
        this.email = data.email;

        this.permissions = {
            view: true,
            buy: false,
            create: false,
            update: false,
            delete: false
        };
    }

    get info() {
        return this.name + ' (' + this.email + ')';
    }

    set info(data) {
        this.name = data.name;
        this.email = data.email;
    }

    view() {
        if (this.permissions.view) console.log(this.name + ': Просмотр страниц');
    }

    create() {
        if (this.permissions.create) console.log(this.name + ': Создание страниц');
    }

    update() {
        if (this.permissions.update) console.log(this.name + ': Обновление страниц');
    }
    
    delete() {
        if (this.permissions.delete) console.log(this.name + ': Удаление страниц');
    }

    buy() {
        if (this.permissions.buy) console.log(this.name + ': Покупка товаров/услуг');
    }

    getPermissions() {
        return this.permissions;
    }
}


class Buyer extends User {
    constructor(data) {
        super(data);

        this.permissions.buy = true;
    }
}


class Editor extends User {
    constructor(data) {
        super(data);

        this.permissions.create = true;
        this.permissions.update = true;
    }
}


class Admin extends User {
    constructor(data) {
        super(data);

        this.permissions.buy = true;
        this.permissions.create = true;
        this.permissions.update = true;
        this.permissions.delete = true;
    }

    create() {
        super.create();
        console.log(this.name + ': Доп. возможности по созданию страниц');
    }

    update() {
        super.update();
        console.log(this.name + ': Доп. возможности по обновлению страниц');
    }

    delete() {
        super.delete();
        console.log(this.name + ': Доп. возможности по удалению страниц');
    }
}


let alex = new User( { name: 'Alex', email: 'alex@gmail.com' } );

console.log(alex);
console.log(alex.info);
console.log(alex.getPermissions());


let bob = new Buyer( { name: 'Bob', email: 'bob@gmail.com' } );

console.log(bob.info);
console.log(bob.getPermissions());


let mike = new Editor( { name: 'Mike', email: 'mike@gmail.com' } );

console.log(mike.info);
console.log(mike.getPermissions());


let robert = new Admin( { name: 'Robert', email: 'rovert@gmail.com' } );

console.log(robert.info);
console.log(robert.getPermissions());


alex.view();
bob.view();
mike.view();

bob.buy();

mike.create();
mike.update();
mike.delete();

robert.view();
robert.buy();
robert.create();
robert.update();
robert.delete();


// instanceof

console.log(alex instanceof User); // true
console.log(alex instanceof Editor); // false

console.log(robert instanceof Object);

console.log(typeof new String('text'));
console.log(new String('text') instanceof String);
console.log(new String('text') instanceof Object);