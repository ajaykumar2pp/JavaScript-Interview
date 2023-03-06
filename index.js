// const name = "hello ajay";
// const age =21;
// console.log(Number.isNaN(name)); //false
// console.log(Number.isNaN(age));  //false

// console.log(isNaN(name));  //true  //is not a number
// console.log(isNaN(age));  // false  // is  not a number 


// Remove string before specific word

// convert string into array 
// let str = "hello, how are you ";
// console.log(str.split())  convert single array 
// console.log([str])   convert single array 
// console.log([...str]);  convert single character array
// console.log(str.split(""));  convert single character array
// console.log(str.split(' '))  convert word into the array
// console.log(str.split('a')); 
// console.log(str.replace('h','_'));  replace any character  Get substring from string
// console.log(str.replace(/h/g,'_')) replace all character 
// console.log(str.substring(6,10))  Get substring from string
// console.log(str.substring(1,str.length)) remove first character 
// console.log(str.substring(0,str.length-2)); Remove last character
// let temp = str.split('o')
// console.log(temp[0]) // Remove string before specific character
// let temp=str.split("").reverse().join("")
// console.log(temp)  Reverse strinf
// console.log(str.trim())  // remove extre space from both side

// function fruit(){
//     console.log(name)   //undefined
//     console.log(price)  // Uncaught ReferenceError: Cannot access 'price' before initialization
//     var name ="ajay"
//     let price =200;
// }
// fruit();

// for(var i=0;i<3;i++){
//     setTimeout(()=>
//         // console.log((i),1));  (3,1)
//         console.log(i),1);   (333)
// }

// for(let i=0;i<3;i++){
//     setTimeout(()=>{
//         console.log(i),1;    (0,1,2)
//     })
// }

// console.log(+true);   1
// console.log(typeof +true)  Number

// console.log(!"ajay")  false
// console.log(typeof ("ajay")) string

// string convert into boolean 
// console.log(!!"ajay")

// let shivam = "size";
// let jaay = "ss"
// let data = "size";
// const bird ={
//     size:"small",
// };
// console.log(bird[shivam]);  //small
// console.log(bird["size"]);  //small
// console.log(bird.size);   //small
// console.log(bird.data);  //undefined
// console.log(bird[jaay])   //undefined


// let c ={
//     name:"ajay kumar"
// }
// let d;
// d=c;
// console.log(d)
// console.log(c)
// c.name ="vijay kumar";
// console.log(c)
// console.log(d.name)   // Vijay kumar

// var x;
// var x=10;
// console.log(x) //10

// var x;
// let x=10;
// console.log(x) // Identifier 'x' has already been declared


// let a=3;
// let b =new Number(3);
// console.log(typeof b)  //object
// console.log(a==b);  //ture
// console.log(a===b)  //false

// let name;
// nmae ={}
// console.log(name); //undefined

// function fruit(){
//     console.log("woof");  //woof
// }
// fruit.name ="apple";
// fruit()


// function sum(a,b){
//     return a+b;
// }
// console.log(sum(1,"2"))  //12

// let number =0 ;

// console.log(number++);  //0
// console.log(++number);   //2
// console.log(number);   //2


// let number =0 ;

// console.log(number--);  //0
// console.log(--number);   //-2
// console.log(number);   //-2

// function getAge(...args){
//  console.log(typeof args)   // type of array is Object
// }
// getAge(22);

// function getAge(){
// 'use strict';
// age=21;
// console.log(age);   // age is not defined
// }
// getAge();

// function getAge(){
// age=21;
// console.log(age);   // age is 21
// }
// getAge();

// const sum = eval('10*10+5');  //105
// console.log(sum)

// how long is cool_secret sccssible ?
// sessionStorage.setItem('cool_secret',123)  //]
//  This is a session storage . It will be remove automatcally.whwnever you  also close the browser

// const obj ={ 1:"a",2:"b",3:"c"};
// obj.hasOwnProperty("1");
// console.log(obj.hasOwnProperty("1"))
// obj.hasOwnProperty(1);
// console.log(obj.hasOwnProperty(1))

