// prime
// Below code Big-O is O(n)
const isPrime = (n) => {
    let result = false;
    for(let i=2; i<=n; i++) {
        if(n%i === 0){
            result=false;
            break;
        } else {
            result=true;
        }
    }
    return result;
}