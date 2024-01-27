// Function that returns a promise
function examplePromise(value) {
  return new Promise((resolve, reject) => {
    // Simulate an asynchronous operation
    setTimeout(() => {
      if (value) {
        resolve(`Promise fulfilled with value: ${value}`);
      } else {
        reject('Promise rejected with no value');
      }
    }, 1000); // Simulating a delay of 1 second
  });
}

// Using the promise
examplePromise('Hello')
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });
