let inputDirection = {x:0,y:0};
let lastInputDirection = {x:0,y:0};
let touchStart = {x:null,y:null};
let touchEnd = {x:null,y:null};


window.addEventListener('keydown',e => {
    switch(e.key){
        case 'ArrowUp':
            if (lastInputDirection.y!==0)break;
            inputDirection = {x:0,y:-1};
            break;
        case 'ArrowDown':
            if (lastInputDirection.y!==0)break;
            inputDirection = {x:0,y:1};
            break;
        case 'ArrowLeft':
            if (lastInputDirection.x!==0)break;
            inputDirection = {x:-1,y:0};;
            break;
        case 'ArrowRight':
            if (lastInputDirection.x!==0)break;
            inputDirection = {x:1,y:0};
            break;
    }
})

function handleTouch(){
	let touchDiff = {x:touchEnd.x-touchStart.x,y:touchEnd.y-touchStart.y};
	//let ratio = touchDiff.x / touchDiff.y;
	console.log(Math.abs(touchDiff.x)>Math.abs(touchDiff.y));
	if (Math.abs(touchDiff.x)>Math.abs(touchDiff.y)){ // change in x
		if (touchDiff.x>0){
		    if (lastInputDirection.x===0) inputDirection = {x:1,y:0};
		} else {
		    if (lastInputDirection.x===0) inputDirection = {x:-1,y:0};
		}
	} else {
		if (touchDiff.y>0){
		    if (lastInputDirection.y===0) inputDirection = {x:0,y:1};
		} else {
		    if (lastInputDirection.y===0) inputDirection = {x:0,y:-1};;
		}

	}
}

window.addEventListener('touchstart', e => {
	touchStart.x = e.changedTouches[0].screenX;
	touchStart.y = e.changedTouches[0].screenY;
});
window.addEventListener('touchend', e => {
	touchEnd.x = e.changedTouches[0].screenX;
	touchEnd.y = e.changedTouches[0].screenY;
	handleTouch();
})
	

export function getInputDirection(){
    lastInputDirection = inputDirection;
    return inputDirection;
}
