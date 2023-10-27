function fib(n) {
    if n (<= 0){
    return [];
    }
    else if (n === 1){
        return [0];
    }
    else if (n ===2){
        return [0,1]; 
    }
    else {
        const fibArr = fib(n-1);
        const nextFib = fib(n-1) + fib(n-2);
        fibArr.push(nextFib);
        return fibArr;
    }
}

const n = 10;
const result = fib(n);
console.log(result);
