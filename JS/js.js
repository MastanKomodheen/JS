//map function
// Defination : A map method is used to iterate over elements of an array and create a array based on the result of applying a callback function
// each element in the original array.It does not change the original array but returns the new array with the same length as the original one,
//where each element is the result of applying the provided function to the corresponding element of the original array.
// Example:there are passing three parameters currentValue,index,array
// const arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
// arr.map(data => console.log(data.toString(2)))//converting binary
// arr.map((curentValue, index, array) => {
//     console.log(curentValue, index, array)
//     // console.log(index)
//     // console.log(array)
// })

//ForEach
// Defination:ForEach method is used to iterate over elements of an array and execute a provided callback function once for each element in the array in assending order
// const numbers = [1, 2, 3, 4, 5];
// numbers.forEach((currentvalue,index,array)=>console.log(currentvalue,index,array))
// numbers.forEach((array,index)=>console.log(array,index))
// numbers.forEach((currentvalue)=>console.log(currentvalue))
// numbers.forEach((index)=>console.log(index))


//reduce
// Defination:It is used to itarate the over elements of an array and perform a cumulative operation these elements,ultimately returning a single value;
// parameters:accumlator,initialvalue

// const num=[1,2,3,4,5,6,7,7,10]
// const reducedata=num.reduce((accu,inialvalue)=>{
//     return accu+inialvalue
// })
// console.log(reducedata)

// filter
// Defination:filter method is  used to filter of an array based on provided  condition.it creates the new array containing only the elelments
// that pass the specified condition
// const arr=[1,2,3,4,5,6,7,8,9,10];
// const arrayFilter=arr.filter(element=> {return element%2==0})
// console.log(arrayFilter)
// const arrfind=arr.includes(2)
// console.log(arrfind)
// Using a for loop or forEach loop: You can iterate through the array and manually check each element.
// let fundElement;
// for(const element of arr){
//     if(element==9){
//         fundElement=element;
//         break;
//     }
// }
// console.log(fundElement)



// let fundElement;
// for(let i=0;i<arr.length;i++){
//     if(arr[i]==9){
//         fundElement=arr[i];
//         break;
//     }
// }
// console.log(fundElement)

// console.log(1<2<3)
// console.log(3>2>1)

