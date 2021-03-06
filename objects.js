let students = {
    "steve@gmail.com": 80,
    "Hana@yahoo.com":70,
    "Jojo": 60
}

let summe = 0;
let count = 0;
let average;
for(let key in students){
    summe += students[key];
    count++;
}

average = summe / count;
console.log(average);

let scores = Object.values(students)
console.log(scores);

let summe2 = scores.reduce(function(init, val) {return (init + val)}, 0);
console.log(summe2)
let avarage2 = summe2 / scores.length;



const fullName = {
    firstName: "",
    lastName: "",
    setName: function(name) {
        let splitName = function(n){             // n is any string or name parameter
            let nameArray = n.split(" ");
            console.log(nameArray);
            this.firstName = nameArray[0];
            this.lastName = nameArray[1];
        }
        splitName(name);    // here we are passing the argument to the function
    }
}

fullName.setName("Jasveer Shah");
console.log(firstName);
console.log(lastName);

console.log([] + []);
console.log({} + {});
console.log("" + ""); 
console.log([] + {});



// find the value of x.method(y, 1);

function y() {
    console.log(this.length);
}

var x = {
    length: 5,
    method: function(y){
        arguments[0]();       //arguments is here array like object 
    }
};
                                 //arguments is here array like object, so below in the method
                                 // we are passing 2 arguments 1 = y, 2 = 1 and as y is passed here it will check the length of the array
x.method(y, 1);                // output should be 2



// make a function that checks if two objects are identical or not

let obj1;
let obj2;

function checkifIdentical(obj1, obj2) {
    let keys1 = Object.keys(obj1);
    let keys2 = Object.keys(obj2);

    if(keys1.length !== keys2.length){
        return false;
    }
    for(let key of keys1) {
        if(obj1[key] !== obj2[key]) {
            return false;
        }
    }
    return true;
}

// test 1
let objA = {
    a : "hello",
    b: "bye"
}

let objB = {
    a : "2",
    b: "3"
}

console.log(checkifIdentical(objA, objB))

// test2
let objK = { 1: 33, 2: 22}
let objM = { 1: 33, 2: 22}

console.log(checkifIdentical(objK, objM))



// make a function that changes an object to a two diamentional array

let newArray = (obj) => {
    let keys = Object.keys(obj);
    let newarr = [];
    for(let i = 0; i < keys.length; i++){
        newarr.push([keys[i], obj[keys[i]]]);
    }
   return newarr;
}

console.log(newArray({
    1 : "angel",
    2: "pari"
}));


// call, bind and Apply

var person = {
    name: "Jasveer",
    hello: function (arg){
        console.log(this.name + " says Hello" + arg) 
    }
}

// for in loop
let forObject = {
    a: 10,
    b: 14,
    c: 20,
}

for(const property in forObject){
    console.log(`${property}: ${forObject[property]}`)
}

let forArray = [34, 45, 67];
for(let element of forArray){
    console.log(element)
}