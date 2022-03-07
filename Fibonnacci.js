// print fibonacci series up to n terms
// let a = 0;    // declare the variables
// let b = 1;
// let sum;
// for(i = 1; i < 50; i++){
//      console.log(sum);

//      sum = a + b;
//      a = b;               // a will now contain the value of b variable
//      b = sum              // b will now contain the value of sum variable
// }


// console.log("printFibonacci", printFibonacci(12))

// let`s do it with recursive method

// function printFib(p) {
//      if( p === 1) return 0;
//      if( p === 2) return 1;

//    return  printFib(p - 1) + printFib( p - 2 );
     
// }
// console.log(printFib(5));
// console.log(printFib(3));
// console.log(printFib(1));
// console.log(printFib(2));
// console.log(printFib(8));


//Print Prime numbers till 100
function isPrime(num){
     if(num < 2){
          return false
     }
     for(let i = 2; i < num; i++){
          if(num % i == 0){
               return false
          }
     }
   return true
}

for(let i = 0; i < 100; i++){
    if(isPrime(i)){
         console.log(i)
    }
}