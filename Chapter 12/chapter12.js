let carSpeed = 70;
let carPosition = 0;
let animation;

let train = document.getElementById("car");
train.addEventListener("click", speedUp);

let stopButton = document.getElementById("stopButton");
stopButton.addEventListener("click", stopCar);

function speedUp() {
    if (carSpeed > 10) {
        carSpeed -= 10;
    }
    console.log("car speed: " + carSpeed);

    clearInterval(animation);
    animation = setInterval(frame, carSpeed);


    function frame() {
        carPosition += 2;
        train.style.left = carPosition + 'px';
        console.log(carPosition);
        checkPosition(carPosition);
    }
}

function checkPosition(currentPosition) {
    if (currentPosition === 1570) {
        alert("You crashed!");
        console.log("Crash!");
        clearInterval(animation);
    }
}

function stopCar() {
    if (carPosition < 1900) {
        clearInterval(animation);
        console.log("Whew! That was close!");
    }
}