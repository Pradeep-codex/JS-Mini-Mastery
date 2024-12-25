const bodyEle = document.querySelector("body");
bodyEle.addEventListener("mousemove",(e) => {
    const xPos = e.clientX;
    const yPos = e.clientY;
    const span1 = document.createElement("span");
    span1.style.left= xPos + "px";
    span1.style.top= yPos + "px";
    const size = Math.random()*101;
    span1.style.width = size + "px";
    span1.style.height = size + "px";
    bodyEle.appendChild(span1);
    setTimeout(() => {
        span1.remove();
    }, 1000);
    
})