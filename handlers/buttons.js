const chalk = require('chalk')
const fs = require('fs');
var AsciiTable = require('ascii-table')
var table = new AsciiTable()
table.setHeading('buttons', 'Stats').setBorder('|', '=', "0", "0")

module.exports = (client) => {
  fs.readdirSync('./buttons/').forEach(dir => {
    const files = fs.readdirSync(`./buttons/${dir}/`).filter(file => file.endsWith('.js'));
    if (!files || files.length <= 0) console.log(chalk.red("buttons - 0"))
    files.forEach((file) => {
      let button = require(`../buttons/${dir}/${file}`)
      if (button) {
        client.buttons.set(button.id, button)
        table.addRow(button.id, '✅')
      } else {
        table.addRow(file, '⛔')
      }
    });
  });
  console.log(chalk.blue(table.toString()))
};
