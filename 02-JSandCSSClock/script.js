let secondHand, minuteHand, hourHand;
document.addEventListener("DOMContentLoaded", () => {
    secondHand = document.querySelector('.second-hand');
    minuteHand = document.querySelector('.minute-hand');
    hourHand = document.querySelector('.hour-hand');
});

function setDate() {
    // Get the date
    const now = new Date();

    // Get seconds of the current minute
    const seconds = now.getSeconds();
    // Convert seconds to degrees by which we can move the second hand in the clock
    const secondsToDegrees = ((seconds / 60) * 360) + 90;
    // Move the second hand by above value of degrees
    secondHand.style.transform = `rotate(${secondsToDegrees}deg)`;
    
    // Get the minute of the current hour
    const minutes = now.getMinutes();
    // Convert minute to degrees by which we can move the minute hand in the clock
    const minutesToDegrees = (minutes / 60) * 360 + ((seconds / 60) * 6) + 90;
    // Move the minute hand by above value of degrees
    minuteHand.style.transform = `rotate(${minutesToDegrees}deg)`;

    // Get the current hour
    const hours = now.getHours();
    // Convert hour to degrees by which we can move the hour hand in the clock
    const hoursToDegrees = (hours / 12) * 360 + (minutes / 60) * 30 + 90;
    // Move the hour hand by above value of degrees
    hourHand.style.transform = `rotate(${hoursToDegrees}deg)`;
}
setInterval(setDate, 1000);