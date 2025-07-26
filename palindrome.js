/**Problem:
Write a function to check if a string is a palindrome (reads the same forward and backward).
Input: "madam"
Output: true
*/

function isPalindrome(str) {
  const reversed = str.split("").reverse().join("");
  return str === reversed;
}

// Example
console.log(isPalindrome("madam")); // true
console.log(isPalindrome("hello")); // false

function isPalindrome(str) {
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

// Example
console.log(isPalindrome("madam")); // true
console.log(isPalindrome("hello")); // false
