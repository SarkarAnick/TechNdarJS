/* 
What would each of these variables evaluate to:
    1. const one = true && "hi";     -- true
    2. const two = false && "bye";   -- false
    3. const there = true || "meow"  -- true
    4. const four = false || "woof"  -- false
Print them out to the console to see if u got them right.
*/
const one = true && "hi"       // true:true -> gives true -> true contains "hi" -> print hi
const two = false && "bye";    // false:true -> gives false
const three = true || "meow"   // true:true -> gives true -> as or the second true                           condition doesnt even matter . therefore meow ignored
const four = false || "woof"
console.log(one);
console.log(two);
console.log(three);
console.log(four);

// ** at OR during true false condition with some tokens, true:false gives true . but --token--:false will give true . the token is always true so it will return the token
// OR is like short circuit , if first condition true -> no need to check second condition.
// if first condition false and second condition --sometoken-- -> o/p sometoken