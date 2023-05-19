// function say(){
//     console.log(name)   // undefined
//     console.log(age)    // reference error
//     var  name="ajay"
//     let age=25;

// }
// say();



// Variables with the let keyword (and const) are hoisted, but unlike var, don't get initialized. They are not accessible before the line we declare (initialize) them

// function say(){
//     console.log(name)
//     console.log(age)
//     let  name="ajay"
//     let age=25;

// }
// say();

// for (var i = 0; i < 3; i++) {
//     setTimeout(() => console.log(i), 1);   //3 3 3
// }

// for (let i = 0; i < 3; i++) {
//     setTimeout(() => console.log(i), 1);   //0 1 2
// }

//   Because of the event queue in JavaScript, the setTimeout callback function is called after the loop has been executed. Since the variable i in the first loop was declared using the var keyword, this value was global. During the loop, we incremented the value of i by 1 each time, using the unary operator ++. By the time the setTimeout callback function was invoked, i was equal to 3 in the first example.

// In the second loop, the variable i was declared using the let keyword: variables declared with the let (and const) keyword are block-scoped (a block is anything between { }). During each iteration, i will have a new value, and each value is scoped inside the loop.



// console.log(+true)  //1 
// console.log(!"ajay")  //false

const bird = {
    size: "small"
}
const mouse = {
    name: "Mickey",
    size: true
}

// console.log(mouse.bird.size)  //TypeError: Cannot read properties of undefined (reading 'size')
// console.log(mouse[bird.size])   //undefined
// console.log(mouse[bird["size"]])  // undefined

// let c = { greeting: 'Hey!' };
// let d;

// d = c;
// c.greeting = 'Hello';
// console.log(d.greeting);  // Hello  

// let a = 3;
// let b = new Number(3);
// let c = 3;

// console.log(a == b);  //true
// console.log(a === b);  //false
// console.log(b === c);  //false  new Number() is a built-in function constructor

// let greeting;
// greeting={

// }
// console.log(greeting)  //[[Prototype]]

// function bark(){
//     console.log("woof")  //Nothing, this is totally fine!
// }
// bark.animal ="dog"

// function Person(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }

//   const member = new Person('Lydia', 'Hallie');
//   Person.getFullName = function() {
//     return `${this.firstName} ${this.lastName}`;
//   };

//   console.log(member.getFullName());  //TypoError

// function Person(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }

//   const lydia = new Person('Lydia', 'Hallie');
//   const sarah = Person('Sarah', 'Smith');

//   console.log(lydia);
//   console.log(sarah);
//   //Person {firstName: "Lydia", lastName: "Hallie"} and undefined

// What are the three phases of event propagation?
// Ans =>  capturing > Target > Bubbling

// All Object have prototypes
// false

// function sum(a, b) {
//     return a + b;
//   }

//   sum(1, '2');
//   console.log(sum(1,"2"))  //12

// function sum(a, b) {
//     return a - b;
//   }

//   sum(1, '2');
//   console.log(sum(1,"2"))  //-1

// let number = 0;
// console.log(number++); //0
// console.log(++number); //2
// console.log(number);  //2

// The postfix unary operator ++:

// Returns the value (this returns 0)
// Increments the value (number is now 1)
// The prefix unary operator ++:

// Increments the value (number is now 2)
// Returns the value (this returns 2)
// This returns 0 2 2.

// function getPersonInfo(one, two, three) {
//     console.log(one);  //['', ' is ', ' years old', raw: Array(3)]
//     console.log(two);  //Lydia
//     console.log(three);  //21
//   }
//   // " ", is , years old
//   const person = 'Lydia';
//   const age = 21;

//   getPersonInfo`${person} is ${age} years old`;

// function checkAge(data) {
//     if (data === { age: 18 }) {
//       console.log('You are an adult!');
//     } else if (data == { age: 18 }) {
//       console.log('You are still an adult.');
//     } else {
//       console.log(`Hmm.. You don't have an age I guess`);
//     }
//   }

//   checkAge({ age: 18 });  // Hmm.. You don't have an age I guess

// function getAge(...args){
//     console.log(typeof args)  //pbject
// }
// getAge(21)
// The rest parameter (...args) lets us "collect" all remaining arguments into an array. An array is an object, so typeof args returns "object"

// function getAge() {
//     'use strict';
//     age = 21;
//     console.log(age); //ReferenceError : Age is not defined
// }

// getAge();

// function getAge() {

//     age = 21; 
//     console.log(age);  //21
//   }

