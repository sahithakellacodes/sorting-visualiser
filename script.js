// Get required elements from the DOM
let input_speed = document.getElementById('speed');
let btn_generate_array = document.getElementById('generate-array');
let input_arrayOfSizes = document.getElementById('array-size');

let btn_algos = document.querySelectorAll(".algorithm-picker button");

let listOfBarLengths = [];
let listOfBarDivs = [];
let margin_size;
let array_container = document.getElementById('array-container');
array_container.style = "flex-direction:row";

// Add event listeners to the buttons
btn_generate_array.addEventListener("click", generate_array);
input_arrayOfSizes.addEventListener("input", update_arrayOfSizes);

// Function to generate array
function generate_array() {
    array_container.innerHTML = "";
    listOfBarDivs = [];
    listOfBarLengths = [];
    for (let i = 0; i < input_arrayOfSizes.value; i++) {
        listOfBarLengths.push(Math.floor(Math.random() * 100) + 1);
        margin_size = 0.1;
        let bar = document.createElement("div");
        bar.style = `margin:0% ${margin_size}%; background-color:blue; width:${100 / input_arrayOfSizes.value}% ; height:${listOfBarLengths[i]}%; border-radius: 2px;`;
        array_container.appendChild(bar);
        listOfBarDivs.push(bar);
    }
}

// Function to update array size
function update_arrayOfSizes() {
    generate_array();
}

window.onload = update_arrayOfSizes();

// Add event listeners to the algorithm buttons. Run that algorithm when clicked
for (let i = 0; i < btn_algos.length; i++) {
    btn_algos[i].addEventListener("click", runAlgorithm);
}

// Function to run the algorithm
function runAlgorithm() {
    console.log("Running Algorithm");
    disable_buttons();
    let algo = this.innerHTML;
    if (algo == "Bubble Sort") {
        console.log("Bubble Sort");
        bubble_sort();
    } else if (algo == "Selection Sort") {
        selection_sort();
    } else if (algo == "Insertion Sort") {
        insertion_sort();
    } else if (algo == "Merge Sort") {
        merge_sort();
    } else if (algo == "Quick Sort") {
        quick_sort();
    }
    else if (algo == "Heap Sort") {
        heap_sort();
    }
}

// Function to disable buttons while the algorithm is running
function disable_buttons() {
    for (let i = 0; i < btn_algos.length; i++) {
        btn_algos[i].disabled = true;
    }
    input_arrayOfSizes.disabled = true;
    input_speed.disabled = true;
    btn_generate_array.disabled = true;
}