const myInterval = setInterval(myTimer, 1000);

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