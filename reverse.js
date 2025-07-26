/**Problem:
Write a function to reverse a string.
Input: "hello"
Output: "olleh"
 */

const reverseString = (str) => {
  if (typeof str !== "string") {
    return "Input must be a string";
  }
  let reversedStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return reversedStr;
};
// way-2 using built-in method
const reverseStringBuiltIn = (str) => {
  if (typeof str !== "string") {
    return "Input must be a string";
  }
  return str.split("").reverse().join("");
};

const demo = reverseString("Jannat");
console.log(demo); // Output: "tannaJ"

const demoBuiltIn = reverseStringBuiltIn("Jannat");
console.log(demoBuiltIn); // Output: "tannaJ"
