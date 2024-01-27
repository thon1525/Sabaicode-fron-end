
function reverseNum(num) {
  const text = num.toString();
  let sum = "";
  for (let i = text.length - 1; i >= 0; i--) {
    sum += text[i];
  }
  const reversedNumber = parseInt(sum);
  return reversedNumber;
}

const number = 123;
const result = reverseNum(number);
console.log(`The reversed number of ${number} is ${result}`);