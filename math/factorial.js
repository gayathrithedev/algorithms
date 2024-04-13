// factorial
// Below code Big-O is O(n)
const factorial = (n) => {
    let result = 1;
    for(let i=n; n>0; n--) {
        result = result * n;
    }
    return result;
}