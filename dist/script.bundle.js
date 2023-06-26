"use strict";
(self["webpackChunkbinary_search_tree_odin"] = self["webpackChunkbinary_search_tree_odin"] || []).push([["script"],{

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
    this.root = this.#buildTree([10, 12, 14, 15, 26, 45, 66, 78, 5456, 414321]);
  }
  /*this.#removeDuplicate(this.#randomArr()*/
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
}




/***/ }),

/***/ "./src/drawTree.js":
/*!*************************!*\
  !*** ./src/drawTree.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const prettyPrint = (node, prefix = "", isLeft = true) => {
  if (node === null) {
    return;
  }
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
  }
  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prettyPrint);


/***/ }),

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _classFuncs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classFuncs */ "./src/classFuncs.js");
/* harmony import */ var _drawTree__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./drawTree */ "./src/drawTree.js");



let newTree = new _classFuncs__WEBPACK_IMPORTED_MODULE_0__.Tree();
newTree.insert(43);
newTree.insert(44)

newTree.delete(66)
newTree.delete(78)

console.log(newTree);

(0,_drawTree__WEBPACK_IMPORTED_MODULE_1__["default"])(newTree.root)

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/script.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyaXB0LmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLG9CQUFvQjtBQUN4QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxvQkFBb0IsUUFBUTtBQUM1QjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLE1BQU07QUFDTjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUV1Qjs7Ozs7Ozs7Ozs7Ozs7O0FDaEt2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLE9BQU8sRUFBRSx5QkFBeUI7QUFDakU7QUFDQSxpQkFBaUIsT0FBTyxFQUFFLHlCQUF5QixFQUFFLFVBQVU7QUFDL0Q7QUFDQSw4QkFBOEIsT0FBTyxFQUFFLHlCQUF5QjtBQUNoRTtBQUNBOztBQUVBLGlFQUFlLFdBQVcsRUFBQzs7Ozs7Ozs7Ozs7Ozs7QUNiUztBQUNDOztBQUVyQyxrQkFBa0IsNkNBQUk7QUFDdEI7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBLHFEQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmluYXJ5X3NlYXJjaF90cmVlX29kaW4vLi9zcmMvY2xhc3NGdW5jcy5qcyIsIndlYnBhY2s6Ly9iaW5hcnlfc2VhcmNoX3RyZWVfb2Rpbi8uL3NyYy9kcmF3VHJlZS5qcyIsIndlYnBhY2s6Ly9iaW5hcnlfc2VhcmNoX3RyZWVfb2Rpbi8uL3NyYy9zY3JpcHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgVE5vZGUge1xuICBjb25zdHJ1Y3RvcihkYXRhKSB7XG4gICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgICB0aGlzLmxlZnQgPSBudWxsO1xuICAgIHRoaXMucmlnaHQgPSBudWxsO1xuICB9XG59XG5cbmNsYXNzIFRyZWUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnJvb3QgPSB0aGlzLiNidWlsZFRyZWUoWzEwLCAxMiwgMTQsIDE1LCAyNiwgNDUsIDY2LCA3OCwgNTQ1NiwgNDE0MzIxXSk7XG4gIH1cbiAgLyp0aGlzLiNyZW1vdmVEdXBsaWNhdGUodGhpcy4jcmFuZG9tQXJyKCkqL1xuICAjc29ydChhcnIpIHtcbiAgICBpZiAoYXJyLmxlbmd0aCA8IDIpIHtcbiAgICAgIHJldHVybiBhcnI7XG4gICAgfVxuXG4gICAgbGV0IG1pZE9mQXJyID0gcGFyc2VJbnQoYXJyLmxlbmd0aCAvIDIpO1xuICAgIGxldCBsZWZ0QXJyID0gYXJyLnNsaWNlKDAsIG1pZE9mQXJyKTtcbiAgICBsZXQgcmlnaHRBcnIgPSBhcnIuc2xpY2UobWlkT2ZBcnIsIGFyci5sZW5ndGgpO1xuXG4gICAgcmV0dXJuIHRoaXMuI21lcmdlQXJyKHRoaXMuI3NvcnQobGVmdEFyciksIHRoaXMuI3NvcnQocmlnaHRBcnIpKTtcbiAgfVxuXG4gICNtZXJnZUFycihsZWZ0QXJyLCByaWdodEFycikge1xuICAgIGNvbnN0IG1lcmdlZEFyciA9IFtdO1xuXG4gICAgbGV0IGlMID0gMDtcbiAgICBsZXQgaVIgPSAwO1xuXG4gICAgd2hpbGUgKGlMIDwgbGVmdEFyci5sZW5ndGggJiYgaVIgPCByaWdodEFyci5sZW5ndGgpIHtcbiAgICAgIGlmIChsZWZ0QXJyW2lMXSA8IHJpZ2h0QXJyW2lSXSkge1xuICAgICAgICBtZXJnZWRBcnIucHVzaChsZWZ0QXJyW2lMXSk7XG4gICAgICAgIGlMKys7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtZXJnZWRBcnIucHVzaChyaWdodEFycltpUl0pO1xuICAgICAgICBpUisrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHdoaWxlIChpTCA8IGxlZnRBcnIubGVuZ3RoKSB7XG4gICAgICBtZXJnZWRBcnIucHVzaChsZWZ0QXJyW2lMXSk7XG4gICAgICBpTCsrO1xuICAgIH1cblxuICAgIHdoaWxlIChpUiA8IHJpZ2h0QXJyLmxlbmd0aCkge1xuICAgICAgbWVyZ2VkQXJyLnB1c2gocmlnaHRBcnJbaVJdKTtcbiAgICAgIGlSKys7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lcmdlZEFycjtcbiAgfVxuXG4gICNyZW1vdmVEdXBsaWNhdGUoYXJyKSB7XG4gICAgbGV0IHNvcnRBcnIgPSB0aGlzLiNzb3J0KGFycik7XG4gICAgbGV0IG5ld0FyciA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzb3J0QXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoc29ydEFycltpXSAhPSBzb3J0QXJyW2kgKyAxXSkge1xuICAgICAgICBuZXdBcnIucHVzaChzb3J0QXJyW2ldKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zb2xlLmxvZyhuZXdBcnIpO1xuICAgIHJldHVybiBuZXdBcnI7XG4gIH1cblxuICAjYnVpbGRUcmVlKGFycikge1xuICAgIGlmICgwID4gYXJyLmxlbmd0aCAtIDEpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGxldCBtaWQgPSBwYXJzZUludCgoYXJyLmxlbmd0aCAtIDEpIC8gMik7XG4gICAgbGV0IG5ld05vZGUgPSBuZXcgVE5vZGUoYXJyW21pZF0pO1xuXG4gICAgbmV3Tm9kZS5sZWZ0ID0gdGhpcy4jYnVpbGRUcmVlKGFyci5zbGljZSgwLCBtaWQpKTtcbiAgICBuZXdOb2RlLnJpZ2h0ID0gdGhpcy4jYnVpbGRUcmVlKGFyci5zbGljZShtaWQgKyAxLCBhcnIubGVuZ3RoKSk7XG5cbiAgICByZXR1cm4gbmV3Tm9kZTtcbiAgfVxuXG4gICNyYW5kb21BcnIoKSB7XG4gICAgbGV0IGFyciA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxNTsgaSsrKSB7XG4gICAgICBhcnIucHVzaChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDApKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYXJyO1xuICB9XG5cbiAgZmluZCh2YWx1ZSwgcm9vdCA9IHRoaXMucm9vdCkge1xuICAgIGlmIChyb290ID09PSBudWxsIHx8IHJvb3QuZGF0YSA9PT0gdmFsdWUpIHtcbiAgICAgIHJldHVybiByb290O1xuICAgIH1cblxuICAgIGlmIChyb290LmRhdGEgPCB2YWx1ZSkge1xuICAgICAgcmV0dXJuIHRoaXMuZmluZCh2YWx1ZSwgcm9vdC5yaWdodCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuZmluZCh2YWx1ZSwgcm9vdC5sZWZ0KTtcbiAgfVxuXG4gIGluc2VydCh2YWx1ZSwgcm9vdCA9IHRoaXMucm9vdCkge1xuICAgIGlmIChyb290ID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gbmV3IFROb2RlKHZhbHVlKTtcbiAgICB9IGVsc2UgaWYgKHJvb3QuZGF0YSA9PT0gdmFsdWUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vZGUgZXhpc3RzIGluIHRyZWUuXCIpO1xuICAgIH1cblxuICAgIGlmICh2YWx1ZSA8IHJvb3QuZGF0YSkge1xuICAgICAgcm9vdC5sZWZ0ID0gdGhpcy5pbnNlcnQodmFsdWUsIHJvb3QubGVmdCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJvb3QucmlnaHQgPSB0aGlzLmluc2VydCh2YWx1ZSwgcm9vdC5yaWdodCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJvb3Q7XG4gIH1cblxuICBkZWxldGUodmFsdWUsIHJvb3QgPSB0aGlzLnJvb3QpIHtcbiAgICBpZiAocm9vdCA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHJvb3Q7XG4gICAgfVxuXG4gICAgaWYgKHJvb3QuZGF0YSA+IHZhbHVlKSB7XG4gICAgICByb290LmxlZnQgPSB0aGlzLmRlbGV0ZSh2YWx1ZSwgcm9vdC5sZWZ0KTtcbiAgICAgIHJldHVybiByb290O1xuICAgIH0gZWxzZSBpZiAocm9vdC5kYXRhIDwgdmFsdWUpIHtcbiAgICAgIHJvb3QucmlnaHQgPSB0aGlzLmRlbGV0ZSh2YWx1ZSwgcm9vdC5yaWdodCk7XG4gICAgICByZXR1cm4gcm9vdDtcbiAgICB9XG5cbiAgICBpZiAocm9vdC5sZWZ0ID09PSBudWxsKSB7XG4gICAgICBsZXQgdGVtcCA9IHJvb3QucmlnaHQ7XG4gICAgICByZXR1cm4gdGVtcDtcbiAgICB9IGVsc2UgaWYgKHJvb3QucmlnaHQgPT09IG51bGwpIHtcbiAgICAgIGxldCB0ZW1wID0gcm9vdC5sZWZ0O1xuICAgICAgcmV0dXJuIHRlbXA7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBzdWNjUGFyZW50ID0gcm9vdDtcblxuICAgICAgbGV0IHN1Y2MgPSByb290LnJpZ2h0O1xuICAgICAgd2hpbGUgKHN1Y2MubGVmdCAhPT0gbnVsbCkge1xuICAgICAgICBzdWNjUGFyZW50ID0gc3VjYztcbiAgICAgICAgc3VjYyA9IHN1Y2MubGVmdDtcbiAgICAgIH1cblxuICAgICAgaWYgKHN1Y2NQYXJlbnQgIT09IHJvb3QpIHtcbiAgICAgICAgc3VjY1BhcmVudC5sZWZ0ID0gc3VjYy5yaWdodDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN1Y2NQYXJlbnQucmlnaHQgPSBzdWNjLnJpZ2h0O1xuICAgICAgfVxuXG4gICAgICByb290LmRhdGEgPSBzdWNjLmRhdGE7XG4gICAgICByZXR1cm4gcm9vdDtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IHsgVE5vZGUsIFRyZWUgfTtcbiIsImNvbnN0IHByZXR0eVByaW50ID0gKG5vZGUsIHByZWZpeCA9IFwiXCIsIGlzTGVmdCA9IHRydWUpID0+IHtcbiAgaWYgKG5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKG5vZGUucmlnaHQgIT09IG51bGwpIHtcbiAgICBwcmV0dHlQcmludChub2RlLnJpZ2h0LCBgJHtwcmVmaXh9JHtpc0xlZnQgPyBcIuKUgiAgIFwiIDogXCIgICAgXCJ9YCwgZmFsc2UpO1xuICB9XG4gIGNvbnNvbGUubG9nKGAke3ByZWZpeH0ke2lzTGVmdCA/IFwi4pSU4pSA4pSAIFwiIDogXCLilIzilIDilIAgXCJ9JHtub2RlLmRhdGF9YCk7XG4gIGlmIChub2RlLmxlZnQgIT09IG51bGwpIHtcbiAgICBwcmV0dHlQcmludChub2RlLmxlZnQsIGAke3ByZWZpeH0ke2lzTGVmdCA/IFwiICAgIFwiIDogXCLilIIgICBcIn1gLCB0cnVlKTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgcHJldHR5UHJpbnQ7XG4iLCJpbXBvcnQgeyBUcmVlIH0gZnJvbSBcIi4vY2xhc3NGdW5jc1wiO1xuaW1wb3J0IHByZXR0eVByaW50IGZyb20gXCIuL2RyYXdUcmVlXCI7XG5cbmxldCBuZXdUcmVlID0gbmV3IFRyZWUoKTtcbm5ld1RyZWUuaW5zZXJ0KDQzKTtcbm5ld1RyZWUuaW5zZXJ0KDQ0KVxuXG5uZXdUcmVlLmRlbGV0ZSg2Nilcbm5ld1RyZWUuZGVsZXRlKDc4KVxuXG5jb25zb2xlLmxvZyhuZXdUcmVlKTtcblxucHJldHR5UHJpbnQobmV3VHJlZS5yb290KSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==