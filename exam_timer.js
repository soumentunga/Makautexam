function timmer() {
    const currentDate = new Date();
    const examDate = new Date("2025-01-03T00:00:00");

    const timeDiff = examDate - currentDate;

    const daysElement = document.getElementById('remain_days');
    const hoursElement = document.getElementById('remain_hours');
    const minutesElement = document.getElementById('remain_minute');
    const secondsElement = document.getElementById('remain_second');

    if (timeDiff < 0) {
        // If the exam date has passed
        daysElement.innerHTML = "Your exam date has passed!";
        hoursElement.innerHTML = "";
        minutesElement.innerHTML = "";
        secondsElement.innerHTML = "";
    } else {
        // Time remaining
        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((timeDiff / (1000 * 60)) % 60);
        const seconds = Math.floor((timeDiff / 1000) % 60);

        daysElement.innerHTML = `${days} Days`;
        hoursElement.innerHTML = `${hours} Hours`;
        minutesElement.innerHTML = `${minutes} Minutes`;
        secondsElement.innerHTML = `${seconds} Seconds`;
    }
}

// Updating  the timer every second
setInterval(timmer, 1000);
