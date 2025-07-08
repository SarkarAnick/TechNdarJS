const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("hello my friend"); //2. then this gets printed after settimer
    // resolve("here is you icecream")// 4. then this
    reject("sorry no icecream for u");
  }, 1000);
}); // basically we are scheduling this to run in the future

//.then and .catch needs to be linked and create a chain

myPromise
  .then((resolveValue) => {
    console.log("promise seems to be done"); // 3. then this will be printed
    console.log(resolveValue); // 4
    console.log(myPromise); //promise { 'here is you icecream' }
    return "hi"; //.then or .catch always returns a promise
  })
  .then((anotherValue) => {
    console.log(anotherValue);
  })
  .catch((error) => {
    console.log(myPromise); //Promise { <rejected> 'sorry no icecream for u' }
    console.log(error);
  });
console.log("hello outside"); // 1. first this gets printed
console.log(myPromise);
