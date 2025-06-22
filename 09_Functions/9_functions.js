/*  FUNCTIONS -> to arrange code in different blocks to ensure seamless reading and execution.
                 snippets of code to reutilise in various situations
    REGULAR FUNCTIONS
    function printHello() {
        .....
    }

    ARROW FUNCTIONS
    const printHello = () => {     
        .....   
    }
        // [ () => : this thing actually declares that printHello is a function ]

    
    ->  FUNCTION DECLARATION
        const printHello=()=>{
        }
    
    ->  FUNCTION CALL 
        printHello()

*/

const printHello = () => {
  console.log("ola amiga!");
};
printHello(); // function call

console.log();

const printHello1 = (namee) => {
  // namee is function parameter
  console.log(`Hello ${namee} `);
};
let namee = "anick"; // function argument

printHello1(namee);

console.log();

// FUNCTION CAN HAVE MULTIPLE PARAMETER

const printHello11 = (name1, name2) => {
  console.log(`Hello ${name1} ${name2}`);
};
let name1 = "anick"; // function argument
let name2 = "sarkar";
printHello11(name1, name2);

// ANOTHER IMPLICATION -> function er moddhe loop

const printMany = (message, num) => {
  while (num >= 1) {
    console.log(message);
    num--;
  }
};
let message = "sexual";
let num = 4;
printMany(message, num);

console.log();

// Loop er moddhe function

const viagra = (message) => {
  console.log(message);
};
for (let i = 1; i <= 5; i++) {
  viagra(message);
}

console.log("----------------");

const sum = (num1, num2) => {
  console.log(num1);
  console.log(num2);

  console.log(num1 + num2);
};
sum(2, 3);
sum(5, 6);
sum(); // -> returns NaN                          ***Notice Here***
sum(3); // -> returns NaN               -> when value is assigned in javascript to a parameter in general , by DEFAULT it is assiged undefined

/* *********************************************************************************************
                                  *** RETURN KEYWORD ***
-> when a function computes an argument using some parameters , it can return some value
-> RETURN keyword can only be used within a function block and no where else
************************************************************************************************/
console.log("---------------------");

const sum1 = (num111,num222) =>
{
    return num111+num222
}

let result = sum1(333, 444);
console.log(result);

console.log(sum1(10,20));


// jodi ekta function kichu return na korto tale ki korbe?
const anick = () => {
    console.log("anick");
    // return true  
}
anick()
const name = anick()
console.log(name); // => returns undefined . .: as u can see , a function inherently returns  "undefined"

