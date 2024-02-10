function f1() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            console.log('F1');
            resolve();
        }, 1000);
    });
};

function f2() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            console.log('F2');
            resolve();
        }, 4000);
    });
};

function f3() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            console.log('F3');
            resolve();
        }, 2000);
    });
};

// f1().then(function() {    
//     f2().then(function() {
//         f3().then(function() {
//             console.log('All functions completed');
//         });
//     });
// });

// Promise.all([f1(), f2(), f3()]).then(function() {
//     console.log('All functions completed');
// });

async function fAll() {
    await f1();
    console.log('F1 completed');

    await f2();
    console.log('F2 completed');

    return Promise.reject('Some error');

    await f3();
    console.log('F3 completed'); 
}

fAll().then(function() {
    console.log('All functions completed');
}).catch(function(error) {
    console.error('ERROR: ', error);
});

console.log('Other code');