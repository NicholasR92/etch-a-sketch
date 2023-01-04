let container = document.querySelector('.container')

for(let i = 0; i < 16; i++){
let grid = document.createElement('div');
grid.setAttribute('style', 'width: 100px; height: 100px; border: solid; margin: 10px;')
container.appendChild(grid);
}

