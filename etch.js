let buttonContainer = document.querySelector('.buttonContainer');
let container = document.querySelector('.container')

let button = document.createElement('button');
button.style.width = "250px";
button.style.height = "60px"
button.textContent = "MAKE NEW GRID"

buttonContainer.appendChild(button);

let table = document.createElement('table');
container.appendChild(table);




let gridNumber = 64;


for(let i = 0; i < gridNumber; i++){    
    let rows = document.createElement('tr');
       
        for(let i = 0; i < gridNumber; i++){
            let squares = document.createElement('td');
            let randomColor = Math.floor(Math.random()*16777215).toString(16);
                squares.addEventListener('mouseover', (hover) => {
                    squares.style.backgroundColor = "#" + randomColor;
                    setTimeout(() => {
                        hover.target.style.backgroundColor = "";
                    }, 1000);
                    }, false);
                    rows.appendChild(squares);
                };
    table.appendChild(rows);
        };

