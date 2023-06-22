import { Tree } from "./classFuncs";
import prettyPrint from "./drawTree";

let newTree = new Tree();
newTree.insert(12);

console.log(newTree.find(69));

prettyPrint(newTree.root)