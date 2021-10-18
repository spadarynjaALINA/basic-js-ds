const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
/*class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}*/
module.exports = class BinarySearchTree {
  constructor () {
    this.rootBin = null
  }

  root() {
    return this.rootBin
  }

  add(data) {
    this.rootBin = addNum(this.rootBin, data)
    
    function addNum(node, data) {
      if (!node) {
        return new Node (data)
      }

      if (node.data === data) {
        return node
      }
      if (data < node.data) {
        node.left = addNum(node.left, data)
      } else {
        node.right = addNum(node.right, data)
      }
      return node
    }
}

  has( data ) {
    return searchBin(this.rootBin, data)
    function searchBin(node, data) {
      if (!node) {
         return false
      }
      if (node.data === data) {
        return true
      }
      return data < node.data ? searchBin(node.left, data):searchBin(node.right,data)
     }
   }
  find(data ) {
    return findBin(this.rootBin, data)
    function findBin(node, data) {
      if (!node) {
         return null
      }
      if (node.data === data) {
        return node
      }
      return data < node.data ? findBin(node.left, data):findBin(node.right,data)
     }
  }

  remove(data ) {
    this.rootBin = removeNode(this.rootBin, data)
    function removeNode(node, data) {
      if (!node) {
        return null
      }
      if (data < node.data) {
        node.left = removeNode(node.left, data)
        return node
      } else if (node.data < data) {
        node.right = removeNode(node.right, data)
        return node
      } else {
        if (!node.left && !node.right) {
          return null
        }
        if (!node.left) {
          node = node.right;
          return node
        }
        if (!node.right) {
          node = node.left;
          return node;
        }
        let minRight = node.right
        while (minRight.left) {
          minRight = minRight.left
        }
        node.data = minRight.data
        node.right = removeNode(node.right, minRight.data)
        return node
      }
    }
  }

  min() {
    if (!this.rootBin) return null;
 let node = this.rootBin;
    while (node.left){
      node = node.left;
    }
    return node.data
  }

  max() {
       if (!this.rootBin) return null;
 let node = this.rootBin;
    while (node.right){
      node = node.right;
    }
    return node.data
  }

}