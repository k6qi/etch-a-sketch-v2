const gridContainer = document.querySelector('#grid-container')
const clearGridButton = document.querySelector('#clear-button')
const gridSize= 10// prompt("Please enter a desired size (max 100):")
const gridSquareSize = 960 / gridSize;

// create the grid given the grid size inputted by user
function createGrid(){
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
            gridSquare.style.backgroundColor = "black";
        })
        
        // add onclick event listener to clear the grid
        clearGridButton.addEventListener('click', () =>{
        gridSquare.style.backgroundColor = "white";
        })
    }
    
}


createGrid();