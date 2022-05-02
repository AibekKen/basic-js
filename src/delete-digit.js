const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
   nArr = n.toString().split('')

   for (let i = 0; i < nArr.length; i++) {
      if (nArr[i + 1]) {
         if (nArr[i] < nArr[i + 1]) {
            return +(nArr.join('').slice(0, i) + nArr.join('').slice(i + 1))
         }
      }
      else {
         return +nArr.join('').slice(0, i)
      }
   }


}

module.exports = {
   deleteDigit
};
