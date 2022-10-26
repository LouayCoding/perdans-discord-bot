const { Client, GatewayIntentBits, Collection } = require('discord.js');
const bot = new Client({ intents: [GatewayIntentBits.Guilds]});

const fs = require('fs');
require('dotenv').config();

bot.commands = new Collection();
bot.aliases = new Collection();
bot.slashCommands = new Collection();
bot.buttons = new Collection();
bot.prefix = new Collection();

module.exports = bot;

fs.readdirSync('./handlers').forEach((handler) => {
    require(`./handlers/${handler}`)(bot)
});

bot.login(process.env.TOKEN);



