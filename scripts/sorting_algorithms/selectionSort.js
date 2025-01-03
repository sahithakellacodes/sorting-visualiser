// Selection Sort
// Time Complexity: O(n^2)
// Space Complexity: O(1)

function selection_sort() {
    color_delay = 0; // Delay for color change
    const n = input_arrayOfSizes.value;
    let arr = listOfBarLengths;
    let divs = listOfBarDivs;

    for (let i = 0; i < n - 1; i++) {
        let min_index = i;
        updateDiv(divs[i], arr[i], "yellow");

        for (let j = i + 1; j < n; j++) {
            updateDiv(divs[j], arr[j], "yellow"); 

            if (arr[j] < arr[min_index]) {
                updateDiv(divs[min_index], arr[min_index], "blue");
                min_index = j;
                updateDiv(divs[min_index], arr[min_index], "yellow");
            } else {
                updateDiv(divs[j], arr[j], "blue");
            }
        }

        if (min_index != i) {
            updateDiv(divs[i], arr[i], "red");
            updateDiv(divs[min_index], arr[min_index], "red");

            let temp = arr[i];
            arr[i] = arr[min_index];
            arr[min_index] = temp;

            updateDiv(divs[i], arr[i], "red");
            updateDiv(divs[min_index], arr[min_index], "red");
            updateDiv(divs[min_index], arr[min_index], "blue");
        }

        updateDiv(divs[i], arr[i], "green");
    }
    updateDiv(divs[n - 1], arr[n - 1], "green");

    enable_buttons();
}