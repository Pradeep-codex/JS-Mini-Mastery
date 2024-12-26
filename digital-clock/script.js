const hourEle = document.getElementById("hour")
const minEle = document.getElementById("minute")
const secEle = document.getElementById("second")
const ampmEle = document.getElementById("ampm")

function updateClock(){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM";

    if(h > 12){
        h = h - 12;
        ampmEle.innerText = "PM";
    }
    h = h<10?"0"+h:h;
    m = m<10?"0"+m:m;
    s = s<10?"0"+s:s;
    hourEle.innerText = h;
    minEle.innerText = m;
    secEle.innerText = s;

}
setInterval(()=>{
    updateClock()
},1000);