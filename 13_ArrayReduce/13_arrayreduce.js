// reduce take 2 arguments ( a function and a initial value)
// const nums = [5,10,15,20,25]

// const sum2 = nums.reduce( (result ,number ) => {
//     console.log(result , number);
//     return result + number
// } , 0) // result will start at 0 and will accumulate the values and in the end will store it at sum2
// // basically this second argument , 0 , can be changed according to the datatype of the return i want in sum2. 
    
// console.log(sum2);


// understading more practical case
const nums = [5,10,15,20,25] // we want to add numbers less than 15 

const sum2 = nums.reduce( (result ,number ) => {

    console.log(result , number);
    if(number<15)
    {
        return result + number;
    }
    // function will keep running for numbers above 15 so return will not work there and inherently function will keep returning zero .: to stop that from happening we will do:
    return result + 0 // what if we returned only 0 , then result will be updated to zero and sum2 will become 0
} , 0) 

console.log(sum2); // will show undefined
    