const calculateAverage =function(num){
    if (num.length === 0) {
        console.log("this num is zero");
      }
      const sum = num.reduce((acc, num) => acc + num, 0);
      return sum / num.length;
}

const numbersArray = [5, 10, 15, 20];
const average = calculateAverage(numbersArray);
console.log("The average is:", average);