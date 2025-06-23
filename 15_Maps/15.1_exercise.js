/*
    1. create map called "mexico" with :
        - id -> 24
        - name -> "mexico"
        - capital -> "mexico city"
        - neighbours -> ["usa" , "guatemala" , "belize"]

    2. print mexico
    3. change id to 25
    4. add honduras to list of neighbours of mexico
    5. print mexico again
*/

const mexico = new Map();

mexico.set("id" , 24 )
mexico.set("name" , "Mexico")
mexico.set("capital" , "mexico city")
mexico.set("neighbours" , ["usa" , "guatemala" , "belize"])
console.log(mexico);

mexico.set("id" , 25)

// to add element 
mexico.get("neighbours").push("honduras")

console.log(mexico);

