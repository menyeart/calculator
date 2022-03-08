/*

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

const operate = function (currentOperator) {

  switch (currentOperator) {
   case '+':
     return document.getElementById("screen").innerHTML = `${Number(valueNumber) + Number(displayNumber)}`;
     break;
   case '-':
     return document.getElementById("screen").innerHTML = `${Number(valueNumber) - Number(displayNumber)}`;
     break;
   case 'x':
     return document.getElementById("screen").innerHTML = `${Number(valueNumber) * Number(displayNumber)}`;
     break;
   case '/':
     return document.getElementById("screen").innerHTML = `${Number(valueNumber) / Number(displayNumber)}`;
     break;
   }
 
 }

 const operandChoice = function (key) {
  currentOperator = key;
  valueNumber = displayNumber;
  firstNumber = "0";
  displayNumber = "";
  return document.getElementById("screen").innerHTML = `${currentOperator}`;

}


const operandChoice2 = function (key) {
  if (currentOperator == 0) {
   currentOperator = key;
   valueNumber = displayNumber;
   displayNumber = "";
   return document.getElementById("screen").innerHTML = `${currentOperator}`;
  } else {
      valueNumber = operate2(currentOperator);
      currentOperator = key;
      displayNumber = "";
   }
}




*/

//Calculator


let currentOperator = "";
let displayNumber = "";
let valueNumber = "";


const screenPop = function(key) {
  displayNumber += key;
  document.getElementById("screen").innerHTML = `${displayNumber}`;
}

const decimal = function() {
  displayNumber += `.`;
  document.getElementById("screen").innerHTML = `${displayNumber}`;
}


const operandChoice2 = function (key) {
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
      valueNumber = operate2(currentOperator);
      currentOperator = key;
   }
}

const operate2 = function (currentOperator) {

  switch (currentOperator) {
   case '+':
    valueNumber = Number(valueNumber) + Number(displayNumber);
    document.getElementById("screen").innerHTML = `${valueNumber}`;
    opReset();
    return valueNumber;
    break;
   case '-':
    valueNumber = Number(valueNumber) - Number(displayNumber);
    document.getElementById("screen").innerHTML = `${valueNumber}`;
    opReset();
    return valueNumber;
    break;
   case 'x':
    valueNumber = Number(valueNumber) * Number(displayNumber);
    document.getElementById("screen").innerHTML = `${valueNumber}`;
    opReset();
    return valueNumber;
    break;
   case '/':
    valueNumber = Number(valueNumber) / Number(displayNumber);
    document.getElementById("screen").innerHTML = `${valueNumber}`;
    opReset();
    return valueNumber;
    break;
   case 'sqrt':
     valueNumber = Math.sqrt(Number(valueNumber));
     document.getElementById("screen").innerHTML = `${valueNumber}`;
     opReset();
     return valueNumber;
     break;
   }
  
 }

const opReset = function () {
  currentOperator = "";
  displayNumber = "";
}
 
const startOver = function () {
  currentOperator = "";
  displayNumber = "";
  valueNumber = "";
  return document.getElementById("screen").innerHTML = `${displayNumber}`;
}

const back = function () {
  displayNumber = displayNumber.slice(0,displayNumber.length-1);
  document.getElementById("screen").innerHTML = `${displayNumber}`;
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
