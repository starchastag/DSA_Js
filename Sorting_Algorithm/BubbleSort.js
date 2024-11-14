/* Bubble Sort is a simple sorting algorithm that repeatedly steps through the list to be sorted, compares each pair of adjacent items, and swaps them if they are in the wrong order. The process is repeated until no more swaps are needed, indicating that the list is sorted.

Steps of Bubble Sort:

Start from the beginning of the array.
Compare the first element with the next one.
If the first element is greater than the next element, swap them.
Move to the next pair and repeat the comparison and swapping steps.
Continue this until the end of the array. This completes one full pass.

Repeat the process for all elements until no swaps are needed, meaning the array is sorted. 

*/
function bubbleSort(arr) {
    let n = arr.length;
    // Traverse the array
    for (let i = 0; i < n - 1; i++) {
        // Track if any swaps were made during this pass
        let swapped = false;
        // Last i elements are already sorted
        for (let j = 0; j < n - i - 1; j++) {
            // Compare and swap if needed
            if (arr[j] > arr[j + 1]) {
                // Swap arr[j] and arr[j+1]
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapped = true;
            }
        }
        // If no swaps were made, the array is sorted
        if (!swapped) break;
    }
    return arr;
}

// Example usage:
const numbers = [64, 34, 25, 12, 22, 11, 90];
console.log("Unsorted Array is : ", numbers)
console.log("Sorted array: ", bubbleSort(numbers));


/*

Outer loop (for i): Runs n-1 times where n is the length of the array.
Inner loop (for j): Runs n-i-1 times for each pass, as the last elements are already sorted.
Swap condition: If arr[j] > arr[j+1], swap these two elements.
Swapped flag: If no swaps were made during a pass, it means the array is already sorted, and we can break out of the loop early.


How Bubble sort works step by step : 

Start at the beginning of the array.

Compare the first and second elements. If the first element is larger, swap them.

Move to the next pair of elements and repeat the comparison and swap process.

Continue this for each adjacent pair until the end of the array is reached.

After each pass, the largest unsorted element will be at the end, so the next pass can ignore the last sorted element.

Repeat until no more swaps are needed.
*/
