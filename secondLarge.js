function findSecoundLargest(arr) {
  // validation
  if (arr.length < 2) {
    return null;
  }
  // step-1 find the largest number
  let largest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  // step-2 find second largest number
  let secondLargest;
  let found = false;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < largest) {
      if (!found) {
        secondLargest = arr[i];
        found = true;
      } else if (arr[i] > secondLargest) {
        secondLargest = arr[i];
      }
    }
  }
  return found ? secondLargest : null;
}

// example
const input = [1, 2, 3, 4, 5, 6];
console.log(findSecoundLargest(input));
