function getDimentions() {
  let dimentions = document.querySelector("#canvas-size");

  if (dimentions.value > 20) {
    alert("MAX GRID SIZE => 20!");
    dimentions.value = 20;
  } else if (dimentions.value < 5) {
    alert("MIN GRID SIZE => 5!");
    dimentions.value = 5;
  } else {

    displayGrids(dimentions.value);
  }

}

function createDiv() {
  const div = `<div onmouseover="colorChange(this)"></div>`;

  return div;
}

function displayGrids(boxNum) {
  let canvasSize = document.querySelector("#canvas-size").value;
  let dimentions = boxNum || 5;
  const div = createDiv();

  const canvasContainer = document.querySelector("#grid-container");
  canvasContainer.style.gridTemplateColumns = `repeat(${dimentions},1fr)`;

  canvasContainer.innerHTML = "";


  for (let i = 0; i != dimentions; i++) {
    canvasContainer.innerHTML += `${div}`;
    for (let j = 1; j != dimentions; j++) {
      canvasContainer.innerHTML += `${div}`;
    }
  }
}

function clearCanvas() {
  let canvasSize = document.querySelector("#canvas-size").value;
  const canvasContainer = document.querySelector("#grid-container");
  displayGrids(canvasSize);
}

function colorChange(div) {
  const randomNumber = Math.floor(Math.random() * 50) + 1;

const sketchColors = [
  "#FF595E", "#FFCA3A", "#8AC926", "#1982C4", "#6A4C93",
  "#FF9F1C", "#F72585", "#3A86FF", "#8338EC", "#06D6A0",

  "#EF476F", "#FFD166", "#06D6A0", "#118AB2", "#073B4C",
  "#FFADAD", "#FFD6A5", "#FDFFB6", "#CAFFBF", "#9BF6FF",

  "#A0C4FF", "#BDB2FF", "#FFC6FF", "#FFFFFC", "#FDCB6E",
  "#00B894", "#00CEC9", "#74B9FF", "#6C5CE7", "#E84393",

  "#FAB1A0", "#81ECEC", "#55EFC4", "#00A8E8", "#0077B6",
  "#90E0EF", "#CAF0F8", "#FF6F61", "#9B5DE5", "#F15BB5",

  "#FEE440", "#00BBF9", "#00F5D4", "#FF006E", "#D0F4DE",
  "#FEC8D8", "#FFDFD3", "#FCD5CE", "#D8E2DC", "#A9DEF9"
];
      div.style.backgroundColor = sketchColors[randomNumber];

}
