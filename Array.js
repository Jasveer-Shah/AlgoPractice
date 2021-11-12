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

