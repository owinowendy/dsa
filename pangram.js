//Design a function that determines whether a given string is a pangram. A pangram is a sentence or phrase containing every letter of the alphabet at least once. Punctuation and case are typically ignored. For example, the string "The quick brown fox jumps over the lazy dog" is
// a pangram, while "Hello, world!" is not.
function checkPangram(input) {
	let alphabets = 'abcdefghijklmnopqrstuvwxyz'.split("");
	let str=input.toLowerCase()
	for (let i=0;i<alphabets.length;i++) {
		if (!str.includes(alphabets[i])) {
			return false;
		}
	}
	return true;
}
let input="The quick brown fox jumps over the lazy dog"
console.log(checkPangram(input));