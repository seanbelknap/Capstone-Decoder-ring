// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    // your solution code here
    //acutal alphabet to compare to user costume aplphbet
    const  CIPHERKEY = [
      'a', 'b', 'c', 'd', 'e', 'f',
      'g', 'h', 'i', 'j', 'k', 'l',
      'm', 'n', 'o', 'p', 'q', 'r',
      's', 't', 'u', 'v', 'w', 'x',
      'y', 'z'
    ]
    //putting all letters to lowercase and splitting string into array
    const lowerCase = input.toLowerCase();
    const inputArray = lowerCase.split('');

    //checking if the user inputed a custom alphbet or if the alphabet is 26 characters
    if(!alphabet || alphabet.length !== 26){
      return false;
    }
    //checking if any letter is duplicated in user inputed alphabet
    for (let i = 0; i < alphabet.length; i++) {
      if (alphabet.lastIndexOf(alphabet[i]) !== i) {
        return false;
      }
    }

    //encoding 
    if(encode){
      //looping through input array
      return inputArray.reduce((acc, letter) =>{
        //adds the space directly to the string
        if(letter === ' '){
          acc += letter
        }else{
          //getting idex of letter matching the cipherkey
          let index = CIPHERKEY.indexOf(letter);
          //adding the matching letter index from users costum alphabet
          acc += alphabet[index]
        }
        return acc
      }, '')
    }else{
      //looping through decoding input array
      return inputArray.reduce((acc, letter) =>{
         //adds the space directly to the string
        if(letter === ' '){
          acc += letter
        }else{
          //getting index of letter matching users alphabet
          let index = alphabet.indexOf(letter);
          ////adding the matching letter index from cipher alphabet
          acc += CIPHERKEY[index]
        }
        //returning accumlator string
        return acc
      }, '')
    }
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
