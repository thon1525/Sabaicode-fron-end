const fsPromises = require('fs').promises;
const fs = require('fs');
const promisewire = new Promise((resolve, reject) => {
    const filePath = 'D:/bootcamp-SabaiCode/fron-end/excersicePromise/test.txt';
    // Specify the content you want to write to the file

         fsPromises.readFile(filePath, 'utf-8')
         .then((data) => {
            // Resolve the promise with the file content
            resolve(data);
        })
        .catch(err => {
            // Reject the promise with an error message
            reject(`Error reading file: ${err}`);
        });

});

promisewire
    .then((messageTrue) => {
        console.log(messageTrue);
    })
    .catch((errorMessage) => {
        console.error(errorMessage);
    });