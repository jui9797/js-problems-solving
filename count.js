/**
 *  Count Numbers Greater Than 5
 */
function countGreaterThanFive(arr) {
  let count = 0;
  for (let num of arr) {
    if (num > 5) count++;
  }
  return count;
}

console.log(countGreaterThanFive([2, 6, 3, 9, 1, 10])); // 3

// Count the Length of a String Without .length
function countLength(str) {
  let count = 0;
  for (let char of str) {
    count++;
  }
  return count;
}

console.log(countLength("Hello")); // 5
