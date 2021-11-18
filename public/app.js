// Selectors
const canvas = document.querySelector('.canvas');

// Global variables
let pixelColorMatrix = [];
const colorMatrixSize = 8;
let currentColor = [0,0,0] // Store rgb value of current paint color

// Render canvas based on pixelColorMatrix
function render() {
    initializeColorMatrix();
    paintCanvas();
}

// Initialize matrix of colors with all pixels set to white rgb(255,255,255)
function initializeColorMatrix() {
    for(let i = 0; i < colorMatrixSize; i++) {
        pixelColorMatrix.push([]);
        for(let j = 0; j < colorMatrixSize; j++) {
            // Insert rgb white as list [255,255,255]
            pixelColorMatrix[i].push([255, 255, 255]); 
        }
    }
}

// Paint each pixel of the canvas according to color matrix
function paintCanvas() {
    let currentRow = 0;
    let currentCol = 0;
    Array.from(canvas.children).forEach(pixel => {
        const currentColor = pixelColorMatrix[currentRow][currentCol];

        // Recall that current color is in list format: 0-red, 1-green, 2-blue
        pixel.style.background = `
            rgb(${currentColor[0]}, ${currentColor[1]}, ${currentColor[2]})`;

        // Update current coordinates
        currentCol++;
        if(currentCol == 8){ currentRow++; currentCol = 0; } 
    });
}

// Respond to clicks on canvas
canvas.addEventListener('click', (event) => {
    if(event.target.classList.contains('canvas')) return;

    const selectedPixel = event.target;
    const selectedPixelRow = selectedPixel.dataset.row;
    const selectedPixelCol = selectedPixel.dataset.col;

    pixelColorMatrix[selectedPixelRow][selectedPixelCol] = currentColor;

    render();
});


// ===== TOOLKIT ACTIONS =====
const selectColorTool = document.querySelector('#select-color');

// Respond to changes in selected color
selectColorTool.addEventListener('change', () => {
    // Convert current color from hex to rgb
    function hexToRgb(hex) {
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return [parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16)];
    }
    currentColor = hexToRgb(selectColorTool.value);
});



// Render on page first's load
selectColorTool.value = '#000000'; // Reset default color to black
render();