function fib(n) {
    if (n <= 0){
    return [];
    }
    else if (n === 1){
        return [0];
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
