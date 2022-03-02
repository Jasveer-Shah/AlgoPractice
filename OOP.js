// factory function

function createCircle(radius){
     return {
         radius,
         draw: function(){
             console.log("draw")
         }
     }
}

const circle = createCircle(1)   // now circle is a new object
circle.draw();

// Constructor function
function Circle(radius) {
    console.log('this', this  );
    this.radius = radius;       //let`s set the properties of this object,
                               // that is executing this piece of code
    this.draw = function(){
   console.log('draw')
    }
}

//create a new circle  //new oprator to call the circle function
// new circle makes a new empty object in the memory
const newCircle = new Circle(2);
console.log(newCircle)   // it will consolelog the newCircle Object

let newRadius = newCircle.radius;
console.log(newRadius)

// value types                 // Reference Types
// Number                         Object
// String                         Function
// Boolean                        Array
// Symbol 
// undefined
// null

// primitives are copied by their value
// Objects are copied by their reference
let x = 4;
let y = x;
 x = 6;
console.log(x);  // 6
console.log(y); //4

let m = { value : 5};
let k = m;
m.value = 7;
console.log(m);   // { value : 7}
console.log(k)    // { value : 7}
// { value : 7} this object is saved somewhere in the memory
// and the address of that object is saved inside m and k variables

let number = 10;
function increase(number){  // here number is in local scope of this function so only available inside
    number++;
    console.log(number)
}

increase(number);
console.log(number);  // here number is in global scope

// compare
let objNumber = { value: 40};     // this object { value: 40} is now in memory 
//and objNumber variable is pointing to this object
function increaseObjNum(obj){  
      obj.value++;
}

increaseObjNum(objNumber);  // here this local variable is
                            // also pointing to that reference object
console.log(objNumber);  // { value: 41}

// accessing object properties
// dot notation               object.propertyName
// bracket notation           object["property-Name"]
// delete circle['location']

// for iterating the properties in an object for in loop
for(let key in circle){
    if(typeof circle[key] !== 'function'){
    console.log(key, circle[key]);
    }
}

const keys = Object.keys(circle)   // array
console.log(keys)

// for iterating the properties in an array
for(let key of keys){
    console.log(key);
}

//  to check if the object has certain property
if('radius' in circle){
    console.log('Circle has a radius')
}

 
