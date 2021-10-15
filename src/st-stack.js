const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
 module.exports = class Stack {
   constructor () {
        let arr=[]
     let i=0
     this.i = i
        this.arr = arr
     }
    

  push(element ) {


   
    this.arr[this.i]= element
    this.i+=1
  
  }

   pop() {
     
     
    let a = this.arr[this.i-1]
    this.arr.length = this.i-1
    this.i --
     
      console.log(a)
return a
  }

  peek() {
   return this.arr[this.arr.length - 1]
  }
}