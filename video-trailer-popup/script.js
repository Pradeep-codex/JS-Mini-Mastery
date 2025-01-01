const btn = document.querySelector(".btn");
const close = document.querySelector(".close")
const con = document.querySelector(".trailer-con")
const video = document.querySelector("video");

btn.addEventListener("click",() => {
    con.classList.remove("active");
})
close.addEventListener("click",() => {
    con.classList.add("active");
    video.pause();
    video.currentTime=0;
})