const animals = ["monkey", "dog", "cat", "koala" , "elephant" , "kukur"];
console.log(animals); // -> prints entire array at once
console.log("-----------");

console.log(animals[0]); // -> prints out array at certain index ( here 0)
console.log("-----------");

const koala = animals[6];
console.log(koala);
// -> more than array lemgth .: o/p - undefined
console.log("-----------");

for (let i = 0; i <=animals.length - 1; i++) { // realise the importance of (-1)
  console.log(animals[i]);
}
console.log("-----------");

// *** to add and remove new elements in an array ***
console.log("1" , animals , "before addition");
animals.push("2","cow") // pushing 2 elements , 2 and cow in the array 
console.log("3",animals.push("cow")) 
console.log("4",animals);
animals.pop()
console.log("5",animals.pop()); // shows the element that is being popped
console.log("6",animals);  // shows whole array after popping the element

console.log();
console.log(animals.push("anick")); // same as line 21. shows length of array after pushing -> 8

// *** to add and element at the front of an array
animals.unshift("llama")
console.log(animals);
// *** to remove an item form the start of an array
animals.shift()
console.log(animals);
// *** 