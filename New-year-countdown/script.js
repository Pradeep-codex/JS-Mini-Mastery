const dayEle = document.querySelector(".days");
const hourEle = document.querySelector(".hours");
const minEle = document.querySelector(".minutes");
const secEle = document.querySelector(".seconds");

const newYearTime = new Date("jan 1,2025 00:00:00").getTime();


const second = 1000;
const minutes = second * 60;
const hours = minutes * 60 ;
const days = hours * 24;




function countDown(){
    var now = new Date().getTime();
    var gap = newYearTime - now;
    const d = Math.floor(gap / days);
const h = Math.floor((gap % days) / hours);
const m = Math.floor((gap % hours) / minutes);
const s = Math.floor((gap % minutes) / second);


dayEle.innerText = d;
hourEle.innerText = h;
minEle.innerText = m;
secEle.innerText = s;
}
countDown()
setInterval(countDown,1000)
