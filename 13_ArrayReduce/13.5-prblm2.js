/* 
    1. Create an array called 'prices' : [1.23, 19.99, 85.2, 32.87, 8, 5.2]
    2. create afterTax : if prices > 6 add price with no tax else add price + 20%
*/


prices =  [1.23, 19.99, 85.2, 32.87, 8, 5.2]
afterTax = prices.reduce( (x,a) => {
        if( a < 6)
        {
            x.push(a)
            return x
        }
        else
        {
            x.push(a*1.2)
            return x
        }
} , [])

console.log(afterTax);
