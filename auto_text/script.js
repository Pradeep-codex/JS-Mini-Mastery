const con = document.querySelector(".container");

careers = ["youtuber", "Web developer", "Teacher", "Trader"];
careersIndex = 0;
charIndex = 0;

autoText();

function autoText(){
con.innerHTML= `<h1>Hey i am a ${careers[careersIndex].slice(0,charIndex)}</h1>`;
charIndex++;
if(charIndex === careers[careersIndex].length+1){
    careersIndex++;
    charIndex = 0;
}
if(careersIndex === careers.length){
    careersIndex = 0;
}
setTimeout(autoText,300);
}