/*
    1. create an object called myPet with :
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

let myPet = {
    name:"sudo",
    type : "dog",
    breed : "poodle",
    age : 7,
    friends: ["bit" , "byte" , "data"]
}

myPet.colour = "black"

myPet.breed = "beagle"

myPet.friends.pop()

myPet.friends.push("chip")

console.log(myPet);


