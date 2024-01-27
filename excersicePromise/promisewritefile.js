const fsPromises = require('fs').promises;
const { co } = require('co');
const fs = require('fs');
const promisewire = new Promise((resolve, reject) => {

    const filePath = 'D:/bootcamp-SabaiCode/fron-end/excersicePromise/test.txt';

    // Specify the content you want to write to the file
    const content = 'hello thon';
    fsPromises.writeFile(filePath, content)
        .then(() => {
            // Resolve the promise with a success message
            resolve('File written successfully.');
        })
        .catch(err => {
            // Reject the promise with an error message
            reject(`Error writing to file: ${err}`);
        });
});

promisewire
    .then((messageTrue) => {
        console.log(messageTrue);
    })
    .catch((errorMessage) => {
        console.error(errorMessage);
    });