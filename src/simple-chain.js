const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length
  },
  addLink(value) {
   let newElem = '( '+value+' )'
   this.chain.push(newElem)
   return this    
  },
  removeLink(position){
      if(position<1||position>this.getLength()||!Number.isInteger(position)){
        this.chain = []
        throw new Error("You can't remove incorrect link!");
    }
      else{
      
        this.chain = this.chain.filter((value)=> value!== this.chain[position-1])
        return this
      }
  },
  reverseChain(){
    this.chain.reverse()
    return this
  },
  finishChain(){
   let result = this.chain.join('~~')
   this.chain = [] 
   return result
  }
};

module.exports = {
  chainMaker
};
