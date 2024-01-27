
const fs = require('fs');

// Specify the file path where you want to write the content
const filePath = 'D:/bootcamp-SabaiCode/fron-end/excersicePromise/test.txt';

// Specify the content you want to write to the file
const content = 'hello';

// Write content to the file
fs.writeFile(filePath, content, err => {
  if (err) {
    console.error('Error writing to file:', err);
  } else {
    console.log('File written successfully.',content);
  }
});
