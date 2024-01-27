function sortStringAlphabetically(inputString) {
    const charArray = inputString.split(''); // Convert the string to an array of characters

    for (let i = 0; i < charArray.length; i++) {
        for (let j = i + 1; j < charArray.length; j++) {
            // Compare and swap if needed
            if (charArray[i] > charArray[j]) {
                // Using destructuring assignment to swap values
                [charArray[i], charArray[j]] = [charArray[j], charArray[i]];
            }
        }
    }

    // const sortedString = charArray.join(''); // Join the characters back into a string
    return sortedString;
}

// Example usage:
const inputString = 'webmaster';
const result = sortStringAlphabetically(inputString);
console.log(result); // Output: 'abeemrstw'
