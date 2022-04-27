const standByText = 'Ready to Quack!';
let output = document.querySelector('.output-screen'); //create object for accessing the output value in the page
output.innerHTML = standByText;
const numberPressed = document.querySelectorAll('.number'); //create list to access number entries
const allClear = document.querySelector('#all-clear'); //create object for all clear button
let savedInput = 0;

numberPressed.forEach(number => {
  number.addEventListener('click', () => {
    updateOutput(number.innerHTML);
  })
});

allClear.addEventListener('click', () => {
  output.innerHTML = standByText;
  savedInput = 0;
})

function updateOutput(entered) {
  if (output.innerHTML == standByText) {
    clearOutput(); //clear display if it's in Ready to Quack state
  }
  output.innerHTML = `${output.innerHTML}${entered}`; //take current value and append entered value. This way all stays a string and appending the next value is easy
}

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
