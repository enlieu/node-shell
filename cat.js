const fs = require('fs');

const cat = (fileName) => {
	fs.readFile(`./${fileName}`, (err, data) => {
		if (err) throw err;
		process.stdout.write(data);
	});
};

module.exports = cat;
