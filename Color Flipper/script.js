const flipButton = document.getElementById("flip-btn");
const flipperSpan = document.getElementById("flipper");
const displayContainer = document.getElementById("display-container");
const mainContainer = document.getElementById("container");
const colorMode1 = document.getElementById("basic-btn");
const colorMode2 = document.getElementById("hex-btn");

const HexColors = ["#3498db", "#e74c3c", "#2ecc71", "#f39c12", "#9b59b6", "#34495e", "#1abc9c", "#d35400"];

const BasicColors = ["red","blue","green","yellow","violet","purple","dark-gray","teal"];

let currentColorMode = "hex";

flipButton.addEventListener("click", changeColor);
colorMode1.addEventListener("click", () => changeColorMode("basic"));
colorMode2.addEventListener("click", () => changeColorMode("hex"));

function changeColor()
{
    const colors = currentColorMode === "basic" ? BasicColors : HexColors;
const randomIndex=Math.floor(Math.random()*colors.length);
const randomColor = colors[randomIndex];

// displayContainer.style.backgroundColor = randomColor;
mainContainer.style.backgroundColor = randomColor;
flipperSpan.textContent = randomColor;

}

function changeColorMode(mode)
{
    currentColorMode = mode;
}