import{onSnake, expandSnake} from './snake.js';
let food = {x:1,y:1};
export const EXPANSION_RATE = 1; // how much the snake grows when it eats

export function update(){
    if (onSnake(food)){
        expandSnake(EXPANSION_RATE);
        food = {x:20,y:10}; // update to rando
    }
}
export function draw(gameBoard){
    const foodElement = document.createElement('div');
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.classList.add('food');
    gameBoard.appendChild(foodElement)
}