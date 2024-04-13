// Power of Two
// Below code Big-O is O(log(n))
const isPowerOfTwo = (n) => {
    if(n<=0) return false;
   while(n>1) {
    if(n%2 !== 0) return false;
    n=n/2;
   }
   return true;
 }

  // bitwise solution
 // In binary power of two except for 1 ends with 0
 // By trying bitwise and operator with the number 
 const isBitwisePowerOfTwo = (n) => {
    if(n<=0) return false;
    return (n & (n-1)) === 0;
 }