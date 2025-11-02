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