// const obj ={ hello:"a",2:"b",3:"c"};
// console.log(obj.hasOwnProperty("hello"))  //true
// console.log(obj.hasOwnProperty(hello))   //hello is not defined

// const obj= {a:"one",b:"two",a:"repeat" , b:"same"}
//  console.log(obj)  // a:"repeat", b:"same" 

// for(let i=0; i<5;i++)
// {
//     if(i==3)
//     continue;
//     console.log(i)  0,1,2,4
// }


// const foo =()=> console.log("First"); 
// const bar =()=>setTimeout(()=>console.log("second")) ;
// const biz =()=> console.log("Third");

// bar();
// foo();
// biz();
//first
//third
//second

// const person ={name:"ajay"};
// function sayHi(age){
//     return `${this.name} is ${age}`;
// }

// console.log(sayHi.call(person,22)); // ajay is 22
// console.log(sayHi.bind(person,22));  // we can call self again

// const person ={name:"ajay"};
// function sayHi(age){
//     return `${this.name} is ${age}`;
// }

// console.log(sayHi.call(person,22)); // ajay is 22
// console.log(sayHi.bind(person,22)());  // ajay is 22

// function sayHi(){
//     return (()=>0)();
// }
// console.log(typeof sayHi());  //number

// function sayHi(){
//     return ()=>0
// }
// console.log(typeof sayHi());    //function

// console.log(typeof typeof 1)  // string

// const number =[1,2,3];
// number[9]=11;
// console.log(number) //length =10, 1,2,3,empty*6,11

// const numbers =[1,2,3]
// numbers[3]=numbers;
// console.log(numbers)  //infinte array


// Everything in javascript is either a....
// primitive or object   =>> Ans
// function or object 
// trick qustion only object
// number or object

// console.log(!!null)  //false
// console.log(!!"")  //false
// console.log(!!1)    //true

// console.log(setInterval(()=> console.log("hi"),1000))
// console.log(setInterval(()=> console.log("hi"),1000))
// console.log(setInterval(()=> console.log("hi"),1000)) //infinite loop

// console.log(..."ajay")
// console.log([..."ajay"])

// let data =3+4+"5";
// console.log(typeof data) //string

// console.log(typeof 3+4+'5') // number45

// console.log(typeof (3+4+ +'5')) // number

// console.log([]==[]) // false  they have different memmory location

// let data =[1,2,3].map(num =>{
//     if(typeof num ==="number") return;

//     return num*2;
// })
// console.log(data)//  [undefined, undefined, undefined]

// function getInfo(member){
//     member.name="ajay";
// }
//     const person ={
//         name:"vijay"
//     }
//     getInfo(person);
//     console.log(person)  //name:"ajay"

// function Car(){
//     this.make="tata";
//     return { make:"kia"};
// }

// const myCar = new Car();
// console.log(myCar.make)  //Kia

// (()=>{
//     let x =(y=10);
// })();

// console.log(typeof x)  //undefined

// (()=>{
//     let x =y=10;
// })();

// console.log(typeof y)  //number

// (()=>{
//     let x =(y=10);
// })();

// (()=>{
//     let x =(y=10);
// })();

// console.log(typeof x)  //undefined
// console.log(y) //20

// console.log(!true-true) //-1

// console.log(true + +"10")  //11

// let a =[];
// let b=[];
// console.log(a===b);  //false
// console.log(a==b);   //false

// let a=[];
// let b=a;
// console.log(a==b)  //ture
// console.log(a===b)    //true

// let a= [20];
// let b= [20];
// console.log(a[0]==b[0])  //true
// console.log(a[0]===b[0])    //true

// let a= [20];
// let b= ['20'];
// console.log(a[0]==b[0])  //true
// console.log(a[0]===b[0])    //false beacuse type check 1st is number and 2nd is string


// let z= [1,2,3,4];
// console.log(typeof z)  // type object 
// let a ={name:"ajay"}
//                                     //   Break array into string
// console.log(...z)


// console.log(typeof NaN)  //number   string/number  = NaN(Not A Number)

// let data = 10 - -10;   - - = +
// console.log(data) //20

// const set = new Set([1,1,2,3,4])
// console.log(set)    //remove dublicate element  Set(4) {1, 2, 3, 4} 

