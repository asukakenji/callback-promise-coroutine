"use strict";

let fs = require("fs");

function* generator_function() {    // 1. Logic wrapped in a generator function
	console.log("GEN-1");
	let file1 = "1.txt";

	let data1 = yield /* A */;    // 2. yield expression added
	// data1 = /* B */;    // 6. 

	console.log(file1 + ": " + data1.substring(0, 16));

	console.log("GEN-2");
}

let iterator = generator_function();    // 3. Obtain an iterator
let iterator_result = iterator.next();    // 4. Execute until the first yield
// iterator_result = /* A */;
iterator.next(/* B */);    // 5. Pass back the async result and resume execution
