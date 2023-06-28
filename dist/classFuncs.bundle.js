"use strict";
(self["webpackChunkbinary_search_tree_odin"] = self["webpackChunkbinary_search_tree_odin"] || []).push([["classFuncs"],{

/***/ "./src/classFuncs.js":
/*!***************************!*\
  !*** ./src/classFuncs.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TNode: () => (/* binding */ TNode),
/* harmony export */   Tree: () => (/* binding */ Tree)
/* harmony export */ });
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




/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/classFuncs.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xhc3NGdW5jcy5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLG9CQUFvQjtBQUN4QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxvQkFBb0IsUUFBUTtBQUM1QjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLE1BQU07QUFDTjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU8sRUFBRSx5QkFBeUI7QUFDN0M7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxVQUFVO0FBQ2pFO0FBQ0EscUNBQXFDLE9BQU8sRUFBRSx5QkFBeUI7QUFDdkU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFdUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iaW5hcnlfc2VhcmNoX3RyZWVfb2Rpbi8uL3NyYy9jbGFzc0Z1bmNzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFROb2RlIHtcbiAgY29uc3RydWN0b3IoZGF0YSkge1xuICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gICAgdGhpcy5sZWZ0ID0gbnVsbDtcbiAgICB0aGlzLnJpZ2h0ID0gbnVsbDtcbiAgfVxufVxuXG5jbGFzcyBUcmVlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5yb290ID0gdGhpcy4jYnVpbGRUcmVlKHRoaXMuI3JlbW92ZUR1cGxpY2F0ZSh0aGlzLiNyYW5kb21BcnIoKSkpO1xuICB9XG5cbiAgI3NvcnQoYXJyKSB7XG4gICAgaWYgKGFyci5sZW5ndGggPCAyKSB7XG4gICAgICByZXR1cm4gYXJyO1xuICAgIH1cblxuICAgIGxldCBtaWRPZkFyciA9IHBhcnNlSW50KGFyci5sZW5ndGggLyAyKTtcbiAgICBsZXQgbGVmdEFyciA9IGFyci5zbGljZSgwLCBtaWRPZkFycik7XG4gICAgbGV0IHJpZ2h0QXJyID0gYXJyLnNsaWNlKG1pZE9mQXJyLCBhcnIubGVuZ3RoKTtcblxuICAgIHJldHVybiB0aGlzLiNtZXJnZUFycih0aGlzLiNzb3J0KGxlZnRBcnIpLCB0aGlzLiNzb3J0KHJpZ2h0QXJyKSk7XG4gIH1cblxuICAjbWVyZ2VBcnIobGVmdEFyciwgcmlnaHRBcnIpIHtcbiAgICBjb25zdCBtZXJnZWRBcnIgPSBbXTtcblxuICAgIGxldCBpTCA9IDA7XG4gICAgbGV0IGlSID0gMDtcblxuICAgIHdoaWxlIChpTCA8IGxlZnRBcnIubGVuZ3RoICYmIGlSIDwgcmlnaHRBcnIubGVuZ3RoKSB7XG4gICAgICBpZiAobGVmdEFycltpTF0gPCByaWdodEFycltpUl0pIHtcbiAgICAgICAgbWVyZ2VkQXJyLnB1c2gobGVmdEFycltpTF0pO1xuICAgICAgICBpTCsrO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbWVyZ2VkQXJyLnB1c2gocmlnaHRBcnJbaVJdKTtcbiAgICAgICAgaVIrKztcbiAgICAgIH1cbiAgICB9XG5cbiAgICB3aGlsZSAoaUwgPCBsZWZ0QXJyLmxlbmd0aCkge1xuICAgICAgbWVyZ2VkQXJyLnB1c2gobGVmdEFycltpTF0pO1xuICAgICAgaUwrKztcbiAgICB9XG5cbiAgICB3aGlsZSAoaVIgPCByaWdodEFyci5sZW5ndGgpIHtcbiAgICAgIG1lcmdlZEFyci5wdXNoKHJpZ2h0QXJyW2lSXSk7XG4gICAgICBpUisrO1xuICAgIH1cblxuICAgIHJldHVybiBtZXJnZWRBcnI7XG4gIH1cblxuICAjcmVtb3ZlRHVwbGljYXRlKGFycikge1xuICAgIGxldCBzb3J0QXJyID0gdGhpcy4jc29ydChhcnIpO1xuICAgIGxldCBuZXdBcnIgPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc29ydEFyci5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHNvcnRBcnJbaV0gIT0gc29ydEFycltpICsgMV0pIHtcbiAgICAgICAgbmV3QXJyLnB1c2goc29ydEFycltpXSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc29sZS5sb2cobmV3QXJyKTtcbiAgICByZXR1cm4gbmV3QXJyO1xuICB9XG5cbiAgI2J1aWxkVHJlZShhcnIpIHtcbiAgICBpZiAoMCA+IGFyci5sZW5ndGggLSAxKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBsZXQgbWlkID0gcGFyc2VJbnQoKGFyci5sZW5ndGggLSAxKSAvIDIpO1xuICAgIGxldCBuZXdOb2RlID0gbmV3IFROb2RlKGFyclttaWRdKTtcblxuICAgIG5ld05vZGUubGVmdCA9IHRoaXMuI2J1aWxkVHJlZShhcnIuc2xpY2UoMCwgbWlkKSk7XG4gICAgbmV3Tm9kZS5yaWdodCA9IHRoaXMuI2J1aWxkVHJlZShhcnIuc2xpY2UobWlkICsgMSwgYXJyLmxlbmd0aCkpO1xuXG4gICAgcmV0dXJuIG5ld05vZGU7XG4gIH1cblxuICAjcmFuZG9tQXJyKCkge1xuICAgIGxldCBhcnIgPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTU7IGkrKykge1xuICAgICAgYXJyLnB1c2goTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFycjtcbiAgfVxuXG4gIGZpbmQodmFsdWUsIHJvb3QgPSB0aGlzLnJvb3QpIHtcbiAgICBpZiAocm9vdCA9PT0gbnVsbCB8fCByb290LmRhdGEgPT09IHZhbHVlKSB7XG4gICAgICByZXR1cm4gcm9vdDtcbiAgICB9XG5cbiAgICBpZiAocm9vdC5kYXRhIDwgdmFsdWUpIHtcbiAgICAgIHJldHVybiB0aGlzLmZpbmQodmFsdWUsIHJvb3QucmlnaHQpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmZpbmQodmFsdWUsIHJvb3QubGVmdCk7XG4gIH1cblxuICBpbnNlcnQodmFsdWUsIHJvb3QgPSB0aGlzLnJvb3QpIHtcbiAgICBpZiAocm9vdCA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIG5ldyBUTm9kZSh2YWx1ZSk7XG4gICAgfSBlbHNlIGlmIChyb290LmRhdGEgPT09IHZhbHVlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJOb2RlIGV4aXN0cyBpbiB0cmVlLlwiKTtcbiAgICB9XG5cbiAgICBpZiAodmFsdWUgPCByb290LmRhdGEpIHtcbiAgICAgIHJvb3QubGVmdCA9IHRoaXMuaW5zZXJ0KHZhbHVlLCByb290LmxlZnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICByb290LnJpZ2h0ID0gdGhpcy5pbnNlcnQodmFsdWUsIHJvb3QucmlnaHQpO1xuICAgIH1cblxuICAgIHJldHVybiByb290O1xuICB9XG5cbiAgZGVsZXRlKHZhbHVlLCByb290ID0gdGhpcy5yb290KSB7XG4gICAgaWYgKHJvb3QgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiByb290O1xuICAgIH1cblxuICAgIGlmIChyb290LmRhdGEgPiB2YWx1ZSkge1xuICAgICAgcm9vdC5sZWZ0ID0gdGhpcy5kZWxldGUodmFsdWUsIHJvb3QubGVmdCk7XG4gICAgICByZXR1cm4gcm9vdDtcbiAgICB9IGVsc2UgaWYgKHJvb3QuZGF0YSA8IHZhbHVlKSB7XG4gICAgICByb290LnJpZ2h0ID0gdGhpcy5kZWxldGUodmFsdWUsIHJvb3QucmlnaHQpO1xuICAgICAgcmV0dXJuIHJvb3Q7XG4gICAgfVxuXG4gICAgaWYgKHJvb3QubGVmdCA9PT0gbnVsbCkge1xuICAgICAgbGV0IHRlbXAgPSByb290LnJpZ2h0O1xuICAgICAgcmV0dXJuIHRlbXA7XG4gICAgfSBlbHNlIGlmIChyb290LnJpZ2h0ID09PSBudWxsKSB7XG4gICAgICBsZXQgdGVtcCA9IHJvb3QubGVmdDtcbiAgICAgIHJldHVybiB0ZW1wO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgc3VjY1BhcmVudCA9IHJvb3Q7XG5cbiAgICAgIGxldCBzdWNjID0gcm9vdC5yaWdodDtcbiAgICAgIHdoaWxlIChzdWNjLmxlZnQgIT09IG51bGwpIHtcbiAgICAgICAgc3VjY1BhcmVudCA9IHN1Y2M7XG4gICAgICAgIHN1Y2MgPSBzdWNjLmxlZnQ7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdWNjUGFyZW50ICE9PSByb290KSB7XG4gICAgICAgIHN1Y2NQYXJlbnQubGVmdCA9IHN1Y2MucmlnaHQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdWNjUGFyZW50LnJpZ2h0ID0gc3VjYy5yaWdodDtcbiAgICAgIH1cblxuICAgICAgcm9vdC5kYXRhID0gc3VjYy5kYXRhO1xuICAgICAgcmV0dXJuIHJvb3Q7XG4gICAgfVxuICB9XG5cbiAgbGV2ZWxPcmRlcihjYWxsYmFja0Z1bmMpIHtcbiAgICBsZXQgcXVldWUgPSBbdGhpcy5yb290XTtcbiAgICBsZXQgb3JkZXJMaXN0ID0gW107XG5cbiAgICB3aGlsZSAocXVldWUubGVuZ3RoID4gMCkge1xuICAgICAgbGV0IGN1cnJOb2RlID0gcXVldWUuc2hpZnQoKTtcblxuICAgICAgaWYgKGN1cnJOb2RlLmxlZnQgIT09IG51bGwpIHtcbiAgICAgICAgcXVldWUucHVzaChjdXJyTm9kZS5sZWZ0KTtcbiAgICAgIH1cbiAgICAgIGlmIChjdXJyTm9kZS5yaWdodCAhPT0gbnVsbCkge1xuICAgICAgICBxdWV1ZS5wdXNoKGN1cnJOb2RlLnJpZ2h0KTtcbiAgICAgIH1cblxuICAgICAgaWYgKGNhbGxiYWNrRnVuYykge1xuICAgICAgICBjYWxsYmFja0Z1bmMoY3Vyck5vZGUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb3JkZXJMaXN0LnB1c2goY3Vyck5vZGUuZGF0YSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFjYWxsYmFja0Z1bmMpIHtcbiAgICAgIHJldHVybiBvcmRlckxpc3Q7XG4gICAgfVxuICB9XG5cbiAgaW5PcmRlcihjYWxsYmFja0Z1bmMsIHJvb3QgPSB0aGlzLnJvb3QsIHN0YWNrID0gW10pIHtcbiAgICBpZiAocm9vdCA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHJvb3Q7XG4gICAgfVxuXG4gICAgdGhpcy5pbk9yZGVyKGNhbGxiYWNrRnVuYywgcm9vdC5sZWZ0LCBzdGFjayk7XG4gICAgaWYgKGNhbGxiYWNrRnVuYykge1xuICAgICAgY2FsbGJhY2tGdW5jKHJvb3QpO1xuICAgIH1cbiAgICBzdGFjay5wdXNoKHJvb3QuZGF0YSk7XG4gICAgdGhpcy5pbk9yZGVyKGNhbGxiYWNrRnVuYywgcm9vdC5yaWdodCwgc3RhY2spO1xuXG4gICAgaWYgKCFjYWxsYmFja0Z1bmMpIHtcbiAgICAgIHJldHVybiBzdGFjaztcbiAgICB9XG4gIH1cblxuICBwcmVPcmRlcihjYWxsYmFja0Z1bmMsIHJvb3QgPSB0aGlzLnJvb3QsIHN0YWNrID0gW10pIHtcbiAgICBpZiAocm9vdCA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHJvb3Q7XG4gICAgfVxuXG4gICAgaWYgKGNhbGxiYWNrRnVuYykge1xuICAgICAgY2FsbGJhY2tGdW5jKHJvb3QpO1xuICAgIH1cbiAgICBzdGFjay5wdXNoKHJvb3QuZGF0YSk7XG4gICAgdGhpcy5pbk9yZGVyKGNhbGxiYWNrRnVuYywgcm9vdC5sZWZ0LCBzdGFjayk7XG4gICAgdGhpcy5pbk9yZGVyKGNhbGxiYWNrRnVuYywgcm9vdC5yaWdodCwgc3RhY2spO1xuXG4gICAgaWYgKCFjYWxsYmFja0Z1bmMpIHtcbiAgICAgIHJldHVybiBzdGFjaztcbiAgICB9XG4gIH1cblxuICBwb3N0T3JkZXIoY2FsbGJhY2tGdW5jLCByb290ID0gdGhpcy5yb290LCBzdGFjayA9IFtdKSB7XG4gICAgaWYgKHJvb3QgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiByb290O1xuICAgIH1cblxuICAgIHRoaXMuaW5PcmRlcihjYWxsYmFja0Z1bmMsIHJvb3QubGVmdCwgc3RhY2spO1xuICAgIHRoaXMuaW5PcmRlcihjYWxsYmFja0Z1bmMsIHJvb3QucmlnaHQsIHN0YWNrKTtcbiAgICBpZiAoY2FsbGJhY2tGdW5jKSB7XG4gICAgICBjYWxsYmFja0Z1bmMocm9vdCk7XG4gICAgfVxuICAgIHN0YWNrLnB1c2gocm9vdC5kYXRhKTtcblxuICAgIGlmICghY2FsbGJhY2tGdW5jKSB7XG4gICAgICByZXR1cm4gc3RhY2s7XG4gICAgfVxuICB9XG5cbiAgcHJldHR5UHJpbnQobm9kZSA9IHRoaXMucm9vdCwgcHJlZml4ID0gXCJcIiwgaXNMZWZ0ID0gdHJ1ZSkge1xuICAgIGlmIChub2RlID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChub2RlLnJpZ2h0ICE9PSBudWxsKSB7XG4gICAgICB0aGlzLnByZXR0eVByaW50KFxuICAgICAgICBub2RlLnJpZ2h0LFxuICAgICAgICBgJHtwcmVmaXh9JHtpc0xlZnQgPyBcIuKUgiAgIFwiIDogXCIgICAgXCJ9YCxcbiAgICAgICAgZmFsc2VcbiAgICAgICk7XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKGAke3ByZWZpeH0ke2lzTGVmdCA/IFwi4pSU4pSA4pSAIFwiIDogXCLilIzilIDilIAgXCJ9JHtub2RlLmRhdGF9YCk7XG4gICAgaWYgKG5vZGUubGVmdCAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5wcmV0dHlQcmludChub2RlLmxlZnQsIGAke3ByZWZpeH0ke2lzTGVmdCA/IFwiICAgIFwiIDogXCLilIIgICBcIn1gLCB0cnVlKTtcbiAgICB9XG4gIH1cblxuICBoZWlnaHQocm9vdCA9IHRoaXMucm9vdCkge1xuICAgIGlmIChyb290ID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG5cbiAgICBsZXQgbEhlaWdodCA9IHRoaXMuaGVpZ2h0KHJvb3QubGVmdCk7XG4gICAgbGV0IHJIZWlnaHQgPSB0aGlzLmhlaWdodChyb290LnJpZ2h0KTtcblxuICAgIGlmIChsSGVpZ2h0ID4gckhlaWdodCkge1xuICAgICAgcmV0dXJuIGxIZWlnaHQgKyAxO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gckhlaWdodCArIDE7XG4gICAgfVxuICB9XG5cbiAgZGVwdGgodmFsdWUsIHJvb3QgPSB0aGlzLnJvb3QsIGRlcHRoTGV2ZWwgPSAwKSB7XG4gICAgaWYgKHJvb3QgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH0gZWxzZSBpZiAocm9vdC5kYXRhID09PSB2YWx1ZSkge1xuICAgICAgcmV0dXJuIGRlcHRoTGV2ZWw7XG4gICAgfVxuXG4gICAgaWYgKHJvb3QuZGF0YSA+IHZhbHVlKSB7XG4gICAgICByZXR1cm4gMSArIHRoaXMuZGVwdGgodmFsdWUsIHJvb3QubGVmdCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAxICsgdGhpcy5kZXB0aCh2YWx1ZSwgcm9vdC5yaWdodCk7XG4gICAgfVxuICB9XG5cbiAgaXNCYWxhbmNlZChyb290ID0gdGhpcy5yb290KSB7XG4gICAgaWYgKHJvb3QgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cblxuICAgIGxldCBsSGVpZ2h0ID0gdGhpcy5oZWlnaHQocm9vdC5sZWZ0KTtcbiAgICBsZXQgckhlaWdodCA9IHRoaXMuaGVpZ2h0KHJvb3QucmlnaHQpO1xuICAgIGxldCBkaWZmZXJlbmNlID0gTWF0aC5hYnMobEhlaWdodCAtIHJIZWlnaHQpO1xuXG4gICAgaWYgKGRpZmZlcmVuY2UgPiAxKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJlQmFsYW5jZSgpIHtcbiAgICByZXR1cm4gKHRoaXMucm9vdCA9IHRoaXMuI2J1aWxkVHJlZSh0aGlzLmluT3JkZXIoKSkpO1xuICB9XG59XG5cbmV4cG9ydCB7IFROb2RlLCBUcmVlIH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=