import * as ui from "./ui.js";


const sideDiv = document.getElementById("side");

for (let i = 0; i < sideDiv.children.length; i++) {
    ui.SideItem(sideDiv.children[i]);
}