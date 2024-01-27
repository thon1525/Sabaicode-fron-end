const fs = require("fs");

const fundata = () => {
  try {
    fs.readFile("./showdata.txt", "utf8", (err, data) => {
      if (err) {
        console.error(err);
      } else {
        console.log(data);
      }
    });
  } catch (errdata) {
    console.error(errdata);
  }
};

async function showfun(da) {
  await fundata();
}

fundata();
