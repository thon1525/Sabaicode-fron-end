const fs = require('fs/promises');

async function readFileAsync(filePath) {
  try {
    const data = await fs.readFile(filePath, 'utf8');
    console.log("This is the content of the file:", data);
    return data;
  } catch (err) {
    console.error(err);
    throw err; // Re-throw the error to handle it in the calling function if needed
  }
}

async function writeFileAsync(filePath, content) {
  try {
    await fs.writeFile(filePath, content);
    console.log('File written successfully.', content);
  } catch (err) {
    console.error('Error writing to file:', err);
    throw err; // Re-throw the error to handle it in the calling function if needed
  }
}

async function readFileThenWrite() {
    const filePath = 'D:/bootcamp-SabaiCode/fron-end/excersicePromise/test.txt';
  try {
    // Read the file content
    const existingContent = await readFileAsync(filePath);

    // Modify or process the content if needed
    const modifiedContent = existingContent.toUpperCase();

    // Write the modified content back to the file
    await writeFileAsync(filePath, modifiedContent);

    console.log('Read, modified, and wrote the file successfully.');
  } catch (err) {
    console.error('Error:', err);
  }
}

// Call the async function to read, modify, and write the file
readFileThenWrite();
