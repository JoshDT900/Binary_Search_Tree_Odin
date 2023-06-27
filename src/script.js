import { Tree } from "./classFuncs";

let newTree = new Tree();
newTree.insert(43);
newTree.insert(44)
newTree.delete(66)
newTree.delete(12)

newTree.levelOrder(); // Returns an array of [26, 14, 78, 10, 15, 45, 5456, 43, 414321, 44]

console.log(newTree.inOrder());
console.log(newTree.preOrder());
console.log(newTree.postOrder());

newTree.prettyPrint()