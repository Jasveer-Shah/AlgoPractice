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