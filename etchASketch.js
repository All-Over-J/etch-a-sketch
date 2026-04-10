
const gridContainer = document.querySelector(".gridContainer");

let sideLength = 4;
makeGrid(sideLength);
//create 16 divs with the class "square" inside of
//.gridcontainer.
function makeGrid(sideLength){
gridContainer.innerHTML = ""; //clear the last grid
for (let i=0; i<sideLength*sideLength; i++){
    const square = document.createElement("div");
    square.classList.add("square");
    let fBValue = 100/sideLength; //value for adjusting flex-Basis 
    square.style.flexBasis=fBValue+"%"; //adjusts square flex-Basis so bigger grids have smaller squares
    square.style.height=fBValue+"%";//adjusts square height
    gridContainer.appendChild(square);
}
hoverEffect()
}

//add event listeners to all squares that add a 
// purple background color on mouseover. 
function hoverEffect(){
const squares = document.querySelectorAll(".square");
squares.forEach(square => {
    square.addEventListener("mouseover", ()=>{
        square.style.backgroundColor = "purple";
    });
});
}

//upon button click, set sideLength to the user's input, 
//and adjust the flexBasis of each square.
//If the input is not acceptable, thrown an alert.
// If it is acceptable
const button = document.querySelector(".button");
button.addEventListener("click", ()=>{
    userInput=prompt("Enter a number between 1 and 100. This will become the grid side length.");
    sideLength = parseInt(userInput);
    if (isNaN(sideLength)|| sideLength <1 || sideLength >100){
        alert("Please enter a number between 1 and 100.");
    }
    else
        makeGrid(sideLength);
})