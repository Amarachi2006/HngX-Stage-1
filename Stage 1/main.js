const currentUTCTimeElement = document.querySelector('[data-testid="currentUTCTime"]');

// Function to update the current UTC time every second
function updateUTCTime() {
    const currentTime = new Date().toUTCString();
    currentUTCTimeElement.textContent = `Current UTC Time: ${currentTime}`;
}

// Call the function to update the time immediately and then every second
updateUTCTime();
setInterval(updateUTCTime, 1000);
