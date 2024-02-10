/* XMLHttpRequest */

// let xhr = new XMLHttpRequest();
// xhr.open('GET', 'https://jsonplaceholder.typicode.com/albums/1/photos', true);
// xhr.send();

// xhr.addEventListener('readystatechange', function() {
//     if (xhr.readyState != 4 || 
//         xhr.status < 200 || 
//         xhr.status >= 300) return;
       
//     let jsonData = JSON.parse(xhr.responseText);
//     console.log(jsonData);
// });


// fetch

const getPhotos = async function(){
    let url = 'https://jsonplaceholder.typicode.com/albums/3/photos';

    // await fetch(url).then(function(response) {
    //     return response.json();
    // }).then(function(data) {
    //     console.log(data);
    // });

    // await fetch(url)
    // .then(response => response.json())
    // .then(data => console.log(data));

    let response = await fetch(url),
        data;

    console.log(response.headers.get('Content-Type'));

    if (response.status == 200 && response.ok) data = await response.json();
    
    console.log(data);

};


(async function() {

    let userData = {
        name: 'Alex',
        job: 'CEO'
    };

    let response = await fetch('https://reqres.in/api/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(userData)
    });

    if (!response.ok) return;

    let data = await response.json();
    console.log(response.status, data);

})();


(async function() {

    let response = await fetch('https://api.github.com/emojis');
    if (!response.ok) return;

    let data = await response.json();
    console.log(response.status, data);
    
    document.body.innerHTML = `
        <img src="${data.books}" />
    `;

})();


/*

    XMLHTTPRequest
    Promise
    async / await
    fetch

*/