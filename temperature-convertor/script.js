let cel = document.getElementById("celsius")
let fahreneit = document.getElementById("fahreneit")
let kelvin = document.getElementById("kelvin")



function updateTemp(event){
const currVal = +event.target.value;
switch (event.target.name) {
    case "celsius":
        kelvin.value= (currVal+273.32).toFixed(2)
        fahreneit.value = (currVal*1.8+32).toFixed(2)
        break;
    case "fahreneit":
        cel.value = ((currVal -32 )/1.8).toFixed(2);
        kelvin.value = ((currVal - 32)/1.8 + 273.32).toFixed(2)
        break;
    case "kelvin":
        cel.value = (currVal-273.32).toFixed(2)
        fahreneit.value = ((currVal - 273.32)+1.8+32).toFixed(2)
        break;

    
}   

}