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
  constructor(func) {
    this.root = func;
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

/***/ "./src/mainFuncs.js":
/*!**************************!*\
  !*** ./src/mainFuncs.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildTree: () => (/* binding */ buildTree),
/* harmony export */   removeDuplicate: () => (/* binding */ removeDuplicate),
/* harmony export */   sortArr: () => (/* binding */ sortArr)
/* harmony export */ });
/* harmony import */ var _classFuncs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classFuncs */ "./src/classFuncs.js");


function sortArr(arr) {
  if (arr.length < 2) {
    return arr;
  }

  let midOfArr = parseInt(arr.length / 2);
  let leftArr = arr.slice(0, midOfArr);
  let rightArr = arr.slice(midOfArr, arr.length);

  return mergeArr(sortArr(leftArr), sortArr(rightArr));
}

function mergeArr(leftArr, rightArr) {
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

function removeDuplicate(arr) {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != arr[i + 1]) {
      newArr.push(arr[i]);
    }
  }

  return newArr;
}

function buildTree(arr, start, end) {
  if (start > end) {
    return null;
  }

  let mid = parseInt((start + end) / 2);
  let newNode = new _classFuncs__WEBPACK_IMPORTED_MODULE_0__.TNode(arr[mid]);

  newNode.left = buildTree(arr, start, mid - 1);
  newNode.right = buildTree(arr, mid + 1, end);

  return newNode;
}



/***/ }),

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _classFuncs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classFuncs */ "./src/classFuncs.js");
/* harmony import */ var _mainFuncs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mainFuncs */ "./src/mainFuncs.js");
/* harmony import */ var _drawTree__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./drawTree */ "./src/drawTree.js");






let treeArr = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
let cleanArr = (0,_mainFuncs__WEBPACK_IMPORTED_MODULE_1__.sortArr)(treeArr);
cleanArr = (0,_mainFuncs__WEBPACK_IMPORTED_MODULE_1__.removeDuplicate)(cleanArr);

let treeLenIndex = cleanArr.length - 1;
let newTree = new _classFuncs__WEBPACK_IMPORTED_MODULE_0__.Tree((0,_mainFuncs__WEBPACK_IMPORTED_MODULE_1__.buildTree)(cleanArr, 0, treeLenIndex));

