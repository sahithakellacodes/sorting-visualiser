// Merge Sort
// Time Complexity: O(n log n)
// Space Complexity: O(n)

function merge_sort() {
    color_delay = 0; // Delay for color change
    const n = input_arrayOfSizes.value;
    let arr = listOfBarLengths;
    let divs = listOfBarDivs;
    mergeSort(arr, 0, n - 1, divs);
    enable_buttons();
}

function mergeSort(arr, low, high, divs) {
    if (low >= high) return;
    let mid = Math.floor((low + high) / 2);
    mergeSort(arr, low, mid, divs);
    mergeSort(arr, mid + 1, high, divs);
    merge(arr, low, mid, high, divs);
}

function merge(arr, low, mid, high, divs) {
    let temp = [];
    let left = low;
    let right = mid + 1;

    while (left <= mid && right <= high) {
        updateDiv(divs[left], arr[left], "yellow");
        updateDiv(divs[right], arr[right], "yellow");
        
        if (arr[left] <= arr[right]) {
            temp.push(arr[left]);
            left++;
        } else {
            temp.push(arr[right]);
            right++;
        }
    }

    while (left <= mid) {
        updateDiv(divs[left], arr[left], "yellow");
        temp.push(arr[left]);
        left++;
    }

    while (right <= high) {
        updateDiv(divs[right], arr[right], "yellow");
        temp.push(arr[right]);
        right++;
    }

    for (let i = low; i <= high; i++) {
        arr[i] = temp[i - low];
        updateDiv(divs[i], arr[i], "red");
    }

    for (let i = low; i <= high; i++) {
        updateDiv(divs[i], arr[i], "green");
    }
}