const fs = require('node:fs');
fs.readFile('D:/bootcamp-SabaiCode/fron-end/excersicePromise/test.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }else{
    console.log("this reading file:",data)
  }
//   console.log(data);
});