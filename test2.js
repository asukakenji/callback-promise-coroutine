"use strict";

let fs = require("fs");

function thread(fn) {
	console.log("thread(): 1");
	console.log("fn: " + fn);
	let gen = fn();
	console.log("thread(): 2");
	console.log("gen: " + gen);

	function next(err, res) {
		console.log("next(): 1");
		console.log("err: " + err);
		console.log("res: " + res);
		let ret = gen.next(res);
		console.log("next(): 2");
		console.log("ret: " + ret);
		if (ret.done) return;
		console.log("next(): 3");
		ret.value(next);
		console.log("next(): 4");
	}

	console.log("thread(): 3");
	next();
	console.log("thread(): 4");
}

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

thread(function* () {
	console.log("anonymous-generator(): 1");
	var a = yield read("1.txt");
	console.log("anonymous-generator(): 2");
	console.log("a: " + a);
	var b = yield read("2.txt");
	console.log("anonymous-generator(): 3");
	console.log("b: " + b);
});

console.log("global: 2");
