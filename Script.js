// let str = "apple";
//   str[3] = "l";
// function reverse(str){
//   let Rstr = "";
//   for(let i = str.length - 1; i >= 0; i--){
//     Rstr += str[i];
//   }
//   return Rstr;
// }
// let rore = "mome"
// console.log(reverse(rore))

// function addUpTo(n){
//   let total = 0;
//   for(let i = 1; i <= n; i++){
//     total += i;
//   }
//   return total;
// }

// console.log(addUpTo(5))


// // add upto m number recursively
// function addUpToR(m){
//   if(m === 0)return 0;   // base case
//   else {
//     return  m + addUpToR(m-1)             //  =>  m + m-1 + m-2 + m-3 + m-4  ...
//   }
// }

// console.log(addUpToR(5));


// function countUpDown(p){
//     console.log("Going up....");
//     for(let i = 0; i <= p; i++){
//         console.log(i);
//     }
//     console.log("Going Down back...\n see you there");
//     for(let i = p - 1; i >= 0; i--){
//         console.log(i);
//     }
//     console.log("Reached to the bottom back")
// }

// countUpDown(10);



// let entry = ["apple", "banana"];
// const fruits = entry.entries();

// for(let x of fruits){
//       document.getElementById("entries").innerHTML += x + "<br>"
// }


// // bring all the ages over 18 from the array

// let ages = [13, 15, 16, 18, 20 , 23, 30];

// function over18(age){
//     return age >= document.getElementById("ageInput").value;
// }

// function myAge(){
//      document.querySelector(".ageNumber").innerHTML = ages.filter(over18)
// }


// write a programme that prints the numbers from 1 to 100. But for multiples of three
// print "Fizz" instead of the number and for the multiples of five print "Buzz".
// For numbers which are are multiples of both 3 and 5 print "FizzBuzz".

// function printFizzBuzz(){
    
//       for (let i = 1; i <= 100; i++){
//        if(i % 3 === 0  && i % 5 === 0 ){
//         console.log("FizzBuzz")
//       }else if(i % 3 === 0){
//           console.log("Fizz")
//         }else if ( i % 5 === 0){
//           console.log("Buzz")
          
//         }else {
//           console.log(i)
//         }
//       }
// }

// printFizzBuzz()

// breakTestFunction   it should return 3 * br
function breakTest(br){
    let i = 0;
    while(i  < 6){
          if(i == 3){
              break;
          }

          i += 1;
    }

    return i * br;
}

console.log('breakTestfunction:', breakTest(4))


// switch

let city = "Pune";

switch(city){
   case "Pune": 
         console.log("Shivaji Maharaj");
         break;
   case "Mumbai":
         console.log("Bombay old name");
         break;
   case "Paris":
        console.log("Fashion Statement");
         break;
  default:
      console.log("Atlanta is my home");
      break;
}

// doWhile loop

let stringM = '';
let i = 0;

do {
    i++;
    stringM += i;

} while( i < 10);

console.log('stringM:', stringM)    // 012345678910

// empty
let fullArr = [1, 5, 7, 9];
for(let i = 0; i < fullArr.length; fullArr[i++] = 0 )

console.log("Empty:", fullArr)  // [0, 0, 0, 0]

// for of loop at nodelist of artical

let articalElement = document.querySelectorAll('article > p');   // it brings the nodelist from  dom 
for(let paragraph of articalElement){
    paragraph.classList.add('jump')
}

// rest parameters

function restParamsSum(...args){
     return args.reduce((a, b) => {
         return a + b
     })
}

console.log(restParamsSum(2, 4, 3))
// lets make the arguments an array to apply array mathods on it
function sortArguments() {
    let args = Array.from(arguments)
    let sortedArgs = args.sort()
    return sortedArgs
  }
  console.log("sortedArguments:",sortArguments(5, 3, 7, 1));

// arrow functions are not best suited for methods
'use strict';
var objTest = {
    // here arrow function does not create a new scope, still has global scope, window object
    a : 20,
    b: ()=> console.log(this.a, this),
    c: function(){
        console.log(this.a, this)
    }
}

objTest.b()
objTest.c()

// arrow functions arguments   -- imp
var arguments = [1, 2, 3];
var arr = () => arguments[0];

arr(); // 1

function foo(n) {
  var f = () => arguments[0] + n; // foo's implicit arguments binding. arguments[0] is n
  return f();
}

foo(4); // 3 + 3 = 6
console.log("foo(4)",  foo(4));

let myFoo = p => p * p;
// concise body syntax, implied "return"

let myFoo2 = (p, Q) => { return p + Q}
// with block body, explicit "return" needed

function TimeCheck(){
 return setTimeout(()=>{
    console.log("1. I will be get printed first");

    setTimeout(()=>{
        console.log("2. I will be get printed later");
    }, 8000);

}, 8000);

}

TimeCheck();

// Hackerrank
  
//   const arofun = (hacArr) => {
//       let newArr = hacArr.map((item)=> {
//           if(item % 2 === 0){
//               return item * 2
//           }else {
//                return item * 3
//           }
//       });
      
//       return newArr;
//   }

const arofun = (hacArr) => {
     let newArr = [];
     for(let i = 0; i < hacArr.length; i++){
         if(hacArr[i] % 2 === 0) {
              newArr.push(hacArr[i] * 2)
        }
         else { 
             newArr.push(hacArr[i] * 3)
            };
      }
    return newArr;
}
  console.log("arofun:",  arofun([1, 2, 3, 4, 5]))

  // getter syntax binds an objects property to a function, this function is called
  // when that property is looked up

  let getObject = {
     countArr : [2, 3, 4, 5],
     get lastItem(){
        if(this.countArr.length  < 3){
            return `not reached to full length yet.`
        }
        return this.countArr[this.countArr.length - 1]
     }
    }

   console.log("lastItem:",  getObject.lastItem) 

   //delete getObject.lastItem

   // set syntax binds an object property to a function, this function being called
   // when there is an attampt to set that property

   let getTest = {
       set myFun(value){
           this.prop.push(value);
       },
       prop : []
   }

   getTest.myFun = "Honeywell";
   getTest.myFun = "MagicdustProductions";

   console.log("getTest.prop:",   getTest.prop);
   // delete getTest.myFun     -- to delete the setter



