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
