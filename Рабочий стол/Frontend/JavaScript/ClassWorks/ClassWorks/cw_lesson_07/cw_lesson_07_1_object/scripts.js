console.log('Объекты');

let arr = [123, 'Строка', [1, 2, 3], { name: 'Alex'}];

console.log(arr);

let arr2 = [];
arr2['name'] = 'Alex';
arr2[0] = 123;

console.log(arr2);


let user = {}; // пустой объект
console.log(user, typeof user);

user = {
	name: 'Alex',
	age: 28,
	gender: 'Male'
};

console.log(user);

console.log(user.name); // Alex
console.log(user.gender); // Male

user.email = 'name@gmail.com';
console.log(user);

delete user.age;
console.log(user);

user.name = 'Bob';
console.log(user);


if ('name' in user) {
	console.log('Св-во name существует');
} else {
	console.log('Св-во name не существует');
}

if ('blablabla' in user) {
	console.log('Св-во blablabla существует');
} else {
	console.log('Св-во blablabla не существует');
}

if (user.blablabla === undefined) {
	console.log('Св-во blablabla undefined');
}

user.phone = undefined;

if (user.phone === undefined) {
	console.log('Св-во phone undefined');
}

// Верный способ проверки св-ва в объекте
if ('phone' in user) {
	console.log('Св-во phone существует');
}

console.log(user);

console.log(user['email']);

// user.last-name
user['last-name'] = 'Ivanov';
console.log(user);

user['Отчество пользователя'] = 'Иванович';
console.log(user);

let key = 'gender';
console.log(user[key]); // Male


user.size = {
	top: 90,
	middle: 60,
	bottom: 90
};

console.log(user);
console.log(user.size.middle); // 60
console.log(user['size']['middle']); // 60


for(let keyName in user) {
	console.log(keyName + ': ' + user[keyName]);
}


let userClone = user;

console.log(userClone);

userClone.name = 'Ivan';
console.log(userClone);

console.log(user);

userClone = {};
for(let keyName in user) {
	userClone[keyName] = user[keyName];
}

console.log(userClone);
userClone.name = 'Dmitriy';

console.log(userClone);
console.log(user);