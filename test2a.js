"use strict";

let fs = require("fs");
let co = require("co");

function read(path) {
	console.log("read(): 1");
	console.log("path: " + path);

	return function (done) {
		console.log("read-anonymous(): 1");
		console.log("done: " + done);
		fs.readFile(path, "utf8", done);
		console.log("read-anonymous(): 2");
	}
}

console.log("global: 1");

co(function* () {
	console.log("anonymous-generator(): 1");
	var a = yield read("1.txt");
	console.log("anonymous-generator(): 2");
	console.log("a: " + a);
	var b = yield read("2.txt");
	console.log("anonymous-generator(): 3");
	console.log("b: " + b);
});

console.log("global: 2");
