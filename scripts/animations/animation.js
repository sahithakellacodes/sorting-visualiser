let defaultSpeed = 100;
let speed = defaultSpeed;

let delay = 10000 / (Math.floor(input_arrayOfSizes.value / 10) * speed); // Delay for sorting algorithm
let color_delay = 0; // Delay for color change

// Get animation speed from user input
input_speed.addEventListener('input', setAnimationSpeed);

// Function to set animation speed
function setAnimationSpeed() {
    let speed = parseInt(input_speed.value);
    delay = 10000 / (Math.floor(input_arrayOfSizes.value / 10) * speed);
}

// Function to update style of div elements
function updateDiv(array_container, height, color) {
    window.setTimeout(function () {
        array_container.style = " margin:0% " + margin_size + "%; width:" + (100 / input_arrayOfSizes.value - (2 * margin_size)) + "%; height:" + height + "%; background-color:" + color + "; border-radius: 2px;";
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