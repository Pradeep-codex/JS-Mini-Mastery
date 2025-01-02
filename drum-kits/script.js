const containerEle = document.querySelector(".container")
const kits = ["crash","kick","snare","tom"];

kits.forEach((kit) => {
    const btnEle = document.createElement("button");
    btnEle.classList.add("btn");
    btnEle.innerText = kit;
    btnEle.style.backgroundImage = "url(/drum-kits/images/" +kit+ ".png)";
    containerEle.appendChild(btnEle);
    const audioEle = document.createElement("audio");
    audioEle.src="/drum-kits/audio/"+ kit+".mp3";
    containerEle.appendChild(audioEle);
    btnEle.addEventListener("click",() => {
        audioEle.play();
    })
    window.addEventListener("keydown",(e) => {
        if(e.key === kit.slice(0,1)){
            audioEle.play();
            btnEle.style.transform = "scale(.9)";
            setTimeout(()=>{
                btnEle.style.transform = "scale(1)"
            },100)
        }
    })
})

