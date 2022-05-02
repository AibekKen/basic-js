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

   constructor(status = true) {
      if (status) {
         this.direct = true
      } else {
         this.direct = false
      }
   }


   encrypt(s, key) {
      if (!s || !key) {
         throw new Error('Incorrect arguments!');
      }
      let result = ''
      const str = s.toUpperCase()
      key = key.toUpperCase()
      let n = 0;
      for (let i = 0; i < str.length; i++) {
         if (str.charCodeAt(i) < 65 || str.charCodeAt(i) > 90) {
            result += str[i]
         }
         else {
            result += String.fromCharCode(((str.charCodeAt(i) + key.charCodeAt(n % key.length) - 65 * 2) % (26)) + 65)
            n++
         }
      }
      return this.direct ? result : result.split('').reverse().join('')
   }


   decrypt(crypt, key) {
      if (!crypt || !key) {
         throw new Error('Incorrect arguments!');
      }
      let result = ''
      const strCrypt = crypt.toUpperCase()
      key = key.toUpperCase()
      while (crypt.length > key.length) {
         key += key.toUpperCase()
      }
      let n = 0;
      for (let i = 0; i < strCrypt.length; i++) {
         if (strCrypt.charCodeAt(i) < 65 || strCrypt.charCodeAt(i) > 90) {
            result += strCrypt[i]
         }
         else {
            result += String.fromCharCode((((strCrypt.charCodeAt(i) - key.charCodeAt(n)) + 26) % 26) + 65)
            n++
         }
      }
      return this.direct ? result : result.split('').reverse().join('')
   }
}

module.exports = {
   VigenereCipheringMachine
};
