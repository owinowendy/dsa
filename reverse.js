//Design a function that reverses the digits of an integer. For example, 50 should become 5 and -12 should become -21.
function reverseInterger(digit){
    //4565=5654
    let isNegative=false;
    const str=digit.toString();
    let reversed="";
    let newStr="";
    //if neg is the first char
    if (str.charAt(0)=='-') {
        isNegative=true;
        newStr =str.replace("-","");
    } else {
        newStr=str;
    }
    for (let i=newStr.length;i>=0;i--){
        reversed+=newStr.charAt(i);
    }
    if (isNegative){
        return "-"+reversed
    } else {
        return reversed;
    }
}
console.log(reverseInterger(4565))