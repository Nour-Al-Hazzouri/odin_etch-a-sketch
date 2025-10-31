// Create dynamic grid using JS with CSS grid (inspired by StackOverflow)
function createGrid(row, column) {
    const gridContainer= document.querySelector(".container");

    gridContainer.style.setProperty('--grid-row', row);
    gridContainer.style.setProperty('--grid-column', column);

    let cells;
    for (let i=0; i < (row * column); i++) {
        cells= document.createElement('div');
        gridContainer.appendChild(cells).className= 'grid-item';
    }

};
createGrid(16, 16);