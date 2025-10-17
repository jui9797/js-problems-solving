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

function lengthOfLongestSubstring(s) {
  let set = new Set();
  let left = 0;
  let maxLength = 0;

  for (let right = 0; right < s.length; right++) {
    while (set.has(s[right])) {
      set.delete(s[left]);
      left++;
    }
    set.add(s[right]);
    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
}

// Example test
console.log(lengthOfLongestSubstring("abcabcbb")); // 3
console.log(lengthOfLongestSubstring("bbbbb")); // 1
console.log(lengthOfLongestSubstring("pwwkew")); // 3

// Check if Two Strings are Anagrams
function areAnagrams(str1, str2) {
  let normalize = (s) => s.split("").sort().join("");
  return normalize(str1) === normalize(str2);
}

console.log(areAnagrams("listen", "silent")); // true
console.log(areAnagrams("hello", "world")); // false

// Generate Random Password
function generatePassword(len) {
  let chars =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%";
  let password = "";
  for (let i = 0; i < len; i++) {
    password += chars[Math.floor(Math.random() * chars.length)];
  }
  return password;
}
console.log(generatePassword(10));

// Debounce Function
function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}

const log = debounce(() => console.log("Typing stopped"), 1000);
log();
log();
log();
// Only prints once after 1s

// Throttle Function
function throttle(fn, limit) {
  let waiting = false;
  return function (...args) {
    if (!waiting) {
      fn.apply(this, args);
      waiting = true;
      setTimeout(() => (waiting = false), limit);
    }
  };
}

const logScroll = throttle(() => console.log("Scrolled"), 1000);
window.addEventListener("scroll", logScroll);

// Find Even & Odd Numbers Separately
function separateEvenOdd(arr) {
  let even = [],
    odd = [];
  for (let num of arr) {
    if (num % 2 === 0) even.push(num);
    else odd.push(num);
  }
  return { even, odd };
}

console.log(separateEvenOdd([1, 2, 3, 4, 5, 6]));
// { even: [2,4,6], odd: [1,3,5] }

// Anagram Checker
function isAnagram(a, b) {
  if (a.length !== b.length) return false;
  let count = {};
  for (let ch of a) count[ch] = (count[ch] || 0) + 1;
  for (let ch of b) {
    if (!count[ch]) return false;
    count[ch]--;
  }
  return true;
}
console.log(isAnagram("listen", "silent")); // true
