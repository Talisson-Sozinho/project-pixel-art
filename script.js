const colorPalleteContainer = document.getElementById('color-palette');

function inicializaColorPalette() {
  const backgroundsColors = ['#000000', '#FF0000', '#00FF00', '#0000FF'];

  for (let index = 0; index < backgroundsColors.length; index += 1) {
    const color = document.createElement('div');
    color.className = 'color';
    color.style.backgroundColor = backgroundsColors[index];
    color.style.border = '1px solid #000000';
    colorPalleteContainer.appendChild(color);
  }
}
inicializaColorPalette();
