console.log('Дата и время');

let dateNow = new Date();
console.log(dateNow);

console.log(dateNow.getFullYear());
console.log(dateNow.getMonth());
console.log(dateNow.getDay());
console.log(dateNow.getDate());
console.log(dateNow.getHours());
console.log(dateNow.getMinutes());
console.log(dateNow.getSeconds());
console.log(dateNow.getMilliseconds());

dateNow.setDate(1);
dateNow.setMonth(11);

dateNow.setHours(00);
dateNow.setMinutes(00);
console.log(dateNow);


let opt = {
	year: 'numeric',
	month: 'numeric',
	day: 'numeric',
	hour: 'numeric',
	minute: 'numeric',
	weekday: 'long'
};

console.log(dateNow.toLocaleString('ru', opt));