const fs = require('fs/promises');

async function readFileAsync() {
  try {
    const data = await fs.readFile('D:/bootcamp-SabaiCode/fron-end/excersicePromise/test.txt', 'utf8');
    console.log("This is the content of the file:", data);
  } catch (err) {
    console.error(err);
  }
}

readFileAsync();
