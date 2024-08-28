function countVowels(str) {
  const vowels = "aeiouAEIOU";
  let count = 0; 
  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (vowels.indexOf(char) !== -1) {
      count++;
    }
  }

  return count;
}

  console.log(countVowels("hello world")); // 3
  console.log(countVowels("Javascript")); // 3
  