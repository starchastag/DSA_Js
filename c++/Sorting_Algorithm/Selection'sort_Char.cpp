#include <iostream>
#include <vector>
using namespace std;

void selectionSortAsc(vector<char>& arr) {
    int n = arr.size();
    for (int i = 0; i < n - 1; i++) {
        int minIndex = i;
        // Find the index of the minimum element in the unsorted portion
        for (int j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        // Swap the found minimum element with the first unsorted element
        swap(arr[i], arr[minIndex]);
    }
}

int main() {
    vector<char> arr = {'d', 'a', 'c', 'b', 'e'};
    selectionSortAsc(arr);
    cout << "Sorted array in ascending order: ";
    for (char ch : arr) {
        cout << ch << " ";
    }
    return 0;
}
