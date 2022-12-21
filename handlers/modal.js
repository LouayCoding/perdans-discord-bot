const chalk = require('chalk')
const fs = require('fs');
var AsciiTable = require('ascii-table')
var table = new AsciiTable()
table.setHeading('Modals', 'Stats').setBorder('|', '=', "0", "0")

module.exports = (client) => {
	fs.readdirSync('./modals/').forEach(dir => {
		const files = fs.readdirSync(`./modals/${dir}/`).filter(file => file.endsWith('.js'));
		if(!files || files.length <= 0) console.log(chalk.red("Modals - 0"))
				files.forEach((file) => {
						let modal = require(`../modals/${dir}/${file}`)
						if(modal) {
								client.modals.set(modal.id, modal)
								table.addRow(modal.id, '✅')
						} else {
								table.addRow(file, '⛔')
						}
				});
	});
	console.log(chalk.blue(table.toString()))
};
