/**
 * GLOBAL-1
 * GLOBAL-2
 * GLOBAL-3
 * GLOBAL-4
 * 1.txt: 2.txt,1111111111
 * 2.txt: 3.txt,2222222222
 * 3.txt: 3333333333333333
 */

"use strict";

let fs = require("fs");
let file1 = "1.txt";
let file2 = "2.txt";
let file3 = "3.txt";

console.log("GLOBAL-1");

fs.readFile(file1, "utf8", function (err, data1) {
	if (err) throw err;
	console.log(file1 + ": " + data1.substring(0, 16));
});

console.log("GLOBAL-2");

fs.readFile(file2, "utf8", function (err, data2) {
	if (err) throw err;
	console.log(file2 + ": " + data2.substring(0, 16));
});

console.log("GLOBAL-3");

fs.readFile(file3, "utf8", function (err, data3) {
	if (err) throw err;
	console.log(file3 + ": " + data3.substring(0, 16));
});

console.log("GLOBAL-4");
