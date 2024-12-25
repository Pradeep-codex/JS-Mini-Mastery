const image_con =  document.querySelector(".image-con");
const btn = document.querySelector(".btn");

btn.addEventListener("click",() =>{ 
    generate_image()
});

function generate_image(){
   for (let i = 0; i < 5; i++) {
    const newImage = document.createElement("img");
    newImage.src=`https://picsum.photos/300?random=${Math.floor(Math.random()*2000)}`;
    image_con.appendChild(newImage);
    
   }
}