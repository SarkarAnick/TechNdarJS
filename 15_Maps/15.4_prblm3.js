/*
    1. Create an object Called "houseForSale" with the following properties:
    - area → 940
    - value → 320000
    - streetName → "Fifth Street"
    - built → "2012"
    - owner → {name: "Blake" , age: 29}
    - offers → [290000, 295000, 315000, 312000]
    
    2. Print out "houseForSale" to the terminall
    
    3. Delete the property with the key "built"
    
    4. Change the age of the owner to be 30 inside "houseForSale"
    
    5. Print out the maximum offerPrice (use reduce)
    
    6. Add a new property: "sale price" → 312000
    
    7. Print out "houseForSale" to the terminal
    
    *This is a challenging exercise - take it slow and step by step
*/
houseForSale = new Map()
houseForSale.set('area' , 940)
houseForSale.set('value' , 320000);
houseForSale.set('streetName' , 'Fifth Street');
houseForSale.set('built' , '2012');
houseForSale.set('owner' , {name:'blake' , age: 29} );
houseForSale.set('offers' , [290000 , 295000,315000,312000]);

houseForSale.delete('built')

houseForSale.get("owner").age = 30

houseForSale.set('sale price' , 312000)

maxOff = houseForSale.get("offers").reduce( (x,a) =>{
    if (x < a)
    {
        return a
    }
    else return x
},0) 
console.log(maxOff);
 
console.log(houseForSale);




