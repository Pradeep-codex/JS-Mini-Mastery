const imgCon = document.querySelector(".img-con");
const prevEle = document.getElementById("prev")
const nextEle = document.getElementById("next")
let x = 0;
prevEle.addEventListener("click",()=>{
    x = x + 45;
    updateGallery()
})

function updateGallery(){
    imgCon.style.transform = `perspective(1000px) rotateY(${x}deg)`;
     
}

nextEle.addEventListener("click",()=>{
    x = x - 45;
    updateGallerys()
})

function updateGallerys(){
    imgCon.style.transform = `perspective(1000px) rotateY(${x}deg)` 
}