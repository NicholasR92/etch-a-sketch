let container = document.querySelector('.container')



for(let i = 0; i < 256; i++){
let grid = document.createElement('div');
let randomColor = Math.floor(Math.random()*16777215).toString(16);
grid.setAttribute('style', 'width: 20px; height: 20px; border: solid; margin: 2px;')
grid.addEventListener('mouseover', (hover) => {
    grid.style.backgroundColor = "#" + randomColor;
    setTimeout(() => {
        hover.target.style.backgroundColor = "";
      }, 1000);
    }, false);
container.appendChild(grid);
}


