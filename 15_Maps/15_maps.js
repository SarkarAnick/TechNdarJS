// Map -> an object that remembers the original insertion order of keys

const myMap = new Map();
console.log(myMap); // very similar to an empty object

myMap.set("name" , "anick") // "key" , "value"
myMap.set("age" ,"10")
// {
//      name : "anick"     :~> object version of our map
// }
const age = myMap.get("age")
console.log(age);

myMap.set('age' , '11') //updation of value of key
console.log(myMap);

// how to check if there is an key in our map
console.log(myMap.has("name")); //returns boolean
console.log(myMap.has("lastName")); //false

//to show size of map
console.log(myMap.size);

// deletion of properties
myMap.delete("age")

console.log(myMap);

// maps have similar methods like Objects which u can see in mdn and use later ( for-of loop )




