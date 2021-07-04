let score = 0;
const scoreDisplay = document.getElementById('score');

const holes = Array.from(document.getElementsByClassName('hole'));

const randomMoleIntervalId = setInterval(function() {
  const randomHoleIndex = Math.floor(Math.random() * holes.length);
  holes[randomHoleIndex].classList.toggle('mole');
}, 300);

function handleClick(clickEvent) {
  if (clickEvent.target.matches('.mole')) {
    clickEvent.target.classList.remove('mole');
    score++;
    scoreDisplay.innerText = 'Moles whacked: ' + score;
  }
}

const gameArea = document.getElementById('whack-a-mole');
gameArea.addEventListener('click', handleClick);

// CODE BELOW ADDS TIMER FUNCTIONALITY
const timerDisplay = document.getElementById('timer');
let secondsRemaining = 30;
timerDisplay.innerText = 'Time remaining: ' + formatTime(secondsRemaining);
const timerIntervalId = setInterval(function() {
  secondsRemaining -= 1;
  timerDisplay.innerText = 'Time remaining: ' + formatTime(secondsRemaining);
  if (secondsRemaining <= 0) {
    clearInterval(timerIntervalId);
    clearInterval(randomMoleIntervalId);
    gameArea.removeEventListener('click', handleClick);
    holes.forEach(hole => {
      hole.classList.remove('mole');
    });
  }
}, 1000);

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return minutes + ':' + (remainingSeconds < 10 ? '0' : '') + remainingSeconds;
}
