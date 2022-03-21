const colorPalleteContainer = document.getElementById('color-palette');
const pixelBoardContainer = document.getElementById('pixel-board');

const boardConfig = {
  width: 200,
  height: 200,
  arrayEdgePixel: [],
  scale: 3,
};

function calcMMC(number1, number2) {
  const higherNumber = number1 > number2 ? number1 : number2;
  for (let index = higherNumber; index > 0; index -= 1) {
    if (number1 % index === 0 && number2 % index === 0) {
      return index;
    }
  }
}

function arrayOfPossibleScale() {
  const maxDivider = calcMMC(boardConfig.width, boardConfig.height);
  const array = [];
  for (let index = 2; index <= maxDivider; index += 1) {
    if (boardConfig.width % index === 0 && boardConfig.height % index === 0) {
      array.push(index);
    }
  }
  array.reverse();
  return array;
}

boardConfig.arrayEdgePixel = arrayOfPossibleScale();

function inicializaColorPalette() {
  const backgroundsColors = ['#000000', '#FF0000', '#00FF00', '#0000FF'];

  for (let index = 0; index < backgroundsColors.length; index += 1) {
    const color = document.createElement('div');
    color.className = index !== 0 ? 'color' : 'color selected';
    color.style.backgroundColor = backgroundsColors[index];
    color.style.border = '1px solid #000000';
    colorPalleteContainer.appendChild(color);
  }
}
inicializaColorPalette();

function inicializaPixelBoard() {
  const quantityOfPixel = (boardConfig.width * boardConfig.height)
                          / boardConfig.arrayEdgePixel[boardConfig.scale] ** 2;
  for (let index = 0; index < quantityOfPixel; index += 1) {
    const pixel = document.createElement('div');
    pixel.className = 'pixel';
    pixel.style.backgroundColor = '#FFFFFF';
    pixel.style.border = '1px solid #000000';
    pixel.style.height = `${boardConfig.arrayEdgePixel[boardConfig.scale]}px`;
    pixel.style.width = `${boardConfig.arrayEdgePixel[boardConfig.scale]}px`;
    pixelBoardContainer.appendChild(pixel);
  }
}
inicializaPixelBoard();
