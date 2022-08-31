const clock = document.querySelector("h2#clock");

function getClock() {
  const data = new Date();
  const hours = String(data.getHours()).padStart(2, "0");
  const minutes = String(data.getMinutes()).padStart(2, "0");
  const seconds = String(data.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}
getClock();
setInterval(getClock, 1000);
