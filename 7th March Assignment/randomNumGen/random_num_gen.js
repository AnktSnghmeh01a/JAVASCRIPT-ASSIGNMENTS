let delay = 3000; // delay in milliseconds
let remaining = delay / 1000; // calculate remaining time in seconds

let countdown = setInterval(function() {
  remaining--;
  console.log('Generating random number in ' + remaining + ' seconds...');
  if (remaining <= 0) {
    clearInterval(countdown); // stop the countdown
    let randomNumber = Math.floor(Math.random() * 100); // generate a random number between 0 and 99
    console.log('Random number generated: ' + randomNumber);
  }
}, 1000); // update every second


