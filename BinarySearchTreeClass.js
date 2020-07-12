class BinarySearchTree{
    constructor(key=null,value=null,parent=null){
      this.key = key
      this.value = value
      this.parent = parent
      this.left = null
      this.right = null
    }
  
    insert(key,value){
      if (this.key == null){
        this.key = key
        this.value = value
      } else if (key < this.key) {
          if (this.left == null){
            this.left = new BinarySearchTree(key,value,this)
          } else {
            this.left.insert(key,value)
          }
      } else {
          if (this.right == null){
            this.right = new BinarySearchTree(key,value,this)
          } else {
            this.right.insert(key,value)
          }
      }
    }
  
    //in-order
    dfs(values = []){
      if (this.left){
        values = this.left.dfs(values)
      }
      values.push(this.value)
  
      if (this.right){
        values = this.right.dfs(values)
      }
      return values
    }
  
    //pre-order
    preorderDfs(values=[]){
      values.push(this.key)
      if (this.left){
        this.left.preorderDfs(values)
      }
  
      if (this.right){
        this.right.preorderDfs(values)
      }
      return values
    }
  
    //post-order
    postorderDfs(values=[]){
      if (this.left){
        this.left.postorderDfs(values)
      }
  
      if (this.right){
        this.right.postorderDfs(values)
      }
  
      values.push(this.value)
      return values
    }
  
    bfs(tree,values=[]){
      let queue = new Queue()
      let node = tree.root
      queue.enqueue(node)
      while (queue.length){
        let node = queue.dequeue()
        values.push(node.value)
  
        if (node.left){
          queue.enqueue(node.left)
        }
  
        if (node.right){
          queue.enqueue(node.right)
        }
      }
    }
  }
  
  module.exports = BinarySearchTree