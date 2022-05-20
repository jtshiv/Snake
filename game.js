import { getSnakeHead, snakeIntersection, update as updateSnake, draw as drawSnake, SNAKE_SPEED } from './snake.js';
import {update as updateFood, draw as drawFood} from './food.js';
import {outsideGrid,draw as drawGrid} from './grid.js';

let lastRenderTime = 0;
let gameOver = false;
let gridMade=false;
const gameBoard = document.getElementById("game-board");

// This is the game loop that requests a render
// from the browser then executes the other functions
function main(currentTime){
    if (gameOver){
        if (confirm('You lose. Press ok to restart.')){
            window.location = '/';
        }
        return;
    }
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
    updateFood();
    checkDeath();
}

function undrawItems(gameBoard){
    Array.from(gameBoard.getElementsByClassName('snake')).forEach(x=>{
        x.remove();
    })
    Array.from(gameBoard.getElementsByClassName('food')).forEach(x=>{
        x.remove();
    })
}

function draw() {
    // gameBoard.innerHTML = ""; // clear old snake bodies
    undrawItems(gameBoard);
    drawSnake(gameBoard);
    drawFood(gameBoard);
    if(!gridMade) {
        gridMade = true;
        drawGrid(gameBoard);
    }  
    
}

function checkDeath(){
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
}