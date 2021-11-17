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