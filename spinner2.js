// there was a delay of 200ms between each in the orginal so capture that delay in a variable
let frameDelay = 200;
// we can use an array to hold all the animation frames that we'll need
const frames = ['|', '/', '-', '\\'];
// to get the timeout that we'll need for how long the animation runs for
const timeout = frameDelay * frames.length;

// we can use a function to run each step of our code
const frameLoop = setInterval(() => {
  // loop over the frames and print them to the console use \r to keep them in the same spot
  for (let i = 0; i < frames.length; i++) {
    setTimeout(() => {
      process.stdout.write(`\r ${frames[i]}   `); // the frame is written in place thanks to \r
    }, frameDelay * i); // the frame delay is multiplied by the index to get the next delay value
  }
}, timeout);
// we need the below to both create a new line so we don't get the same bug as typewriter and also to
// run clearInterval so that we don't have an infinite loop! thanks peers haha
setTimeout(() => {
  clearInterval(frameLoop);
  process.stdout.write('\n');
}, 4000); 