const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'membercount',
    description: "Get the server membercount.",
    run: async (client, interaction) => {
        const memberCount = interaction.guild.memberCount;

        const embed = new EmbedBuilder()
            .setAuthor({ name: `Membercount` })
            .setDescription(`Er zitten momenteel **${memberCount}** leden in de server.`)
            .setColor('Random')

        return interaction.reply({ embeds: [embed] })
    }
};
