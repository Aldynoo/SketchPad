const container = document.getElementById("container");
const button = document.getElementById("resizeBtn");

function gridColor () {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

function makeGrid (size) {
    let area = 640 / size;
    container.innerText = "";

    for (let i = 0; i < size * size; i++) {
        let square = document.createElement("div");
        square.classList.add("square");
        square.style.width = `${area}px`;
        square.style.height = `${area}px`;
        square.style.opacity = "0.1";
        container.appendChild(square);
    }

    let squares = document.querySelectorAll(".square");
    squares.forEach ((square) => {
    square.addEventListener("mouseover", () => {
        let colorGrid = gridColor();
        square.style.backgroundColor = colorGrid;

        let currentOpacity = parseFloat(square.style.opacity);
        if (currentOpacity < 1) {
            square.style.opacity = (currentOpacity + 0.1).toString();
        }
    });
    });
}

makeGrid(16);

const input = document.querySelector("input");

button.addEventListener("click" , () => {
    let newSize = input.value;
    newSize = parseInt(newSize);

    if (newSize && newSize >= 2 && newSize <= 99) {
    makeGrid(newSize);
    } else {
        alert("Enter a valid number between 2 and 99!");
    }
});