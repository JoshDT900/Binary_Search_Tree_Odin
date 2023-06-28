import { Tree } from "./classFuncs";

let newTree = new Tree();

newTree.insert(434444);
newTree.insert(4456);
newTree.insert(500)
newTree.insert(5647)
newTree.insert(52554)

newTree.delete(414321);
newTree.delete(66);
newTree.delete(15);


console.log(newTree.levelOrder());
console.log(newTree.inOrder()); 
console.log(newTree.preOrder());
console.log(newTree.postOrder());

console.log(newTree.height()); 
console.log(newTree.depth(44));

console.log(newTree.isBalanced()); // Returns false if tree is unbalanced, true otherwise.
newTree.reBalance() 
console.log(newTree.isBalanced());

console.log(newTree.levelOrder());
console.log(newTree.inOrder()); 
console.log(newTree.preOrder());
console.log(newTree.postOrder()); 

newTree.prettyPrint();