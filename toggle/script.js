const body = document.querySelector("body");
const input = document.querySelector(".input");

function update(){
    if(input.checked){
        body.style.backgroundColor = "Black";
    }
    else{
        body.style.backgroundColor = "white";

    }
}

input.addEventListener("input",() => {
    update();
})