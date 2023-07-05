//  The Reducer function take four arguments:

// Accumulator
// Current Value
// Current Index
// Source Array

let arr =[2 ,5,7,9,3]

// let sum = arr.reduce((acc,curr)=>{
//     debugger;
//    return acc+curr;
// })

// console.log(sum) //26

let avg= arr.reduce((acc,currentValue, index,array)=>{
    let total = acc+=currentValue;
    if(index===array/length-1){
        return  total/array.length
    }
    return total
  
})
console.log(avg)