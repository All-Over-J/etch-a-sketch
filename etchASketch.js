
const gridContainer = document.querySelector(".gridContainer");

for (i=0; i<16; i++ ){
const square = document.createElement("div");
square.textContent = "x";
gridContainer.appendChild(square);
}