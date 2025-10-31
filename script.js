// Create dynamic grid using JS with CSS grid (inspired by StackOverflow)
function createGrid(row, column) {
    const gridContainer= document.querySelector(".container");
    // Use CSS variables to easily change values as needed
    gridContainer.style.setProperty('--grid-row', row);
    gridContainer.style.setProperty('--grid-column', column);
    //Add cells as needed based on the grid size
    let cells;
    for (let i=0; i < (row * column); i++) {
        cells= document.createElement('div');
        gridContainer.appendChild(cells).className= 'grid-item';
    }

};
createGrid(16, 16);

// Add eventListeners for grid-items to add hover effect
const gridItems= document.querySelectorAll('.grid-item');
gridItems.forEach(gridItem => {
    gridItem.addEventListener('mouseover', () => {
        gridItem.style.background= 'black'
    });
});