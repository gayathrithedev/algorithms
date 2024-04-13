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

// Below code Big-O is O(sqrt(n))
const isPrimeSqrt = (n) => {
    let result = false;
    for(let i=2; i<=Math.sqrt(n); i++) {
        if(n%i === 0){
            result=false;
            break;
        } else {
            result=true;
        }
    }
    return result;
}
