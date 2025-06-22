/* 
    1. create an array :
        - "mercruy"
        - venus
        - earth 
        - mars 
    2. add jupiter at the end of the array
    3. add sun at the start of the array
    4. remove last two strings from the array
    5. remove first two strings from the array

    Print out the array after each step
*/

planets = ["mercury" , "venus" , "earth" , "mars"]
console.log(planets);


planets.push("jupiter")
console.log(planets);

planets.unshift("sun");
console.log(planets);

planets.pop()
planets.pop();
console.log(planets);

planets.shift()
planets.shift()
console.log(planets);




