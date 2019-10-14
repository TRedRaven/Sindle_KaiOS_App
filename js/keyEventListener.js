// Red - this is the navigation controller, it'll store what option is selected and what option is next
// it will also handle the button presses. import into file you want to have key handling on and

document.activeElement.addEventListener('keydown', keyHandler);

// Red - button trigger handler.
function keyHandler(k) {
    // Red - button handler for the d-pad
    switch (k.key) {
        case "ArrowUp":
            try {pressedArrowUp();}catch(e){console.log("no key handler found for key: " + k.key)}
            break;
        case "ArrowDown":
            try {pressedArrowDown();}catch(e){console.log("no key handler found for key: " + k.key)}
            break;
        case "ArrowRight":
            try {pressedArrowRight();}catch(e){console.log("no key handler found for key: " + k.key)}
            break;
        case "ArrowLeft":
            try {pressedArrowLeft();}catch(e){console.log("no key handler found for key: " + k.key)}
            break;
        case "Enter":
            try {pressedEnter();}catch(e){console.log("no key handler found for key: " + k.key)}
        default:
            break;
    }

    // Red - button handler for the soft keys around the D-pad.
    switch (k.key) {
        case "SoftLeft":
            try {pressedSoftLeft();}catch(e){console.log("no key handler found for key: " + k.key)}
            break;
        case "SoftReft":
            try {pressedSoftRight();}catch(e){console.log("no key handler found for key: " + k.key)}
            break;
        case "Call":
            try {pressedCall();}catch(e){console.log("no key handler found for key: " + k.key)}
            break;
        case "Backspace":
            try {pressedBackspace();}catch(e){console.log("no key handler found for key: " + k.key)}
            break;
        default:
            break;
    }

    // Red - button handler for the numpad
    switch (k.key) {
        case "1":
            try {pressedNum1();}catch(e){console.log("no key handler found for key: " + k.key)}
            break;
        case "2":
            try {pressedNum2();}catch(e){console.log("no key handler found for key: " + k.key)}
            break;
        case "3":
            try {pressedNum3();}catch(e){console.log("no key handler found for key: " + k.key)}
            break;
        case "4":
            try {pressedNum4();}catch(e){console.log("no key handler found for key: " + k.key)}
            break;
        case "5":
            try {pressedNum5();}catch(e){console.log("no key handler found for key: " + k.key)}
            break;
        case "6":
            try {pressedNum6();}catch(e){console.log("no key handler found for key: " + k.key)}
            break;
        case "7":
            try {pressedNum7();}catch(e){console.log("no key handler found for key: " + k.key)}
            break;
        case "8":
            try {pressedNum8();}catch(e){console.log("no key handler found for key: " + k.key)}
            break;
        case "9":
            try {pressedNum9();}catch(e){console.log("no key handler found for key: " + k.key)}
            break;
        case "0":
            try {pressedNum0();}catch(e){console.log("no key handler found for key: " + k.key)}
            break;
        case "*":
            try {pressedNumaster();}catch(e){console.log("no key handler found for key: " + k.key)}
            break;
        case "#":
            try {pressedNumOctothorpe();}catch(e){console.log("no key handler found for key: " + k.key)}
            break;
        default:
            break;
    }
}
