const h = document.getElementById("height") 
const w = document.getElementById("weight") 
const btn =  document.querySelector("#btn")
const res = document.getElementById("result")
const cond = document.getElementById("cond")

btn.addEventListener("click",()=>{
    height = parseFloat(h.value/100)
    weight = parseFloat(w.value)
    const bmi = weight/(height*height)
    res.innerText=bmi
    if(bmi<18.5){
        cond.innerText="Under Weight"
    }else if(bmi>=18.5 & bmi<=24.9){
        cond.innerText = "Normal Weight"
    }else if(bmi>=25.5 & bmi<=29.9){
        cond.innerText = "Over Weight"
    }else if(bmi>=30){
        cond.innerText = "Obesity"
    }
})