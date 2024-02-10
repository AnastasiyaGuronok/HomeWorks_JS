console.log('События в JS');

// DOMContentLoaded

window.addEventListener('load', function() {
    console.log('Страница загружена');

    console.log(document.body);

    // code

    let block = document.querySelector('.block');

    block.addEventListener('mouseover', function() {
        console.log('Курсор на .block');
        console.log(this);

        this.style.backgroundColor = 'red';
    });

    block.addEventListener('mouseout', function() {
        console.log('Курсор покинул .block');
        this.style.backgroundColor = 'blue';
    });

    block.addEventListener('mousemove', function() {
        console.log('Курсор перемещается по .block');
    });

    block.addEventListener('mousedown', function() {
        console.log('Ты на меня нажал!');
        this.style.backgroundColor = 'yellow';
    });

    block.addEventListener('mouseup', function() {
        console.log('Спасибо, чтоб отпустил');
        this.style.backgroundColor = '';
    });

    let bgchangeButton = document.querySelector('.bgchange button'),
        bgChange = function() {
            let r = Math.floor(Math.random() * 256),
                g = Math.floor(Math.random() * 256),
                b = Math.floor(Math.random() * 256);

            document.body.style.backgroundColor = 'rgb(' + r + ', ' + g + ', ' + b + ')'
        };
    
    bgchangeButton.addEventListener('click', bgChange);


    let links = document.querySelectorAll('.links a');
    console.log(links);

    links.forEach(function(element) {
        // console.log(element);

        element.addEventListener('click', function() {
            console.log(this);

            links.forEach(function(element) { 
                element.classList.remove('active');
            });

            this.classList.add('active');
        });

        let hover = function() {
            this.classList.toggle('hover');
        };

        element.addEventListener('mouseover', hover);
        element.addEventListener('mouseout', hover);
    });


    let articleA = document.querySelector('.post a.google');

    articleA.addEventListener('click', function(event) {
        // this

        event.preventDefault();

        // console.log(this);
        console.log(event.target);

        console.log(event);

        event.target.setAttribute('href', 'https://myitschool.by');

        window.location.href = event.target.href;
    });


    let article = document.querySelector('.post'),
        content = article.querySelector('.content'),
        p = content.querySelector('p'),
        link = p.querySelector('.link');
    
    console.log(article, content, p, link);

    article.addEventListener('click', function() {
        alert('Click: article');
    }, true);

    content.addEventListener('click', function() {
        alert('Click: content');
    }, true);

    p.addEventListener('click', function() {
        alert('Click: p');
    }, true);

    link.addEventListener('click', function() {
        alert('Click: link');
    }, true);


    let form = document.querySelector('.form form');

    form.addEventListener('submit', function(event) {
        if (!confirm('Отправить форму?')) {
            event.preventDefault();

            // code
        } else {
            alert('Спасибо за отправку');
        }
    });

    let input = form.querySelector('input[name="email"]');

    input.addEventListener('keydown', function(event) {
        // console.log(event.key);
    });

    input.addEventListener('keyup', function(event) {
        // console.log(event.key);

        console.log(event.target.value);
    });

    input.addEventListener('keypress', function(event) {
        // console.log(event.key);

        // console.log(event.target.value);
    });
});