// filter -> makes shallow copy of a portion of a given array filtered down to just the elements from the given array that pass the test implemented by the provided function
// doesnt return undefined when condition in the function is not met. so empty positions in the array ( the undefined ones ) are just replaced.

const nums = [5,6,7,8,9,10]

evenNums = nums.filter( ( a ) => {
    if (a % 2 === 0)
        return true //a // instead of returning a i can return true here
})

console.log(evenNums);
