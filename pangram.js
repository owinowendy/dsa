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