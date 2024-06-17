function checkConsecutiveNumbers(numbers=[]) {
    if (numbers.length<=1) {
        return false;
    }
    for (let i=0;i<numbers.length;i++) {
        if (numbers[i]==3 && numbers[i+1]==3){
            return true
        }
    }
    return false;
}
console.log(checkConsecutiveNumbers([1,3,1,3]))