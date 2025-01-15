// Countdown Timer
const countdownElement = document.getElementById("countdown");

// Set the target date for the event
const targetDate = new Date("2025-01-28T00:00:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = targetDate - now;

    if (timeLeft <= 0) {
        countdownElement.innerHTML = "The event has started!";
        clearInterval(interval);
        return;
    }

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    countdownElement.innerHTML = `
        ${days}d ${hours}h ${minutes}m ${seconds}s
    `;
}

// Update countdown every second
const interval = setInterval(updateCountdown, 1000);
