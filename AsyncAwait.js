async function foo() {
    const result1 = await new Promise((resolve) => setTimeout(() => resolve('1')))
    const result2 = await new Promise((resolve) => setTimeout(() => resolve('2')))
 }

 console.log('foo:', foo())   // returned value undefined

async function foo2(){

    const result1 = await new Promise((resolve)=> {
        setTimeout(()=>{
            resolve('I got resolved after 3 seconds, promise fulfilled')
        }, 3000);
    })

    return result1
}

console.log('foo2:', foo2());


