import{onSnake, expandSnake} from './snake.js';
import {randomGridPosition} from './grid.js';

let food = getRandomFoodPosition();
export const EXPANSION_RATE = 1; // how much the snake grows when it eats

export function update(){
    if (onSnake(food)){
        expandSnake(EXPANSION_RATE);
        food = getRandomFoodPosition(); 
    }
}
export function draw(gameBoard){
    const foodElement = document.createElement('div');
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.classList.add('food');
    gameBoard.appendChild(foodElement)
}

function getRandomFoodPosition(){
    // get a position every time eaten and one that isn't currently
    // on the snake
    let newFoodPosition;
    while (newFoodPosition == null || onSnake(newFoodPosition)){
        newFoodPosition = randomGridPosition();
    }
    return newFoodPosition;
}