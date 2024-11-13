// function swap(arr,i,j)
// {
//     let temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
// }

// function partition(arr,start,end)
// {
//     // let pivot = arr[end];
//     let i = start -1;

//     for(let j = start; j < end; i++)
//     {
//         if(arr[j] <= arr[end])
//         {
//             i++;
//             swap(arr,i,j);
//         }
//     }
//     swap(arr[i+1],arr[start]);
//     return i + 1;
// }

// function quickSort(arr,start,end)
// {
//     if(start<= end)
//     {
//         let pivotIndex = partition(arr,end ,start);

//         quickSort(arr,end,pivotIndex - 1);
//         quickSort(arr,pivotIndex +1 , start)
//     }
// }

// let arr = [10,7,8,9,1,5,3]
// console.log("Orginal Array : ",arr);

// quickSort(arr,0,arr.length -1);
// console.log("Sorted Array : ",arr);


function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function partition(arr, low, high) {
    let pivot = arr[high]; // Choosing the last element as pivot
    let i = low - 1;

    for (let j = low; j < high; j++) {
        if (arr[j] < pivot) {
            i++;
            swap(arr, i, j);
        }
    }
    swap(arr, i + 1, high);
    return i + 1; // Returning the pivot index
}

function quickSort(arr, low, high) {
    if (low < high) {
        let pivotIndex = partition(arr, low, high);

        // Recursively sort elements before and after partition
        quickSort(arr, low, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, high);
    }
}

// Example usage
let arr = [10, 7, 8, 9, 1, 5];
console.log("Original array:", arr);

quickSort(arr, 0, arr.length - 1);

console.log("Sorted array:", arr);
