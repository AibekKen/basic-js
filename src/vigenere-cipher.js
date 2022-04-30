const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {

  constructor(status){
    if(status!==false){
    this.direct = true
  }else{
    this.direct = false
  }
  }

  encrypt(word, key) {
    while(key.length<word.length){
      key+=key
    }
    let newWord = word.split('').filter(char=>char!==' ')
    return newWord.map((char,i)=>{      
                 if(char ==='!'){
                   return char

                 }else{
                   return String.fromCharCode((((word.toUpperCase().charCodeAt(i)-65)+(key.toUpperCase().charCodeAt(i)-65))%26)+65)
                 }
               })
               .join('')
  }
  decrypt(crypt, key) {
    while(key.length<word.length){
      key+=key
    }
    let newCrypt = crypt.split(' ').join('');
    return newCrypt.split('')
                   .map((char,i)=>{
                  if(char ==='!'){
                   return char
                 }else{
                   return String.fromCharCode((((crypt.toUpperCase().charCodeAt(i)-65)-(key.toUpperCase().charCodeAt(i)-65))%26)+65)
                 }
                 })
                 .join('')
  }
}

module.exports = {
  VigenereCipheringMachine
};
