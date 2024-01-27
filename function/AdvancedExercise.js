// Function to check and log the category of each number in the array
function categorizeNumbers(numbers) {
    for (let i = 0; i < numbers.length; i++) {
      const currentNumber = numbers[i];
  
      if (currentNumber > 50) {
        console.log("High");
      } else if (currentNumber >= 20 && currentNumber <= 50) {
        console.log("Medium");
      } else {
        console.log("Low");
      }
   }
  }
  
  // Example array of numbers
  const numbersArray = [10, 30, 45, 55, 5, 70, 25];
  categorizeNumbers(numbersArray);
  