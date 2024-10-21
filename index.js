function isPalindrome(word) {
  // Write your algorithm here
  const newWord = word.slice(0);
  const newWordLength = newWord.length;
  const counter = newWordLength - 1;
  let newArray = new Array();

  for (let index = counter; index >= 0; index --) {
    newArray.push(newWord.slice(index,index + 1));
  }

  let word1 = newArray.join('');
  console.log(word1);
  return word1 === word;

}

/* 
  Add your pseudocode here
  create copy of word

  find the copy's length

  set a counter to the index of the copied words last element

  iterate throught the word array from end to beginning pushing each element to a new array

  join this new array

  return the comparison of the word passed in and the joined array

*/

/*
  Add written explanation of your solution here
  Function takes in a word, deeply copies the word, then iterates through the new word from last letter to first and pushes each letter to a new array.
  This array is then joined and compared to the original word.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
