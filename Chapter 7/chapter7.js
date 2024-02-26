// document.getElementById("lefteye").style.backgroundColor = "purple";

// document.getElementById("body").style.border = "black";

// document.getElementById("mouth").style.borderRadius = "4px";

// document.getElementById("righteye").style.border = "4px yellow dotted";

// document.getElementById("leftarm").style.backgroundColor = "#FF00FF";

// document.getElementById("body").style.color = "#FF0000";

// document.getElementById("head").style.borderTop = "5px black solid";


// document.getElementById("head").style.rotate = "-12deg"
// document.getElementById("nose").style.borderRadius = "69px"
// document.getElementById("rightarm").style.backgroundColor = "green"
// document.getElementById("mouth").style.border = "5px pink solid "

////////////////////////////////////////////////////////////////////////////////////////////////////

// Animatting robot

// let rightEye = document.getElementById("righteye").onclick = moveUpDown;

// OR

let rightEye = document.getElementById("righteye");
document.getElementById("righteye").addEventListener("click", moveUpDown);
let lefteye = document.getElementById("lefteye");
lefteye.onclick = moveUpDown;
let nose = document.getElementById("nose");
nose.onclick = moveNoseUpDown;
let leftarm = document.getElementById("leftarm");
leftarm.onclick = moveRightLeft;
let rightarm = document.getElementById("rightarm");
rightarm.onclick = moveLeftRight;
let mouth = document.getElementById("mouth");
mouth.onclick = moveMouthLeftRight;


function moveUpDown(event) {
    let robotPart = event.target;
    let t = 0;
    let animation = setInterval(frame, 70);
    function frame() {
        robotPart.style.top = t + "%";
        t++;
        if (t === 21) {
            clearInterval(animation);
        }

    }

}
function moveNoseUpDown(event) {
    let robotPart = event.target;
    let t = 0;
    let animation = setInterval(frame, 10);
    function frame() {
        robotPart.style.top = t + "%";
        t++;
        if (t === 51) {
            clearInterval(animation);
        }

    }

}
function moveRightLeft(event) {
    let robotPart = event.target;
    let left = 0;
    let animation = setInterval(frame, 70);
    function frame() {
        robotPart.style.left = left + "%";
        left++;
        if (left === 71) {
            clearInterval(animation);
        }

    }

}
function moveLeftRight(event) {
    let robotPart = event.target;
    let right = 0;
    let animation = setInterval(frame, 70);
    function frame() {
        robotPart.style.left = right + "%";
        right++;
        if (right === 21) {
            clearInterval(animation);
        }

    }

}
function moveMouthLeftRight(event) {
    let robotPart = event.target;
    let right = 0;
    let animation = setInterval(frame, 70);
    function frame() {
        robotPart.style.left = right + "%";
        right++;
        if (right === 21) {
            clearInterval(animation);
        }

    }

}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// My Animated Robot

