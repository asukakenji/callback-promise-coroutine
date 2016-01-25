/**
 * GEN-1
 * IF-1
 * IF-2
 * 1.txt: 2.txt,1111111111
 * GEN-2
 */

"use strict";

let fs = require("fs");

// function* generator_function(the_itr) {    // 13. Impossible to move parameter here
function* generator_function() {
	console.log("GEN-1");
	let file1 = "1.txt";
	let data1 = yield function(the_itr) {    // 14. Parameter moved here
		fs.readFile(file1, "utf8", function(err, data) {
			if (err) throw err;
			the_itr.next(data);    // 12. No reference to global symbol now
		});
	};
	console.log(file1 + ": " + data1.substring(0, 16));

	console.log("GEN-2");
}

let iterator = generator_function();
let iterator_result = iterator.next();

if (!iterator_result.done) {
	console.log("IF-1");
	iterator_result.value(iterator);    // 15. Passing iterator as an argument
	console.log("IF-2");
}
