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
  constructor(arr = null) {
    this.root = arr;
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
/* harmony export */   search: () => (/* binding */ search),
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


function search(value, { root }) { 
  let curr = root;

  if (curr.data === value) {
    return true;
  }

  

  

  return false;
}




/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/mainFuncs.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbkZ1bmNzLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRXVCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZGM7O0FBRXJDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsa0JBQWtCLGdCQUFnQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CLDhDQUFLOztBQUV6QjtBQUNBOztBQUVBO0FBQ0E7OztBQUdBLHlCQUF5QixNQUFNO0FBQy9COztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUV1RCIsInNvdXJjZXMiOlsid2VicGFjazovL2JpbmFyeV9zZWFyY2hfdHJlZV9vZGluLy4vc3JjL2NsYXNzRnVuY3MuanMiLCJ3ZWJwYWNrOi8vYmluYXJ5X3NlYXJjaF90cmVlX29kaW4vLi9zcmMvbWFpbkZ1bmNzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFROb2RlIHtcbiAgY29uc3RydWN0b3IoZGF0YSkge1xuICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gICAgdGhpcy5sZWZ0ID0gbnVsbDtcbiAgICB0aGlzLnJpZ2h0ID0gbnVsbDtcbiAgfVxufVxuXG5jbGFzcyBUcmVlIHtcbiAgY29uc3RydWN0b3IoYXJyID0gbnVsbCkge1xuICAgIHRoaXMucm9vdCA9IGFycjtcbiAgfVxufVxuXG5leHBvcnQgeyBUTm9kZSwgVHJlZSB9O1xuIiwiaW1wb3J0IHsgVE5vZGUgfSBmcm9tIFwiLi9jbGFzc0Z1bmNzXCI7XG5cbmZ1bmN0aW9uIHNvcnRBcnIoYXJyKSB7XG4gIGlmIChhcnIubGVuZ3RoIDwgMikge1xuICAgIHJldHVybiBhcnI7XG4gIH1cblxuICBsZXQgbWlkT2ZBcnIgPSBwYXJzZUludChhcnIubGVuZ3RoIC8gMik7XG4gIGxldCBsZWZ0QXJyID0gYXJyLnNsaWNlKDAsIG1pZE9mQXJyKTtcbiAgbGV0IHJpZ2h0QXJyID0gYXJyLnNsaWNlKG1pZE9mQXJyLCBhcnIubGVuZ3RoKTtcblxuICByZXR1cm4gbWVyZ2VBcnIoc29ydEFycihsZWZ0QXJyKSwgc29ydEFycihyaWdodEFycikpO1xufVxuXG5mdW5jdGlvbiBtZXJnZUFycihsZWZ0QXJyLCByaWdodEFycikge1xuICBjb25zdCBtZXJnZWRBcnIgPSBbXTtcblxuICBsZXQgaUwgPSAwO1xuICBsZXQgaVIgPSAwO1xuXG4gIHdoaWxlIChpTCA8IGxlZnRBcnIubGVuZ3RoICYmIGlSIDwgcmlnaHRBcnIubGVuZ3RoKSB7XG4gICAgaWYgKGxlZnRBcnJbaUxdIDwgcmlnaHRBcnJbaVJdKSB7XG4gICAgICBtZXJnZWRBcnIucHVzaChsZWZ0QXJyW2lMXSk7XG4gICAgICBpTCsrO1xuICAgIH0gZWxzZSB7XG4gICAgICBtZXJnZWRBcnIucHVzaChyaWdodEFycltpUl0pO1xuICAgICAgaVIrKztcbiAgICB9XG4gIH1cblxuICB3aGlsZSAoaUwgPCBsZWZ0QXJyLmxlbmd0aCkge1xuICAgIG1lcmdlZEFyci5wdXNoKGxlZnRBcnJbaUxdKTtcbiAgICBpTCsrO1xuICB9XG5cbiAgd2hpbGUgKGlSIDwgcmlnaHRBcnIubGVuZ3RoKSB7XG4gICAgbWVyZ2VkQXJyLnB1c2gocmlnaHRBcnJbaVJdKTtcbiAgICBpUisrO1xuICB9XG5cbiAgcmV0dXJuIG1lcmdlZEFycjtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlRHVwbGljYXRlKGFycikge1xuICBsZXQgbmV3QXJyID0gW107XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoYXJyW2ldICE9IGFycltpICsgMV0pIHtcbiAgICAgIG5ld0Fyci5wdXNoKGFycltpXSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5ld0Fycjtcbn1cblxuZnVuY3Rpb24gYnVpbGRUcmVlKGFyciwgc3RhcnQsIGVuZCkge1xuICBpZiAoc3RhcnQgPiBlbmQpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGxldCBtaWQgPSBwYXJzZUludCgoc3RhcnQgKyBlbmQpIC8gMik7XG4gIGxldCBuZXdOb2RlID0gbmV3IFROb2RlKGFyclttaWRdKTtcblxuICBuZXdOb2RlLmxlZnQgPSBidWlsZFRyZWUoYXJyLCBzdGFydCwgbWlkIC0gMSk7XG4gIG5ld05vZGUucmlnaHQgPSBidWlsZFRyZWUoYXJyLCBtaWQgKyAxLCBlbmQpO1xuXG4gIHJldHVybiBuZXdOb2RlO1xufVxuXG5cbmZ1bmN0aW9uIHNlYXJjaCh2YWx1ZSwgeyByb290IH0pIHsgXG4gIGxldCBjdXJyID0gcm9vdDtcblxuICBpZiAoY3Vyci5kYXRhID09PSB2YWx1ZSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgXG5cbiAgXG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5leHBvcnQgeyBzb3J0QXJyLCByZW1vdmVEdXBsaWNhdGUsIGJ1aWxkVHJlZSwgc2VhcmNoIH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=