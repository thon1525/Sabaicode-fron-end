const { readFile, writeFile } = require('fs');

const fs = require('fs').promises;
// const filePath = 'D:/bootcamp-SabaiCode/fron-end/excersicePromise/test.txt';
// const newData="hello thon ";
// async function updateFile(){
//     try{
//      const file=await fs.readFile(filePath,'utf8');
//      await fs.writeFile(filePath, newData);
//      console.log(file)
//     }catch(err){
//         console.error(err);
//     }
// }

// updateFile();






const showdata='./showdata.txt';
const text="hello thon threre are computer in hourse good bro";
async function filedata(){
try{
 await fs.writeFile(showdata,text);
 const readfiledata= await fs.readFile(showdata,'utf8')
console.log(readfiledata)
}catch(err){
console.error(err)
}
}

filedata();