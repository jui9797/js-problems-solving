// Check if a Number is Positive, Negative, or Zero
function checkNumber(num) {
  if (num > 0) return "Positive";
  else if (num < 0) return "Negative";
  else return "Zero";
}

console.log(checkNumber(5)); // Positive
console.log(checkNumber(-3)); // Negative
console.log(checkNumber(0)); // Zero

// Fibonacci Series (Recursion)
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(6)); // 8

// Debounce Function (Interview Favorite)
function debounce(fn, delay) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn.apply(this, args), delay);
  };
}

// Example
const log = debounce(() => console.log("User stopped typing"), 1000);

log();
log();
log();
// Only runs once, 1 second after last call

// Fibonacci Series (Iterative)
function fibonacci(n) {
  let arr = [0, 1];
  for (let i = 2; i < n; i++) arr.push(arr[i - 1] + arr[i - 2]);
  return arr;
}
console.log(fibonacci(7)); // [0,1,1,2,3,5,8]

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

// Find GCD (Greatest Common Divisor)
function gcd(a, b) {
  while (b) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}
console.log(gcd(56, 98)); // 14

// Find Sum of All Numbers in Nested Array

function sumNested(arr) {
  let sum = 0;
  for (let item of arr) {
    if (Array.isArray(item)) sum += sumNested(item);
    else sum += item;
  }
  return sum;
}
console.log(sumNested([1, [2, [3, 4]], 5])); // 15

// Remove Falsy Values (false, 0, "", null, undefined)

function removeFalsy(arr) {
  let result = [];
  for (let val of arr) if (val) result.push(val);
  return result;
}
console.log(removeFalsy([0, 1, false, 2, "", 3, null]));
// [1, 2, 3]

// Find Frequency of Each Element in an Array

function frequencyCount(arr) {
  let freq = {};
  for (let num of arr) freq[num] = (freq[num] || 0) + 1;
  return freq;
}
console.log(frequencyCount([1, 2, 2, 3, 3, 3]));
// {1:1, 2:2, 3:3}

// Find Common Elements Between Two Arrays

function commonElements(a, b) {
  let result = [];
  for (let item of a) {
    if (b.includes(item) && !result.includes(item)) result.push(item);
  }
  return result;
}

console.log(commonElements([1, 2, 3, 4], [3, 4, 5]));
// [3,4]

//Count Occurrences of Each Element

function countOccurrences(arr) {
  let counts = {};
  for (let i = 0; i < arr.length; i++) {
    let item = arr[i];
    if (counts[item]) {
      counts[item]++;
    } else {
      counts[item] = 1;
    }
  }
  return counts;
}
console.log(countOccurrences(["a", "b", "a", "c", "b", "a"]));
// Output: { a: 3, b: 2, c: 1 }

// Find the Most Frequent Element in an Array

function mostFrequent(arr) {
  let freq = {};
  let maxCount = 0;
  let mostCommon;

  for (let num of arr) {
    freq[num] = (freq[num] || 0) + 1;
    if (freq[num] > maxCount) {
      maxCount = freq[num];
      mostCommon = num;
    }
  }
  return mostCommon;
}
console.log(mostFrequent([1, 2, 2, 3, 3, 3, 4]));
// Output: 3

// Sort an Array Without Using .sort()

function manualSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[i]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}
console.log(manualSort([5, 2, 8, 1, 3]));
// Output: [1, 2, 3, 5, 8]

// Group Elements by Type (Number, String, Boolean)
function groupByType(arr) {
  let result = { number: [], string: [], boolean: [] };
  for (let item of arr) {
    if (typeof item === "number") result.number.push(item);
    else if (typeof item === "string") result.string.push(item);
    else if (typeof item === "boolean") result.boolean.push(item);
  }
  return result;
}
console.log(groupByType([1, "hello", true, 42, "JS", false]));
// Output: { number: [1, 42], string: ["hello", "JS"], boolean: [true, false] }

//Print a Triangle Pattern

function trianglePattern(rows) {
  for (let i = 1; i <= rows; i++) {
    let line = "";
    for (let j = 1; j <= i; j++) {
      line += "* ";
    }
    console.log(line);
  }
}
trianglePattern(5);
/*
Output:
* 
* * 
* * * 
* * * * 
* * * * *
*/

//Convert Time from 24-Hour to 12-Hour Format

function convertTo12Hour(time) {
  let [hour, minute] = time.split(":");
  hour = parseInt(hour);
  let suffix = hour >= 12 ? "PM" : "AM";
  hour = hour % 12 || 12;
  return `${hour}:${minute} ${suffix}`;
}
console.log(convertTo12Hour("18:45"));
// Output: "6:45 PM"

//Array Shuffle (Fisher–Yates Algorithm)
function shuffle(arr) {
  let i = arr.length - 1;

  while (i > 0) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    i--;
  }

  return arr;
}

console.log(shuffle([1, 2, 3, 4, 5]));

// Find Intersection of Two Arrays (Efficient)

function intersection(a, b) {
  let set = {};
  let result = [];

  for (let x of a) set[x] = true;

  for (let y of b) {
    if (set[y]) result.push(y);
  }

  return result;
}

console.log(intersection([1, 2, 3, 4], [3, 4, 5]));
// [3,4]
