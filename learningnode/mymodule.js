module.exports = function (fpath, ext, callback) {
	var fs = require('fs');
	var path = require('path');
	var arr = [];
	arr = fs.readdir(fpath, function callbk(err, data) {
		if (err) return callback(err);
		for (i = 0; i < list.length; i++) {
			if (path.extname(list[i]) == '.' + ext) arr.push(list[i]);
		}

	})	
	callback(err, arr);
};