import { getInputDirection } from "./input.js";

export const SNAKE_SPEED = 5; // tiles per second
const snakeBody = [
    {x:11,y:11}
];
let newSegments = 0; // don't start with segments

export function update(){
    addSegments();
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

export function expandSnake(amount){
    newSegments += amount;
}

export function onSnake(position){
    // loop through each segment of the snake to see if it's on the position
    return snakeBody.some(segment => {
        return equalPositions(segment,position);
    })
}

function equalPositions(pos1,pos2){
    return pos1.x === pos2.x && pos1.y===pos2.y;
}

function addSegments(){
    // called on every update. adds new segments from expandSnake
    for (let i = 0;i<newSegments;i++){
        // duplicate it to the end. same as a push function
        snakeBody[snakeBody.length] = {...snakeBody[snakeBody.length-1]}
    }
    newSegments = 0;
}