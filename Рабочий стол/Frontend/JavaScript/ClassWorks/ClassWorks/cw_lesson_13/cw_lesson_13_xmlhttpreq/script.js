let xhr = new XMLHttpRequest();

// console.log(xhr.readyState);

// console.log(xhr);

/* GET, POST, PUT, DELETE */

xhr.open('GET', '/data.json', true);

// console.log(xhr.readyState);

// let jsonData = `
// {
//     "name": "morpheus",
//     "job": "leader"
// }`;

// xhr.send(jsonData);

xhr.send();

/*
0 - начало отправки запроса
1 - вызван open()
2 - получены заголовки
3 - загрузка тела запроса
4 - запрос завершен
*/

// console.log(xhr.readyState);

// console.log(xhr.status);

const getUserData = function(jsonData) {
    let data = JSON.parse(jsonData);

    console.log(data, typeof data);
    console.log(data[9].name);
};

xhr.addEventListener('readystatechange', function() {
    if (xhr.readyState != 4 || 
        xhr.status < 200 || 
        xhr.status >= 300) return;
       
    // console.log(xhr.status);

    getUserData(xhr.responseText);
});