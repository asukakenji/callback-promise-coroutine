"use strict";

let fs = require("fs");

function* generator_function() {
	console.log("GEN-1");
	let file1 = "1.txt";

	// 7a. Does not work - /* A */ evaluated immediately:
	// let data1 = yield fs.readFileSync(file1, "utf8");

	// 7b. Does not work - /* A */ evaluated immediately:
	// let data1 = yield fs.readFile(file1, "utf8", /* C */);

	// 7c. Works - /* A */ not evaluated when wrapped in a function:
	let data1 = yield function() {
		fs.readFile(file1, "utf8", /* C */);
	};

	// 10. Value obtained from iterator.next(data) in async callback
	// data1 = data__different_scope__;

	console.log(file1 + ": " + data1.substring(0, 16));

	console.log("GEN-2");
}

let iterator = generator_function();
let iterator_result = iterator.next();

// 8. Iterator result obtained from the first yield:
// iterator_result = {
//	value: function() {
// 		fs.readFile(file1__different_scope__, "utf8", /* C */);
// 	},
// 	done: false
// };

// 9. We want /* C */ to be like this:
// function(err, data) {
// 	if (err) throw err;
// 	iterator.next(data);
// }

if (!iterator_result.done) {
	console.log("IF-1");
	iterator_result.value();
	console.log("IF-2");
}
