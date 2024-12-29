const dob = document.querySelector(".dob");

const result = document.querySelector(".result");
const btn = document.querySelector(".btn");

btn.addEventListener("click",() => {
    let age = calculateAge()
    if(age != 0){
        result.innerText = `Your Age is ${age} Years Old`;
    }
})

function calculateAge(){
    const currentDate = new Date();
    const birthDate = new Date(dob.value);
   
    if(dob.value === ""){
        alert("Please Enter the Date of birth")
        return 0;
    }
    else{
        age = currentDate.getFullYear() - birthDate.getFullYear();
        const monthDifference = currentDate.getMonth() - birthDate.getMonth();
        const dayDifference = currentDate.getDate() - birthDate.getDate();

         
        if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
            age--;  
        }

        return age;
    }
}