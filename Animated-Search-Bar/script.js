const magnifier = document.querySelector(".magnifier");

magnifier.addEventListener("click",() => {
    const searchCon = document.querySelector(".search-con");
    searchCon.classList.toggle("active") 
})