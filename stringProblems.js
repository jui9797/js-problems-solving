// Capitalize the First Letter of a Word
function capitalizeFirstLetter(str) {
  if (typeof str !== "string" || str.length === 0) {
    return "";
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
}
// Example usage:
// console.log(capitalizeFirstLetter("hello"));    // Output: "Hello"

// way-2
function capitalFirst(str) {
  let capital = "";
  for (let i = 0; i < str.length; i++) {
    if (i === 0) {
      capital = str.charAt(i).toUpperCase(); //M
    }
  }
  const capital2 = str.slice(1); //angoo
  return capital + capital2;
}
console.log(capitalFirst("mangoo")); // Output: "Mangoo"

// Remove All Vowels from a String
function removeAllVowels(str) {
  if (typeof str !== "string") {
    return "";
  }
  return str.replace(/[aeiouAEIOU]/g, "");
}
// Example usage:
// console.log(removeAllVowels("hello world"));    // Output: "hll wrld"

// Reverse the Words in a Sentence
function reverseWords(sentence) {
  return sentence.split(" ").reverse().join(" ");
}

console.log(reverseWords("I love JavaScript")); // JavaScript love I

// Count the Number of Words in a Sentence
function wordCount(str) {
  if (!str) return 0;
  return str.trim().split(/\s+/).length;
}

console.log(wordCount("I am learning JavaScript")); // 4

function firstNonRepeatingChar(str) {
  // frequency count রাখার জন্য object বানাই
  const freq = {};

  // step 1: প্রতিটি character এর frequency count করি
  for (let char of str) {
    if (freq[char]) {
      freq[char]++;
    } else {
      freq[char] = 1;
    }
  }

  // step 2: আবার string loop করি, প্রথম যেটার frequency 1 সেটা return করি
  for (let char of str) {
    if (freq[char] === 1) {
      return char;
    }
  }

  return null; // যদি সব repeat হয়
}

// Example test
console.log(firstNonRepeatingChar("programming")); // Output: "p"
console.log(firstNonRepeatingChar("aabbcc")); // Output: null
console.log(firstNonRepeatingChar("javascript")); // Output: "j"
