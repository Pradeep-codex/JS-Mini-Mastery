const per = document.querySelector(".number")
const loadBar = document.querySelector(".load")
count = 0;
increment()
function increment(){
    
    if(count>=100){
        clearInterval(id)
    }else{
        count++;
        per.innerText = `${count}%`
        loadBar.style.background = `linear-gradient(to right, #fa9e2e ${count}%, transparent ${count}%`;

   
}
}
id = setInterval(increment,50)