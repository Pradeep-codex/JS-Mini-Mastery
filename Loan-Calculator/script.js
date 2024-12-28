function calLoan() {
    let amtVal = parseFloat(document.getElementById("amount").value); 
    let intrestVal = parseFloat(document.getElementById("intrest").value); 
    let monthsVal = parseInt(document.getElementById("months").value); 

    let monthlyRate = intrestVal / (12 * 100);
    let emi = (amtVal * monthlyRate * Math.pow(1 + monthlyRate, monthsVal)) / 
              (Math.pow(1 + monthlyRate, monthsVal) - 1);

    document.querySelector("span").innerText = emi.toFixed(2);
}
