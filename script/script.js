//initiate basic variables for operations and output
const standByText = 'Ready to Quack!';
let output = document.querySelector('.output-screen'); //create object for accessing the output value in the page
output.innerHTML = standByText;
let savedInput = 0;
let workingValue = 0;
let currentOperator = '';

//set constants for elements in the document
const numberPressed = document.querySelectorAll('.number');
const allClear = document.querySelector('#all-clear');
const operationPressed = document.querySelectorAll('.operation');

numberPressed.forEach(number => {
  number.addEventListener('click', () => {
    updateOutput(number.innerHTML);
  })
});

//if operator is clicked, then save previous inputs and display operator
operationPressed.forEach(op => {
  op.addEventListener('click', () => {
    workingValue = output.innerHTML;
    console.log(workingValue);
    clearOutput();
    updateOutput(op.innerHTML);
  })
})

function updateOutput(entered) {
  if (output.innerHTML == standByText) {
    clearOutput(); //clear display if it's in Ready to Quack state
  }
  output.innerHTML = `${output.innerHTML}${entered}`; //take current value and append entered value. This way all stays a string and appending the next value is easy
}

//reset output display
allClear.addEventListener('click', () => {
  output.innerHTML = standByText;
  savedInput = 0;
})

function clearOutput() {
  output.innerHTML = '';
}

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

function power(a, b) {
  return (a ** b);
}

function root(a) {
  return Math.sqrt(a);
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
    case "^":
      return power(x, y);
    case "root":
      return root(x);
    default:
      break;
  }
  return
}
