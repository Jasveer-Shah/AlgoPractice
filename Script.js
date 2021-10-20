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

console.log(addUpToR(5))