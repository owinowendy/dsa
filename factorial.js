//a function that calls itself
function factorial(n) {
    //base cases
    if (n<=1) return n;
    //n=5=(5*4*3*2*1)
    return factorial(n - 1) * n; 
}
console.log(factorial(5));
