//Write a recursive function to calculate the factorial of a number
function factorial(n) {
    //base cases
    if (n<=1) return n;
    return factorial(n - 1) * n; 
}
console.log(factorial(5));
