//Design a function that takes a string or sequence of characters as input and returns the character that appears most frequently.
//Eg 11189 => '1'
//hello => l
function mostFrequent(val) {
    let str=val.toString()
    const charMap = {};
    let max = 0;
    let maxChar = '';
  
    // create character map
    for (let char of str) {
      if (charMap[char]) {
        // increment the character's value if the character existed in the map
        charMap[char]++;
      } else {
        // Otherwise, the value of the character will be increamented by 1
        charMap[char] = 1;
      }
    }
  
    // find the most commonly used character
    for (let char in charMap) {
      if (charMap[char] > max) {
        max = charMap[char];
        maxChar = char;
      }
    }
  
    return maxChar;
  }
  input="helo"
  console.log(mostFrequent(input))