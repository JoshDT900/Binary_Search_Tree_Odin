import { Tree } from "./classFuncs";
import prettyPrint from "./drawTree";

let newTree = new Tree();
newTree.insert(12);

newTree.delete(15);

console.log(newTree);

prettyPrint(newTree.root)