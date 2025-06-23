// Sets -> object that lets u store unique values of any type . a value in a set occurs only once
const mySet = new Set();

mySet.add(10);
mySet.add(20);
mySet.add(30);
mySet.add(40);
mySet.add(50);
mySet.add(60);

console.log(mySet);

mySet.add(10);
mySet.add(20);
mySet.add(10);
mySet.add(10);
mySet.add(60);
mySet.add(60);
// you can add n number of duplicate sets yet nothing changes in the set only unique values will be stores
// but there is a case
mySet.add("10");

console.log(mySet)

// to delete a value from a set
mySet.delete(20)
console.log(mySet);

// to see if a set has an element or not ( much faster and easier than arrays) 
console.log(mySet.has(30)) // returns boolean

//to know size of set ( even though autimatically gets printed due to node in terminal)
console.log(mySet.size);


 

