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
      if (vowels.includes(str[i]) && str[i] !== 'y') {
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
  