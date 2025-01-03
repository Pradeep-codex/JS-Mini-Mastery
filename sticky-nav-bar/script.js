const navBar = document.querySelector(".nav-bar")
const text =  document.querySelector(".text")

window.addEventListener("scroll",()=>{
    if(window.scrollY > text.offsetTop - navBar.offsetHeight-50 ){
        navBar.classList.add("active")
    }else{
        navBar.classList.remove("active")
    }
   
})