(0,_drawTree__WEBPACK_IMPORTED_MODULE_2__["default"])(newTree.root)


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/script.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyaXB0LmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRXVCOzs7Ozs7Ozs7Ozs7Ozs7QUNkdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixPQUFPLEVBQUUseUJBQXlCO0FBQ2pFO0FBQ0EsaUJBQWlCLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxVQUFVO0FBQy9EO0FBQ0EsOEJBQThCLE9BQU8sRUFBRSx5QkFBeUI7QUFDaEU7QUFDQTs7QUFFQSxpRUFBZSxXQUFXLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2JVOztBQUVyQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGtCQUFrQixnQkFBZ0I7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQiw4Q0FBSzs7QUFFekI7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDbkVvQztBQUM2QjtBQUM1Qjs7OztBQUlyQztBQUNBLGVBQWUsbURBQU87QUFDdEIsV0FBVywyREFBZTs7QUFFMUI7QUFDQSxrQkFBa0IsNkNBQUksQ0FBQyxxREFBUzs7QUFFaEMscURBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iaW5hcnlfc2VhcmNoX3RyZWVfb2Rpbi8uL3NyYy9jbGFzc0Z1bmNzLmpzIiwid2VicGFjazovL2JpbmFyeV9zZWFyY2hfdHJlZV9vZGluLy4vc3JjL2RyYXdUcmVlLmpzIiwid2VicGFjazovL2JpbmFyeV9zZWFyY2hfdHJlZV9vZGluLy4vc3JjL21haW5GdW5jcy5qcyIsIndlYnBhY2s6Ly9iaW5hcnlfc2VhcmNoX3RyZWVfb2Rpbi8uL3NyYy9zY3JpcHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgVE5vZGUge1xuICBjb25zdHJ1Y3RvcihkYXRhKSB7XG4gICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgICB0aGlzLmxlZnQgPSBudWxsO1xuICAgIHRoaXMucmlnaHQgPSBudWxsO1xuICB9XG59XG5cbmNsYXNzIFRyZWUge1xuICBjb25zdHJ1Y3RvcihmdW5jKSB7XG4gICAgdGhpcy5yb290ID0gZnVuYztcbiAgfVxufVxuXG5leHBvcnQgeyBUTm9kZSwgVHJlZSB9O1xuIiwiY29uc3QgcHJldHR5UHJpbnQgPSAobm9kZSwgcHJlZml4ID0gXCJcIiwgaXNMZWZ0ID0gdHJ1ZSkgPT4ge1xuICBpZiAobm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAobm9kZS5yaWdodCAhPT0gbnVsbCkge1xuICAgIHByZXR0eVByaW50KG5vZGUucmlnaHQsIGAke3ByZWZpeH0ke2lzTGVmdCA/IFwi4pSCICAgXCIgOiBcIiAgICBcIn1gLCBmYWxzZSk7XG4gIH1cbiAgY29uc29sZS5sb2coYCR7cHJlZml4fSR7aXNMZWZ0ID8gXCLilJTilIDilIAgXCIgOiBcIuKUjOKUgOKUgCBcIn0ke25vZGUuZGF0YX1gKTtcbiAgaWYgKG5vZGUubGVmdCAhPT0gbnVsbCkge1xuICAgIHByZXR0eVByaW50KG5vZGUubGVmdCwgYCR7cHJlZml4fSR7aXNMZWZ0ID8gXCIgICAgXCIgOiBcIuKUgiAgIFwifWAsIHRydWUpO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBwcmV0dHlQcmludDtcbiIsImltcG9ydCB7IFROb2RlIH0gZnJvbSBcIi4vY2xhc3NGdW5jc1wiO1xuXG5mdW5jdGlvbiBzb3J0QXJyKGFycikge1xuICBpZiAoYXJyLmxlbmd0aCA8IDIpIHtcbiAgICByZXR1cm4gYXJyO1xuICB9XG5cbiAgbGV0IG1pZE9mQXJyID0gcGFyc2VJbnQoYXJyLmxlbmd0aCAvIDIpO1xuICBsZXQgbGVmdEFyciA9IGFyci5zbGljZSgwLCBtaWRPZkFycik7XG4gIGxldCByaWdodEFyciA9IGFyci5zbGljZShtaWRPZkFyciwgYXJyLmxlbmd0aCk7XG5cbiAgcmV0dXJuIG1lcmdlQXJyKHNvcnRBcnIobGVmdEFyciksIHNvcnRBcnIocmlnaHRBcnIpKTtcbn1cblxuZnVuY3Rpb24gbWVyZ2VBcnIobGVmdEFyciwgcmlnaHRBcnIpIHtcbiAgY29uc3QgbWVyZ2VkQXJyID0gW107XG5cbiAgbGV0IGlMID0gMDtcbiAgbGV0IGlSID0gMDtcblxuICB3aGlsZSAoaUwgPCBsZWZ0QXJyLmxlbmd0aCAmJiBpUiA8IHJpZ2h0QXJyLmxlbmd0aCkge1xuICAgIGlmIChsZWZ0QXJyW2lMXSA8IHJpZ2h0QXJyW2lSXSkge1xuICAgICAgbWVyZ2VkQXJyLnB1c2gobGVmdEFycltpTF0pO1xuICAgICAgaUwrKztcbiAgICB9IGVsc2Uge1xuICAgICAgbWVyZ2VkQXJyLnB1c2gocmlnaHRBcnJbaVJdKTtcbiAgICAgIGlSKys7XG4gICAgfVxuICB9XG5cbiAgd2hpbGUgKGlMIDwgbGVmdEFyci5sZW5ndGgpIHtcbiAgICBtZXJnZWRBcnIucHVzaChsZWZ0QXJyW2lMXSk7XG4gICAgaUwrKztcbiAgfVxuXG4gIHdoaWxlIChpUiA8IHJpZ2h0QXJyLmxlbmd0aCkge1xuICAgIG1lcmdlZEFyci5wdXNoKHJpZ2h0QXJyW2lSXSk7XG4gICAgaVIrKztcbiAgfVxuXG4gIHJldHVybiBtZXJnZWRBcnI7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUR1cGxpY2F0ZShhcnIpIHtcbiAgbGV0IG5ld0FyciA9IFtdO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGFycltpXSAhPSBhcnJbaSArIDFdKSB7XG4gICAgICBuZXdBcnIucHVzaChhcnJbaV0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBuZXdBcnI7XG59XG5cbmZ1bmN0aW9uIGJ1aWxkVHJlZShhcnIsIHN0YXJ0LCBlbmQpIHtcbiAgaWYgKHN0YXJ0ID4gZW5kKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBsZXQgbWlkID0gcGFyc2VJbnQoKHN0YXJ0ICsgZW5kKSAvIDIpO1xuICBsZXQgbmV3Tm9kZSA9IG5ldyBUTm9kZShhcnJbbWlkXSk7XG5cbiAgbmV3Tm9kZS5sZWZ0ID0gYnVpbGRUcmVlKGFyciwgc3RhcnQsIG1pZCAtIDEpO1xuICBuZXdOb2RlLnJpZ2h0ID0gYnVpbGRUcmVlKGFyciwgbWlkICsgMSwgZW5kKTtcblxuICByZXR1cm4gbmV3Tm9kZTtcbn1cblxuZXhwb3J0IHsgc29ydEFyciwgcmVtb3ZlRHVwbGljYXRlLCBidWlsZFRyZWUgfSIsImltcG9ydCB7IFRyZWUgfSBmcm9tIFwiLi9jbGFzc0Z1bmNzXCI7XG5pbXBvcnQgeyBzb3J0QXJyLCByZW1vdmVEdXBsaWNhdGUsIGJ1aWxkVHJlZSB9IGZyb20gXCIuL21haW5GdW5jc1wiXG5pbXBvcnQgcHJldHR5UHJpbnQgZnJvbSBcIi4vZHJhd1RyZWVcIjtcblxuXG5cbmxldCB0cmVlQXJyID0gWzEsIDcsIDQsIDIzLCA4LCA5LCA0LCAzLCA1LCA3LCA5LCA2NywgNjM0NSwgMzI0XTtcbmxldCBjbGVhbkFyciA9IHNvcnRBcnIodHJlZUFycik7XG5jbGVhbkFyciA9IHJlbW92ZUR1cGxpY2F0ZShjbGVhbkFycik7XG5cbmxldCB0cmVlTGVuSW5kZXggPSBjbGVhbkFyci5sZW5ndGggLSAxO1xubGV0IG5ld1RyZWUgPSBuZXcgVHJlZShidWlsZFRyZWUoY2xlYW5BcnIsIDAsIHRyZWVMZW5JbmRleCkpO1xuXG5wcmV0dHlQcmludChuZXdUcmVlLnJvb3QpXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=