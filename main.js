import * as ui from "./ui.js";


const sideDiv = document.getElementById("side");
let sideItems = [];

for (let i = 0; i < sideDiv.children.length; i++) {
    sideItems.push(new ui.SideItem(sideDiv.children[i]));
}

sideItems[0].select();