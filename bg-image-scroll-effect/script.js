const bgImg = document.querySelector(".img-con") 

window.addEventListener("scroll",()=>{
    updateBgImg()
})

function updateBgImg(){
    bgImg.style.opacity = 1-window.scrollY/800 
    bgImg.style.backgroundSize = 160 - scrollY /12+"%"
}