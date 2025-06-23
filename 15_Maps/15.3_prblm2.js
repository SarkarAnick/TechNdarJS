/*
    1. Create the following 3 maps:
    - const banana = {name: "banana", quantity: 1, price: 1.95}
    - const apple = {name: "apple" , quantity: 1, price: 1.45}
    - const candy = {name: "candy", quantity: 1, price: 3.50}

    2. Create an map called "store" with the following properties:
    - storeNumber → 5
    - locationCity → "Milan"
    - locationCountry → "Italy"
    - products: [banana, apple, candy]

    3. Print out "store" to the terminal

    4. Only print out all the product objects in "store"

    5. Only print out the 3rd product object in "store"

    6. Change the price of the banana object through the store object to be 1.  75..
  
    7. Print out both "store" and "banana"

    8. Change the price of the candy object directly to be 4.99
 
    9. Print out both "store" and "candy"
*/


const banana = new Map()
banana.set("name" , "banana")
banana.set("quantity" ,1)
banana.set("price" , 1.95)

const apple = new Map()
apple.set("name" , "apple")
apple.set("quantity" ,1)
apple.set("price" , 1.45)

const candy = new Map()
candy.set("name" , "candy")
candy.set("quantity" ,1)
candy.set("price" , 3.50)


store = new Map()
store.set("storeNumber" , 5)
store.set("locationCity" , "milan")
store.set("locationCountry" ,"Italy" )
store.set("products" , [banana, apple, candy])

console.log(store);


//Only print out all the product maps in "store"
for(i = 0 ; i < store.get("products").length ; i++){
    console.log(store.get("products")[i]);
}

console.log("-------------------------------------------------------------------------------");

//5. Only print out the 3rd product object in "store"
console.log(store.get("products")[2]);

//6. Change the price of the banana map through the store map to be 1.  75..
store.get("products")[0].set("price" , 1.75)
// if banana was an object we would have done      =>      store.get("products")[0].price = 1.75


//8. Change the price of the candy object directly to be 4.99
candy.set("price" , 4.99)


//7. Print out both "store" and "banana"
console.log(store);

console.log(banana);

console.log(candy);
                                                     
