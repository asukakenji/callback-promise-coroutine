/**
 * GLOBAL-1
 * 1.txt: 2.txt,1111111111
 * 2.txt
 * GLOBAL-2
 */

"use strict";

let fs = require("fs");

console.log("GLOBAL-1");
let file1 = "1.txt";
let data1 = fs.readFileSync(file1, "utf8");
console.log(file1 + ": " + data1.substring(0, 16));

console.log("GLOBAL-2");