//   getAge();


// const sum = eval('10*10+5');
// console.log(sum) //105
//eval evaluates codes that's passed as a string. If it's an expression, like in this case, it evaluates the expression. The expression is 10 * 10 + 5. This returns the number 105.



// How long is cool_secret accessible?
// sessionStorage.setItem('cool_secret', 123);
// A: Forever, the data doesn't get lost.
// B: When the user closes the tab.                     =>>> Ans: 
// C: When the user closes the entire browser, not only the tab.
// D: When the user shuts off their computer.

//The data stored in sessionStorage is removed after closing the tab.

// var num = 8;
// var num = 10;

// console.log(num);  //10
//With the var keyword, you can declare multiple variables with the same name. The variable will then hold the latest value.

// const obj = { 1: 'a', 2: 'b', 3: 'c' };
// const set = new Set([1, 2, 3, 4, 5]);

// obj.hasOwnProperty('1');   console.log(obj.hasOwnProperty('1'))   //true
// obj.hasOwnProperty(1);   console.log(obj.hasOwnProperty(1))    //true
// set.has('1');  console.log(set.has('1'))      //false 
// set.has(1);   console.log(set.has(1))      //true

//All object keys (excluding Symbols) are strings under the hood, even if you don't type it yourself as a string. This is why obj.hasOwnProperty('1') also returns true.

//It doesn't work that way for a set. There is no '1' in our set: set.has('1') returns false. It has the numeric type 1, set.has(1) returns true.


// const objj = { a: 'one', b: 'two', a: 'three' };
// console.log(objj);    Three , two
//If you have two keys with the same name, the key will be replaced. It will still be in its first position, but with the last specified value.

// const objj =  ["Ajay", "vijay" ,"sagar", "Ajay"]
// console.log(objj);    

// The JavaScript global execution context creates two things for you: the global object, and the "this" keyword.
//  ANS  =>  True


// for (let i = 1; i < 5; i++) {
//     if (i === 3) continue;
//     console.log(i);  //1 2 4  The continue statement skips an iteration if a certain condition returns true.
//   }

// const a = {};
// const b = { key: 'b' };
// const c = { key: 'c' };

// a[b] = 123;
// a[c] = 456;

// console.log(a[b]);  //456
//Object keys are automatically converted into strings. We are trying to set an object as a key to object a, with the value of 123.

// However, when we stringify an object, it becomes "[object Object]". So what we are saying here, is that a["[object Object]"] = 123. Then, we can try to do the same again. c is another object that we are implicitly stringifying. So then, a["[object Object]"] = 456.

// Then, we log a[b], which is actually a["[object Object]"]. We just set that to 456, so it returns 456.


// const foo = () => console.log('First');
// const bar = () => setTimeout(() => console.log('Second'));
// const baz = () => console.log('Third');

// bar();
// foo();
// baz();



//    < div onclick = "console.log('div')" >
//         <p onclick="console.log('p')">   
//             Click here!
//         </p>
// </div >

// Ans= >> p >> div
// console.log(typeof null) //object


// function sayHi() {
//     return (() => 0)();
//   }

//   console.log(typeof sayHi());  // number

// console.log(typeof typeof 1);  //string

// const numbers = [1, 2, 3];
// numbers[10] = 11;
// console.log(numbers);  //[1, 2, 3, empty × 7, 11]

// !!null;  console.log(!!null)  //false
// !!'';     console.log(!!'')   //false
// !!1;     console.log(!!1)    //true


// setInterval(() => console.log('Hi'), 1000);

//It returns a unique id. This id can be used to clear that interval with the clearInterval() function.


// const ajay = [...'Lydia']
// console.log(ajay)  // ['L', 'y', 'd', 'i', 'a']

// function* generator(i) {
//     yield i;
//     yield i * 2;
//   }

//   const gen = generator(10);

//   console.log(gen.next().value);  //10
//   console.log(gen.next().value);   //20


// const firstPromise = new Promise((res, rej) => {
//     setTimeout(res, 500, 'one');
//   });

//   const secondPromise = new Promise((res, rej) => {
//     setTimeout(res, 100, 'two');
//   });

//   Promise.race([firstPromise, secondPromise]).then(res => console.log(res));  //two

// let person = { name: 'Lydia' };
// const members = [person];
// person = null;

// console.log(members);  //[{ name: "Lydia" }]

// const person = {
//     name: 'Lydia',
//     age: 21,
//   };

//   for (const item in person) {
//     console.log(item);  //name  age
//   }

