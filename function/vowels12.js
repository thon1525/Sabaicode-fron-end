function vowelNum(str) {
    const vowel = ["a", "e", "i", "o", "u"];
    let vowelcount = 0;
    for (i = 0; i < vowel.length; i++) {
      for (j of str) {
        if (j === vowel[i]) {
          vowelcount++;
        }
      }
    }
    return vowelcount;
  }
  console.log(vowelNum("The quick brown fox"));
  