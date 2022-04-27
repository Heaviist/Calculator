//initiate basic variables for operations and output
const standByText = 'Ready to Quack!';
let output = document.querySelector('.output-screen'); //create object for accessing the output value in the page
output.innerHTML = standByText;
let savedValue = 0;
let workingValue = 0;
let currentOperator = '';

//set constants for elements in the document
const numberPressed = document.querySelectorAll('.number');
const allClear = document.querySelector('#all-clear');
const operationPressed = document.querySelectorAll('.operation');
const equalSign = document.querySelector('#equals');

numberPressed.forEach(number => {
  number.addEventListener('click', () => {
    switch (output.innerHTML) {
      case "+":
      case "/":
      case "*":
      case "-":
      case "^":
      case "sqrt":
        output.innerHTML = '';
        console.log(currentOperator);
        console.log(workingValue);
        break;
      default:
    }
    updateOutput(number.innerHTML);
  })
});

//if operator is clicked, then save previous inputs and display operator
operationPressed.forEach(op => {
  op.addEventListener('click', () => {
    savedValue = parseInt(output.innerHTML);
    currentOperator = op.innerHTML;
    clearOutput();
    updateOutput(op.innerHTML);
  })
})

//present result when = is pressed. ParseInt because inputs are stored as strings initially
equalSign.addEventListener('click', () => {
  if (savedValue != parseInt(output.innerHTML)) {
    workingValue = parseInt(output.innerHTML);
  }
  savedValue = operate(savedValue, workingValue, currentOperator);
  output.innerHTML = savedValue;
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
  savedValue = 0;
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
    case "sqrt":
      return root(x);
    default:
      break;
  }
  return
}
