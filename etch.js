let buttonContainer = document.querySelector('.buttonContainer');
let container = document.querySelector('.container')

let button = document.createElement('button');
button.style.width = "250px";
button.style.height = "60px"
button.textContent = "MAKE NEW GRID"

buttonContainer.appendChild(button);

let gridNumber = 16;

button.addEventListener('click', () => {
    gridNumber = 0;
})

for(let i = 0; i < gridNumber * gridNumber; i++){
let squares = document.createElement('div');
let randomColor = Math.floor(Math.random()*16777215).toString(16);
squares.setAttribute('style', 'width: 20px; height: 20px; border: solid; margin: 2px;')
squares.addEventListener('mouseover', (hover) => {
    squares.style.backgroundColor = "#" + randomColor;
    setTimeout(() => {
        hover.target.style.backgroundColor = "";
      }, 1000);
    }, false);
container.appendChild(squares);
}; 




