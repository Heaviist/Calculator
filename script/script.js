//initiate basic variables for operations and output
const standByText = 'Ready to Quack!';
let outputScreen = document.querySelector('.output-screen'); //create object for accessing the output value in the page
outputScreen.innerHTML = standByText;
let result = 0;
let currentInput = '';
let previousInput = '';
let currentOperator = '';
let equalsPressed = false;

//set constants for elements in the document
const numberPressed = document.querySelectorAll('.number');
const allClear = document.querySelector('#all-clear');
const operationPressed = document.querySelectorAll('.operation');
const equalSign = document.querySelector('#equals');

//when a number is pressed, simply update the screen with that number. If there's an operation on screen, clear screen first
numberPressed.forEach(number => {
  number.addEventListener('click', () => {
    switch (outputScreen.innerHTML) {
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
    equalsPressed = false;
    currentOperator = op.innerHTML;

    currentInput = parseInt(outputScreen.innerHTML);

    console.log(currentInput);
    console.log(currentOperator);

    clearOutput();
    updateOutput(currentOperator);
  })
})

//present result when = is pressed. ParseInt because inputs are stored as strings initially
equalSign.addEventListener('click', () => {
  if (equalsPressed == true) {
    previousInput = result;
    evaluate();
  } else {
  previousInput = currentInput;
  currentInput = parseInt(outputScreen.innerHTML);
  console.log(currentInput,previousInput,currentOperator,result);
  evaluate();
  equalsPressed = true;
  }
})

//reset output display
allClear.addEventListener('click', () => {
  outputScreen.innerHTML = standByText;
  currentOperator = '';
  result = 0;
  currentInput = '';
  previousInput = '';
})

//evaluate entered expression
function evaluate() {
  result = operate(previousInput, currentInput, currentOperator);
  outputScreen.innerHTML = result;
}

function updateOutput(entered) {
  if (outputScreen.innerHTML == standByText) {
    clearOutput(); //clear display if it's in Ready to Quack state
  }
  outputScreen.innerHTML = `${outputScreen.innerHTML}${entered}`; //take current value and append entered value. This way all stays a string and appending the next value is easy
}

function clearOutput() {
  outputScreen.innerHTML = '';
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

function sqrt(a) {
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
      return sqrt(x);
    default:
      break;
  }
  return
}
