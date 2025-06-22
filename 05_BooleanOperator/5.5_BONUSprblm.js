/*  LOGICAL ASSIGNMENT OPERATORS
What will each of the following variables evaluate to:
    1. let username = ""
        username &&= "tiger"
    
    2. let vip = 0 
        vip ||= 3
    
    3. let loggedIn = null
        loggedIn ??= 0
*/
let username = "" // leftHandValue is falsy . therefore wont be assigned -> no output
   username &&= "tiger" // -> this is same as -- username = "" && "tiger"
    console.log(username); // -> basically console.log() print korle ja print hoy sheyta print hocche [emptyline]

let username1 = "anick"; // leftHandValue is truthy . therefore will be assigned -> op : tiger
username1 &&= "tiger";
console.log(username1); // -> tiger
    
let vip =  0 // --> vip is 0 therefore falsy  .[jodi 0 chara onno kono number hoto tale kintu shei number tai thakto.]
    vip ||= 3 // --> same as -- vip = 0 || 3
    console.log(vip); // o/p -> 3

let loggedIn = null // --> null is falsy for nullish therefore rightHandValue is assigned
    loggedIn ??= 0 // same as loggedIn = null ?? 0 
    console.log(loggedIn); // o/p -> 0
    
/* 
    logical AND assignment : &&= -> assigns the right hand value only if the left hand value is truthy

    logical OR assignment : ||=  -> assigns the right hand value only if the left hand value is falsy

    logical NULLISH assignment : ??= -> assigns the right hand value only if the left hand value is "null" or "undefined" 
    [very similar to OR assignment but NULLISH er jonno sudu "null" ar "undefined" falsy value.
    but OR er jonno 0 , "" , NaN , false ei gulou falsy value]
*/