"use strict";

function* hello_world() {
	console.log("A");
	yield "hello";
	console.log("B");
	yield "world";
	console.log("C");
}

function* work() {
	yield hello_world();
	yield hello_world();
	yield hello_world();
}

let co = require("co");
co(work);
