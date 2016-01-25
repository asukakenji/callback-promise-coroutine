/**
 * GEN-1
 * IF-1
 * IF-2
 * 1.txt: 2.txt,1111111111
 * GEN-2
 */

"use strict";

let fs = require("fs");

function read_file_helper(file) {    // 16. file parameter needed
	return function(the_itr) {
		fs.readFile(file, "utf8", function(err, data) {    // 17. file1 -> file
			if (err) throw err;
			the_itr.next(data);
		});
	};
}

function* generator_function() {
	console.log("GEN-1");
	let file1 = "1.txt";
	let data1 = yield read_file_helper(file1);    // 18. Simplified
	console.log(file1 + ": " + data1.substring(0, 16));

	console.log("GEN-2");
}

let iterator = generator_function();
let iterator_result = iterator.next();

if (!iterator_result.done) {
	console.log("IF-1");
	iterator_result.value(iterator);
	console.log("IF-2");
}
