/*
    1. create an array called prices : [1.23,19.99,85.2,32.87,8,5.2]
    2. create new array taxedPrices : if price greater than 10 add 20% else no tax
*/

prices = [1.23, 19.99, 85.2, 32.87, 8, 5.2];
taxedPrics = prices.map((a) => {
  if (a > 10) 
    return  a * 1.2;
  else 
    return a;
});
console.log(taxedPrics);
console.log(prices);
