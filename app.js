let userColor = null;

//side functions
function clearCanvas() {
  let canvasSize = document.querySelector("#canvas-size").value;
  const canvasContainer = document.querySelector("#grid-container");
  displayGrids(canvasSize);
}



//EXPERIMENT FUNCTION
function divHover(){

 // Gets the parent container
const parentContainer = document.querySelector("#grid-container");


  // Select all direct child divs
const childDivs = parentContainer.querySelectorAll(":scope > div");
console.log("🚀 ~ divHover ~ childDivs:", childDivs)

  // Iterate through the selected divs and do something with them
  for (let i = 0; i < childDivs.length; i++) {
    const div = childDivs[i];
         div.setAttribute("onmouseover", "colorChange(this)");
         div.removeAttribute("onclick");
  }

}

function divClick(){

 // Gets the parent container
const parentContainer = document.querySelector("#grid-container");


  // Select all direct child divs
const childDivs = parentContainer.querySelectorAll(":scope > div");
console.log("🚀 ~ divClick ~ childDivs:", childDivs)

  // Iterate through the selected divs and do something with them
  for (let i = 0; i < childDivs.length; i++) {
    const div = childDivs[i];
         div.setAttribute("onclick", "colorChange(this)");
         div.removeAttribute("onmouseover");
  }

}






//FIRST FUNCTION TO RUN
function getDimentions() {
  let dimentions = document.querySelector("#canvas-size");

  if (dimentions.value > 30) {
    alert("MAX GRID SIZE => 30!");
    dimentions.value = 30;
  } else if (dimentions.value < 5) {
    alert("MIN GRID SIZE => 5!");
    dimentions.value = 5;
  } else {
    displayGrids(dimentions.value);
  }
}

//SECOND FUNCTION TO RUN
function displayGrids(getDimentionsParameter) {
  
let dimentions = getDimentionsParameter || 5;
const isHover = document.querySelector("#hover-paint");
const canvasContainer = document.querySelector("#grid-container");
canvasContainer.style.gridTemplateColumns = `repeat(${dimentions},1fr)`;

  
let div = (isHover.checked == false)?`<div onclick="colorChange(this)"></div>` : `<div onmouseover="colorChange(this)"></div>`;


canvasContainer.innerHTML = "";

  for (let i = 0; i != dimentions; i++) {
    canvasContainer.innerHTML += `${div}`;
    for (let j = 1; j != dimentions; j++) {
      canvasContainer.innerHTML += `${div}`;
    }
  }
}





//THIRD FUNCTION 
//CHECKS IF SINGLE COLOR OR RANDOM
function colorChange(div) {
 const isSingle = document.querySelector("#single-color");
  if (isSingle.checked == true) {
     singleColor(div);
  } else {
   
    randomColor(div);
  }
}



//SIDE FUNCTIONS OF COLOR CHANGE
function singleColor(div) {

    const selectedColor = userColor || "black"
    div.style.backgroundColor =`${selectedColor}`;
}

function randomColor(div) {
  const sketchColors = [
    "#FF595E",
    "#FFCA3A",
    "#8AC926",
    "#1982C4",
    "#6A4C93",
    "#FF9F1C",
    "#F72585",
    "#3A86FF",
    "#8338EC",
    "#06D6A0",

    "#EF476F",
    "#FFD166",
    "#06D6A0",
    "#118AB2",
    "#073B4C",
    "#FFADAD",
    "#FFD6A5",
    "#FDFFB6",
    "#CAFFBF",
    "#9BF6FF",

    "#A0C4FF",
    "#BDB2FF",
    "#FFC6FF",
    "#FFFFFC",
    "#FDCB6E",
    "#00B894",
    "#00CEC9",
    "#74B9FF",
    "#6C5CE7",
    "#E84393",

    "#FAB1A0",
    "#81ECEC",
    "#55EFC4",
    "#00A8E8",
    "#0077B6",
    "#90E0EF",
    "#CAF0F8",
    "#FF6F61",
    "#9B5DE5",
    "#F15BB5",

    "#FEE440",
    "#00BBF9",
    "#00F5D4",
    "#FF006E",
    "#D0F4DE",
    "#FEC8D8",
    "#FFDFD3",
    "#FCD5CE",
    "#D8E2DC",
    "#A9DEF9",
  ];
  const randomNumber = Math.floor(Math.random() * 50) + 1;
  div.style.backgroundColor = sketchColors[randomNumber];
}
//-------------------------










//OPTION FUNCTIONS

function displayColors() {
  const colorContainer = document.querySelector(".select-colors");
const primaryColors = [
"#000000", // Black
  "#FF0000", // Red
  "#0000FF", // Blue
  "#FFFF00", // Yellow

  "#00FF00", // Green (secondary, strong contrast)
  "#FFA500", // Orange
  "#800080", // Purple

  "#00FFFF", // Cyan (bright primary for digital)
  "#FF00FF", // Magenta (digital primary)
  "#FFFFFF", // White
];

  let i = 0;
  colorContainer.innerHTML = "";
  primaryColors.forEach((element) => {
    const div = createDivColors(primaryColors[i],i);
    colorContainer.innerHTML += `${div}`;
    i++;
  });
}

function createDivColors(color,num) {
    if(num == 0){
let div = `<div onclick="selectColor(this)" style="background-color:${color}; border:5px solid red;    "></div>`;
 return div;
    }else{
 let div = `<div onclick="selectColor(this)" style="background-color:${color}; border:5px solid rgb(110, 168, 216);    "></div>`;
  return div;
    }
 

 
}

function selectColor(selectedDiv) {
  const colorContainer = document.querySelector(".select-colors");

  // Select all direct child divs
  const childDivs = colorContainer.querySelectorAll(":scope > div");

  // Iterate through the selected divs and do something with them
  for (let i = 0; i < childDivs.length; i++) {
    const div = childDivs[i];
    if (selectedDiv === div) {
      div.style.border = "5px solid red";
     userColor = div.style.backgroundColor;
     console.log(userColor)
  
    } else {
      div.style.border = "5px solid  rgb(110, 168, 216)";
    }
  }
}
