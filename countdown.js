    <!-- JavaScript for Countdown Timer -->
    <script>
        // Set the target date (December 20, 2025)
        const targetDate = new Date("December 20, 2025 08:00:00").getTime();

        // Update the countdown every second
        const countdownInterval = setInterval(() => {
            // Get the current date and time
            const now = new Date().getTime();

            // Calculate the remaining time
            const timeRemaining = targetDate - now;

            // Calculate days, hours, minutes, and seconds
            const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

            // Update the countdown display
            document.getElementById("days").textContent = String(days).padStart(2, "0");
            document.getElementById("hours").textContent = String(hours).padStart(2, "0");
            document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
            document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");

            // Stop the countdown when the target date is reached
            if (timeRemaining < 0) {
                clearInterval(countdownInterval);
                document.getElementById("countdown").innerHTML = "<h2>Conference has started!</h2>";
            }
        }, 1000);
    </script>