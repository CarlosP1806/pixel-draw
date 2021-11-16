// Selectors
const canvas = document.querySelector('.canvas');

// Global variables
let pixelColorMatrix = [];
const colorMatrixSize = 8;

// Render canvas based on pixelColorMatrix
function render() {
    initializeColorMatrix();
    console.log(pixelColorMatrix);
}

// Initialize matrix of colors with all pixels set to white rgb(0,0,0)
function initializeColorMatrix() {
    for(let i = 0; i < colorMatrixSize; i++) {
        pixelColorMatrix.push([]);
        for(let j = 0; j < colorMatrixSize; j++) {
            pixelColorMatrix[i].push([0, 0, 0]); // Insert rgb white as list [0,0,0]
        }
    }
}

canvas.addEventListener('click', (event) => {
    const selectedPixel = event.target;


    console.log(selectedPixel.dataset.row)
});

// Render on page first's load
render();