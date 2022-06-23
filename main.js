// How to ise message
alert("This is a simple calculator made with JavaScript \n How to use:\n 1. Enter a number \n 2. Select a math operator \n 3. Enter a second number \n 4. ...then boom you have you Result! \n Press 'OK' to continue.")

// Storing user inputs in variables
var firstNumber = prompt("Enter a number")

var mathOperator = prompt("Select an operator \n 1. Add \n 2. Subtract \n 3. Divide \n 4. Multiply")

var secondNumber = prompt("Enter a second number")

// Convert the inputs to numbers
var num1 = Number(firstNumber)
var num2 = Number(secondNumber)
var operator = Number(mathOperator)

// Calculate the result of the selected operation
if(operator === 1) {
  var result = num1 + num2
}
else if(operator === 2) {
   var result = num1 - num2
}
else if(operator === 3) {
   var result = num1 / num2
}
else if (operator === 4){
   var result = num1 * num2
}
else {
  var result = "The operator selected does not exist, please refresh and try again."
}

// Display result
alert("Result: " + result)