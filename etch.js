let container = document.querySelector('.container')

for(let i = 0; i < 16; i++){
let grid = document.createElement('div');
grid.setAttribute('style', 'width: 50px; height: 50px; border: solid; margin: 10px;')
container.appendChild(grid);
}

