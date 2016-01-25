/**
 * GEN-1
 * IF-1
 * IF-2
 * 1.txt: 2.txt,1111111111
 * GEN-2
 */

"use strict";

let fs = require("fs");

function* generator_function() {
	console.log("GEN-1");
	let file1 = "1.txt";
	let data1 = yield function() {
		fs.readFile(file1, "utf8", function(err, data) {
			if (err) throw err;
			// 11. Not a good idea - referring the name of the iterator
			iterator.next(data);
		});
	};
	console.log(file1 + ": " + data1.substring(0, 16));

	console.log("GEN-2");
}

let iterator = generator_function();
let iterator_result = iterator.next();

if (!iterator_result.done) {
	console.log("IF-1");
	iterator_result.value();
	console.log("IF-2");
}
