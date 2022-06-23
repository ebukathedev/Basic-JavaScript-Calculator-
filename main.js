// How to ise message
alert("This is a simple calculator made with JavaScript \n How to use:\n 1. Enter a number \n 2. Select a math operator \n 3. Enter a second number \n 4. ...then boom you have you Result! \n Press 'OK' to continue.")

// Declared variables
var firstNumber = prompt("Enter a number")

var mathOpertor = prompt("Select an operator \n 1. Add \n 2. Subtract \n 3. Divide \n 4. Multiply")

var secondNumber = prompt("Enter a second number")

// Show result of the selected operation
if(mathOpertor == 1) {
  alert("Result: " + Number(firstNumber) + Number(secondNumber))
}
else if(mathOpertor == 2) {
  alert("Result: " + Number(firstNumber) - Number(secondNumber))
}
else if(mathOpertor == 3) {
  alert("Result: " + Number(firstNumber) / Number(secondNumber))
} else {
  alert("Result: " + Number(firstNumber) * Number(secondNumber))
}