/* 
    1. create an array of items :["light" , "banana" , "phone" , "book" , "mouse"]
    2. create an array called caps that maps over items and capitalizes each of them
    3.create concat that reduces to concat all the strings in caps using space to seperate each

*/

items = ["light", "banana", "phone", "book", "mouse"];

caps = items
  .map((a) => {
    return a.toUpperCase();
  })
  .reduce((x, a) => {
    return x + a + " ";
  }, "");
console.log(caps);
