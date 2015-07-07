// pt 6
var mymodule = require('./mymodule.js');
console.log("got this far")
var ext = process.argv[3];
var fpath = process.argv[2];
console.log("got this far")
mymodule(fpath, ext, function print(err, data) {
	if (err) return print(err);
	console.log("got this far");
})
// pt 5
// var fs = require('fs');
// var path = require('path');
// var fpath = process.argv[2];
// var ext = "." + process.argv[3];
// fs.readdir(fpath, function callback(err, list) {
// 	if (!err) 
// 		for (i = 0; i < list.length; i++) {
// 			if (path.extname(list[i]) == ext) {
// 				console.log(list[i]);
// 			}
// 			//console.log(p.extname(list[i]))
// 			//console.log(ext)
// 		}
// })

// pt 4
// var fs = require('fs');
// var fn = process.argv[2];
// fs.readFile(fn, 'utf8', function callback(err, str) {
// 	if (!err) {
// 		console.log(str.split("\n").length - 1)
// 	}
// })


// pt 3
// var fs = require('fs');
// var fn = process.argv[2];
// var buf = fs.readFileSync(fn);
// var splits = buf.toString().split("\n");
// console.log(splits.length - 1);

// pt 2
// sum = 0;
// for (i = 2; i < process.argv.length; i++) {
// 	sum += Number(process.argv[i]);
// }
// console.log(sum)
