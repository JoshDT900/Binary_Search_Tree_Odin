import { TNode } from "./classFuncs";

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
  let newNode = new TNode(arr[mid]);

  newNode.left = buildTree(arr, start, mid - 1);
  newNode.right = buildTree(arr, mid + 1, end);

  return newNode;
}

export { sortArr, removeDuplicate, buildTree }