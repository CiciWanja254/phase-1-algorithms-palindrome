function isPalindrome(word) {
  // Remove all non-letter characters and convert to lowercase
  const cleanWord = word.replace(/[^a-z]/gi, "").toLowerCase();
  
  // Loop through the first half of the word and compare with the second half
  for (let i = 0; i < Math.floor(cleanWord.length / 2); i++) {
    if (cleanWord[i] !== cleanWord[cleanWord.length - i - 1]) {
      return false;
    }
  }
  
  return true;
}

/* 
  Pseudocode:
  1. Remove all non-letter characters and convert the word to lowercase
  2. Loop through the first half of the word
  3. Compare the i-th character with the (length - i - 1)-th character
  4. If any of the characters do not match, return false
  5. If all characters match, return true

  Written explanation:
  The function first cleans the input word by removing all non-letter characters and converting the word to lowercase. This step is necessary to handle inputs that may contain uppercase letters or other characters that are not part of the palindrome.

  Next, the function loops through the first half of the cleaned word and compares each character with its counterpart on the other side of the word (i.e. the i-th character is compared with the (length - i - 1)-th character). If any of the characters do not match, the function immediately returns false.

  If all the characters match, the function returns true, indicating that the input word is a palindrome.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: false");
  console.log("=>", isPalindrome("avatar"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("kayak"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
