function makeGrids (size) {
let container = document.querySelector("#container");
for (let i = 0; i < size; i++) {
    let column = document.createElement("div");
    column.classList.add("column");
    for (let j = 1; j <= size; j++) {
        let row = document.createElement("div");
        row.classList.add("row");
        row.style.border = "1px solid black";
        //row.innerText = (i * size) + j;
        column.appendChild(row);
        }
    container.appendChild(column);
    }
}
makeGrids(16);