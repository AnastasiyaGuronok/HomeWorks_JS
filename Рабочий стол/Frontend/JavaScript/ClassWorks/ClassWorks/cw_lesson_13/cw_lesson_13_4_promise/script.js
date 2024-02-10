const storageUsers = [
    { name: 'Alex' },
    { name: 'Bob' },
    { name: 'Mike' }
];

const storageContacts = [
    {
        phone: '65468464',
        email: 'alex@gmail.com'
    },
    {
        phone: '645646456',
        email: 'bob@gmail.com'
    }
];


const getUsersData = function() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            console.log('Users data received', storageUsers);
            resolve(storageUsers);
        }, 5000);
    });
};

const getContactsData = function() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            console.log('Contacts data received', storageContacts);
            // resolve(storageContacts);
            reject('Contacts data received with an error');
        }, 1000);
    });
};

const preparingData = function(usersData, contactsData) {
    if (!usersData) {
        console.log('Users data not received');
        return;
    }

    if (!contactsData) {
        console.log('Contacts data not received');
        return;
    }

    let data = [];

    usersData.forEach(function(user, index) {
        data.push(Object.assign({}, user, contactsData[index], { modified: true }));
    });

    console.log('Data prepared:' , data);
    return data;
};

const getData = function() {
    console.log('Request data ...');

    let usersData,
        contactsData;

    // setTimeout(function() {
    //     usersData = getUsersData();

    //     setTimeout(function() {
    //         contactsData = getContactsData();

    //         let data = preparingData(usersData, contactsData);

    //         if (!data) {
    //             console.log('Data not prepared');
    //             return;
    //         }

    //         console.log('All data getting completed');
    //     }, 1000);
    // }, 3000);

    // const p = new Promise(function(resolve, reject) {
    //     setTimeout(function() {
    //         usersData = getUsersData();
    //         resolve();
    //     }, 2000);
    // }).then(function() {
    //     const p2 = new Promise(function(resolve, reject) {
    //         setTimeout(function() {
    //             contactsData = getContactsData();
    //             resolve();
    //         }, 4000);
    //     }).then(function() {
    //         let data = preparingData(usersData, contactsData);

    //         if (!data) {
    //             console.log('Data not prepared');
    //             return;
    //         }
        
    //         console.log('All data getting completed');
    //     });
    // });

    // getUsersData().then(function(usersData) {
    //     getContactsData().then(function(contactsData) {
    //         let data = preparingData(usersData, contactsData);

    //         if (!data) {
    //             console.log('Data not prepared');
    //             return;
    //         }
        
    //         console.log('All data getting completed');
    //     });
    // });

    Promise.all([getUsersData(), getContactsData()]).then(function(pData) {
        let data = preparingData(pData[0], pData[1]);

        if (!data) {
            console.log('Data not prepared');
            return;
        }
    
        console.log('All data getting completed');
    }).catch(function(error) {
        console.error('Error: ', error);
    });
}();


const f1 = function() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            console.log('F1');
            resolve();
        }, 2000);
    });
};

const f2 = function() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            console.log('F2');
            resolve();
        }, 1000);
    });
};

const f3 = function() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            console.log('F3');
            resolve();
        }, 5000);
    });
};

Promise.all([f1(), f2(), f3()]).then(function() {
    console.log('All functions is comepleted!');   
});