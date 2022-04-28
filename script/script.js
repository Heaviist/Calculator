//initiate basic variables for operations and output
const standByText = 'Ready to Quack!';
let outputScreen = document.querySelector('.output-screen'); //create object for accessing the output value in the page
outputScreen.innerHTML = standByText;
let result = ''; //result to be displayed
let currentInput = ''; //last entered value
let previousInput = ''; //helper variable to store previous values.
let currentOperator = ''; //last entered operator
let equalsPressed = false; //state to help decide what values to use when = is pressed

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

//if operator is clicked, then save previous inputs and display operator. ParseInt because inputs are stored as strings initially
operationPressed.forEach(op => {
  op.addEventListener('click', () => {
    if (equalsPressed == false && currentOperator != '') {
      previousInput = currentInput;
      currentInput = parseInt(outputScreen.innerHTML);
      evaluate();
      currentInput = result;
    } else {
      currentInput = parseInt(outputScreen.innerHTML); //also makes sure that when equals is not pressed, the currently displayed value is used for further calculations
    }

    equalsPressed = false; //reset to normal state to take new values
    currentOperator = op.innerHTML;

    clearOutput();
    updateOutput(currentOperator);
  })
});

//present result when = is pressed.
equalSign.addEventListener('click', () => {
  if (equalsPressed == true) {
    previousInput = result;
    evaluate();
  } else {
    if (currentOperator == '') {
      inputError('no operator, restart!');
    } else {
      switch (outputScreen.innerHTML) {
        case "+":
        case "/":
        case "*":
        case "-":
        case "^":
          inputError('No number, restart!');
          break;
        default:
          previousInput = currentInput;
          currentInput = parseInt(outputScreen.innerHTML);
          evaluate();
          equalsPressed = true;
      }
    }
  }
});

//reset output display and variables used
allClear.addEventListener('click', () => {
  clearAll();
});

//Show error and clear all after invalid input
function inputError(text) {
  outputScreen.innerHTML = text;
  setTimeout(clearAll, 2000);
}

//Fresh start for the user, reset all initial values
function clearAll() {
  outputScreen.innerHTML = standByText;
  currentOperator = '';
  result = '';
  currentInput = '';
  previousInput = '';
}

//evaluate entered expression
function evaluate() {
  result = operate(previousInput, currentInput, currentOperator);
  if (result == Infinity) {
    inputError('Un-Quack-Able');
  } else {
    outputScreen.innerHTML = result;
  }
}

//Called to update the screen with the most recently inputted value
function updateOutput(entered) {
  if (outputScreen.innerHTML == standByText) {
    clearOutput(); //clear display if it's in Ready to Quack state
  }
  outputScreen.innerHTML = `${outputScreen.innerHTML}${entered}`; //take current value and append entered value. This way all stays a string and appending the next value is easy
}

//start fresh, used for clearing the display before adding new content
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
    case "√":
      return sqrt(x);
    default:
      break;
  }
  return
}
