const client = require('..');
const chalk = require('chalk');

client.on("ready", () => {
	console.log(chalk.red(`Logged in as ${client.user.tag}!`))
});