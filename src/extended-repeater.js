const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, : '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
let addArr = [];
let newStr = ''
if(options.addition===undefined){
  newStr+=str
}
else{
  if(options.additionRepeatTimes===undefined||options.additionRepeatTimes===1){
    newStr=newStr+str+options.addition
  }
  else{
    for (let i = 0; i < options.additionRepeatTimes; i++) {
      addArr.push(''+options.addition)
    }
    newStr= newStr + str + addArr.join(''+(options.additionSeparator||'|'))
  }
}

if(options.repeatTimes===undefined||options.repeatTimes===1){
  return newStr
}
else{
  let newArr = []
  for (let i = 0; i < options.repeatTimes; i++) {
    newArr.push(newStr);
  }
  return newArr.join(''+(options.separator||'+'))
}
}

module.exports = {
  repeater
};
