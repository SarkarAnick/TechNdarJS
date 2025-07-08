//pending promise
const myReceipt = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("sorry we are out of icecreame");
  }, 1000);
});
console.log(myReceipt); // this would show pending promise object

//rejected promise(.catch())
myReceipt.catch((rejectedValue) => {
  console.log(rejectedValue); // sorry we are out of icecreame //after 1000 millisec
});
