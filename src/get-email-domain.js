const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {

   let emailArr = email.split('').reverse()
   let result = ''
   for (let i = 0; i < emailArr.length; i++) {
      if (emailArr[i] === '@') {
         result = emailArr.filter((value, j) => i > j).reverse().join('')
         break
      }
   }
   return result
}

module.exports = {
   getEmailDomain
};
