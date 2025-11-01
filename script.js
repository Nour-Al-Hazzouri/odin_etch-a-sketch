// Create dynamic grid using JS with CSS grid (inspired by StackOverflow)
function createGrid(row, column) {
    const gridContainer= document.querySelector(".container");
    //Add cells as needed based on the grid size
    gridContainer.style.setProperty('--num-cols', column);
    let cells;
    for (let i=0; i < (row * column); i++) {
        cells= document.createElement('div');
        gridContainer.appendChild(cells).className= 'grid-item';
    }

};
// Get the dynamic grid size
const gridSize= prompt("Choose size as number (like 30 for example)");
let rows= gridSize;
let columns= gridSize;
if (gridSize > 100) {
    alert("Large number are not advised. 100x100 is the maximum amount that will be applied")
    rows= 100;
    columns= 100
}
createGrid(rows, columns);

const min= 1;
const max= 255;

// Add eventListeners for grid-items to add hover effect
const gridItems= document.querySelectorAll('.grid-item');
gridItems.forEach(gridItem => {
    gridItem.addEventListener('mouseover', () => {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        gridItem.style.background= `rgb(${r}, ${g}, ${b})`;
    });
});

// Change size of square by reloading page through a button
const changeSize= document.querySelector(".size");
changeSize.addEventListener('click', () => {
    window.location.reload();
})