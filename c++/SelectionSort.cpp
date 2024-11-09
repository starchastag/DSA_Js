#include <iostream>
#include <vector>
using namespace std;


// slection sort in decreasing order
void selectionSortDesc(vector<int>& arr) {
    int n = arr.size();
    for (int i = 0; i < n - 1; i++) {
        int maxIndex = i;
        for (int j = i + 1; j < n; j++) {
            if (arr[j] > arr[maxIndex]) // here if arr[j] < arr[maxIndex] then it print the increasing oreder of array  {
                maxIndex = j;
            }
        }
        // Swap the found maximum element with the first unsorted element
        swap(arr[i], arr[maxIndex]);
    }
}

int main() {
    vector<int> arr = {64, 25, 12, 22, 11};
    selectionSortDesc(arr);
    cout << "Sorted array in decreasing order: ";
    for (int num : arr) {
        cout << num << " ";
    }
    return 0;
}
