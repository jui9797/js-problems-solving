/**
* Problem:
Write a function that removes duplicate values from an array.
Input: [1, 2, 2, 3, 4, 4, 5]
Output: [1, 2, 3, 4, 5]
*/
const removeDuplicate = (arr) => {
  const uniqueArray = [];
  for (i = 0; i < arr.length; i++) {
    if (!uniqueArray.includes(arr[i])) {
      uniqueArray.push(arr[i]);
    }
  }
  return uniqueArray;
};
const demo = removeDuplicate([1, 2, 3, 3, 4, 5, 5, 6, 7, 3, 1, 2]);
console.log(demo); //output : [1, 2, 3, 4, 5, 6, 7]

// way-2 using Set
const removeDuplicateSet = (arr) => {
  return [...new Set(arr)];
};
const demoSet = removeDuplicateSet([1, 2, 3, 3, 4, 5, 5, 6, 7, 3, 1, 2]);
console.log(demoSet); //output : [1, 2, 3, 4, 5, 6, 7]
