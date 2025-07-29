// Multiply All Numbers in an Array
function multiplyArray(arr) {
  let result = 1;
  for (let num of arr) {
    result *= num;
  }
  return result;
}

console.log(multiplyArray([1, 2, 3, 4])); // 24

// Find All Even Numbers in an Array
function findEvenNumbers(arr) {
  let evenNumbers = [];
  for (let num of arr) {
    if (num % 2 === 0) {
      evenNumbers.push(num);
    }
  }
  return evenNumbers;
}

console.log(findEvenNumbers([1, 2, 3, 4, 5, 6])); // [2, 4, 6]

// Create an Array of Numbers from 1 to N
function createArray(n) {
  const arr = [];
  for (let i = 1; i <= n; i++) {
    arr.push(i);
  }
  return arr;
}

console.log(createArray(5)); // [1, 2, 3, 4, 5]
