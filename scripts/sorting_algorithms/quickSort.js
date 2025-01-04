// Quick Sort
// Time Complexity: O(n log n)
// Space Complexity: O(n)

function quick_sort() {
    color_delay = 0; // Delay for color change
    const n = input_arrayOfSizes.value;
    let arr = listOfBarLengths;
    let divs = listOfBarDivs;
    quickSort(arr, 0, n - 1, divs, n);
    enable_buttons();
}

function quickSort(arr, low, high, divs, n) {
    if (low < high) {
        let pIndex = partition(arr, low, high, divs);
        updateDiv(divs[pIndex], arr[pIndex], "green");
        quickSort(arr, low, pIndex - 1, divs);
        quickSort(arr, pIndex + 1, high, divs);
    }
    
    for (let i = 0; i < n; i++) {
        updateDiv(divs[i], arr[i], "green");
    }
}

function partition(arr, low, high, divs) {
    let pivot = arr[low];
    let i = low;
    let j = high;
    updateDiv(divs[pivot], arr[pivot], "yellow");
    updateDiv(divs[i], arr[i], "yellow");
    updateDiv(divs[j], arr[j], "yellow");


    while (i < j) {
        while (arr[i] <= pivot && i <= high - 1) {
            updateDiv(divs[i], arr[i], "blue");
            i++;
            if (i <= high - 1) {
                updateDiv(divs[i], arr[i], "yellow");
            }
        }
        while (arr[j] > pivot && j >= low + 1) {
            updateDiv(divs[j], arr[j], "blue");
            j--;
            if (j >= low + 1) {
                updateDiv(divs[j], arr[j], "yellow");
            }
        }
        if (i < j) {
            updateDiv(divs[i], arr[i], "red");
            updateDiv(divs[j], arr[j], "red");
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            updateDiv(divs[i], arr[i], "red");
            updateDiv(divs[j], arr[j], "red");
        }
        updateDiv(divs[i], arr[i], "blue");
        updateDiv(divs[j], arr[j], "blue");
    }
    updateDiv(divs[low], arr[low], "red");
    updateDiv(divs[j], arr[j], "red");
    let temp = arr[low];
    arr[low] = arr[j];
    arr[j] = temp;
    updateDiv(divs[low], arr[low], "red");
    updateDiv(divs[j], arr[j], "red");
    updateDiv(divs[low], arr[low], "blue");
    updateDiv(divs[j], arr[j], "blue");
    return j;
}