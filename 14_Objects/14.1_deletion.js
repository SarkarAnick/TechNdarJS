const animal = {
  id: 42,
  name: "rawr",
  type: "dawg",
  "num legs": 4, // explicitely need to put quotes around the keys as key contains " "
  numLegs : 5
};
delete animal["num legs"]
console.log(animal);

delete animal.numLegs
console.log(animal);

