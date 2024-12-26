const textAreaEle = document.querySelector(".text");


textAreaEle.addEventListener("keyup",() => {
    updateTotal()
    
})

function updateTotal(){
    const tot = document.querySelector(".tot-count");
    const rem =  document.querySelector(".rem-count");
    tot.innerText = textAreaEle.value.length;
    rem.innerText = `${eval(50-textAreaEle.value.length)}`;



}