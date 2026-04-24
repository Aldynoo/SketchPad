const container = document.querySelector("#container");
const div = document.createElement("div");
for (let i = 0; i < 16; i++) {
    i *= div;
}


container.appendChild(div);