let defaultSpeed = 1000;
let speed = defaultSpeed;

let delay = 10000 / (Math.floor(input_arrayOfSizes.value / 10) * speed); // Delay for sorting algorithm
let color_delay = 0; // Delay for color change

// Get animation speed from user input
input_speed.addEventListener('input', setAnimationSpeed);

// Function to set animation speed
function setAnimationSpeed() {
    let animationSpeed = parseInt(input_speed.value);
    if (animationSpeed == 1) {
        speed = 1;
    }
    else if (animationSpeed == 2) {
        speed = 10;
    }
    else if (animationSpeed == 3) {
        speed = 100;
    }
    else if (animationSpeed == 4) {
        speed = 1000;
    }
    else {
        speed = 10000;
    }

    delay = 10000 / (Math.floor(input_arrayOfSizes.value / 10) * speed);
}

// Function to update style of div elements
function updateDiv(array_container, height, color) {
    window.setTimeout(function () {
        array_container.style = " margin:0% " + margin_size + "%; width:" + (100 / input_arrayOfSizes.value - (2 * margin_size)) + "%; height:" + height + "%; background-color:" + color + ";";
    }, color_delay += delay);
}

// Function to enable buttons
function enable_buttons() {
    window.setTimeout(function () {
        for (let i = 0; i < btn_algos.length; i++) {
            btn_algos[i].classList = [];
            btn_algos[i].classList.add("butt_unselected");

            btn_algos[i].disabled = false;
            input_arrayOfSizes.disabled = false;
            input_speed.disabled = false;
            btn_generate_array.disabled = false;
        }
    }, color_delay += delay);
}