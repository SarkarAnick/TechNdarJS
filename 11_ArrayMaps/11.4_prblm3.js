/*
    1. create the following array called "items" :["light" , "banana" , "phone" , "book" , "mouse"]
    2. create a new array "plurals" : that maps over items and adds 's'
    3. but change mouse for mice 
*/

items = ["light" , "banana" , "phone" , "book" , "mouse"]

plurals = items.map( (a) => {
    if( a === 'mouse')
    {
        return 'mice'
    }
    else 
    return a + 's'
})

console.log(plurals);
console.log(items);

