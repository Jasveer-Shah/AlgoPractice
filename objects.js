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

