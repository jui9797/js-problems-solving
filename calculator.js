//  Create a Simple Calculator (add, sub, mul, div)
function calculator(a, b, operator) {
  if (operator === "+") return a + b;
  else if (operator === "-") return a - b;
  else if (operator === "*") return a * b;
  else if (operator === "/") return a / b;
  else return "Invalid operator";
}

console.log(calculator(10, 10, "*")); // 20
