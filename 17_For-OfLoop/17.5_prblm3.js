/*
    1. Create a Map called "backpack" and add the following entries:
        - 1 => {name: "Sword", value: 300}
        - 2 => {name: "Banana", value: 5}
        - 3 => {name: "Gold Nugget", value: 10000}
        - 4 => {name: "Pants", value: 100}
    
    2. Use a for-of loop to loop over "backpack" and print out the name and the value for each item in the following format:
    Name: $Value
    For example: Sword: $300
    
    3. Also print out the total value of all items in the backpack
*/
backpack = new Map();
backpack.set(1, { name: "Sword", value: 300 });
backpack.set(2, { name: "Banana", value: 5 });
backpack.set(3, { name: "Gold Nugget", value: 10000 });
backpack.set(4, { name: "Pants", value: 100 });
totalvalue = 0 

for (const item of backpack) {
  //console.log(item);//by looping like this we get arrays of each entry
  // so we can try this
  key = item[0];
  value = item[1];
  console.log(`${key} -> ${value.name} : $${value.value}`) ;
  totalvalue = value.value + totalvalue
}
console.log(`total value : $${totalvalue}`);
