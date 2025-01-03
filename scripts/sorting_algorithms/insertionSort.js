// Insertion Sort
// Time Complexity: O(n^2)
// Space Complexity: O(1)

function insertion_sort() {
    color_delay = 0; // Delay for color change
    const n = input_arrayOfSizes.value;
    let arr = listOfBarLengths;
    let divs = listOfBarDivs;

    for (let i = 0; i < n; i++) {
        let j = i;
        // Put yellow color on the bar being compared
        updateDiv(divs[j], arr[j], "yellow");

        while (j > 0 && arr[j - 1] > arr[j]) {
            // Put red color on the bar being swapped
            updateDiv(divs[j], arr[j], "red");
            updateDiv(divs[j - 1], arr[j - 1], "red");

            const temp = arr[j - 1];
            arr[j - 1] = arr[j];
            arr[j] = temp;

            // update the lengths
            updateDiv(divs[j], arr[j], "red");
            updateDiv(divs[j - 1], arr[j - 1], "red");

            // Put blue color on the bar after comparision
            updateDiv(divs[j], arr[j], "blue");
            updateDiv(divs[j - 1], arr[j - 1], "yellow");

            j--;
        }

        // Put green color on the bar after sorting
        for (let k = 0; k <= i; k++) {
            updateDiv(divs[k], arr[k], "green");
        }
    }

    enable_buttons(); // Enable buttons after sorting
    return;
}
