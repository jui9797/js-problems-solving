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
