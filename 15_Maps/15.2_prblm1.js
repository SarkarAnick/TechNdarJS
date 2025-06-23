/*
    1. create an map called myPet with :
        - name -> "sudo"
        - type -> "dog"
        - breed -> "poodle"
        - age -> 7
        - friends -> ["bit" , "byte" , "data"]

    2. print myPet
    3. add new property : color -> "black"
    4.remove "data" from list of friends
    5.change breed to beagle
    6.print mypet
    7. add chip to friends
    8. print myPet
*/

const myPet = new Map()

myPet.set("name" , "sudo")
myPet.set("type", "dog");
myPet.set("breed", "poodle");
myPet.set("age", 7);
myPet.set("friends", ["bit" , "byte" , "data"]);

console.log(myPet);

myPet.set("color" , "black")
myPet.set("breed" ,"beagle")
myPet.get("friends").pop()
myPet.get("friends").push("chip");
console.log(myPet);