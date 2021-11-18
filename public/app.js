// ===== CANVAS ACTIONS =====
const canvas = document.querySelector('.canvas');

// Global variables
let pixelColorMatrix = [];
const colorMatrixSize = 8;
let currentColor = '#000000' // Store hex value of current paint color

// Render canvas based on pixelColorMatrix
function render() {
    paintCanvas();
}

// Initialize matrix of colors with all pixels set to white hex #ffffff
function initializeColorMatrix() {
    for(let i = 0; i < colorMatrixSize; i++) {
        pixelColorMatrix.push([]);
        for(let j = 0; j < colorMatrixSize; j++) {
            // Insert hex white 
            pixelColorMatrix[i].push('#ffffff'); 
        }
    }
}

// Paint each pixel of the canvas according to color matrix
function paintCanvas() {
    let currentRow = 0;
    let currentCol = 0;
    Array.from(canvas.children).forEach(pixel => {
        const currentPixelColor = pixelColorMatrix[currentRow][currentCol];
        pixel.style.background = currentPixelColor;

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
    currentColor = selectColorTool.value;
});

// ===== MODAL ACTIONS =====
const modalBtn = document.querySelector('#save');
const overlay = document.querySelector('.overlay');
const closeBtn = document.querySelector('.close-button');
const savePaintingForm = document.querySelector('.save-painting-form');

// Open save-painting modal
modalBtn.addEventListener('click', () => {
    const modal = document.querySelector('.save-modal');
    modal.classList.add('active');
    overlay.classList.add('active');
});

// Close save-painting modal
closeBtn.addEventListener('click', () => {
    const modal = document.querySelector('.save-modal');
    modal.classList.remove('active');
    overlay.classList.remove('active');
});

savePaintingForm.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const title = document.querySelector('#painting-title-input').value;
    const author = document.querySelector('#painting-author-input').value;
    if(!title || !author) return;

    const newPainting = {
        pixelColorMatrix,
        title,
        author
    }

    fetch('/new', {
        headers: {
            'content-type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(newPainting) 
    })
    .then(res => console.log(res))
    .catch(err => console.log(err));
})

// ===== RENDER ON PAGE FIRST LOAD =====
selectColorTool.value = '#000000'; // Reset default color to black
initializeColorMatrix();
render();