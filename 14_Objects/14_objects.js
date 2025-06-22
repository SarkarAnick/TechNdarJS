// property names are keys in the object -> converted to strings by js itself
// key : value (pair)
const person = {
  id: 42,
  name: "alex",
  age: 19,
};
// memory allocation behaves like array
//const anick = person will point to the position person is at . therefore any change at anick will be seen in person

// values of keys can be changed within object  -> 2 ways
person["id"] = 44;
person.name = "mibomba"; // this syntax cannot be used when the "key" has a space within itself

// keys are always strings but code formatter removes the "" when u enter them

const animal = {
  id: 42,
  name: "rawr",
  type: "dawg",
  "num legs" : 4  // explicitely need to put quotes around the keys as key contains " "
};
console.log(animal);

animal["id"] = 32; //permanent change

console.log(animal);

animal.name = "woof"

console.log(animal); // permanent change

//adding new property

animal.shape = "box"



// how to check is a property ( key-value ) pair is in object or no

console.log("name" in animal); // in keyword ~> can check for presence of keys ( not values ) -> returns boolean

//~> methods 
// 1. how to print all the keys inside the object without the necessity of showing the values
console.log(Object.keys(animal));

// 2. how to print all the values inside the object without the necessity of showing the keys
console.log(Object.values(animal));

// 3. how to show the properties(keyvalue pairs)
 console.log(Object.entries(animal)); // an array of arrays . each inner array is a key value pair
// [
//   ["id", 32],
//   ["name", "woof"],
//   ["type", "dawg"],
//   ["num legs", 4],
// ];

// a beautiful scene of array of objects will be seen in prblm2.js






