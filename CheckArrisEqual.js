const arr =  [1,2,3,4,5,6,"sk","ram"];

const newArr = [...arr];
console.log(newArr)
const Arr = [...arr]
console.log(Arr);


const isArrayEquals = (Arr, newArr) =>{
    // if(Arr.length() !== newArr.length()){
    //     return false;
    // }
    // for(let i =0;i<Arr.length();i++){
    //     if(Arr[i] !== newArr[i]){
    //         return false;
    //     }
    // }
    return Arr.length === newArr.length && Arr.every((ele,i) => Arr[i] === newArr[i]);

}
console.log(isArrayEquals([1,2,3][1,2,3]))