// what is array 
/* 
array is a collection of items in single variable . array in javascript beacaue in js we can store diff type data in array.

array.length -1 == find the last element of array;
array.pop() = it will delete the last element of the array;
array.push() = it will add element in the last of the element in the array;
array.unshift() = it will add element in the starting of the lemene of the array;
array.shift() = it will deleted the first element of the array;


                           loop in array===>
  


*/
                           
const arr = [1,2,3,4,5,6,"sk","ram"];

// for(let i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }

// arr.forEach((x,i)=>{
//     console.log(x)
// })

// for(let x of arr){
//     console.log(x);
// }

// //Question 1 : how do check if an elemenet is exits in array

// const findElement = (arr,target) => {
//     for(let x of arr){
//         if(x === target){
//             return true;
//         }
//     }
//     return false;
// }
// console.log(findElement(arr,"sk"));

// //Question 2 : how do check if an elemenet is exits in array

// const findElements = (arr,target) => {
//     for(let i=0;i<arr.length;i++){
//         if(arr[i] === target){
//             return i;
//         }
//     }
//     return -1;
// }
// console.log(findElements(arr,"sh"));

// // ---------------------How to delete , update , element into the array 

// // arr.splice()------ splice method is used to cut the element form the array  and make new arry and save those elements into new arrays 


// console.log(arr)
//  const sp = arr.splice(1,3)
// console.log(sp);


// console.log(arr);
//  arr.splice(1,0,2,3,4,5,6,7,8,9) // here by using splice method adding  2 3 4 5 6 7 8 9  element because splice(start_index,End_index,elements which want to add in to array) here end_index is 0 so it can added those element . 
// console.log(arr)

// arr.splice(1,3,6,7,8,9) // here i delete three element which startfrom 1 to 3 index and here i add 6798 elements 
// console.log(arr)

//slice() method into array 
// slice does not change the array  


// ---------------copy of array -----------------😑

// -shallow copy of array-------😑

const arr9 =  arr;
arr9.splice(1.4);
console.log(arr9,arr)

//shallow copy in javascript is point to same reference if i change in copy of array then it will be change the original array 


// deep copy of array 
// deep copy of array is done by using spread operator and it cannot point to same refrence or same memory location 

const arrC = [...arr];
console.log(arrC,arr);


// how to add two array 
const arr4 = [...arr9,...arrC]
const newArr = arr.concat(arrC)
console.log(newArr)