//  Challenging Problem 1: Longest Consecutive Sequence
function longestConsecutive(nums) {
  const numSet = new Set(nums);
  let maxLength = 0;

  for (let num of numSet) {
    if (!numSet.has(num - 1)) {
      let currentNum = num;
      let currentStreak = 1;

      while (numSet.has(currentNum + 1)) {
        currentNum++;
        currentStreak++;
      }

      maxLength = Math.max(maxLength, currentStreak);
    }
  }

  return maxLength;
}

console.log(longestConsecutive([100, 4, 200, 1, 3, 2])); // Output: 4

// Challenging Problem 2: Find First Non-Repeating Character (without using indexOf or filter)
function firstUniqueChar(str) {
  const count = {};

  // Step 1: Count occurrences
  for (let i = 0; i < str.length; i++) {
    const ch = str[i];
    if (count[ch]) {
      count[ch]++;
    } else {
      count[ch] = 1;
    }
  }

  // Step 2: Find first unique character
  for (let i = 0; i < str.length; i++) {
    if (count[str[i]] === 1) {
      return str[i];
    }
  }

  return null;
}

console.log(firstUniqueChar("aabbcdc")); // Output: 'd'
