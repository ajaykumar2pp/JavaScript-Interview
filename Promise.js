// promise all concept

// what is Promise
// Ans: A promise is an object that returns a value which you hope to recieve in the future, but not now

// why need Promise ?
// Ans: JavaScript is always synchronous and single-thread languange .It means JavaScript never wait for code or function result when they take some time . JavScript direct excute next code .

// let name="ajay kumar";
// console.log(name)
// name="vijay kumar"
// setTimeout(()=>{
// console.log(name)
// },2000)
// name ="Raja kumar"
// console.log(name)

// let data = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve({name:"ajay",code:"js"})
//         // resolve("code has been excuted")
//     },3000)

// })
// data.then((item)=>{
// console.log(item)
// })
// console.log("hello")

// *******************  Some error ********************//

// let data = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         reject("Your code is not execute")
//         // resolve("code has been excuted")
//     })

// })
// data.then((item)=>{
// console.log(item)
// }).catch((err)=>{
//     console.log("error",err)

// })

// let data = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Ajay kumar")
//         // reject("Ajay kumar")
//     })

// })
// data.finally((item)=>{
//      console.log("finally block" , item)
// })
// data.then((item)=>{
//    console.log("then block",item)
// }).catch((item)=>{
//    console.log("catch block", item)
// })



// // *******************  API call use Promise *********************//
// let data = fetch("https://dummy.restapiexample.com/api/v1/employees");

// data.then((item)=>{
//    return item.json();
// }).then((result)=>{
//     console.log(result)
// })

// what is finally keyword

// Promise.all 
// promise.allsettled
// promise.race



// *******************************  Learning End Promises  *********************//

let myPromise = new Promise((resolve,reject)=>{
    document.write("Pending...........")
    // setTimeout function 
    setTimeout(()=>{
        
        let a= 1+2;
        if(a==3){
            resolve("pass")
        }
        else{
            reject("failed")
        }
    

    },4000)
   
})

myPromise.then((msg)=>{
    document.write(msg+"- Promise Fullfilled")

}).catch((msg)=>{
   document.write(msg+"- Promise Rejected")
})

console.log(myPromise)

// what is Synchronous in JS ?
// synchronous programming is aprogramming model where operations take place sequentially..

// what is Asynchronous in JS ?
// Asynchrous programming is a programming model where  operations does not dependent on each other..

