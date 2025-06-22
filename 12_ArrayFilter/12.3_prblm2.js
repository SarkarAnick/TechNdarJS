/*
    1. create an array called prices : [1.23,19.99,85.2,32.87,8,5.2]
    2. create new array lowPrices that keeps all the prices where the price plus 15% tax is below 10
*/

prices = [1.23, 19.99, 85.2, 32.87, 8, 5.2]

lowPrices = prices.filter( (a) => {
    x = 1.1*a
    if ( x < 10)
        return true
})

console.log(lowPrices);
