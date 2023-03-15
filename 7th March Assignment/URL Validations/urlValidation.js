// Regular expression pattern to match URLs
const urlPattern = /^(https?:\/\/)[\w\-+&@#/%?=~|!:,.;]+\.[a-zA-Z]+$/;

// User input
const userInput = prompt("Enter a URL: ");

// Matching the user input against the regular expression pattern
if (urlPattern.test(userInput)) {
  console.log("Valid URL!");
} else {
  console.log("Invalid URL!");
}
