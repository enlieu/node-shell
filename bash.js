const pwd = require('./pwd.js');
const ls = require('./ls.js');
const cat = require('./cat.js');

process.stdout.write('prompt > ');
process.stdin.on('data', (data) => {
	const cmd = data.toString().trim();
	process.stdout.write('You typed: ' + cmd + '\n');
	if (cmd === 'pwd') {
		pwd();
	}
	if (cmd === 'ls') {
		ls();
	}
	if (cmd.slice(0, 3) === 'cat') {
		const fileName = cmd.split(' ')[1];
		cat(fileName);
	}
	process.stdout.write('\nprompt > ');
});
