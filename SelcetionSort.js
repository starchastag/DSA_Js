const arr = [1,3,4,5,7,2,8];

function selectionSortDesc(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let maxIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] > arr[maxIndex]) {
                maxIndex = j;
            }
        }
        // Swap the found maximum element with the first unsorted element
        [arr[i], arr[maxIndex]] = [arr[maxIndex], arr[i]];
    }
    return arr;
}
console.log(selectionSortDesc())