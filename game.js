
let lastRenderTime = 0;
const SNAKE_SPEED = 2; // 2 times per second

// This is the game loop that requests a render
// from the browser then executes the other functions
function main(currentTime){
    window.requestAnimationFrame(main) // request the frame and wait then calls the main func
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
    if (secondsSinceLastRender < 1 / SNAKE_SPEED) return;

    lastRenderTime = currentTime;
    console.log("render")

    // update();
    // draw();
}

window.requestAnimationFrame(main) // request the first time