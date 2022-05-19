import { update as updateSnake, draw as drawSnake, SNAKE_SPEED } from './snake.js'
let lastRenderTime = 0;
const gameBoard = document.getElementById("game-board");

// This is the game loop that requests a render
// from the browser then executes the other functions
function main(currentTime){
    window.requestAnimationFrame(main) // request the frame and wait then calls the main func
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
    if (secondsSinceLastRender < 1 / SNAKE_SPEED) return;

    lastRenderTime = currentTime;

    update(); // process all the logic
    draw(); // after logic, where is snake and actually draw
}

window.requestAnimationFrame(main) // request the first time


function update(){
    updateSnake();
}

function draw() {
    drawSnake(gameBoard);
}