/*
    1. create an array called bools : [t,t,f,t,f,f]
    2. map over bools and return: -> if true a random number
                                 if false 0
    3. print both array
*/

bools = [true, true, false, true, false, false];

numBools = bools.map((a) => {
    if ( a )
    {
        return Math.ceil(Math.random() * 10)
    }
    else {return 0}
            
})

console.log(numBools);
console.log(` bools = ${bools}`);

// Math.random() -> gives random value between 0 and 1 
// Math.floor/ceil(Math.random()*10) -> gives between 0 and 10
// Math.floor/ceil(Math.random()*100) -> gives between 0 and 100
