// Find Intersection of Two Objects

function objectIntersection(obj1, obj2) {
  let result = {};
  for (let key in obj1) {
    if (obj2.hasOwnProperty(key) && obj1[key] === obj2[key]) {
      result[key] = obj1[key];
    }
  }
  return result;
}
console.log(objectIntersection({ a: 1, b: 2, c: 3 }, { b: 2, c: 4 }));
// {b:2}

// Generate Random Hex Color

function randomHexColor() {
  let hex = "#";
  let chars = "0123456789ABCDEF";
  for (let i = 0; i < 6; i++) {
    hex += chars[Math.floor(Math.random() * 16)];
  }
  return hex;
}
console.log(randomHexColor()); // Example: #A1B2C3

// Deep Clone an Object
function deepClone(obj) {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }
  if (Array.isArray(obj)) {
    return obj.map(deepClone);
  }
  const clonedObj = {};
  for (let key in obj) {
    clonedObj[key] = deepClone(obj[key]);
  }
  return clonedObj;
}
const original = { a: 1, b: { c: 2 } };
const cloned = deepClone(original);
cloned.b.c = 3;
// console.log(original.b.c); // 2
// console.log(cloned.b.c);   // 3

// Merge Two Objects
function mergeObjects(obj1, obj2) {
  let merged = {};
  for (let key in obj1) merged[key] = obj1[key];
  for (let key in obj2) merged[key] = obj2[key];
  return merged;
}
console.log(mergeObjects({ a: 1, b: 2 }, { b: 3, c: 4 }));
// {a:1,b:3,c:4}

//Find the Average Age of Users

const users = [
  { name: "A", age: 20 },
  { name: "B", age: 25 },
  { name: "C", age: 30 },
];

function averageAge(users) {
  let total = 0;
  for (let user of users) {
    total += user.age;
  }
  return total / users.length;
}
console.log(averageAge(users)); // 25

// Count the number of properties in an object
function countProps(obj) {
  let count = 0;
  for (let key in obj) {
    count++;
  }
  return count;
}

console.log(countProps({ name: "Jui", age: 20, city: "Dhaka" }));

//Convert an object to an array of [key, value] pairs

function objectToPairs(obj) {
  const result = [];

  for (let key in obj) {
    result.push([key, obj[key]]);
  }

  return result;
}

console.log(objectToPairs({ a: 1, b: 2 }));

// Compare two objects (shallow equality)

function isEqual(obj1, obj2) {
  for (let key in obj1) {
    if (obj1[key] !== obj2[key]) return false;
  }
  for (let key in obj2) {
    if (obj1[key] !== obj2[key]) return false;
  }
  return true;
}

console.log(isEqual({ a: 1, b: 2 }, { a: 1, b: 2 }));
