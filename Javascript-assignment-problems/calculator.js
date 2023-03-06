// Function to add two numbers
const prompt = require('prompt-sync')();

function add(num1, num2) {
    return num1 + num2;
  }
  
  // Function to subtract two numbers
  function subtract(num1, num2) {
    return num1 - num2;
  }
  
  // Function to multiply two numbers
  function multiply(num1, num2) {
    return num1 * num2;
  }
  
  // Function to divide two numbers
  function divide(num1, num2) {
    if (num2 === 0) {
      return "Error: division by zero";
    }
    return num1 / num2;
  }
  
  // Prompt the user for two numbers and an operation
  const num1 = Number(prompt("Enter the first number:"));
  const num2 = Number(prompt("Enter the second number:"));
  const operation = prompt("Enter an operation (+, -, *, /):");
  
  let result;
  
  // Perform the selected operation using a switch statement
  switch (operation) {
    case "+":
      result = add(num1, num2);
      break;
    case "-":
      result = subtract(num1, num2);
      break;
    case "*":
      result = multiply(num1, num2);
      break;
    case "/":
      result = divide(num1, num2);
      break;
    default:
      result = "Error: invalid operation";
  }
  
  // Display the result
  console.log(`Result: ${result}`);
  