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

for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}

arr.forEach((x,i)=>{
    console.log(x)
})

for(let x of arr){
    console.log(x);
}

//Question 1 : how do check if an elemenet is exits in array

const findElement = (arr,target) => {
    for(let x of arr){
        if(x === target){
            return true;
        }
    }
    return false;
}
console.log(findElement(arr,"sk"));