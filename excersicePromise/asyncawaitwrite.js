const fs = require('fs');
const util = require('util');
const writeFileAsync = util.promisify(fs.writeFile);

async function writeFileAsyncExample() {
  // Specify the file path where you want to write the content
  const filePath = 'D:/bootcamp-SabaiCode/fron-end/excersicePromise/test.txt';

  // Specify the content you want to write to the file
  const content = 'hello thon';

  try {
    // Write content to the file using async/await
    await writeFileAsync(filePath, content);
    console.log('File written successfully.', content);
  } catch (err) {
    console.error('Error writing to file:', err);
  }
}

// Call the async function
writeFileAsyncExample();
