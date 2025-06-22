
function square(n, a = Math.abs(n)) {
  if (a === 0) return 0;
  return n + square(n, a - 1);
}


console.log(square(5));  
console.log(square(-4)); 
