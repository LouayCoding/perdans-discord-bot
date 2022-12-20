const { ApplicationCommandType, EmbedBuilder, ApplicationCommandOptionType } = require('discord.js');

module.exports = {
    name: 'afk',
    description: "..........",
    type: ApplicationCommandType.ChatInput,
    cooldown: 3000,
    options: [
        {
            name: 'bericht',
            description: 'bericht',
            type: ApplicationCommandOptionType.String,
            required: false
        },
    ],
    run: async (client, interaction) => {
        const afk = client.afk;

        if (afk.get(interaction.user.id)) return interaction.reply({ content: 'Je bent al afk.', ephemeral: true})
        const reason = interaction.options.get('bericht') || { value: 'geen reden' };

        afk.set(interaction.user.id, [Date.now(), reason]);

        const embed = new EmbedBuilder().setDescription(`${interaction.user} je bent nu afk. **Reden**: ${reason.value}`).setColor('Random');
        interaction.reply({ embeds:[embed] });
    }
};
