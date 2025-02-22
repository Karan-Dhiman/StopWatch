// Get the display element from the DOM
const display = document.getElementById('display');

// Variables to control the timer state
let timer = null;         // To store the interval ID
let startTime = 0;        // To store the start time of the timer
let elapsedTime = 0;      // To store the elapsed time when stopped
let isRunning = false;    // To track if the timer is running

// Function to start the timer
function start() {
    if (!isRunning) { // Only start if the timer is not already running
        // Set startTime to current time minus the already elapsed time
        startTime = Date.now() - elapsedTime;
        // Start an interval to call the update function every 10 milliseconds
        timer = setInterval(update, 10);
        isRunning = true; // Set the running flag to true
    }
}

// Function to stop the timer
function stop() {
    if (isRunning) { // Only stop if the timer is running
        clearInterval(timer); // Clear the interval to stop updating the time
        // Calculate the total elapsed time by subtracting startTime from the current time
        elapsedTime = Date.now() - startTime;
        isRunning = false; // Set the running flag to false
    }
}

// Function to reset the timer
function reset() {
    clearInterval(timer); // Clear the interval to stop updating the time
    startTime = 0; // Reset start time
    elapsedTime = 0; // Reset elapsed time
    isRunning = false; // Set the running flag to false

    // Reset the display to show "00:00:00:00"
    display.textContent = "00:00:00:00";
}

// Function to update the timer display
function update() {
    const currentTime = Date.now(); // Get the current time
    // Calculate the total elapsed time
    elapsedTime = currentTime - startTime;

    // Convert elapsed time to hours, minutes, seconds, and hundredths of a second
    let hrs = Math.floor(elapsedTime / (1000 * 60 * 60)); // Hours
    let mins = Math.floor(elapsedTime / (1000 * 60) % 60); // Minutes
    let sec = Math.floor(elapsedTime / 1000 % 60); // Seconds
    let mSec = Math.floor(elapsedTime % 1000 / 10); // Hundredths of a second

    // Pad each time component with leading zeros
    hrs = String(hrs).padStart(2, "0");
    mins = String(mins).padStart(2, "0");
    sec = String(sec).padStart(2, "0");
    mSec = String(mSec).padStart(2, "0");

    // Update the display element's text content with the formatted time
    display.textContent = `${hrs}:${mins}:${sec}:${mSec}`;
}
