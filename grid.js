const GRID_SIZE = 21;

export function randomGridPosition(){
    return {
        x: Math.floor(Math.random()*GRID_SIZE) +1, // add 1 so it isn't between 0 and 20
        y: Math.floor(Math.random()*GRID_SIZE) +1 // add 1 so it isn't between 0 and 20
    }
}