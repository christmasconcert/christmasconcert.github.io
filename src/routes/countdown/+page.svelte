<script lang="ts">
    let ccdate = new Date(2024, 11, 12, 19, 30); // Month is zero-based
    let now = new Date();
    let timeRemaining = '';

    // Function to calculate and format the time difference
    function calculateCountdown() {
        now = new Date();
        const diff = ccdate.getTime() - now.getTime(); // Difference in milliseconds

        if (diff <= 0) {
            timeRemaining = "Countdown complete!";
            clearInterval(timer);
            return;
        }

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        timeRemaining = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }

    // Call the function every second
    const timer = setInterval(() => {
        calculateCountdown();
    }, 1000);
</script>

<div class="full-h w-[100vw] flex flex-col items-center justify-center">
    <h1>{timeRemaining}</h1>
</div>
