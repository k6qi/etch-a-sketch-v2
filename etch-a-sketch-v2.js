const gridContainer = document.querySelector('#grid-container')
const clearGridButton = document.querySelector('#clear-button')
const changeGridButton = document.querySelector('#change-grid-button')
let gridSize = 10;   
let gridSquareSize = 960 / gridSize;

   //add onclick event listener to change grid size
   changeGridButton.addEventListener('click', () =>{
    let newGridSize = prompt('Enter a new grid size (from 1 to 100):');
    gridSize = newGridSize;
    gridSquareSize = 960 / gridSize;
    createGrid();

 })
   // add onclick event listener to clear the grid
   clearGridButton.addEventListener('click', () =>{
     const gridSquares = document.querySelectorAll('.grid-square');
     gridSquares.forEach(square =>{
         square.classList.remove('grid-square-black')
     })
 })
// create the grid given the grid size inputted by user
function createGrid(){
    gridContainer.textContent = '';
    for(let i=0; i < gridSize * gridSize; i++){
        //create a grid square, append to grid 
        const gridSquare = document.createElement('div');
        //assign gridSquare a class for styling
        gridSquare.classList.add('grid-square')
        gridSquare.style.width = gridSquareSize + 'px';
        gridSquare.style.height = gridSquareSize + 'px';
        //add square to the container
        gridContainer.appendChild(gridSquare)

        //add mouseover event listener to each div
        gridSquare.addEventListener("mouseover", (event) =>{
            gridSquare.classList.add('grid-square-black')
        })
    }

}

//Initalize the grid
createGrid();