// const num = parseInt(8*6, '10');
// console.log(num)

// const num = parseInt('7*8', 10);
// console.log(num)

// [1, 2, 3].map(num => {
//     if (typeof num === 'number') return;
//     return num * 2;
//   });

//   // [undefined, undefined, undefined]

// const set = new Set([1, 1, 2, 3, 4]);

// console.log(set);  //{1, 2, 3, 4}
//The Set object is a collection of unique values: a value can only occur once in a set.

// We passed the iterable [1, 1, 2, 3, 4] with a duplicate value 1. Since we cannot have two of the same values in a set, one of them is removed. This results in {1, 2, 3, 4}.

// const name ="ajay"
// age = 25;
// console.log(delete name)  //false
// console.log(delete age)  //true

// const numbers = [1, 2, 3, 4, 5];
// const [y] = numbers;

// console.log(y);  //1

// const user = { name: 'Lydia', age: 21 };
// const admin = { admin: true, ...user };

// console.log(admin); //{ admin: true, name: "Lydia", age: 21 }

// const person = { name: 'Lydia' };

// Object.defineProperty(person, 'age', { value: 21 });
// console.log(person);
// console.log(Object.keys(person));

// const settings = {
//     username: 'lydiahallie',
//     level: 19,
//     health: 90,
// };
// const data = JSON.stringify(settings, ['level', 'health']);
// console.log(data);

// console.log(typeof {})  //object
// console.log(typeof [])   //object

// Q.1 what is hoisting in js ?
// ANs => Hoisting is a behaviorin js where variable and function declaration are moved to the top of their respective scopes. This means that a variable or function can be used before it has been declared, although it will still be undefined untill it is assigned a value.

//Q.2 what are closure in js ?
//Ans => Closure are function that have access to variable in their outer ( enclosing )
// function, even after the outer function has returned. This is possible because the inner function retains a reference to the variables in the outer function, which are kept alive in memory.

// Q.3 what is the difference btw an obejct and an array in js ?
// Ans  => An Obejct is a collection of properties, where each property is a key-value pair. An array is an ordered list of values, where each value is accessed by its index number.

// Q.4  How do you create an object in js ?
// Ans => Object an be created using an object literal like this :
// const person ={
//     name:"Ajay ",
//     age:22,
//     address:{
//         street:"jamalpur kalan",
//         city:"Haridwar",
//         state:"Uttarakhand"
//     }
// }



// var myname ="AJay kumar"

// function sayName(){
//   console.log(myname)   //undefined
//   var myname ="Vijay kumar"
// }
// sayName();

// var myname ="AJay kumar"

// function sayName(){
//   console.log(myname)   // Cannot access 'myname' before initialization
//   let myname ="Vijay kumar"
// }
// sayName();

// Q.6 What is Lexical Environment ?
// Ans= >Every Variable in js (within global/block/ or function) has a reference to an object-like data called Lexical environment.This object serves as the basis of search for value of varivale.

// let name ="ajay"
// console.log(name)

// Lexical environment (Global scope)
// Lexical environment (function)
// null => outer 

// let name= "ajay"
// function sayHi(){
//     let greet ="hi"
//     console.log(greet)

// }
// sayHi()
// console.log(name, sayHi)


// let name ="ajay"
// function sayHi(){
//     let greet="hi"
//     console.log(name)
// }
// sayHi()


// Q.8 What is Hoisting ?
// ANs=> The movement of variable declaration to top of scope-before execution
// 1 => function declaration are properly hoisted( value accessible )
// 2 => var is hoisted

// let name ="ajay"
// sayhello() //error
// let sayhello = function(){
//     console.log(name)
// }


// TDZ
// let x=1;
// {
//     console.log(x)
//     let x=2
// }


// Q.9 What is Closures
// Ans => we can create nested function in js
// function createUser(name){
//     let greeting ="Hi"
//     function greet(){
//         return greeting+name+ "is created "

//     }
//     return greet()
// }
// createUser("ajay")
// console.log(createUser("ajay"))

// This is main example of clsoure

// function createUser(name){
//     let greeting="Hi"
//     function greet(){
//         return greeting+name+"is created"
//     }
//     return greet
// }
// let welcomeAjay = createUser("AJay")
// welcomeAjay()

// this is closure
// 1 welcomeAjay function definition has access 
// 1.1  to outer params(name) which came for createUser function
// 1.2 also any other "variable" declared inside createUser will aslo be accessible to this WelcomeAjay