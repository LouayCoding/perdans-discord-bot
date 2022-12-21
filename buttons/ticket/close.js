const { EmbedBuilder } = require("discord.js");

module.exports = {
    id: 'close',
    permissions: [],
    run: async (client, interaction) => {

        const embed = new EmbedBuilder()
            .setDescription('Ticket word binnen **5** seconden gesloten.')
            .setColor('#ff0000')

        interaction.reply({ embeds: [embed] })
        setTimeout(() => {
            interaction.channel.delete();
        }, 5000);
    }
};
