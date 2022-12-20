const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

const verify = async (interaction) => {
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

    interaction.reply({ content: 'Tekst met succes verzonden.', ephemeral: true });
    interaction.channel.send({ embeds: [embed], components: [row] })
}

module.exports = verify;