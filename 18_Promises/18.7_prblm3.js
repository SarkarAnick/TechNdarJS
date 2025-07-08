/*   
    1. Print out "Program started" at the start of your code
    2. Create a Promise that resolves after 5 seconds with the 
        value {data: "Hello, friend!", error: null}
    3. Log out the promise while it's pending
    4. Print out "Program in progress..." as well
    
    5. Create a first Promise chain using the promise above and
        Print out the resolved value when the first promise fulfills
    6. Have this first promise return another new Promise that will
        fulfill after 2 seconds with the message:
        "First promise chain complete!"
    7. Print out the message from the above promise after it 
        fulfills ("First promise chain complete!")
    
    8. Create a second Promise chain using the promise above and
        Print out the resolved value when the second promise fulfills
    9. Have this second promise return another new Promise that will    
        fulfill after 10 seconds with the message:
        "Second promise chain complete!"
    10. Print out the message from the above promise after it 
        fulfills ("Second promise chain complete!")
    
    
    HINT: Use setTimeout for the delay
    HINT2: This will be using the same promise two times:
    const myPromise = new Promise(...) // step 2
    myPromise. then(...). then(...) // steps 5-7
    myPromise. then (...).then(...) // steps 8-10
    BONUS: WHY does it work this way?
*/

console.log("program started");
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ data: "hello,friend", error: null });
  }, 5000);
});
console.log(myPromise);
console.log("program in progress");

// first promise using myPromise
myPromise
  .then((val) => {
    console.log(val);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("first promise chain completed");
      }, 2000);
    });
  })
  .then((val) => { // this .then is for the new promise that is being returned
    console.log(val);
  });

//second promise using myPromise
myPromise
  .then((val) => {
    console.log(val);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("second promise chain completed");
      }, 10000);
    });
  })
  .then((val) => {
    console.log(val);
  });


// both first and second promise will trigger just after resolve of the creation of myPromise that is after 5 sec 
//  so 1st and 2nd promise will start parallelly 
// timeline : 0sec->myPromise created ~> 5sec->myPromise resolved->1stPromise and 2ndPromise started parallely ~> 7sec->1stPromise nest solved("first promise chain complete") ~> 15sec->2ndPromise nest solved("second promise chain complete")

// in both 1st and 2nd promise we are resolving our original myPromise so the object is printed
