const startingMinutes = 10;
let time = startingMinutes * 60;

const countdownElement = document.getElementById("countdown");

setInterval(updateCountDown, 1000); /*bir bir saniye aralıkta updateCountDown fonksiyonunu çağırdık. */ 

function updateCountDown() {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;

  seconds = seconds < 10 ? "0" + seconds : seconds;
  countdownElement.innerHTML = `${minutes}:${seconds}`; /*string literal*/
  time--;
}
