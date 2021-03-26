// const refs = {
//   timer: document.getElementById('timer-1'),
// date: document.querySelector('[data-value="days"]'),
// hour: document.querySelector('[data-value="hours"]'),
// minutes: document.querySelector('[data-value="mins"]'),
// seconds: document.querySelector('[data-value="secs"]'),
// }

class CountdownTimer {
  constructor({selector, targetDate}){
    this.selector = selector;
    this.targetDate = targetDate;
    const intervalId = null;
    const timer = document.getElementById(selector);
    this.date = document.querySelector('[data-value="days"]');
    this.hour = document.querySelector('[data-value="hours"]');
    this.minutes = document.querySelector('[data-value="mins"]');
    this.seconds = document.querySelector('[data-value="secs"]');
}
  start() {
    this.intervalId = setInterval(() => {
      const currentTime = Date.now();
    const time = this.targetDate - currentTime;
    this.getTimeComponents(time);
    this.finishCountdownTimer(time);
  }, 1000);
}
  
getTimeComponents (deltaTime){
  const days = this.pad(Math.floor(deltaTime / (1000 * 60 * 60 * 24)));
  const hours = this.pad(Math.floor((deltaTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
  const mins = this.pad(Math.floor((deltaTime % (1000 * 60 * 60)) / (1000 * 60)));
  const secs = this.pad(Math.floor((deltaTime % (1000 * 60)) / 1000));
  this.date.textContent = `${days}`
  this.hour.textContent = `${hours}`
  this.minutes.textContent = `${mins}`
  this.seconds.textContent = `${secs}`
}
pad(value){
  return String(value).padStart(2, '0')
  }
finishCountdownTimer(deltaTime){
  if (deltaTime < 0){
    clearInterval(this.intervalId)
  }
}
}
const newCountdownTimer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Apr 12, 2021'),
});
newCountdownTimer.start()
