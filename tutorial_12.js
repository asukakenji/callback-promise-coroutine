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
	return function(the_itr) {
		fs.readFile(file, "utf8", function(err, data) {
			if (err) throw err;
			the_itr.next(data);
		});
	};
}

function* generator_function() {
	console.log("GEN-1");
	let file1 = "1.txt";
	let data1 = yield read_file_helper(file1);
	console.log(file1 + ": " + data1.substring(0, 16));

	console.log("GEN-2");
}

function coroutine_helper(gen_fn) {    // 19. gen_fn parameter needed
	let iterator = gen_fn();    // 20. generator_function -> gen_fn
	let iterator_result = iterator.next();

	if (!iterator_result.done) {
		console.log("IF-1");
		iterator_result.value(iterator);
		console.log("IF-2");
	}
}

coroutine_helper(generator_function);
