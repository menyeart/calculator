

let currentOperator = "";
let displayNumber = "";
let valueNumber = "";

//Adding buttons to screen

const addScreen = function(key) {
  if (displayNumber.length > 9) {
    displayNumber = "!!Error!!";
    document.getElementById("screen").innerHTML = `${displayNumber}`;
    clearOperands();
  } else {
    displayNumber += key;
    document.getElementById("screen").innerHTML = `${displayNumber}`;
  }
}

//Operator Buttons

const chooseOperator = function (key) {
  if (currentOperator == 0 && valueNumber == 0) {
   currentOperator = key;
   valueNumber = displayNumber;
   displayNumber = "";
   return document.getElementById("screen").innerHTML = `${currentOperator}`;
  } else if (currentOperator == 0 && valueNumber != 0) {
    currentOperator = key;
    displayNumber = "";
    return document.getElementById("screen").innerHTML = `${currentOperator}`;
  } else {
      valueNumber = operate(currentOperator);
      currentOperator = key;
   }
}

//Misc Buttons (On, reset, back)

const clearOperands = function () {
  currentOperator = "";
  displayNumber = "";
  disableDecimal();
}
 
const startOver = function () {
  disableDecimal();
  currentOperator = "";
  displayNumber = "";
  valueNumber = "";
  return document.getElementById("screen").innerHTML = `${displayNumber}`;
}

const back = function () {
  displayNumber = displayNumber.slice(0,displayNumber.length-1);
  document.getElementById("screen").innerHTML = `${displayNumber}`;
}

const newBackground = function () {
  clearOperands();
  document.getElementById("screen").innerHTML = `${displayNumber}`;
  document.getElementById("screen").style.backgroundColor = "whitesmoke";
}

// add button and functionality

const addDecimal = function() {
  displayNumber += `.`;
  document.getElementById("screen").innerHTML = `${displayNumber}`;
}

const enableDecimal = function () {    
document.getElementById("btn18").disabled = true;
}

const disableDecimal = function () {    
document.getElementById("btn18").disabled = false;
}


//Evaluate Operands

const operate = function (currentOperator) {
  switch (currentOperator) {
   case '+':
    valueNumber = Number(valueNumber) + Number(displayNumber);
    break;
   case '-':
    valueNumber = Number(valueNumber) - Number(displayNumber);
    break;
   case 'x':
    valueNumber = Number(valueNumber) * Number(displayNumber);
    break;
   case '/':
    if (displayNumber == "0") {
      valueNumber = "!!ERROR!!";
      document.getElementById("screen").innerHTML = `${valueNumber}`;
      return clearOperands();
    } else {
    valueNumber = Number(valueNumber) / Number(displayNumber);
    }
    break;
   case 'sqrt':
    valueNumber = Math.sqrt(Number(valueNumber));
    break;
   }

  valueNumber = Math.round(valueNumber * 1000) / 1000;

  if (valueNumber.toString().length > 9) {
    valueNumber = "!!Error!!";
    document.getElementById("screen").innerHTML = `${valueNumber}`;
    clearOperands();
    return valueNumber;
  } else {
      document.getElementById("screen").innerHTML = `${valueNumber}`;
      clearOperands();
      return valueNumber;  
      }

}
