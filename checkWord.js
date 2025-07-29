// Check if a String Includes a Word
function includesWord(str, word) {
  return str.includes(word);
}

console.log(includesWord("I love JavaScript", "Java")); // true
console.log(includesWord("I love coding", "Python")); // false

// Check if a String Starts with a Word
function startsWithWord(str, word) {
  return str.startsWith(word);
}
console.log(startsWithWord("Hello World", "Hello")); // true
console.log(startsWithWord("Hello World", "World")); // false

// Check if a String Ends with a Word
function endsWithWord(str, word) {
  return str.endsWith(word);
}
console.log(endsWithWord("Hello World", "World")); // true
console.log(endsWithWord("Hello World", "Hello")); // false

// Check if a String Contains a Word
function containsWord(str, word) {
  return str.indexOf(word) !== -1;
}
console.log(containsWord("I love JavaScript", "Java")); // true
console.log(containsWord("I love coding", "Python")); // false

// Check if a String Matches a Word
function matchesWord(str, word) {
  return str === word;
}
console.log(matchesWord("Hello World", "Hello World")); // true
console.log(matchesWord("Hello World", "Hello")); // false

// Replace All 'a' with 'A' in a String
function replaceA(str) {
  let result = "";
  for (let char of str) {
    if (char === "a") result += "A";
    else result += char;
  }
  return result;
}

console.log(replaceA("banana")); // bAnAnA

// Replace All 'a' with 'A' in a String Using Regular Expression
function replaceARegex(str) {
  return str.replace(/a/g, "A");
}
console.log(replaceARegex("banana")); // bAnAnA

// Replace All 'a' with 'A' in a String Using Split and Join
function replaceASplitJoin(str) {
  return str.split("a").join("A");
}
console.log(replaceASplitJoin("banana")); // bAnAnA

// Replace All 'a' with 'A' in a String Using Array Map
function replaceAMap(str) {
  return Array.from(str)
    .map((char) => (char === "a" ? "A" : char))
    .join("");
}
console.log(replaceAMap("banana")); // bAnAnA

// Replace All 'a' with 'A' in a String Using For Loop
function replaceAForLoop(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "a") result += "A";
    else result += str[i];
  }
  return result;
}
console.log(replaceAForLoop("banana")); // bAnAnA
