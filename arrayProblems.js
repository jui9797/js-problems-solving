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

// Flatten Nested Arrays
function flatten(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result = result.concat(flatten(arr[i]));
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}

console.log(flatten([1, [2, [3, 4]], 5])); // [1,2,3,4,5]

// Find the missing number in an array
function findMissing(arr, n) {
  let expectedSum = (n * (n + 1)) / 2; // sum of 1 to n
  let actualSum = 0;

  for (let i = 0; i < arr.length; i++) {
    actualSum += arr[i];
  }

  return expectedSum - actualSum;
}

// Example (missing number is 4)
console.log(findMissing([1, 2, 3, 5, 6], 6)); // Output: 4

// Find all pairs in an array that add up to a given target number.
function pairSum(arr, target) {
  let pairs = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        pairs.push([arr[i], arr[j]]);
      }
    }
  }

  return pairs;
}

// Example
console.log(pairSum([1, 2, 3, 4, 5, 6], 7));
// Output: [ [1,6], [2,5], [3,4] ]

// Find Missing Number in a Range
function findMissingNumber(arr, n) {
  let expectedSum = (n * (n + 1)) / 2;
  let actualSum = arr.reduce((sum, num) => sum + num, 0);
  return expectedSum - actualSum;
}

console.log(findMissingNumber([1, 2, 4, 5, 6], 6));
// Output: 3

// Find intersection of two arrays
function intersection(arr1, arr2) {
  let result = [];

  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i]) && !result.includes(arr1[i])) {
      result.push(arr1[i]);
    }
  }

  return result;
}

// Example
console.log(intersection([1, 2, 3, 4], [3, 4, 5, 6]));
// Output: [3,4]
