/*
    1. create a variable called bakery that points to an array
    2. fill the array with the following string:
        [cake , cookie , bread , scone]
    3. print out bakery to make sure it has the 4 strings

    4. create another variable called "myBakery" and assign it to "bakery" that we declared previously
    5. add croissant and granola to myBakery

    6. print bakery and myBakery and observe the contents
*/

const bakery = ["cake", "cookie", "bread", "scone"];
console.log(bakery);

let myBakery = bakery;
myBakery.push("croissant" , "granola")
console.log(myBakery);

console.log(bakery); 

// array is a non-primitive datatype . backery and myBackery are pointing to the same object .. so when myBakery is being updated so is bakery

// so variable names of non primitive datatypes are basically just labels to point at same memory location





