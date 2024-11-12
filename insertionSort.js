function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
      let key = arr[i];           // Element to be positioned
      let j = i - 1;
  
      // Move elements of arr[0...i-1] that are greater than key
      // to one position ahead of their current position
      while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j];
        j = j - 1;
      }
  
      // Place the key in its correct position
      arr[j + 1] = key;
    }
  
    return arr;
  }
  
 br
  const array = [12, 11, 13, 5, 6];
  console.log("Unsorted Array : ", array)
  console.log("Sorted array:", insertionSort(array));
  