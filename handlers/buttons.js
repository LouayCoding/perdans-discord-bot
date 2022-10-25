const fs = require('fs');
const chalk = require('chalk');
let AsciiTable = require('ascii-table');
let table = new AsciiTable();
table.setHeading('Buttons', 'Stats').setBorder('|', '=', "x", "x");

module.exports = (bot) => {
    fs.readdirSync('./buttons/').filter((file) => file.endsWith('.js')).forEach((file) => {
        const button = require(`../buttons/${file}`)
        bot.buttons.set(button.id, button)
		table.addRow(button.id, '✅')
    })
		console.log(chalk.cyanBright(table.toString()))
};
