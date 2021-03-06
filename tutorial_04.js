/**
 * GLOBAL-1
 * GLOBAL-2
 * 1.txt: 2.txt,1111111111
 * CALLBACK1-1
 * CALLBACK1-2
 * 2.txt: 3.txt,2222222222
 * CALLBACK2-1
 * CALLBACK2-2
 * 3.txt: 3333333333333333
 */

"use strict";

let fs = require("fs");
let file1 = "1.txt";
//let file2 = "2.txt";    // Defined below depended on data read
//let file3 = "3.txt";    // Defined below depended on data read

console.log("GLOBAL-1");

fs.readFile(file1, "utf8", function (err, data1) {
	if (err) throw err;
	console.log(file1 + ": " + data1.substring(0, 16));

	let file2 = data1.split(",")[0];    // Defined here

	console.log("CALLBACK1-1");

	fs.readFile(file2, "utf8", function (err, data2) {
		if (err) throw err;
		console.log(file2 + ": " + data2.substring(0, 16));

		let file3 = data2.split(",")[0];    // Defined here

		console.log("CALLBACK2-1");

		fs.readFile(file3, "utf8", function (err, data3) {
			if (err) throw err;
			console.log(file3 + ": " + data3.substring(0, 16));
		});

		console.log("CALLBACK2-2");
	});

	console.log("CALLBACK1-2");

});

console.log("GLOBAL-2");
