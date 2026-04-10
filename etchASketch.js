
const gridContainer = document.querySelector(".gridContainer");

//create 16 divs with the class "square" inside of
//.gridcontainer.
for (i=0; i<16; i++ ){
    const square = document.createElement("div");
    // square.textContent = "x";
    square.classList.add("square");
    gridContainer.appendChild(square);
}
//add event listeners to all squares that add a 
// purple background color on mouseover. 
const squares = document.querySelectorAll(".square");
squares.forEach(square => {
    square.addEventListener("mouseover", ()=>{
        square.style.backgroundColor = "purple";
    });
});