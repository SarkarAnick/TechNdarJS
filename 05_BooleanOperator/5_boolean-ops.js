/*
    == : equal to               -- dont use much
    === : strict equal to       -- prefer this
    != : not equal to           -- dont use much
    !== : strict not equal to   -- prefer this
    > : greater than 
    < : less than
    >= : greater tan or equal to 
    <= : less than or equal to 
    
    LOGICAL OPERATORS
    && : logical AND
    || : logical OR
    ?? : Nullish Coalescing
*/
let j = 5 == " 5 "; // doesnt check type only value
console.log(j);
console.log("------------");

let k = 5 ==="5"; // strict equality - checks type
console.log(k);
console.log("------------");

let n = "a" !== 1 // strict inequality
console.log(n);
console.log("------------");


//BOOLEAN MATH OPERATORS
j = 7 >= 7
console.log(j);
console.log("------------");

j = 3 > 3
console.log(j);
console.log("------------");

//LOGICAL OPERATORS
console.log("LOGICAL OPERATORS");
console.log("------------");

j = 7 >= 7 || 7 > 7
console.log(j);
console.log("------------");
 
j = 7 >= 7 && 7 > 7;
console.log(j);
console.log("------------");

console.log("MIXTURE");

j = true && "oranges"
console.log("7",j);

j = false && "anick"
console.log("7.1" , j);

j = "anick" && false;
console.log("7.2", j);

j = "anick" || true
console.log("7.3",j);

const pi = 3.14
j = 0 || pi
console.log("7.4",j);

test1 = "anick" - "anick"
console.log(test1);
j = "anick" || test1;
console.log("7.5",j);

//TRUTH TABLE
console.log("----------");
console.log("AND TABLE");
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

console.log("----------");
console.log("OR TABLE");
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

/* FALSE VALUES IN JS
1. false
2. 0 
3. ""
4. Null
5. undefined
6. NaN ( Not a Number ) */

// NULLISH COALESCING




