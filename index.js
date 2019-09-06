
const CLICKED_CLASS = "clicked";

function handleClick() {
    title.classList.toggle(CLICKED_CLASS);
}

function init() {
    console.log("hello");
    title.addEventListener("click", handleClick);
}
init();

window.onload= function (){
    const title = document.getElementById("#title");
}