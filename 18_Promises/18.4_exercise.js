/*
    1. print out " program started " at the start of your code
    2. create a promise that resolves after 3 sec
    3. log out the promise while its pending
    4.print out "program is in progress..." as well
    5. print out "program complete" when the promise completes after 3 sec

*/
// WAY:1 best way

// console.log("program started");
// const myPromise = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("program complete");
//     },3000)
// }).then((value)=>{
// console.log(value);
// })
// console.log(myPromise);
// console.log("program in progress...");



// WAY:2 my way

// console.log("program started");
// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve();
//   }, 3000);
// }).then(() => {
//   console.log("program complete");
// });

// console.log(myPromise);
// console.log("program in progress...");



// WAY:3 easy way

console.log("program started");
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("program complete");
  }, 3000);
})

console.log(myPromise);
console.log("program in progress...");
