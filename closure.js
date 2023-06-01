// execution content

// const username="ajay kumar"
// function login(){
//     const password ="secret"
//     console.log(`${username}is logging in using ${password}`)

// }
// login();


// ******************************   //
// closure

// function callApi(method){
//     return function(url){
//         console.log(`Fetching data from ${url} using ${method}`)
//    //Execution contect for callApi function
//     }
// }
// //Globval Execution context

// const url="http://example.com"
// const api=callApi("GET")
// api(url)


// let count = 0
// function updateCount() {
   
//     count++;
//     console.log(count)
// }
// count =7
// console.log(count)
// updateCount();


// function updateCount() {
//     let count = 0
//     count++;
//     console.log(count)
// }
// count =7
// console.log(count)
// updateCount();


// let count =0;
// function updateCount(){
// count++;
// }
// updateCount();
// console.log(count)


// function updateCount() {
//     let count = 0
//     count++;
//     console.log(count)
// }
// updateCount();
// updateCount();

// function counterwrapper(){
//     let count = 0;
//     return function(){
//         count++;
//         console.log(count)
//     }
// }

// const updateCount= counterwrapper();
// updateCount();
// updateCount();


// Important Lexical question
// function init(){
//     let name="ajay"
//     function greet(){
//         console.log(name)
//     }
//     return greet
// }
// let sayHi = init();
// sayHi();


// IIFE - Immediately Invoked Function 
// 1 This practice was popular due to var .
// Immediately invoking a function avoids- re-declaration of variable inside it
 
(function(){
    var x=1;
})()
console.log(x) 
(function(a){
var x=a;

})()  