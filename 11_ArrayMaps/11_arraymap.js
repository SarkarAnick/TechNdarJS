// Map -> method that works with arrays in js . doesnt work on any other datatype  -> operation on all the elements of the array and store it in a new array


// the returned(new array) wil be the same length of the original array
// an array of undefined of same length as the original array will be shown if the inner function doesnt return anything


const cities = ["london", "vancouver", "mumbai", "new york"];

const bigCities = cities.
                map( (city) => {
                    return city.toUpperCase();
                  })

console.log(bigCities);
console.log(cities);

console.log(`------------------------`);

animals = ["monkey" , "dog" , "cat" , "koala"]

animalMan = animals.map( (ani) => {
  return ani + "-fucker"
})

console.log(animalMan);

console.log(`------------------------------------------------------------`);

number = [1,2,3,4,5,6,7,7 ]

timesSquare = number.map( (num) => {
  return num*num
})

console.log(timeSquare);



                  