let str = "apple";

function reverse(str){
  let Rstr = "";
  for(let i = str.length - 1; i >= 0; i--){
    Rstr += str[i];
  }
  return Rstr;
}
let rore = "mome"
console.log(reverse(rore))

function addUpTo(n){
  let total = 0;
  for(let i = 1; i <= n; i++){
    total += i;
  }
  return total;
}

console.log(addUpTo(5))

function addUpToR(m){
  if(m === 0)return 0;
  else {
    return  m + addUpToR(m-1)
  }
}

console.log(addUpToR(5));


function countUpDown(p){
    console.log("Going up....");
    for(let i = 0; i <= p; i++){
        console.log(i);
    }
    console.log("Going Down back...\n see you there");
    for(let i = p - 1; i >= 0; i--){
        console.log(i);
    }
    console.log("Reached to the bottom back")
}

console.log(countUpDown(10));



let entry = ["apple", "banana"];
const fruits = entry.entries();

for(let x of fruits){
      document.getElementById("entries").innerHTML += x + "<br>"
}


// bring all the ages over 18 from the array

let ages = [13, 15, 16, 18, 20 , 23, 30];

function over18(age){
    return age >= document.getElementById("ageInput").value;
}

function myAge(){
     document.querySelector(".ageNumber").innerHTML = ages.filter(over18)
}