// let data = {
//     name:"ajay"
// }
// console.log(delete data.name);  //true  delete operator 
// console.log(data.name);   //undefined
// console.log(data);  //empty object
// console.log( delete data); //flase

// let data =["ajay","vijay","raja"];
// const [y]= data;
// console.log(y)   // ajay

// let data =["ajay","vijay","raja"];
// const [y,z]= data;
// console.log(y,z)   // ajay  vijay

// let data =["ajay","vijay","raja"];
// const [,y]= data;
// console.log(y)   //  vijay

// let data =["ajay","vijay","raja"];
// const [,,y]= data;
// console.log(y)   //  raja


// const data ={name:"ajay", age:12,skill:"js"}
// const {age,skill} = data;
// console.log(age,skill)   // 12 js
// // how to get name property without (.) operator

// let data ={name:"ajay",age:12,skill:"js"};
// let info ={city:"haridwar",DD:"CLI"}
// let a ={...data,...info}
// console.log(a)  //{name: 'ajay', age: 12, skill: 'HTML', city: 'haridwar', DD: 'CLI'}
// How to merge two object

// let data ={name:"ajay",age:12,skill:"js"};
// let info ={city:"haridwar",DD:"CLI"}
//  data ={data,...info}
// console.log(data)

// let data ={name:"ajay",age:12,skill:"js"};
// let info ={city:"haridwar",DD:"CLI",skill:"HTML"}
// data ={...data,...info}
// console.log(data)  //{name: 'ajay', age: 12, skill: 'HTML', city: 'haridwar', DD: 'CLI'}

// const name ="ajay";
// console.log(name()) //Uncaught TypeError: name is not a function

// const result = false || {} || null;
// console.log(result)  //{}

// const result = false || 20 || null;
// console.log(result)  //20

// const result = null || false || "";  //      " " = empty string  pick the last value
// console.log(result)  // empty string


// const result = null || "" || false;  //  false  // pick the last value
// console.log(result)  // empty string

// const result = [] || 0 || true;  // []
// console.log(result)

// console.log(Promise.resolve(5));  //Promise {<fulfilled>: 5}

// console.log("❤"==="❤");  //true

// what this method will do  ( JSON.parse(); )
// A: Parse JSON to a JavaScript value           =>>     Ans
// B: Parses a JavaScript object to JSON
// C: Parses any JavaScript value to JSON
// D: Parses Json to a JavaScript value to JSON


// Important Question
// var name = "ajay"
// function getName() {
//     console.log(name)  // Cannot access 'name' before initialization at getName
//     var name = "vijay"
// }

// getName();

// var name = "ajay"
// function getName() {
//     console.log(name)  // unefined
//     var name = "vijay"
// }

// getName();

// var name = "ajay"
// function getName() {
//     console.log(name)  /// Cannot access 'name' before initialization at getName
//     let name = "vijay"
// }

// getName();

// let name="ajay"
// function getName(){
//     console.log(name)  //ajay
// }
// getName();

// var name="ajay"
// function getName(){
//     console.log(name)  //ajay
// }
// getName();

// console.log(`${(x=>x)('I Love')} to program`); //I Love to program

// function sumValue(x,y,z){
//     return x+y+z;
// }

// console.log(sumValue(...[1,2,3]))
// sumValue([...1,2,3]);
// sumValue([...[1,2,3]]);
// sumValue(...[1,2,3])   Ans:6
// sumValue([1,2,3])

// const name="ajay kumar pp"
// console.log(!typeof name==='object')  //false
// console.log(!typeof name==='string')  //false
// console.log(!typeof name==='false')  // true

// const name= "ajay kumar"
// const age =24;
// console.log(isNaN(name))  //true
// console.log(isNaN(age))   //false

// let person ={name:"ajay"}
// // what can modify person object
// Object.seal(person)
// person.name="vijay"
// console.log(person)  //vijay  change object value 

// let data =[2,9,1,0,10];
// data.shift();  // remove the first element in array
// console.log(data)

// let data =[2,9,1,0,10];
// data.pop();  // remove the last element in array
// console.log(data)

