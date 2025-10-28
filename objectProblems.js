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
