const colorBox = document.querySelector(".container");



for (let i = 0; i < 16; i++) {
    const newColor = document.createElement("div");
    newColor.classList.add("color-container");
    colorBox.appendChild(newColor);
}

const allBox = document.querySelectorAll(".color-container");
allBox.forEach((box) => {
    const newColor = randomColor();
    addColor(box,newColor); 
})

function addColor(box,color){
    box.style.backgroundColor = '#' + color;
    box.innerText = "#"+color;
    
}



function randomColor(){
    const chars = "0123456789abcdef";
    const colorLen = 6;
    let color = "";
    for (let i = 0; i < colorLen; i++) {
        const randomNum = Math.floor(Math.random()*chars.length);
        color += chars[randomNum];
    }
    return color;
}