
function startCountdown() {
  let minutesInput = document.getElementById('minutes');
  let countdownDisplay = document.getElementById('countdownDisplay');
  let minutes = parseInt(minutesInput.value);

  if (isNaN(minutes) || minutes <= 0) {
    alert('Ingresa un número de minutos válido.');
    return;
  }

  let millisecondsRemaining = minutes * 60 * 1000;
  countdownDisplay.textContent = formatTime(millisecondsRemaining);

  let countdownInterval = setInterval(function() {
    millisecondsRemaining -= 1000; 
    if (millisecondsRemaining <= 0) {
      clearInterval(countdownInterval);
      countdownDisplay.textContent = '00:00';
    } else {
      countdownDisplay.textContent = formatTime(millisecondsRemaining);
    }
  }, 1000); 
}

function formatTime(milliseconds) {
  let minutes = Math.floor(milliseconds / 60000);
  let seconds = Math.floor((milliseconds % 60000) / 1000);
  return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}