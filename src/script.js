import { Tree } from "./classFuncs";
import { sortArr, removeDuplicate, buildTree } from "./mainFuncs"
import prettyPrint from "./drawTree";



let treeArr = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
let cleanArr = sortArr(treeArr);
cleanArr = removeDuplicate(cleanArr);

let treeLenIndex = cleanArr.length - 1;
let newTree = new Tree(buildTree(cleanArr, 0, treeLenIndex));

prettyPrint(newTree.root)
