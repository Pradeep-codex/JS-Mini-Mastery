const btn = document.querySelector(".btn")
const totalAmt = document.querySelector(".final")
const amt = document.getElementById("amount")
const per = document.getElementById("percentage")


btn.addEventListener("click",()=>{
    bill = parseFloat(amt.value)
    percentage = parseFloat(per.value)
    const tip = bill * (percentage/100)
    const finalAmt = bill + tip;
    totalAmt.innerText = finalAmt;
})