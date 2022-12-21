const { Client, GatewayIntentBits, Partials, Collection, EmbedBuilder } = require('discord.js');
const mongoose = require('mongoose');
const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.GuildPresences,
		GatewayIntentBits.GuildMessageReactions,
		GatewayIntentBits.DirectMessages,
		GatewayIntentBits.MessageContent
	],
	partials: [Partials.Channel, Partials.Message, Partials.User, Partials.GuildMember, Partials.Reaction]
});

const Levels = require("discord-xp");
const fs = require('fs');
const config = require('./config.json');
require('dotenv').config()

client.snipe;
client.errorMessage = (interaction) => interaction.reply({ content: 'Er is een fout opgetreden, neem contact op met een beheerder.' });
client.afk = new Collection();
client.commands = new Collection()
client.aliases = new Collection()
client.slashCommands = new Collection();
client.buttons = new Collection();
client.modals = new Collection();
client.prefix = config.prefix;
client.errorembed = (interaction, text) => {
	const embed = new EmbedBuilder().setDescription(text).setColor('#ff0000')
	interaction.reply({ embeds: [embed], ephemeral: true })
}
module.exports = client;


fs.readdirSync('./handlers').forEach((handler) => {
	require(`./handlers/${handler}`)(client)
});

try {
	mongoose.connect('mongodb://localhost:27017/test');
} catch (error) {
	console.log(error);
}

const kittySchema = new mongoose.Schema({
	name: String
});

const Kitten = mongoose.model('Kitten', kittySchema);

const silence = new Kitten({ name: 'Silence' });
console.log(silence.name);

Levels.setURL(process.env.DATABASE_URL);
client.login(process.env.TOKEN)


