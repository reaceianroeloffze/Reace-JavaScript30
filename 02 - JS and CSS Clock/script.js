// Make the hands of a clock move

// Retrieve the hour, minute, and second hands from the document
const secondsHand = document.querySelector('.second-hand');
const minutesHand = document.querySelector('.min-hand');
const hoursHand = document.querySelector('.hour-hand');

// Create a function to set the current date and
// move the clock hands according to current date and time
const setDate = function() {
    // get the current date and time
    const presentTime = new Date();

    // Move the seconds hand
    const seconds = presentTime.getSeconds();
    const secDegrees = ((seconds / 60) * 360) + 90;
    // Prevent backward transition of seconds hand when it reaches 0 degrees
    if (seconds === 0) {
        secondsHand.style.transition = 'none';
    } else {
        secondsHand.style.transition = 'all 0.05s cubic-bezier(0.1, 2.7, 0.58, 1)';
    }
        secondsHand.style.transform = `rotate(${secDegrees}deg)`;

    // Move the minute hand
    const minutes = presentTime.getMinutes();
    const minDegrees = ((minutes / 60) * 360) + 90;
    minutesHand.style.transform = `rotate(${minDegrees}deg)`;

    // Move the hour hand
    const hours = presentTime.getHours();
    const hoursDegrees = ((hours / 12) * 360) + 90;
    hoursHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(setDate, 1000);