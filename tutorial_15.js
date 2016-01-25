/**
 * GEN-1
 * IF-1
 * IF-2
 * 1.txt: 2.txt,1111111111
 * GEN-2
 */

"use strict";

let fs = require("fs");

function read_file_helper(file) {
	return function(callback) {
		fs.readFile(file, "utf8", callback);
	};
}

function* generator_function() {
	console.log("GEN-1");
	let file1 = "1.txt";
	let data1 = yield read_file_helper(file1);
	console.log(file1 + ": " + data1.substring(0, 16));

	console.log("GEN-2");
	let file2 = data1.split(",")[0];
	let data2 = yield read_file_helper(file2);
	console.log(file2 + ": " + data2.substring(0, 16));

	console.log("GEN-3");
}

function coroutine_helper(gen_fn) {
	let iterator = gen_fn();

	function callback(err, data) {
		if (err) throw err;
		let iterator_result = iterator.next(data);
		if (!iterator_result.done) {
			console.log("IF-1");
			iterator_result.value(callback);
			console.log("IF-2");
		}
	}

	callback();
}

coroutine_helper(generator_function);
