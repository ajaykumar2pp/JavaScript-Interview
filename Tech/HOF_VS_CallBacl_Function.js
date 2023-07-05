// Higher Order Function 
// Function which takes another function as an arguments is called HOF.

// Callback Function 
//  Function which get passed as an argument to another function is called CBF.


const add=(a,b)=>{
  return a+b;
}

const subt=(a,b)=>{
    return a-b;
  }

//   Master Function HOF

const cal= (num1,num2,operator)=>{
  return operator(num1,num2)
}

console.log(cal(5,6,add))
console.log(cal(5,6,subt))