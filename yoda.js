function yodaSpeaks(sentence){
   
let words =sentence.split(' ');//split with space
let reversedWords =words.reverse();
let reversedSentence =reversedWords.join(" ");//join with space

return reversedSentence;
}
let input="I am Home";
console.log(yodaSpeaks(input))
