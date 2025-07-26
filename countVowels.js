/**
 * Problem:
Write a function that counts the number of vowels in a string.
Input: "JavaScript"
Output: 3
 */
const countVowels = (str) => {
  const vowels = "aeiouAEIOU";
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }
  return count;
};
const demo = countVowels("jacascriptai");
console.log(demo); //output: 5
