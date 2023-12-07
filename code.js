function fib(n) {
    if (n === 0){
    return [0];
    }
    else if (n === 1){
        return [0,1];
    }
    else if (n === 2){
        return [0,1,1]; 
    }
    else {
        var fibArr = fib(n-1);
        
        fibArr.push(fibArr[n-2] + fibArr[n-1]);
        return fibArr;
    }
}

console.log(fib(20));

// Made corrections to the if statment for n === 0, and else if statment for n === 1. Seems to work. 
