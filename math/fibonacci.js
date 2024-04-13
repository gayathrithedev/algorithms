// Fibonacci
// Below code Big-O is O(n)
const fib = (n) => {
    const result = [];
    for(let i=0; i<n; i++) {
        if(i <= 1) {
            result.push(i);
        } else {
            result.push(result[i-1]+result[i-2]);
        }
    }
    return result;
}