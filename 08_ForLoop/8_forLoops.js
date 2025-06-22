/* lets try something complicated 
     -> multiple initialisation <- */
let str , i 
for( str = "monkey" , i = 0 ; str !== "banana" ; i++)
{
    console.log(str , " " , i);
    //console.log();
    
    
    if ( i === 4)
    {
        str = "banana"
    }
}
console.log(`latest : ${str}`);

