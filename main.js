let currentInput = '0';
let previousInput = '';
let operator = '';

function updateDisplay() {
  document.getElementById('display').textContent = currentInput;
}

function appendDigit(digit) {
  if (currentInput === '0') {
    currentInput = digit;
  } else {
    currentInput += digit;
  }
  updateDisplay();
}
function setOperator(op) {
  previousInput = currentInput;
  currentInput = '0';
  operator = op;
}

function calculate() {
  switch (operator) {
    case '+':
      currentInput = (parseFloat(previousInput) + parseFloat(currentInput)).toString();
      break;
    case '-':
      currentInput = (parseFloat(previousInput) - parseFloat(currentInput)).toString();
      break;
    case 'x':
      currentInput = (parseFloat(previousInput) * parseFloat(currentInput)).toString();
      break;
    case '÷':
      currentInput = (parseFloat(previousInput) / parseFloat(currentInput)).toString();
      break;
  }
  operator = '=';
  previousInput = '';
  updateDisplay();
}

function clearDisplay() {
  currentInput = '0';
  previousInput = '';
  operator = '';
  updateDisplay();
}

// Existing functions...

function appendDigit(digit) {
  if (currentInput === '0') {
    currentInput = digit;
  } else {
    currentInput += digit;
  }
  updateDisplay();
}
// Existing functions...

function setOperator(op) {
  if (operator !== '') {
    calculate();
  }
  operator = op;
  previousInput = currentInput;
  currentInput = '';
  updateDisplay();
}


function updateDisplay() {
  if (operator === '=') {
    document.getElementById('display').textContent = currentInput;
  } else {
    let equation = previousInput + ' ' + operator + ' ' + currentInput;
    document.getElementById('display').textContent = equation;
  }
}
// Existing functions...

updateDisplay();
