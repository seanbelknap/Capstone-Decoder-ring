// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope
  function polybius(input, encode = true) {
    // your solution code here 
    //ecode descipher key
    const ENCODEKEY = {
      'a': 11, 'b': 21, 'c': 31, 'd': 41, 'e': 51,
      'f': 12, 'g': 22, 'h': 32, 'i/j': 42, 'k': 52, 
      'l': 13, 'm': 23, 'n': 33, 'o': 43, 'p': 53, 
      'q': 14, 'r': 24, 's': 34, 't': 44, 'u': 54, 
      'v': 15, 'w': 25, 'x': 35, 'y': 45, 'z': 55,
    }
    //decoding deschipher key
    const DECODEKEY = {
      11: "a", 21: "b", 31: "c", 41: "d", 51: "e", 12: "f",
      22: "g", 32: "h", 42: "i/j", 52: "k", 13: "l", 23: "m",
      33: "n", 43: "o", 53: "p", 14: "q", 24: "r", 34: "s",
      44: "t", 54: "u", 15: "v", 25: "w", 35: "x", 45: "y",
      55: "z" 
    }
    //setting input letters to lower case
    const lowerCase = input.toLowerCase()
    //splitting encoded at space and then rejoing without space to check if odd length
    const oddLength = input.split(' ').join('');
    //setting empty string for decoding
    let decoded = '';
    //if decoding and length of string is odd
    if(!encode && oddLength.length % 2 === 1){
      return false;
      //if decoding
    }else if(!encode){
      //makeing an array of the number string
      let numArray = input.split('')
      //iterating through arr
      for (let i = 0; i < numArray.length; i++) {
        //setting varibale for num at i
        let num = input[i];
        //if num is equal to a space
        if (num === " ") {
          //add space to decoded string
          decoded += num;
        } else {
          //combing number at index and the next number at index
          let numberKey = `${num}${input[i + 1]}`;
          //adding letter from decodekey at combined number
          decoded += DECODEKEY[numberKey];
          //adding one to iterater to skip the already added number
          i++
        }
      }
      //returnd decoded string
      return decoded;
    }else{//if encoding
      //creating a array of the lowercase input string
      let inputArray = lowerCase.split('');
      //looping through array of lowercase letters
      return inputArray.reduce((acc, letter) => {
        //if letter is eqaul to a space
        if(letter === ' '){
          //add space to acc string
          acc += letter
          //if letter is a i or j reassign letter to i/j
        }else if(letter === 'i' || letter === 'j'){
          letter = 'i/j';
          //add encode at encodekey letter value
          acc += ENCODEKEY[letter]
        }else{
          //add number at encodekey
          acc += ENCODEKEY[letter];
        }
        //return acc string
        return acc;
      }, '')
    }
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
