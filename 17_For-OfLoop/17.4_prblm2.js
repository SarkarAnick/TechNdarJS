/*
    1. Create an empty Set called "names"

    2. Create another empty Set called "capsNames"
    
    3. Add the following names to the set:
        - Bilbo
        - Hermione
        - Spock
        - Leia

    4. Use a for-of loop to loop over "names" and adds the capitalized version of each name to the "capsNames" set

    5. Print out "capsNames"
*/

const names = new Set();
capsNames = new Set();

names.add("bilbo");
names.add("hermione");
names.add("spock");
names.add("leia");
for (n of names) {
  capsNames.add(n.toUpperCase());
}
console.log(capsNames);
