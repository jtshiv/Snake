


// This is the game loop that requests a render
// from the browser then executes the other functions
function main(currentTime){
    window.requestAnimationFrame(main) // request the frame and wait then calls the main func
    console.log(currentTime)
}

window.requestAnimationFrame(main) // request the first time