// promises -> 3 states -> 1. pending            2. fulfilled            3. rejected
//promises can be in one of the three mentioned stats in a given time

//                                 promise flow:

//              |--------fulfill----->2: .then()-----optional----|
//         1: pending                                      3: finally()
//              |--------reject------>2: .catch()-----optional--|

// promise constructor takes a function as an argument
const myReceipt = new Promise((resolve, reject) => {
  //resolve.reject is given by js itself
  setTimeout(() => {
    // a fuunction that takes a function as a arugument and will execute the function after certain amount of millisecond _______________________
    resolve("heres your ice creame"); //         |
  }, 1000); // <-------------------------------- |    
  // so basically setTimeout() delays the execution of resolve("") by 1000 secs
});
console.log(myReceipt); // this would show promise is pending
