const btnEle = document.querySelector(".btn");
btnEle.addEventListener("mouseover",(e) => {
    const rect = btnEle.getBoundingClientRect(); // Get the button's position and size
    const x = e.clientX - rect.left; // Mouse X position relative to the button
    const y = e.clientY - rect.top;  // Mouse Y position relative to the button
    btnEle.style.setProperty("--x", `${x}px`);
    btnEle.style.setProperty("--y", `${y}px`);
})