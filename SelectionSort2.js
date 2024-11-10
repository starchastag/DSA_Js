function selectionSortQnA(arr) {
    let n = arr.length;
    console.log("Initial array:", arr.join(", "));

    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        console.log(`Step ${i + 1}: Looking for the smallest element from index ${i} to ${n - 1}.`);

        // Find the minimum element in the unsorted portion
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        // Ask the user if they want to swap elements
        if (minIndex !== i) {
            console.log(`Smallest element found at index ${minIndex} (${arr[minIndex]}).`);
            console.log(`Swapping ${arr[i]} with ${arr[minIndex]}.`);

            // Swap the found minimum element with the first unsorted element
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
            console.log("Array after swap:", arr.join(", "));
        } else {
            console.log(`No need to swap, ${arr[i]} is already in the correct position.`);
        }
    }

    console.log("Sorted array in ascending order:", arr.join(", "));
}

// Example usage:
const arr = ['d', 'a', 'c', 'b', 'e'];
selectionSortQnA(arr);
