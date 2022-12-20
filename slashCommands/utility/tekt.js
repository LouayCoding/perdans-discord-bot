const { EmbedBuilder, ApplicationCommandType, ApplicationCommandOptionType, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');
const geslacht = require('../../modules/geslacht');
const verify = require('../../modules/verify');
const landen = require('../../modules/landen');
const ticket = require('../../modules/ticket');

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
					name: 'geslacht',
					value: 'geslacht'
				},
				{
					name: 'landen',
					value: 'landen'
				},
				{
					name: 'ticket',
					value: 'ticket'
				},
			]
		},
	],
	run: async (client, interaction) => {
        let option = interaction.options.get('type').value;

        if(option === 'verify') verify(interaction);
        if(option === 'geslacht') geslacht(interaction);
        if(option === 'landen') landen(interaction);
		if(option === 'ticket') ticket(interaction);
        

        

	}
};