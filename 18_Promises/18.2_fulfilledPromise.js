//pending promise
const myReceipt = new Promise((resolve,reject) => {
    setTimeout( () => {
        resolve("here is you icecream")
    },1000)
})
console.log(myReceipt); // this would show pending primise object

//fulfilled promise(.then())
myReceipt.then((resolvedValue) => { // when myReceipt.then is called resolvedValue gets <- resolve("here is you icecream")
    console.log(resolvedValue); // here is you icecream //after 1000 millisec
})
