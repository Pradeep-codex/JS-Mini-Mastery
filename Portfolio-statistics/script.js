const boxNum = document.querySelectorAll(".expNum");

boxNum.forEach((currEle) => {
    currEle.innerText = "0";

    incrementCounter()
    function incrementCounter(){
        let currentNum = +currEle.innerText
        const dataCeil = currEle.getAttribute("data-ceil");
        const increment = dataCeil / 15 ;
        currentNum = Math.ceil(currentNum + increment)
        if(currentNum < dataCeil){
            currEle.innerText = currentNum;
            setTimeout(incrementCounter,50)
        }else{
            currEle.innerText = dataCeil
        }
         
    }
})