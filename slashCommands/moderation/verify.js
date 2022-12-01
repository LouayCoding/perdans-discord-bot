const { EmbedBuilder, ApplicationCommandType, ApplicationCommandOptionType, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

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
        let option = interaction.options.get('type').value;

        console.log(option)

        if(option === 'verify'){

            const embed = new EmbedBuilder()
            .setColor('#FFFFFF')
            .setDescription('Klik op de knop om jezelf te verifiëren en toegang te krijgen tot alle kanalen. Door jezelf te verifiëren ga je automatisch akkoord met onze server voorwaarden.')

            const row = new ActionRowBuilder()
			.addComponents(
				new ButtonBuilder()
					.setCustomId('verifieren')
					.setLabel('Verifiëren')
					.setStyle(ButtonStyle.Success),
                    new ButtonBuilder()
					.setCustomId('waarom')
					.setLabel('Waarom?')
					.setStyle(ButtonStyle.Secondary),
			);

            interaction.reply({ embeds: [embed], components: [row]})
        }

        

	}
};