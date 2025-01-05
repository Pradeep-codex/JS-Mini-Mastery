const btn = document.querySelector(".btn")
const dice = document.querySelector(".dice")
const rollHistory = document.querySelector("#roll-history")

let history = []

btn.addEventListener("click",()=>{
    dice.classList.add("animate")
    setTimeout(()=>{
        dice.classList.remove("animate")
    },1000)
    randomNum = num()
    diceFace = diceValue(randomNum)
    dice.innerHTML = `<div>${diceFace}</div>`
    history.push(randomNum)
    updateHistory()
})

function updateHistory(){
    rollHistory.innerHTML = ""
    for(i=0 ; i<history.length;i++){
        listItem = document.createElement("li")
        listItem.innerHTML=`Roll ${i+1}: <span>${diceValue(history[i])};</span>`
        rollHistory.appendChild(listItem)
    }
}

function num(){
     return Math.floor(Math.random()*6+1)

}



function diceValue(num){
    switch (num) {
        case 1:
            return `&#9856`;
        case 2:
            return '&#9857';
        case 3:
            return '&#9858' ;
        case 4:
            return '&#9859';
        case 5:
            return '&#9860';
        case 6:
            return '&#9861';
         }
}


