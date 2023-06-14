class TNode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor(func) {
    this.root = func;
  }
}

export { TNode, Tree };
