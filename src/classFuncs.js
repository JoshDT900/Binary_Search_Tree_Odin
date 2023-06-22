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

  insert(value, node = this.root) {
    if (node === null) {
      return new TNode(value);
    } else if (node.data === value) {
      throw new Error("Node exists in tree.");
    }

    if (value < node.data) {
      node.left = this.insert(value, node.left);
    } else {
      node.right = this.insert(value, node.right);
    }

    return node;
  }
}

export { TNode, Tree };