// check any value is odd or even

// let a=30;
// console.log(a%2)  //0

// let data={
//     name:"ajay"
// }
// delete data.name;
// console.log(data)  //blank Object

// let data ="true" 
// console.log(data)    //true
// console.log(typeof data)   //string
// console.log(typeof !data)  //boolean
// console.log(!data)   // false
// console.log(!!data)   //true

// difference btw map and forEach Function
//  map function return some value while forEach function do not return value

// let data=["ajay","vijay","raja"];
// delete data[1];
// console.log(data)  //['ajay', empty, 'raja']

// let data=["ajay","vijay","raja"];
// delete data[1];
// console.log(data.length)  //3

// merge two aarray
// let a =[1,2,3]
// let b= [4,5,6]
// let c =[...a,...b]
// console.log(c)  //[1, 2, 3, 4, 5, 6]

// let a=[1,2,3,4]
// let b =[4,5,6]
// let c =[...a,...b]
// console.log(c)  //[1, 2, 3, 4, 4, 5, 6]

// Because object kai ander same key nahi ho sakti  but array kai ander ho sakti h 

// let c=3 **3 
// console.log(c)  //27

// let a=2;
// setTimeout(()=>{
//     console.log(a)  //100
// },0)
// a=100;

// let a=2;
// let A=30;
// console.log(A)  //30

// let A10 ="like"
// let 10A ="okay"
// console.log(10A) //Invalid or unexpected token

// let a ="like"
// let b= `like`
// console.log(a===b) //true

// let a=1;
// let c=2;
// console.log(--c == 1)  //true

// let a=1;
// let b=1;
// let c=2;
// console.log(a===b=== -c)  //flase

// console.log(a)  //undefined
// var a;   

// console.log(a)  //undefined
// var a=10;     //undefined

// console.log(b)  // b is not defined
// console.log([[[[]]]]);  //Nested Array

// how to os find Operating system
// console.log(navigator.platform)  //win32


// what can we achieve using javaScript ?
// websites
// presentation
// Games
// Mobile Apps

// what was the initial name for javascript ?
// Mocha

// when was the ECMAscript offically released
// 1997

// which of the following are basic data types in js?
// number
// null
// string
// undefined
// object

// How can you declare an integer?
// var a=10;

// var a=10;
// console.log(a)
// a=" 'ajay kumar pp' "  // 'ajay kumar pp' 
// console.log(a)
// var b=' "ajay kumar pp" '  // 'ajay kumar pp' 

// var a;
// console.log(a  )  //undefined

// var a="A";
// console.log(65-a)  //NaN

// console.log(typeof("-1"))  //string

// var a=null;
// console.log(typeof(a))  //object

// var a;
// console.log(typeof(a))   //undefined

// a=10;
// console.log(a)  //10

// console.log(20+12*2-10/2)    //  20+24-5 = 44-5=39

// var a;
// console.log(a+"b")  //undefinedb   focus on varibale

// console.log(1-"1")   //0
// console.log(1-"3")    //-2

// console.log("1"==1)  //true
// console.log("1"===1)  //false      

// console.log(null==undefined)  //true
// "null == undefined" means null is equal to undefined but not identical. In JavaScript, when you declare a variable without assigning any value. (that value is by default "undefined"), but When you assign a variable to a null value, then we are trying to convey that the variable is empty.
// So "null" and "undefined" both mean "nothing", so having them be equal makes intuitive sense.
// console.log(null===undefined)  //flase

// if(-1){
//     console.log("true")   //true
// }
// else{
//     console.log("false")
// }

// if(""){
//     console.log("true")   
// }
// else{
//     console.log("false")  //false
// }

// which of the fiollowing  statement will print "hii" at least once ?
// Ans1 
// var i=10;
// do{
//     console.log("hii")

// } while(i<5)

// Ans2 
// var i=0 ;     
//    while(i<5); { 
//       console.log("hii"); 
//       ++i; 
//     }

// var i=0 ;     
// while(i<5); { 
//    console.log("hii"); 
//    ++i ; 
// }


