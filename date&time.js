// const myInterval = setInterval(myTimer, 1000);

function myTimer(){
    let today = new Date();
    document.getElementById("localTime").innerHTML = today.toLocaleTimeString();// it will show
    // local time

}

function myStop(){
    clearInterval(myInterval)
}


let rendomdate = new Date();
const numbercheck = Number(rendomdate);
console.log("todays date in number",numbercheck);

// setTimeout output
function scope(){
    for(var i = 0; i < 3; i++){
        setTimeout(() => {
            console.log(i) // what will be logged    // i has global ascope
        }, i * 1000);
    }
}
//3
//3
//3
scope();   // call
function scopeVar(){
    for(var i = 0; i < 3; i++){
        setTimeout(() => {
            console.log(i) // what will be logged    // i has global scope
        }, i * 1000);
    }
}
//3
//3
//3
scopeVar();   // call

function scopeLet(){
    for(let i =0; i < 3; i++){
        setTimeout(()=>{
            console.log(i)        // what will be logged   // i has block scope
        }, i * 1000);
    }
}
//0
// 1
//2
scopeLet();