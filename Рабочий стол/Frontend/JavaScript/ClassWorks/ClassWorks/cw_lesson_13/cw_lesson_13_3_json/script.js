let courses = ['html', 'css', 'js'];

let student = {
    name: 'Bob',
    age: 30,
    courses: courses
};

console.log(courses, typeof courses); // Array
console.log(student, typeof student); // Object

let jsonCourser = JSON.stringify(courses),
    jsonStudent = JSON.stringify(student);

console.log(jsonCourser, typeof jsonCourser);
console.log(jsonStudent, typeof jsonStudent);

let arrCourses = JSON.parse(jsonCourser),
    objStudent = JSON.parse(jsonStudent);

console.log(arrCourses, typeof arrCourses);
console.log(objStudent, typeof objStudent);


let jsonUsers = '{"page":1,"per_page":6,"total":12,"total_pages":2,"data":[{"id":1,"email":"george.bluth@reqres.in","first_name":"George","last_name":"Bluth","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg"},{"id":2,"email":"janet.weaver@reqres.in","first_name":"Janet","last_name":"Weaver","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg"},{"id":3,"email":"emma.wong@reqres.in","first_name":"Emma","last_name":"Wong","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/olegpogodaev/128.jpg"},{"id":4,"email":"eve.holt@reqres.in","first_name":"Eve","last_name":"Holt","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg"},{"id":5,"email":"charles.morris@reqres.in","first_name":"Charles","last_name":"Morris","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/stephenmoon/128.jpg"},{"id":6,"email":"tracey.ramos@reqres.in","first_name":"Tracey","last_name":"Ramos","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/bigmancho/128.jpg"}],"ad":{"company":"StatusCode Weekly","url":"http://statuscode.org/","text":"A weekly newsletter focusing on software development, infrastructure, the server, performance, and the stack end of things."}}';

console.log(jsonUsers, typeof jsonUsers);

let dataUsers = JSON.parse(jsonUsers);

console.log(dataUsers, typeof dataUsers);

console.log(dataUsers.data);

dataUsers.data.forEach(function(user) {
    console.log(user.first_name);
});


let jsonContacts = '[ { "_id": "5efdb7554dd41dec0ffabd81", "picture": "http://placehold.it/32x32", "age": 36, "name": "Jeannette Crawford", "gender": "female", "company": "ACRODANCE", "email": "jeannettecrawford@acrodance.com", "phone": "+1 (847) 550-3790" }, { "_id": "5efdb755734f5a3057fe3a3d", "picture": "http://placehold.it/32x32", "age": 34, "name": "Thornton Rivers", "gender": "male", "company": "BOILCAT", "email": "thorntonrivers@boilcat.com", "phone": "+1 (911) 415-2253" }, { "_id": "5efdb7559a33c6c77930fe8c", "picture": "http://placehold.it/32x32", "age": 30, "name": "Hinton Carroll", "gender": "male", "company": "BOSTONIC", "email": "hintoncarroll@bostonic.com", "phone": "+1 (948) 449-3653" }, { "_id": "5efdb75568e2c63c671d6cd5", "picture": "http://placehold.it/32x32", "age": 35, "name": "Yolanda Collins", "gender": "female", "company": "DIGIGEN", "email": "yolandacollins@digigen.com", "phone": "+1 (830) 574-3454" }, { "_id": "5efdb75581ecf40b7de89ee1", "picture": "http://placehold.it/32x32", "age": 24, "name": "Tammi Conley", "gender": "female", "company": "MOLTONIC", "email": "tammiconley@moltonic.com", "phone": "+1 (912) 557-3272" }, { "_id": "5efdb7556c3cf35f7ee57755", "picture": "http://placehold.it/32x32", "age": 21, "name": "Diana Wise", "gender": "female", "company": "GEEKULAR", "email": "dianawise@geekular.com", "phone": "+1 (854) 415-2911" }, { "_id": "5efdb755d54fc0a8c1d80fab", "picture": "http://placehold.it/32x32", "age": 30, "name": "Kasey Norris", "gender": "female", "company": "JUMPSTACK", "email": "kaseynorris@jumpstack.com", "phone": "+1 (843) 567-3842" }, { "_id": "5efdb75532270c525cc76f65", "picture": "http://placehold.it/32x32", "age": 20, "name": "Green Peck", "gender": "male", "company": "ISODRIVE", "email": "greenpeck@isodrive.com", "phone": "+1 (865) 540-2703" }, { "_id": "5efdb7551a0cbe17e082c642", "picture": "http://placehold.it/32x32", "age": 20, "name": "Tessa Frye", "gender": "female", "company": "ACCUFARM", "email": "tessafrye@accufarm.com", "phone": "+1 (807) 481-3243" }, { "_id": "5efdb7557870316fdf35a4de", "picture": "http://placehold.it/32x32", "age": 38, "name": "Winters Macias", "gender": "male", "company": "HYDROCOM", "email": "wintersmacias@hydrocom.com", "phone": "+1 (911) 444-2952" } ]';

console.log(jsonContacts, typeof jsonContacts);

let dataContacts = JSON.parse(jsonContacts);

console.log(dataContacts, typeof dataContacts);