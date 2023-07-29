function startCountdown() {
  var minutesInput = document.getElementById('minutes');
  var countdownDisplay = document.getElementById('countdownDisplay');
  var minutes = parseInt(minutesInput.value);

  if (isNaN(minutes) || minutes <= 0) {
    alert('Ingresa un número de minutos válido.');
    return;
  }

  var millisecondsRemaining = minutes * 60 * 1000;
  countdownDisplay.textContent = formatTime(millisecondsRemaining);

  var countdownInterval = setInterval(function() {
    millisecondsRemaining -= 1000; // Actualizamos los segundos (1000 ms)
    if (millisecondsRemaining <= 0) {
      clearInterval(countdownInterval);
      countdownDisplay.textContent = '¡Tiempo finalizado!';
    } else {
      countdownDisplay.textContent = formatTime(millisecondsRemaining);
    }
  }, 1000); // Intervalo de 1000 ms (1 segundo)
}

function formatTime(milliseconds) {
  var minutes = Math.floor(milliseconds / 60000);
  var seconds = Math.floor((milliseconds % 60000) / 1000);
  return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}