/*
    1. create object called "mexico" with :
        - id -> 24
        - name -> "mexico"
        - capital -> "mexico city"
        - neighbours -> ["usa" , "guatemala" , "belize"]

    2. print mexico
    3. change id to 25
    4. add honduras to list of neighbours of mexico
    5. print mexico again
*/

const mexico = {
    id: 24,
    name: "mexico",
    capital: "mexico city",
    neighbours: ["usa" , "guatemala" , "belize"]

}

console.log(mexico);
mexico.id = 25
mexico.neighbours.push("honduras")

console.log(Object.entries(mexico));



