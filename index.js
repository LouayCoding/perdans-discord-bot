const { Client, GatewayIntentBits, Partials, Collection, EmbedBuilder } = require('discord.js');
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

const fs = require('fs');
const config = require('./config.json');
require('dotenv').config() 

client.commands = new Collection()
client.aliases = new Collection()
client.slashCommands = new Collection();
client.buttons = new Collection();
client.prefix = config.prefix;

module.exports = client;


fs.readdirSync('./handlers').forEach((handler) => {
	require(`./handlers/${handler}`)(client)
});

const errorEmbed = (interaction, text) => {
	const embed = new EmbedBuilder()
		.setDescription(text)
		.setColor('#ff0000')

	interaction.reply({ embeds: [embed], ephemeral: true })
}

client.embed = {
	errorEmbed
};

client.login(process.env.TOKEN)




