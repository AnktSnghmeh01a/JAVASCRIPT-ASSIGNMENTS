// this is a program which demonstate the password validation

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter your password: ', (password) => {
  rl.question('Confirm your password: ', (confirmPassword) => {
    console.log(`Password: ${password}`);
    console.log(`Confirm password: ${confirmPassword}`);
    rl.close();
  });
});
