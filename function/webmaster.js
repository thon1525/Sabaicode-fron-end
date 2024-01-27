function sortStringAlphabetically(inputString) {
    const charArray = Array.from(inputString); // Convert the string to an array of characters

    for (let i = 0; i < charArray.length; i++) {
        for (let j = i + 1; j < charArray.length; j++) {
            // Compare and swap if needed
            if (charArray[i] > charArray[j]) {
                // Using destructuring assignment to swap values
                [charArray[i], charArray[j]] = [charArray[j], charArray[i]];
            }
        }
    }

    let sortedString = '';
    for (let i = 0; i < charArray.length; i++) {
        sortedString += charArray[i];
    }

    return sortedString;
}

// Example usage:      
const inputString = 'webmaster';
const result = sortStringAlphabetically(inputString);
console.log(result); // Output: 'abeemrstw'
