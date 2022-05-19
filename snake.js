import { getInputDirection } from "./input.js";

export const SNAKE_SPEED = 1; // tiles per second
const snakeBody = [
    {x:11,y:11}
];

export function update(){
    const inputDirection = getInputDirection();
    // start with second to last segment bc the last segment
    // will disappear
    for (let i = snakeBody.length-2;i>=0;i--){
        // create a new snake using the ...
        // grabs the segment after selected and
        // puts in the position of current
        snakeBody[i+1] = {...snakeBody[i]}
    }
    // handle the head
    snakeBody[0].x += inputDirection.x;
    snakeBody[0].y += inputDirection.y;
}
export function draw(gameBoard){
    snakeBody.forEach(segment => {
        const snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = segment.y;
        snakeElement.style.gridColumnStart = segment.x;
        snakeElement.classList.add('snake');
        gameBoard.appendChild(snakeElement)
    })
}