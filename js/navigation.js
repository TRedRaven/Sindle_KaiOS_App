// Red - this is the navigation controller, it'll store what option is selected and what option is next
// it will also handle the button presses. import into file you want to have key handling on and

document.activeElement.addEventListener('keydown', keyHandler);

// Red - button trigger handler.
function keyHandler(e) {
    switch (e.key) {
        case "ArrowUp":
            console.log("help1");
            nav(-1);
            break;
        case "ArrowDown":
            console.log("help2");
            nav(1);
            break;
        case "ArrowRight":
            console.log("help3");
            nav(-1);
            break;
        case "ArrowLeft":
            console.log("help4");
            nav(1);
            break;
        default:
            break;
    }
}
