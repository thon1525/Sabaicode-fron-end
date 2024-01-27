
const fs = require('fs');

// Read the file
fs.readFile('Note.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }

    // Process the data
    const newData = data.replace(/some pattern/g, 'new text');

    // Write the data back to the file
    fs.writeFile('Note.txt', newData, 'utf8', (err) => {
        if (err) {
            console.error('Error writing to the file:', err);
            return;
        }
        console.log('File updated successfully');
    });
});

