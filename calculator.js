const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(blankArray) {
  let finalSum = 0;
  for (  let i = 0; i < blankArray.length; i++) {
    finalSum += blankArray[i];
  }
  return finalSum;

};

const multiply = function(numbers) {
  let finalProduct = 0;
  for ( let i = 1; i < numbers.length; i++ ) {
   finalProduct = numbers[0] *= numbers[i];
  }
  return finalProduct; 

};

const power = function(a,b) {
  return a ** b;
	
};

const factorial = function(initNum) {
  let finalFac = 1;
  for (let i = 1; i <= initNum; i++) {
    finalFac *= i;
  }
  return finalFac;
	
};


//Calculator


let currentNumber = "";
let currentOp = "";
let displayNumber = "";


const screenPop = function(key) {
  let currentNumber = key;
  displayNumber += key;
  document.getElementById("screen").innerHTML = `${displayNumber}`;
}

const decimal = function() {
  displayNumber += `.`;
  document.getElementById("screen").innerHTML = `${displayNumber}`;
}


const operandChoice = function (key) {
    currentOp = key;
    firstOperand = displayNumber;
    currentNumber = "0";
    displayNumber = "";
    return document.getElementById("screen").innerHTML = `${currentOp}`;

 }

const operate = function (currentOp) {

 switch (currentOp) {
  case '+':
    return document.getElementById("screen").innerHTML = `${Number(firstOperand) + Number(displayNumber)}`;
    break;
  case '-':
    return document.getElementById("screen").innerHTML = `${Number(firstOperand) - Number(displayNumber)}`;
    break;
  case 'x':
    return document.getElementById("screen").innerHTML = `${Number(firstOperand) * Number(displayNumber)}`;
    break;
  case '/':
    return document.getElementById("screen").innerHTML = `${Number(firstOperand) / Number(displayNumber)}`;
    break;
  }

}

const opReset = function () {
  currentOp = null;
  currentNumber = displayNumber;
  displayNumber = "";
}
 
const startOver = function () {
  currentOp = null;
  currentNumber = "0";
  displayNumber = "";
  return document.getElementById("screen").innerHTML = `${displayNumber}`;
}

const back = function () {
  displayNumber = displayNumber.slice(0,displayNumber.length-1);
  document.getElementById("screen").innerHTML = `${displayNumber}`;
}


//trying to create a new operate function to reset variables after use

const operate2 = function (currentOp) {

  switch (currentOp) {
   case '+':
    displayNumber = `${Number(firstOperand) + Number(displayNumber)}`;
    currentNumber = "";
    currentOp = "";
    return document.getElementById("screen").innerHTML = `${displayNumber}`;
    break;
   case '-':
    displayNumber = `${Number(firstOperand) - Number(displayNumber)}`;
    currentNumber = "";
    currentOp = "";
    return document.getElementById("screen").innerHTML = `${displayNumber}`;
    break;
   case 'x':
    displayNumber = `${Number(firstOperand) * Number(displayNumber)}`;
    currentNumber = "";
    currentOp = "";
    return document.getElementById("screen").innerHTML = `${displayNumber}`;
    break;
   case '/':
    displayNumber = `${Number(firstOperand) / Number(displayNumber)}`;
    currentNumber = "";
    currentOp = "";
    return document.getElementById("screen").innerHTML = `${displayNumber}`;
    break;
   }
 
 }



// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