// what all is possible using js?
//Ans: 
// Add style to the web page
// Add struture to the web page
// Add pop ups to the web page
// Add animation to the web page
// Add HTML to the web page
// Add click events to web page

// which of the following will display the alert box on the web pages ?
// window.alert("window alert");
// alert("desktop alert");

// var a=100/0;
// console.log(a)  //infinity

// var a=100/a;
// console.log(a)  //NaN

// console.log(null==undefined)  //true
// console.log(null===undefined)  //false
// console.log(typeof(null))    //object
// console.log(typeof(undefined))  //undeined
// console.log(typeof(null)==typeof(undefined))  //false

// console.log(typeof(100))  //number
// console.log(typeof(typeof(100)))  //string
// console.log(typeof(typeof(typeof(100)))) //string
// console.log(typeof(typeof(typeof(typeof(100)))))  //string
// console.log(!typeof(100))  //false
// console.log(!!typeof(100))   //true

// var a;
// if(typeof(a)){
//     console.log("true")  //true  areturn undefiend
// }
// else{
//     console.log("false")
// }

// what is the purpose of the return  statement in a function ??
// Ans: Stop executing the function  and return the value;

// what is the correct way of definning a function in js ?
// Ans: Function Keyword , Identifier and Parentheses

// function ajay(a,b){
//     console.log(a+b);  //5
// }
// ajay(2,3,4)

// function ajay(a,b,c){
// console.log(a+b*c)  //NaN
// }
// ajay(2,3)

// function Hoisting
// In javascript......are hoisted   =>> Declaration

// x=5;
// console.log(x)  //5
// var x;

// x=5;
// console.log(x)  //cannot access x before initialization
// let x;

// hoisted();
// function hoisted(){
//     console.log("hoisted")  //hoisted
// }

// varaible Hoisting 
// function demo(){
//     console.log(x)  //undeifned
//     var x=10;
// }

// demo();

// function multuiply (a,b){
//     return a*b;
// }
// console.log(multuiply) 
// Ans 
// ƒ multuiply (a,b){
//     return a*b;
// }

// var a=10;
// function test(){
//     var a=20;
// }
// test();
// console.log(a)   //10

// var a=10;
// function test(){
//     var a=20;
//     console.log(a)   //20
// }
// test();

// function a(){ 
//     console.log("inside a")   //Inside a 
//     function b(){
//         console.log("Inside b")
//     }
    
// }

// a();

// function a(){ 
//     console.log("inside a")   //Inside a 
//     function b(){
//         console.log("Inside b")   // b is not dfined
//     }
    
// }

// b();

// var combinedString = "";
// function a() {
//     combinedString = "Inside a";

//     function b() {
//         combinedString = combinedString + " Inside b";
//     }

//     b();
// }

// a();
// console.log(combinedString);  //Inside a Inside b

// var reactArea = function(width,height){
//     return width*height;
// }
// console.log(reactArea(5,4))  //20
// console.log(reactArea)
//ƒ (width,height){
    // return width*height;
// }
//

// function a(){
//     console.log("Inside a");
//     function b(){
//         console.log("Inside b")
//     }
// }
// a()b();  //Unexpected identifier

// var add = function (a, b) {
//     return a+b;
// }

// var subtract = function (a, b) {
//     return a-b;
// }

// var op = function (func) {
//     var x = 2;
//     var y = 3;
//     return func(x, y);
// }
// console.log(op(subtract));  //-1

// var add = function(a, b) {
//     return a+b;
// }

// var subtract = function(a, b) {
//     return a-b;
// }

// var op = function (func) {
//     var x = 2;
//     var y = 3;
//     return func(x, y);
// }

// console.log(op(add));  //5

// How to find the length of an array?
// arr.length

// var color= ["Orange", "Blue", "Green"];

// color.push("Red");

// console.log(color[0]+ " " +color[color.length-1]);  //Orange Red

// var fruits = ["Red", "Orange", "Blue", "Green"];
// console.log(fruits.shift()); //Red

// Heterogenous Array 
// var ajay =[45,"vijay"]  //yes

// What is the functiion of splice() in Js?
// Ans :  slice a given part of an arrya and return that sliced part as a new array

