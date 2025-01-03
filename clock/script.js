const hourEle = document.querySelector(".hour")
const minuteEle = document.querySelector(".minute")
const secondEle = document.querySelector(".second")

function updateClock(){
    const sec = new Date().getSeconds();
    const hour = new Date().getHours();
    const min = new Date().getMinutes();
   
    secondEle.style.transform = `rotate(${sec*6}deg)` ;
    hourEle.style.transform = `rotate(${(hour-12)*30}deg)`;
    minuteEle.style.transform = `rotate(${(min*6)}deg)`;
}
updateClock();
setInterval(updateClock,1000);