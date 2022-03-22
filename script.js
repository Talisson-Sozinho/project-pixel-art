const colorPalleteContainer = document.getElementById('color-palette');
const pixelBoardContainer = document.getElementById('pixel-board');
const clearBoardButton = document.getElementById('clear-board');
const generateBoardButton = document.getElementById('generate-board');
const boardScaleSize = document.getElementById('board-size');

const COLOR_SELECTED = 'color selected';

const boardConfig = {
  width: 200,
  height: 200,
  scale: 5,
};
const backgroundsColors = ['#000000'];

function generateColor() {
  for (let index = 0; index < 3; index += 1) {
    const colorR = Math.random() * 255;
    const colorG = Math.random() * 255;
    const colorB = Math.random() * 255;
    backgroundsColors.push(`rgb(${colorR},${colorG},${colorB})`);
  }
}
generateColor();

function removeSelectedColor() {
  for (let index = 0; index < colorPalleteContainer.children.length; index += 1) {
    if (colorPalleteContainer.children[index].className === COLOR_SELECTED) {
      colorPalleteContainer.children[index].className = 'color';
    }
  }
}

function selectColor(event) {
  const selectedElement = event.target;
  if (selectedElement.className === 'color') {
    removeSelectedColor();
    selectedElement.classList.add('selected');
  }
}

colorPalleteContainer.addEventListener('click', selectColor);

function dye(event) {
  const pixelStyle = event.target.style;
  for (let index = 0; index < colorPalleteContainer.children.length; index += 1) {
    if (colorPalleteContainer.children[index].className === COLOR_SELECTED) {
      pixelStyle.backgroundColor = colorPalleteContainer.children[index].style.backgroundColor;
    }
  }
}

pixelBoardContainer.addEventListener('click', dye);

function clearBoard() {
  for (let index = 0; index < pixelBoardContainer.children.length; index += 1) {
    pixelBoardContainer.children[index].style.backgroundColor = '#FFFFFF';
  }
}

clearBoardButton.addEventListener('click', clearBoard);

function inicializaColorPalette() {
  for (let index = 0; index < backgroundsColors.length; index += 1) {
    const color = document.createElement('div');
    color.className = index !== 0 ? 'color' : COLOR_SELECTED;
    color.style.backgroundColor = backgroundsColors[index];
    color.style.border = '1px solid #000000';
    colorPalleteContainer.appendChild(color);
  }
}
inicializaColorPalette();

function inicializaPixelBoard() {
  const quantityOfPixel = boardConfig.scale ** 2;
  pixelBoardContainer.style.width = `${40 * boardConfig.scale}px`;
  pixelBoardContainer.style.height = `${40 * boardConfig.scale}px`;

  pixelBoardContainer.innerHTML = null;

  for (let index = 0; index < quantityOfPixel; index += 1) {
    const pixel = document.createElement('div');
    pixel.className = 'pixel';
    pixel.style.backgroundColor = '#FFFFFF';
    pixel.style.border = '1px solid #000000';
    pixel.style.height = '40px';
    pixel.style.width = '40px';
    pixelBoardContainer.appendChild(pixel);
  }
}
inicializaPixelBoard();

function generateNewBoard() {
  if (!boardScaleSize.value) {
    alert('Board inválido!');
    return;
  }
  boardConfig.scale = boardScaleSize.value;
  if (boardScaleSize.value > 50) {
    boardConfig.scale = 50;
  }
  if (boardScaleSize.value < 5) {
    boardConfig.scale = 5;
  }
  inicializaPixelBoard();
}

generateBoardButton.addEventListener('click', generateNewBoard);
