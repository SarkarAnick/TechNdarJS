let num = 0
while (num < 9)
{
    num++
    console.log(num);
    
}
console.log(num);


// break keyword -> used to exist from loop when certain condition is met . basically short circuiting loop -- premature ending of loop
 while (true)
 {
    if(num >= 23)
    {
        break;
    }
    num++
 }
 console.log('num=', num);
 