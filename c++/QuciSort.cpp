#include<iostream>
using namespace std;
 int partition(int arr,int st,int ed)
 {
    int pos = st;
    for(int i=st;i<=ed;i++)
    {
        if(arr[i]= arr[ed])
        {
            swap(arr[i],arr[pos]);
        }
    }
    return pos-1;
 }

 void quicksort(int arr,int st,int ed)
 {
    if(start >= end) return;

    int pivot = partition(arr,st,ed);
    quicksort(arr,st,ed);
    quicksort(arr,pivot,end);
 }




int main()
{
    int arr[] = {10,2,3,4,8,9,3,6,7,8,6,45,88};
    quicksort(arr,0,12);
    for(int i=0; i<13;i++)
    {
        ckout<arr[i]<<"";
    }
}

