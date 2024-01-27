function countVowels(str) {
    // Convert the string to lowercase to make the comparison case-insensitive
    str = str.toLowerCase();
  
    // Define an array of vowels
    const vowels = ['a', 'e', 'i', 'o', 'u'];
  
    // Initialize a counter for the number of vowels
    let vowelCount = 0;
  
    // Loop through each character in the string
    for (let i = 0; i < str.length; i++) {
      // Check if the current character is a vowel (excluding 'y')
      let isVowel = false;
  
      for (let j = 0; j < vowels.length; j++) {
        if (str[i] === vowels[j] && str[i] !== 'y') {
          isVowel = true;
          break;
        }
      }
  
      if (isVowel) {
        vowelCount++;
      }
    }
  
    // Return the final count
    return vowelCount;
  }
  
  // Example usage
  const exampleString = 'The quick brown fox';
  const result = countVowels(exampleString);
  console.log(result);
  