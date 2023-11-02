// Config
const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");
document.body.appendChild(canvas);
document.body.style.margin=0;
let SCREEN_WIDTH = innerWidth;
let SCREEN_HEIGHT = innerHeight;
canvas.width = SCREEN_WIDTH;
canvas.height = SCREEN_HEIGHT;

// Variables
let MouseX = null;
let MouseY = null;

function Update() {
    ctx.clearRect(0,0,SCREEN_WIDTH,SCREEN_HEIGHT);

    ctx.fillRect(SCREEN_WIDTH/2-50,SCREEN_HEIGHT/2-50,100,100);
}
setInterval(Update);

document.onmousemove = function(e) {
    MouseX = e.pageX;
    MouseY = e.pageY;
}
