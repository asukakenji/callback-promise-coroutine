/**
 * GLOBAL-1
 * 1.txt: 2.txt,1111111111
 * GLOBAL-2
 * 2.txt: 3.txt,2222222222
 * GLOBAL-3
 * 3.txt: 3333333333333333
 * GLOBAL-4
 */

"use strict";

let fs = require("fs");
let file1 = "1.txt";
//let file2 = "2.txt";    // Defined below depended on data read
//let file3 = "3.txt";    // Defined below depended on data read

console.log("GLOBAL-1");

let data1 = fs.readFileSync(file1, "utf8");
console.log(file1 + ": " + data1.substring(0, 16));

let file2 = data1.split(",")[0];    // Defined here

console.log("GLOBAL-2");

let data2 = fs.readFileSync(file2, "utf8");
console.log(file2 + ": " + data2.substring(0, 16));

let file3 = data2.split(",")[0];    // Defined here

console.log("GLOBAL-3");

let data3 = fs.readFileSync(file3, "utf8");
console.log(file3 + ": " + data3.substring(0, 16));

console.log("GLOBAL-4");
