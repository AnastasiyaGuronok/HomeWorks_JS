let User = function(data) {
    let type = 'User';

    this.name = data.name;
    this.email = data.email;
    this.phone = data.phone;

    this.showType = function() {
        console.log(type);
    }

    let permissions = function () {
        // code
    }
};

class Admin {
    #type = 'Admin';

    constructor(data) {
        this.name = data.name;
        this.email = data.email;
        this.phone = data.phone;
    }

    showType() {
        console.log(this.#type);
    }

    // #permissions() {
    //     // code
    // }

    get info() {
        return this.name + '(' + this.email + ')';
    }

    set info(data) {
        this.name = data.name;
        this.email = data.email;
    }
}

console.dir(User);
console.dir(Admin);

// console.log(User.type);
// User.showType();

// console.log(Admin.type);
// Admin.showType();


console.log('-------------------');

// Objects

let user = new User({ name: 'Alex', email: 'alex@gmail.com', phone: '65468748' }),
    admin = new Admin({ name: 'Bob', email: 'bob@gmail.com', phone: '1321324' });

Object.defineProperty(user, 'info', {
    get: function() {
        return this.name + '(' + this.email + ')';
    },
    set: function(data) {
        this.name = data.name;
        this.email = data.email;
    }
});

console.dir(user);
console.dir(admin);

// console.log(user.type); // User
user.showType(); // User

//console.log(admin.type); // Admin
admin.showType(); // Admin

admin.info = { name: 'Alex', email: 'alex@gmail.com' };
console.dir(admin);

console.log(admin.info);

user.info = { name: 'Bob', email: 'bob@gmail.com' };
console.log(user.info);