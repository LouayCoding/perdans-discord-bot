const { ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

const geslacht = async (interaction) => {
    const row = new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder()
                .setCustomId('man')
                .setEmoji('👦')
                .setStyle(ButtonStyle.Secondary),
            new ButtonBuilder()
                .setCustomId('vrouw')
                .setEmoji('👧')
                .setStyle(ButtonStyle.Secondary),
            new ButtonBuilder()
                .setCustomId('onzijdig')
                .setEmoji('👨‍🦲')
                .setStyle(ButtonStyle.Secondary),
        );

    interaction.reply({ content: 'Tekst met succes verzonden.', ephemeral: true });
    interaction.channel.send({ content: 'Selecteer je geslacht met behulp van de knoppen', components: [row] })
}

module.exports = geslacht;