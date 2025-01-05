const x = document.querySelector("#x")
const y = document.querySelector("#y")

window.addEventListener("mousemove",(e)=>{
    x.innerText = e.clientX;
    y.innerText = e.clientY;
    
})