// var fruits = ['Apple', 'Orange', 'Kiwi', 'Strawberry'];
// fruits.splice(4, 1, 'Banana');
// console.log(fruits); //['Apple', 'Orange', 'Kiwi', 'Strawberry', 'Banana']

// var fruits = ['Apple', 'Orange', 'Kiwi', 'Strawberry'];
// fruits.splice(1, 0, 'Banana');  
// console.log(fruits);   //['Apple', 'Banana', 'Orange', 'Kiwi', 'Strawberry']

// console.log("A" - "B" + "2")  //NaN2
// console.log("A" - "B" + 2)  //NaN

// var a=0;
// function b(){
//     a=10;
//     return;
//     var a=function(){

//     }
// }
// b()
// console.log(a)   //0

// var a=0;
// function b(){
//     a=10;
//     return;

// }
// b()
// console.log(a)   //10


// var a=0;
// function b(){
//     a=10;
//     return;
//      a=function(){
//     }

// }
// b()
// console.log(a)   //10

// (function(){
//     a=b=2;
// })();
//     console.log(typeof a)  //number
//     console.log(typeof b)    //nuumber

// (function(){
//    var a=b=2;
// })();
//     console.log(typeof a)  // undefined
//     console.log(typeof b)    //nuumber


// test();
// var test = function(){
//     console.log("test fun is called")  //test is not a function 
// }


// var test = function(){
//     console.log("test fun is called")  //test fun is called
// }
// test();

// functon decleration is hoisted
// function expression is not hoisted

// let data={
//     name:"ajay kumar",
//     coding :"JavaScript",
//     age:"24",
//     Btech:2022

// }
// console.table(data)

// Optimize the Array
// let data =[10,20,30,40,50,60,70];
// for(let i=10;i<data.length;i++)
// {

// }

// let data =[10,20,30,40,50,60,70];
// let len = data.length;
// for(let i=10;i<len;i++)
// {

// }

// var num =8;
// var num= 10;
// console.log(num)  //10

// const ajay={
//     a:"one",
//     b:"two",
//     a:"three"
// }

// console.log(ajay)  //three, two

// let x=0;
// console.log(x++)  //0

// console.log(!10) //false
// console.log(!!10)  //true
// console.log(!!10+20)  //21
// console.log(true+2)  //3


// const user ={
//     name:"ajay",
//     location:{
//         city:"Haridwar",
//         country:"India"
//     }
// }
// const copy ={...user}
// copy.location.city="Delhi"
// console.log("orginal:",user.location)  //{city: 'Delhi', country: 'India'}
// console.log("copy: ",copy.location)  //{city: 'Delhi', country: 'India'}

// let data =[3,1,7,12,23,52,14];
// result=data.sort((a,b)=>{
// return a-b
// });
// console.log(result);  //[1, 3, 7, 12, 14, 23, 52]

// let data =[3,1,7,12,23,52,14];
// result=data.sort((a,b)=>{
// return b-a
// });
// console.log(result);  //[52, 23, 14, 12, 7, 3, 1]

// JavaScript use google V8 engine for compile code.
// Memory Heap
// Call stack

// These web APIs are asynchronous. That nmeans you can instruct these APIs to do something in background and return data once done.

// Generator function in javaScript 
// function* simpleGenerator(){
//     console.log("call me")
//     yield 20;
//     yield 30;
//     yield 40
// }

// let sG=simpleGenerator()
// console.log(sG.next().value)
// console.log(sG.next())
// console.log(sG.next())
// console.log(sG.next())

// function* simpleGenerator(){
//     let i =100;
//     while(true){
//         i++;
//         yield i
//     }
// }

// let sG = simpleGenerator();

// function getNewId(){
//     document.getElementById('newId').innerText = sG.next().value
// }

// console.log(true+false)  //1  => false = 0

// var addSix = createBase(6)
// addSix(10) //return 16
// addSix(21)   //return 27

// function createBase(a){
//     return (b)=>{
//         return a+b;
//     }
//  }
//  var addSix = createBase(6)
// // addSix(10) //return 16
// // addSix(21)   //return 27
// console.log(addSix(10))
// console.log(addSix(21))