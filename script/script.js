function add(a, b) {
  return (a + b);
}

function subtract(a, b) {
  return (a - b);
}

function multiply(a, b) {
  return (a * b);
}

function divide(a, b) {
  return (a / b);
}

function operate(x, y, operation) {
  switch (operation) {
    case "/":
      return divide(x, y); //obviously have to tell the formula what to return. somehow omitted this at first
    case "*":
      return multiply(x, y)
    case "+":
      return add(x, y);
    case "-":
      return subtract(x, y);
    default:
      break;
  }
  return
}