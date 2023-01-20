let buttonContainer = document.querySelector('.buttonContainer');
let container = document.querySelector('.container')
let table = document.createElement('table');
let button = document.createElement('button');
button.style.width = "250px";
button.style.height = "60px"
button.textContent = "MAKE NEW GRID"

container.appendChild(table);
buttonContainer.appendChild(button);

let gridNumber = 10;




function createGrid() {

for(let i = 0; i < gridNumber; i++){    

    let rows = document.createElement('tr');
    rows.classList.add('grid');

        for(let i = 0; i < gridNumber; i++){
            let squares = document.createElement('td');
            squares.classList.add('grid');
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

    };


    
    

    button.addEventListener('click', () => {
        while (table.firstChild) {
        table.removeChild(table.firstChild)
        }
        gridNumber = Number(prompt("Grid Size",  ));
        createGrid();

    });

   
    createGrid();

   
    