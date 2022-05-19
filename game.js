import { SNAKE_SPEED } from './snake.js'
let lastRenderTime = 0;

// This is the game loop that requests a render
// from the browser then executes the other functions
function main(currentTime){
    window.requestAnimationFrame(main) // request the frame and wait then calls the main func
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
    if (secondsSinceLastRender < 1 / SNAKE_SPEED) return;

    lastRenderTime = currentTime;
    console.log("render")

    update(); // process all the logic
    draw(); // after logic, where is snake and actually draw
}

window.requestAnimationFrame(main) // request the first time


function update(){

}
 function draw() {

 }