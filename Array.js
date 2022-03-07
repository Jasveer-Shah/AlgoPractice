let names = [ "hana", "bonny", "anu", "Adi", "mobby", "robert"];

let filteredNames = names.filter(name => name.includes("A") || name.includes("a"));

console.log(filteredNames);   // it prints ["hana", "anu", "adi"]


let places = ["Agra", "Zcarta", "Pune", "Atlanta"];
 
for(let value of places){
    console.log(value);
}


let subjects = ["English", "History", "Germen", "Science"];

let Likes = [2, 3, 7, 3];

for(let i = 0; i < subjects.length; i++){
    addLikes = "Subject: " + subjects[i] + "  "  + "likes: " + Likes[i];
    console.log(addLikes)
}


// create an unique numbered array  / remove duplicates  // This solution takes extra space

let numberArray = [ 22, 3, 3, 45, 5, 5, 6, 7, 7];

let uniqueArray = [];



function removeDuplicates(numberArray){
  
    let uniqueArray = [];
    let j = 0;
for(let i = 0; i < numberArray.length - 1; i++){
     if(numberArray[i] !== numberArray[i + 1]){  // it checks
         uniqueArray[j] = numberArray[i];
         j++;
     }
       uniqueArray[j] = numberArray[numberArray.length -1]
}
  console.log(uniqueArray)
 return uniqueArray;
}

removeDuplicates(numberArray)



//console.log(uniqueArray)

// checkeven number

function checkeven(n){
    switch (n) {
        case 0:
        case 2:
            return "this is even";
            case 1:
                return "this is odd";
    }
    return checkeven(n % 2);
}

console.log(checkeven(9));
console.log(checkeven(4));


// find second largest number in the array

let numberArr = [1, 4, 5, 8, 4, 9, 55];
function secLargN(arr){
    let max = 0;
    let secMax = 0;

    for(let i = 0; i < arr.length; i++){
        if(arr[i] > max){
            secMax = max;
            max = arr[i]
        }else if(arr[i] < max && arr[i] > secMax){
            secMax = arr[i]
        }
    }
    return secMax;
}
console.log(secLargN(numberArr));


// fill the # with correct value
let matrix = [
    [1, 2, "#"],
    ["#", 16, 32],
    [64, "#", 256]
];

let index = 0;

for(let i = 0; i < matrix.length; i++){
    for( j = 0; j < matrix[i].length; j++){
        if(matrix[i][j] == "#"){
            matrix[i][j] = 2 ** index
        }
        index++;
    }
}

console.log(matrix);

// check if a number in the array is even or odd
let myArray = [ 3, 4, 55, 6, 66, 76, 45, 8, 12, 7];

for(let i = 0; i < myArray.length; i++){
    if(myArray[i] % 2 == 0){
        console.log(`${myArray[i]} is even`);
    }else {
        console.log(`${myArray[i]} is odd`)
    }
}


//make a recursive function to get factorial for a given integer

function getFactorial(n){
    //edge case
 if(n === 1) {
        return 1;
    } else {
        return n * getFactorial(n - 1);
    }

}

console.log(getFactorial(5));      // 5*4*3*2*1  = 120



// find the min max sum of 4 items from an array(its length is 5), seperated by comma

let integerArr = [1, 2, 3, 5, 4];

function getMinmax(arr){
    let min = 0;
    let max = 0;
     arr = arr.sort();
     arr.forEach((element, i) => {
         if(i == 0){
             min += element;
         }else if(i == arr.length -1){
             max += element;
         }else {
             min += element;
             max += element;
         }
     });

    console.log(min + " " + max);
}

getMinmax(integerArr)               // output should be  10 14




// Bubble Sort 
// write a function that takes in an array of integers ans returns sorted array

let unsortedArr = [ 3, 2, 9, 4, 19, 10];

