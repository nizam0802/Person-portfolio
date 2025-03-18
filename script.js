// Dynamic Text for Home Section
const dynamicText = document.querySelector(".dynamic-text");
const professions = ["Web Developer", "Tech Enthusiast"];
let index = 0;

function updateText() {
    dynamicText.textContent = professions[index];
    index = (index + 1) % professions.length;
}

setInterval(updateText, 2000);