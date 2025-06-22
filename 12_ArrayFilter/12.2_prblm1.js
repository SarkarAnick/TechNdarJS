/*
    1. create an array with the following strings :
        ["france" , "south africa" , "brazil" , "united states" , "sweden"]
    2. filter over the countries and return only those countries which have blank space in their name

    *** stringContains 'String'.includes("")
*/

countries = ["france", "south africa", "brazil", "united states", "sweden"]

spaceCount = countries.filter ( (a) => {
    if ( a.includes(" "))
        return true
})

console.log(spaceCount);
