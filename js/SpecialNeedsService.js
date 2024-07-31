function calculateDuration() {
    const startTime = document.getElementById('startTime').value;
    const endTime = document.getElementById('endTime').value;

    if (startTime && endTime) {
        const start = new Date(`2000-01-01T${startTime}`);
        const end = new Date(`2000-01-01T${endTime}`);

        let diff = end - start;
        if (diff < 0) diff += 24 * 60 * 60 * 1000; // Add 24 hours if end time is on the next day

        const hours = Math.floor(diff / (60 * 60 * 1000));
        const minutes = Math.floor((diff % (60 * 60 * 1000)) / (60 * 1000));

        document.getElementById('duration').value = `${hours} hours ${minutes} minutes`;
    }
}

document.getElementById('other').addEventListener('change', function() {
    const otherContainer = document.getElementById('otherSpecialNeedsContainer');
    otherContainer.style.display = this.checked ? 'block' : 'none';
});

      document.getElementById('scheduleForm').addEventListener('submit', function (event) {
      event.preventDefault(); 
      window.location.href = '../html/Booking.html'; 
      });
      
