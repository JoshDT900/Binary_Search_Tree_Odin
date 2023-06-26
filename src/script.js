import { Tree } from "./classFuncs";
import prettyPrint from "./drawTree";

let newTree = new Tree();
newTree.insert(43);
newTree.insert(44)
newTree.delete(66)
newTree.delete(12)

newTree.inOrder()
newTree.preOrder()
newTree.postOrder()

prettyPrint(newTree.root)