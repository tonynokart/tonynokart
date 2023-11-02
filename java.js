//for later

function ClickMenu() {
    var tag = document.getElementById("menu");
    tag.style.transition= "transform .5s ease-in-out";
    tag.style.transform = "translateX(0%)";
}

document.getElementById('myButton').onclick = ClickMenu;