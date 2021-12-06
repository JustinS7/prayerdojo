const startingMinutes = 20;
let time = startingMinutes * 60;

const countdownEl = document.getElementById('countdown')

setInterval(updateCoutdown, 1000);

/* 5 min countdown */
function updateCoutdown() {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60

  seconds = seconds < 10 ? '0' + seconds : seconds;

  countdownEl.innerHTML = `${minutes}: ${seconds}`;
  time--;
  time = time < 0 ? 0 : time;
}
