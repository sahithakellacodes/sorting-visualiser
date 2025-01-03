// Bubble Sort
// Time Complexity: O(n^2)
// Space Complexity: O(1)

function bubble_sort() {
    console.log("Bubble Sort");
    color_delay = 0; // Delay for color change
    const n = input_arrayOfSizes.value;
    let arr = listOfBarLengths;
    let divs = listOfBarDivs;

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            updateDiv(divs[j], arr[j], "yellow"); // Put yellow color on the bar being compared

            if (arr[j] > arr[j + 1]) {
                updateDiv(divs[j], arr[j], "red"); // Put red color on the bar being swapped
                updateDiv(divs[j + 1], arr[j + 1], "red"); // Put red color on the bar being swapped

                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;

                updateDiv(divs[j], arr[j], "red"); // Put red color on the bar being swapped
                updateDiv(divs[j + 1], arr[j + 1], "red"); // Put red color on the bar being swapped
            }

            updateDiv(divs[j], arr[j], "blue"); // Put blue color on the bar after comparision
        }
        updateDiv(divs[n - 1 - i], arr[n - 1 - i], "green"); // Put green color on the bar after sorting
    }
    updateDiv(divs[0], arr[0], "green"); // Put green color on the first bar after sorting

    enable_buttons(); // Enable buttons after sorting
    return;
}