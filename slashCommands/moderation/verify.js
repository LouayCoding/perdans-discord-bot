const { EmbedBuilder, ApplicationCommandType, ApplicationCommandOptionType, ActionRowBuilder, ButtonBuilder } = require('discord.js');

module.exports = {
	name: 'tekst',
	description: "Set simple verification for this server.",
	type: ApplicationCommandType.ChatInput,
	default_member_permissions: '',
	options: [
		{
			name: 'type',
			description: 'The channel of verification',
			required: true,
			type: 3,
			choices: [
				{
					name: 'verify',
					value: 'verify'
				},
				{
					name: 'regels',
					value: 'regels'
				},
				{
					name: 'ticket',
					value: 'ticket'
				},
			]
		},
	],
	run: async (client, interaction) => {
		let naam = interaction.options.get('type');
		interaction.reply({ content: 'Pong!', fetchReply: true })
	}
};