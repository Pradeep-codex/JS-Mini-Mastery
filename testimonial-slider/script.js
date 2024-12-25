const testimonals = [
    {
        name:"jacob",
        img:"https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        feedback:"I cannot thank IFB enough for the help their software has provided me. As someone who is not tech-savvy, I was struggling to keep up with the demands of my job. But with IFB's software. !"
    },
    {
        name:"farhan",
        img:"https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        feedback:"I had the pleasure of being taught by Meet through an online platform and I must say, it was an incredible experience. Meet's teaching style is unique and engaging, making learning a fun and enjoyable process. Their passion for teaching is evident in every lesson and their.!"
    },
    {
        name:"Watson",
        img:"https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fHww",
        feedback:"Testimonials take different forms, but always, like in Drummond's facetious law, they provide affirmation or evidence. (Testimonial traces to Latin testimonium, meaning In the 19th century, testimonial developed a new use, referring to a tribute—that is, a gift  is most often used to refer"
    }
];

const imgEle = document.querySelector("img");
const pEle = document.querySelector("p");
const h4Ele = document.querySelector("h4");

function updateData(){
    const {name,img,feedback} = testimonals[Math.floor(Math.random()*3)];
    imgEle.src= img;
    pEle.innerText = feedback;
    h4Ele.innerText = name; 
}

setInterval(() => {
    updateData()
},1000)