const fsPromises = require('fs').promises;
const fs = require('fs');

const filePath = 'D:/bootcamp-SabaiCode/fron-end/excersicePromise/test.txt';
const contentToWrite = 'hello thon';

// Function to write to the file and return a promise
const writeFilePromise = (filePath, content) => {
    return fsPromises.writeFile(filePath, content)
        .then(() => {
            // Resolve the promise with a success message
            return 'File written successfully.';
        })
        .catch(err => {
            // Reject the promise with an error message
            throw new Error(`Error writing to file: ${err}`);
        });
};

// Function to read from the file and return a promise
const readFilePromise = (filePath) => {
    return fsPromises.readFile(filePath, 'utf8')
        .then(data => {
            // Resolve the promise with the content read from the file
            return data;
        })
        .catch(err => {
            // Reject the promise with an error message
            throw new Error(`Error reading from file: ${err}`);
        });
};

// Write to the file
writeFilePromise(filePath, contentToWrite)
    .then(message => {
        console.log(message);

        // Read from the file after writing
        return readFilePromise(filePath);
    })
    .then(fileContent => {
        console.log(`Content read from the file: ${fileContent}`);
    })
    .catch(error => {
        console.error(error);
    });
