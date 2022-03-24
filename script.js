const grid = document.getElementById("grid");
const cellList = document.getElementsByClassName("cell");
const slider = document.getElementById("grid-range");
const sliderText = document.getElementById("grid-size");
const newGridButton = document.getElementById("new-grid-btn");


function createGrid(rows, cols) {
  grid.style.setProperty('--grid-rows', rows);
  grid.style.setProperty('--grid-cols', cols);
  for (let i = 0; i < (rows * cols); i++) {
    let cell = document.createElement("div");
    grid.appendChild(cell);
    cell.classList.add("cell");
  };
};

createGrid(16, 16);

for(let i=0;i<cellList.length;i++) {
  cellList[i].addEventListener("mouseover", function() {
    cellList[i].classList.add("color");
  });
}

sliderText.innerText = slider.value + "x" + slider.value;
slider.addEventListener("input", function() {
  sliderText.innerText = this.value + "x" + this.value;
});

newGridButton.addEventListener("click", function() {
  while(grid.firstChild){
    grid.removeChild(grid.firstChild);
  }
  const gridSize = slider.value;
  createGrid(gridSize,gridSize);
  for(let i=0;i<cellList.length;i++) {
    cellList[i].addEventListener("mouseover", function() {
      cellList[i].classList.add("color");
    });
  }
});
