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
