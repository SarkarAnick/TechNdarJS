const message = "this is a womderful day";
for (const charc of message) {
  // console.log(charc.toUpperCase());
}

//for..of for maps
const myMap = new Map();
myMap.set("name", "anick");
myMap.set("age", 22);
myMap.set("friends", "mr.monkey");

for (const item of myMap) {
  console.log(item); // each iteration returns an array
}

// for..of for sets
const mySet = new Set();
mySet.add("hello");
mySet.add("anick");
mySet.add("hello");
mySet.add("hello1");
mySet.add("monkey");
mySet.add(10);
mySet.add(10);
mySet.add(11);
console.log(mySet);

for (const item of mySet) {
  console.log(item); // gives back the item itself . coz set is more like an array not a key value pair like Map
}

//for ..of Objects

const stockItem = {
  id: 54,
  price: 1.32,
  name: "apple",
  quantity: 6,
};
// an OBJECT is not ITERABLE like maps arrays and sets so we cannot use for of here

// for (const item of stockItem) {
//   console.log(item);
// }

console.log(`keys:${Object.keys(stockItem)}`);
console.log(`values : ${Object.values(stockItem)}`);
console.log(Object.entries(stockItem)); // basically to operate the object as an iterable we are converting it as an array


// so we will be doing the right way
for (const item of Object.entries(stockItem)) { //Object.entries(stockItem) returns each entry as an array
  console.log(item); // each entry will be an array of the key value pair of the entries
}
