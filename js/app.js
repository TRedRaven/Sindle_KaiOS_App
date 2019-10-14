// Red - event handlers
window.addEventListener("load", start());


// Red - start function will run on app fully loading
function start() {
    // Red - the point of the app is to be text-less so this will be removed when icons are ready.
    document.getElementsByTagName("welcomeMsg").innerHTML = "welcome Red";
}
