const startEle = document.getElementById("start")
const stopEle = document.getElementById("stop")
const resetEle = document.getElementById("reset")
const minEle = document.querySelector(".minutes")
const secEle = document.querySelector(".seconds")

let leftTime = 1500;

function updateTimer(){
    let minutes = Math.floor(leftTime / 60);
    let seconds = leftTime % 60;
    minEle.innerText = String(minutes).padStart(2,"0");
    secEle.innerText = String(seconds).padStart(2,"0");
}
let intervalId;
function start(){
    if(!intervalId){
        intervalId = setInterval(() => {
        leftTime--;
       updateTimer() ;
       if(leftTime === 0){
        clearInterval(intervalId);
        alert("Time's Up")
        leftTime = 1500;
        updateTimer()
       }
    },1000);
}
}
function stop(){
    clearInterval(intervalId)
    intervalId= null;
    
}
function reset(){
    clearInterval(intervalId);
    leftTime =1500;
    updateTimer()
}

startEle.addEventListener("click",start);
stopEle.addEventListener("click",stop);
resetEle.addEventListener("click",reset);