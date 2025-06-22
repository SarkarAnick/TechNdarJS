// till now we have tired  0  and "" what if we try to return an array

nums = [5,10,15,20,25,30,35]

reduced = nums.reduce( (x,a) => {
    x.push(a + 5);
    return x 

} , []) // therefore x will behave like an array

console.log(reduced);

// basically made reduce behave like a map