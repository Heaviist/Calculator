//initiate basic variables for operations and output
const standByText = 'Ready to Quack!';
let output = document.querySelector('.output-screen'); //create object for accessing the output value in the page
output.innerHTML = standByText;
let savedValue = 'unused'; //previous result/input, passively used
let workingValue = 'unused'; //last input, actively used, operation will use this to act on saved value
let currentOperator = '';

//set constants for elements in the document
const numberPressed = document.querySelectorAll('.number');
const allClear = document.querySelector('#all-clear');
const operationPressed = document.querySelectorAll('.operation');
const equalSign = document.querySelector('#equals');

//when a number is pressed, simply update the screen with that number. If there's an operation on screen, clear screen first
numberPressed.forEach(number => {
  number.addEventListener('click', () => {
    switch (output.innerHTML) {
      case "+":
      case "/":
      case "*":
      case "-":
      case "^":
        clearOutput();
        break;
      default:
    }
    updateOutput(number.innerHTML);
  })
});

//if operator is clicked, then save previous inputs and display operator
operationPressed.forEach(op => {
  op.addEventListener('click', () => {
    currentOperator = op.innerHTML;
    
    savedValue = parseInt(output.innerHTML);
    if (currentOperator == 'sqrt') {
      evaluate();
    } else {
      clearOutput();
      updateOutput(op.innerHTML);
    }
  })
})

//present result when = is pressed. ParseInt because inputs are stored as strings initially
equalSign.addEventListener('click', () => {
  evaluate();
})

//evaluate entered expression
function evaluate() {
  //if (savedValue != parseInt(output.innerHTML)) {
  workingValue = parseInt(output.innerHTML);
  //}
  savedValue = operate(savedValue, workingValue, currentOperator);
  output.innerHTML = savedValue;
}

function updateOutput(entered) {
  if (output.innerHTML == standByText) {
    clearOutput(); //clear display if it's in Ready to Quack state
  }
  output.innerHTML = `${output.innerHTML}${entered}`; //take current value and append entered value. This way all stays a string and appending the next value is easy
}

//reset output display
allClear.addEventListener('click', () => {
  output.innerHTML = standByText;
  savedValue = 'unused';
  workingValue = 'unused';
  currentOperator = '';
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
