let container = document.querySelector('.container')

for(let i = 0; i < 256; i++){
let grid = document.createElement('div');
grid.setAttribute('style', 'width: 20px; height: 20px; border: solid; margin: 5px;')
grid.addEventListener('mouseover', (hover) => {
    grid.style.backgroundColor = "blue";
    setTimeout(() => {
        hover.target.style.backgroundColor = "";
      }, 500);
    }, false);
container.appendChild(grid);
}


