//initiate basic variables for operations and output
const standByText = 'Ready to Quack!';
const digits = 9; // sets max number of digits on output screen
let outputScreen = document.querySelector('.output-screen'); //create object for accessing the output value in the page
outputScreen.innerHTML = standByText;
let result = ''; //result to be displayed
let currentInput = ''; //last entered value
let previousInput = ''; //helper variable to store previous values.
let currentOperator = ''; //last entered operator
let equalsPressed = false; //state to help decide what values to use when = is pressed

//set constants for elements/buttons in the document
const numberPressed = document.querySelectorAll('.number');
const allClear = document.querySelector('#all-clear');
const operationPressed = document.querySelectorAll('.operation');
const equalSign = document.querySelector('#equal');
const undo = document.querySelector('#backspace');
const btnDot = document.querySelector('#num-dot');

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
        operator('on');
        break;
      default:
        break;
    }
    updateOutput(number.innerHTML);
  })
});

//if dot clicked then disable
btnDot.addEventListener('click', () => {
  dot('off');
});

//if operator is clicked, then save previous inputs and display operator. ParseFloat because inputs are stored as strings initially
operationPressed.forEach(op => {
  op.addEventListener('click', () => {
    if (outputScreen.innerHTML == 'Ready to Quack!') {
      inputError('Number first, restart!');
    } else {
      if (equalsPressed == false && currentOperator != '') { //continue operation with new operator after evaluating previous inputs
        previousInput = currentInput;
        currentInput = parseFloat(outputScreen.innerHTML);
        evaluate();
        currentInput = result;
      } else {
        currentInput = parseFloat(outputScreen.innerHTML); //also makes sure that when equals is not pressed, the currently displayed value is used for further calculations
      }

      equalsPressed = false; //reset to normal state to take new values
      dot('on');
      currentOperator = op.innerHTML;
      operator('off');
      if (currentOperator == "√") {
        document.getElementById('equal').click();
        operator('on');
      } else {
        clearOutput();
        updateOutput(currentOperator);
      }
    }
  })
});

//present result when = is pressed.
equalSign.addEventListener('click', () => {
  if (equalsPressed == true) {
    previousInput = result;
    evaluate();
    dot('off');
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
        case "√":
        default:
          previousInput = currentInput;
          currentInput = parseFloat(outputScreen.innerHTML);
          evaluate();
          equalsPressed = true;
          dot('off');
          break;
      }
    }
  }
});

//reset output display and variables used
allClear.addEventListener('click', () => {
  clearAll();
});

//delete last input (backspace button)
undo.addEventListener('click', () => {
  switch (outputScreen.innerHTML) {
    case "+":
    case "/":
    case "*":
    case "-":
    case "^":
      currentOperator = ''
      outputScreen.innerHTML = currentInput;
      operator('on');
      break;
    default:
      outputScreen.innerHTML = outputScreen.innerHTML.slice(0, -1);
      if (outputScreen.innerHTML == '') {
        outputScreen.innerHTML = 0;
      }
      break;
  }
});

document.addEventListener('keydown', (e) => {
  let code = e.code.toLowerCase();
  if (code == 'enter') {
    e.preventDefault();
    code = 'equal';
  } else {
    switch (e.key) {
      case '*':
        code = 'times';
        break;
      case '/':
        code = 'divide';
      default:
        break;
    }
  }
  document.getElementById(`${code}`).click();
});

//Show error and clear all after invalid input
function inputError(text) {
  outputScreen.classList.add('error-message');
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
  dot('on');
  operator('on');
  outputScreen.classList.remove('error-message');
}

//evaluate entered expression
function evaluate() {
  result = operate(previousInput, currentInput, currentOperator);
  if (result == Infinity) {
    inputError('Un-Quack-Able'); //too big or divide by 0
  } else {
    const outputRounded = round(result);
    if (isNaN(outputRounded)) { // round function will output NaN when receiving overly large or small inputs
      inputError("You've gone too far!");
    } else {
      outputScreen.innerHTML = outputRounded;
    }
  }
}

//rounding function, has issues when the last number is 9 rounded up, leads to bunch of trailing 0s
function round(r) {
  sign = Math.sign(r);//store sign for later
  n = Math.abs(r);//take absolute value for processing
  const order = Math.ceil(Math.log10(n)) - digits;//store order of magnitude for easy mathematical rounding and conversion to exponential if necessary
  const rounded = Math.round(n / (10 ** order));
  const resultRounded = rounded * (10 ** order);
  let roundedSigned = sign * resultRounded;
  if (order >= -3 || order <= -13) {
    roundedSigned = roundedSigned.toExponential(digits - 1);
  }
  return roundedSigned;
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

//toggle dot
function dot(state) {
  if (state == 'on') {
    btnDot.disabled = false;
    btnDot.classList.remove('dot-disabled');
  } else if (state == 'off') {
    btnDot.disabled = true;
    btnDot.classList.add('dot-disabled');
  }
}

//toggle operator buttons
function operator(state) {
  if (state == 'on') {
    operationPressed.forEach(element => {
      element.disabled = false;
      element.classList.remove('operation-disabled');
    });
  } else if (state == 'off') {
    operationPressed.forEach(element => {
      element.disabled = true;
      element.classList.add('operation-disabled');
    });
  }
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
  dot('on');
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
