"use strict";
(self["webpackChunkbinary_search_tree_odin"] = self["webpackChunkbinary_search_tree_odin"] || []).push([["mainFuncs"],{

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



/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/mainFuncs.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbkZ1bmNzLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRXVCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkYzs7QUFFckM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxrQkFBa0IsZ0JBQWdCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0IsOENBQUs7O0FBRXpCO0FBQ0E7O0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JpbmFyeV9zZWFyY2hfdHJlZV9vZGluLy4vc3JjL2NsYXNzRnVuY3MuanMiLCJ3ZWJwYWNrOi8vYmluYXJ5X3NlYXJjaF90cmVlX29kaW4vLi9zcmMvbWFpbkZ1bmNzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFROb2RlIHtcbiAgY29uc3RydWN0b3IoZGF0YSkge1xuICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gICAgdGhpcy5sZWZ0ID0gbnVsbDtcbiAgICB0aGlzLnJpZ2h0ID0gbnVsbDtcbiAgfVxufVxuXG5jbGFzcyBUcmVlIHtcbiAgY29uc3RydWN0b3IoZnVuYykge1xuICAgIHRoaXMucm9vdCA9IGZ1bmM7XG4gIH1cbn1cblxuZXhwb3J0IHsgVE5vZGUsIFRyZWUgfTtcbiIsImltcG9ydCB7IFROb2RlIH0gZnJvbSBcIi4vY2xhc3NGdW5jc1wiO1xuXG5mdW5jdGlvbiBzb3J0QXJyKGFycikge1xuICBpZiAoYXJyLmxlbmd0aCA8IDIpIHtcbiAgICByZXR1cm4gYXJyO1xuICB9XG5cbiAgbGV0IG1pZE9mQXJyID0gcGFyc2VJbnQoYXJyLmxlbmd0aCAvIDIpO1xuICBsZXQgbGVmdEFyciA9IGFyci5zbGljZSgwLCBtaWRPZkFycik7XG4gIGxldCByaWdodEFyciA9IGFyci5zbGljZShtaWRPZkFyciwgYXJyLmxlbmd0aCk7XG5cbiAgcmV0dXJuIG1lcmdlQXJyKHNvcnRBcnIobGVmdEFyciksIHNvcnRBcnIocmlnaHRBcnIpKTtcbn1cblxuZnVuY3Rpb24gbWVyZ2VBcnIobGVmdEFyciwgcmlnaHRBcnIpIHtcbiAgY29uc3QgbWVyZ2VkQXJyID0gW107XG5cbiAgbGV0IGlMID0gMDtcbiAgbGV0IGlSID0gMDtcblxuICB3aGlsZSAoaUwgPCBsZWZ0QXJyLmxlbmd0aCAmJiBpUiA8IHJpZ2h0QXJyLmxlbmd0aCkge1xuICAgIGlmIChsZWZ0QXJyW2lMXSA8IHJpZ2h0QXJyW2lSXSkge1xuICAgICAgbWVyZ2VkQXJyLnB1c2gobGVmdEFycltpTF0pO1xuICAgICAgaUwrKztcbiAgICB9IGVsc2Uge1xuICAgICAgbWVyZ2VkQXJyLnB1c2gocmlnaHRBcnJbaVJdKTtcbiAgICAgIGlSKys7XG4gICAgfVxuICB9XG5cbiAgd2hpbGUgKGlMIDwgbGVmdEFyci5sZW5ndGgpIHtcbiAgICBtZXJnZWRBcnIucHVzaChsZWZ0QXJyW2lMXSk7XG4gICAgaUwrKztcbiAgfVxuXG4gIHdoaWxlIChpUiA8IHJpZ2h0QXJyLmxlbmd0aCkge1xuICAgIG1lcmdlZEFyci5wdXNoKHJpZ2h0QXJyW2lSXSk7XG4gICAgaVIrKztcbiAgfVxuXG4gIHJldHVybiBtZXJnZWRBcnI7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUR1cGxpY2F0ZShhcnIpIHtcbiAgbGV0IG5ld0FyciA9IFtdO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGFycltpXSAhPSBhcnJbaSArIDFdKSB7XG4gICAgICBuZXdBcnIucHVzaChhcnJbaV0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBuZXdBcnI7XG59XG5cbmZ1bmN0aW9uIGJ1aWxkVHJlZShhcnIsIHN0YXJ0LCBlbmQpIHtcbiAgaWYgKHN0YXJ0ID4gZW5kKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBsZXQgbWlkID0gcGFyc2VJbnQoKHN0YXJ0ICsgZW5kKSAvIDIpO1xuICBsZXQgbmV3Tm9kZSA9IG5ldyBUTm9kZShhcnJbbWlkXSk7XG5cbiAgbmV3Tm9kZS5sZWZ0ID0gYnVpbGRUcmVlKGFyciwgc3RhcnQsIG1pZCAtIDEpO1xuICBuZXdOb2RlLnJpZ2h0ID0gYnVpbGRUcmVlKGFyciwgbWlkICsgMSwgZW5kKTtcblxuICByZXR1cm4gbmV3Tm9kZTtcbn1cblxuZXhwb3J0IHsgc29ydEFyciwgcmVtb3ZlRHVwbGljYXRlLCBidWlsZFRyZWUgfSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==