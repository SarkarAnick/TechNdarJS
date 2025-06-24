// for...of -> executes a loop that operates on a sequence of values sourced from an iterable 

//const pieces = [1,2,3,4,5,6,7,8,9,0]
const pieces = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];

// the general for loop
// for(let i = 0 ; i < pieces.length ; i++)
// {
//     pieces[i] = pieces[i].toUpperCase // causes permanenet change to the main array pieces so the next time i print the array it will all show uppercase
// }
// console.log();



for (let piece of pieces) { // one of the prblm with this loop is that we are loosing the index of the elements
  console.log(piece);
  piece = piece.toUpperCase() 
  console.log(piece);
  
}
console.log(pieces); // .toUpperCase didnt cause any chnage to original array
