const cities = ["vancouver" , "berlin" , "delhi" , "mumbai"]

// concatCities = cities.reduce( (x ,a ) => {
//     console.log(x,a);
    
// return x+a + " "

// } , "")

// console.log(concatCities); // concatCities is actually a single string



// what if we return a 
// concatCities = cities.reduce((x, a) => {
//   return a // the last element of the array will be printed
// }, "");

// console.log(concatCities);




//what if we want to skip and element? -> lets say we want to skip delhi
concatCities = cities.reduce((x, a) => {
    if(a === "vancouver")
    {
        return x // so just returing the string itself without doing any change
    }
  return x + a +" "; // the last element of the array will be printed
}, "");

console.log(concatCities);
