/**Problem:
Write a function that returns the largest number in an array.
Input: [10, 25, 5, 40, 15]
Output: 40 */

const findLargeNumber = (arr) => {
  let large = arr[0];
  for (i = 0; i < arr.length; i++) {
    if (arr[i] > large) {
      large = arr[i];
    }
  }
  return large;
};
const demo = findLargeNumber([20, 25, 30, 35, 40]);
console.log(demo); // Output: 40

// way-2
const findLargeNumberBuiltIn = (arr) => {
  // array validation
  if (!Array.isArray(arr) || arr.length === 0) {
    return "Input must be a non-empty array";
  }
  return Math.max(...arr);
};
const demoBuiltIn = findLargeNumberBuiltIn([20, 25, 30, 35, 40]);
console.log(demoBuiltIn); // Output: 40

// Find the Smallest Number in an Array
function findMin(arr) {
  let min = arr[0];
  for (let num of arr) {
    if (num < min) min = num;
  }
  return min;
}

console.log(findMin([5, 2, 9, 1, 7])); // 1
