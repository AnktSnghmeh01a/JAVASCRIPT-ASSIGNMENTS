// Regular expression pattern to match LinkedIn profile URLs
const urlPattern = /^https:\/\/www\.linkedin\.com\/in\/[\w-]{5,30}[a-zA-Z\d]$/;

// User input
const userInput = prompt("Enter a LinkedIn profile URL: ");

// Matching the user input against the regular expression pattern
if (urlPattern.test(userInput)) {
  console.log("Valid LinkedIn profile URL!");
} else {
  console.log("Invalid LinkedIn profile URL!");
}
