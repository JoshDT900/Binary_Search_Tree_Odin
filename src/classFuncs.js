class TNode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor() {
    this.root = this.#buildTree(this.#removeDuplicate(this.#randomArr()));
  }

  #sort(arr) {
    if (arr.length < 2) {
      return arr;
    }

    let midOfArr = parseInt(arr.length / 2);
    let leftArr = arr.slice(0, midOfArr);
    let rightArr = arr.slice(midOfArr, arr.length);

    return this.#mergeArr(this.#sort(leftArr), this.#sort(rightArr));
  }

  #mergeArr(leftArr, rightArr) {
    const mergedArr = [];

    let iL = 0;
    let iR = 0;

    while (iL < leftArr.length && iR < rightArr.length) {
      if (leftArr[iL] < rightArr[iR]) {
        mergedArr.push(leftArr[iL]);
        iL++;
      } else {
        mergedArr.push(rightArr[iR]);
        iR++;
      }
    }

    while (iL < leftArr.length) {
      mergedArr.push(leftArr[iL]);
      iL++;
    }

    while (iR < rightArr.length) {
      mergedArr.push(rightArr[iR]);
      iR++;
    }

    return mergedArr;
  }

  #removeDuplicate(arr) {
    let sortArr = this.#sort(arr);
    let newArr = [];

    for (let i = 0; i < sortArr.length; i++) {
      if (sortArr[i] != sortArr[i + 1]) {
        newArr.push(sortArr[i]);
      }
    }

    console.log(newArr);
    return newArr;
  }

  #buildTree(arr) {
    if (0 > arr.length - 1) {
      return null;
    }

    let mid = parseInt((arr.length - 1) / 2);
    let newNode = new TNode(arr[mid]);

    newNode.left = this.#buildTree(arr.slice(0, mid));
    newNode.right = this.#buildTree(arr.slice(mid + 1, arr.length));

    return newNode;
  }

  #randomArr() {
    let arr = [];

    for (let i = 0; i < 15; i++) {
      arr.push(Math.floor(Math.random() * 100));
    }

    return arr;
  }

  find(value, root = this.root) {
    if (root === null || root.data === value) {
      return root;
    }

    if (root.data < value) {
      return this.find(value, root.right);
    }

    return this.find(value, root.left);
  }

  insert(value, root = this.root) {
    if (root === null) {
      return new TNode(value);
    } else if (root.data === value) {
      throw new Error("Node exists in tree.");
    }

    if (value < root.data) {
      root.left = this.insert(value, root.left);
    } else {
      root.right = this.insert(value, root.right);
    }

    return root;
  }

  delete(value, root = this.root) {
    if (root === null) {
      return root;
    }

    if (root.data > value) {
      root.left = this.delete(value, root.left);
      return root;
    } else if (root.data < value) {
      root.right = this.delete(value, root.right);
      return root;
    }

    if (root.left === null) {
      let temp = root.right;
      return temp;
    } else if (root.right === null) {
      let temp = root.left;
      return temp;
    } else {
      let succParent = root;

      let succ = root.right;
      while (succ.left !== null) {
        succParent = succ;
        succ = succ.left;
      }

      if (succParent !== root) {
        succParent.left = succ.right;
      } else {
        succParent.right = succ.right;
      }

      root.data = succ.data;
      return root;
    }
  }

  levelOrder(callbackFunc) {
    let queue = [this.root];
    let orderList = [];

    while (queue.length > 0) {
      let currNode = queue.shift();

      if (currNode.left !== null) {
        queue.push(currNode.left);
      }
      if (currNode.right !== null) {
        queue.push(currNode.right);
      }

      if (callbackFunc) {
        callbackFunc(currNode);
      } else {
        orderList.push(currNode.data);
      }
    }

    if (!callbackFunc) {
      return orderList;
    }
  }

  inOrder(callbackFunc, root = this.root, stack = []) {
    if (root === null) {
      return root;
    }

    this.inOrder(callbackFunc, root.left, stack);
    if (callbackFunc) {
      callbackFunc(root);
    }
    stack.push(root.data);
    this.inOrder(callbackFunc, root.right, stack);

    if (!callbackFunc) {
      return stack;
    }
  }

  preOrder(callbackFunc, root = this.root, stack = []) {
    if (root === null) {
      return root;
    }

    if (callbackFunc) {
      callbackFunc(root);
    }
    stack.push(root.data);
    this.inOrder(callbackFunc, root.left, stack);
    this.inOrder(callbackFunc, root.right, stack);

    if (!callbackFunc) {
      return stack;
    }
  }

  postOrder(callbackFunc, root = this.root, stack = []) {
    if (root === null) {
      return root;
    }

    this.inOrder(callbackFunc, root.left, stack);
    this.inOrder(callbackFunc, root.right, stack);
    if (callbackFunc) {
      callbackFunc(root);
    }
    stack.push(root.data);

    if (!callbackFunc) {
      return stack;
    }
  }

  prettyPrint(node = this.root, prefix = "", isLeft = true) {
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      this.prettyPrint(
        node.right,
        `${prefix}${isLeft ? "│   " : "    "}`,
        false
      );
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    if (node.left !== null) {
      this.prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
  }

  height(root = this.root) {
    if (root === null) {
      return 0;
    }

    let lHeight = this.height(root.left);
    let rHeight = this.height(root.right);

    if (lHeight > rHeight) {
      return lHeight + 1;
    } else {
      return rHeight + 1;
    }
  }

  depth(value, root = this.root, depthLevel = 0) {
    if (root === null) {
      return null;
    } else if (root.data === value) {
      return depthLevel;
    }

    if (root.data > value) {
      return 1 + this.depth(value, root.left);
    } else {
      return 1 + this.depth(value, root.right);
    }
  }

  isBalanced(root = this.root) {
    if (root === null) {
      return 0;
    }

    let lHeight = this.height(root.left);
    let rHeight = this.height(root.right);
    let difference = Math.abs(lHeight - rHeight);

    if (difference > 1) {
      return false;
    } else {
      return true;
    }
  }

  reBalance() {
    return (this.root = this.#buildTree(this.inOrder()));
  }
}

export { TNode, Tree };
