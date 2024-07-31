function calculateDuration() {
    const startTime = document.getElementById('startTime').value;
    const endTime = document.getElementById('endTime').value;
    const durationField = document.getElementById('duration');

    if (startTime && endTime) {
      const start = new Date('1970-01-01T' + startTime + 'Z');
      const end = new Date('1970-01-01T' + endTime + 'Z');
      let duration = (end - start) / 1000 / 60; // duration in minutes

      if (duration < 0) {
        duration += 24 * 60; // adjust for times that cross midnight
      }

      const hours = Math.floor(duration / 60);
      const minutes = duration % 60;

      durationField.value = `${hours} hour(s) ${minutes} minute(s)`;
    } else {
      durationField.value = '';
    }
  }

      document.getElementById('scheduleForm').addEventListener('submit', function (event) {
      event.preventDefault(); 
      window.location.href = '../html/Booking.html'; 
      });
  