function bubbleSort(arr) {
    for(let i = 0; i < arr.length; i++){      // outer for loop
        for(let j = 0; j < arr.length; j++){   // inner for loop
            if(arr[j] > arr[j + 1]){
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr
}

console.log(bubbleSort(unsortedArr));


// add up to with two methods for space complexity

function addUpTo(m){
    return m * (m + 1) / 2;                    // o(1)
    }

 function addWUpTo(w){
     let total = 0;                              // o(n)
     for(let  i = 0; i < w; i++){
         total += i;
     }
     return total;
 }  
 
 
 // selection sort

 // first we create a variable that stores the first item`s index as minimum to initialize the sorting from a point
 // then we are gonna check in each iteration if the next value is smaller then the our current value, if it is then we are gonna swap the indexes
// if it is not smaller the keep going untillthe end of the array

let selectionArr = [23, 4, 67, 3, 90, 7];

function selectionSort(arr){
    for(let  i = 0; i < arr.length; i++){
        var min = i;            // i = 0; starting index
        for(let j = i + 1; j < arr.length; j++){
            if(arr[j] < arr[min]){
                min = j;    // now i = 1, so now its gonna go in the for loop and compare between  index i = 1 and index j = i + 1 and so forth till the end of the array
            }// so in the first iteration we got min index = 3 so now we are gonna swap the indexes after finishing this inner loop
        
        }
       let temp = arr[i];
       arr[i] = arr[min];
       arr[min] = temp;
    }
    return arr
}

console.log(selectionSort(selectionArr));




// remove duplicates from an array without taking extra space in memory

let dupArray = [3, 3, 6, 12, 12, 5, 7, 3, 90, 56, 90];

function removeDuplicates(arr){
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length; j++){
            if(arr[j] == arr[i] && j != i) {
                arr.splice(j, 1);               // remove the item from the array
            }
        }
    }
    return arr;
}

console.log(removeDuplicates(dupArray));



// make a function that takes an array and gives back an two diamentional array with the given number of spliting
// here i`m using slice method it returns a shallow copy of an array into a new array object selected from 
// start to end (end not included), where start and end represent the index of the items in that array

let oneDiaMentional = [1, 3, 5, 6, 7, 8, 9, 10, 11, 14, 45, 56, 76, 68];

function twoDiaMentional(arr, num) {
    let twoDia = [];

    for(let i = 0; i < arr.length; i+= num){
         twoDia.push(arr.slice(i, i+num));
    }

    return twoDia;
}

console.log(twoDiaMentional(oneDiaMentional, 2));



// add numbers of the array by recursive function

function recFun(arr){
    if(arr.length === 1){
        return arr[0];
    }else{
        return arr.pop() + recFun(arr);
    }
}

recFun([1, 2, 3, 4]);
console.log(recFun([1, 2, 3, 4]));



// get diagonal sum recursively

let matrixm = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

let maxR = matrix.length - 1; // 2
let maxC = matrix[0].length - 1; // 2
function getDiagonalSum1 (maxR, maxC) {
     if(maxR === 0 && maxC === 0) return matrixm[0][0];
     
     return matrixm[maxR][maxC] + getDiagonalSum1(maxR - 1, maxC - 1);
}


function getDiagonalSum2 (maxR) {
    if (maxR === 0) return matrix[0][2 - maxR];

    return matrixm[maxR][2 - maxR] + getDiagonalSum2(maxR - 1);
}

let getSum = Math.abs(getDiagonalSum1(maxR, maxC) - getDiagonalSum2(maxR));

console.log("getDiagonalSum:   ", getSum);



// find the missing number from an array of integers

let arrayS = [0, 1, 3];
// this array nas n = 3 , so range is 0 to 3 and missing number between the range is 2

let missingNumber = (arrayS) => {
    // sum of 1 to n is n times  n+ 1 / 2
     
    const n = arrayS.length;
    const sum = (n * (n + 1)) / 2;

    return sum - arrayS.reduce((a, b) => a + b);
} 

console.log(missingNumber(arrayS))



// a left rotation on an array, it shifts each element in the array to left
// given an array a of intergers and a number, d, perform d left rotaions on the array
// return updated array to be printed as a single line of space-separated integers.

let arrayI = [1, 2, 3, 4, 5];

function leftShift(arr, d){
   
    for(let i = 0; i < d; i++){
        const shiftedItem = arr.shift();
        arr.push(shiftedItem);
    }
    return arr;
}

console.log(leftShift(arrayI, 3))    //output =  [4, 5, 1, 2, 3]


// what will be the output of the following Javascript code?

x = 1;
console.log('x = ' + x);
var x;

for(let b = 1; b < 5; b++){
    console.log(b);
}

// What is eval() in javascript
// it executes specified string as javascript code.

function doSomething() {
    console.log(this);
  }
          
  doSomething();

  let xo = 5;
  let yo = 8;
  alert(xo++  -  ++yo);
  console.log("xo is:", xo++);
  console.log( "yo is: ", ++yo);

// Flatten the array    // depth 
let UnflatedArr = [
    [1, 2],
    [3, 4],
    [5, 6],
    [7, 8, [9, 10]]
];

function customFlat(UnflatedArr, depth = 1){
    let result = [];
    UnflatedArr.forEach((arr) => {
        if(Array.isArray(arr) && depth > 0){
            result.push(...customFlat(arr, depth - 1));
        }else {
            result.push(arr);
        }
    })
    return result;
}
console.log(customFlat(UnflatedArr, 1));
console.log(customFlat(UnflatedArr, 2));


// make a programme that brings the items of the original array into a 2d array
// your result should be [['Amazon', 'Ecommerce], ['Disney', Entertainment], ['Tesla', 'Innovation]]
let brands = [
    'Amazon', 'Tesla', "Disney", "Entertainment", "Ecommerce", "Innovation"
]

let newBrands = [];
for(let i = 0; i < 3; i++){
    if(i + 4 < brands.length){
        newBrands.push([brands[i], brands[i + 4]])
    } else {
        newBrands.push([brands[i], brands[i + 1]])
    }
}