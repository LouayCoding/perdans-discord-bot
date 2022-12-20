const { ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

const landen = async (interaction) => {
    const row = new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder()
                .setCustomId('marokko')
                .setEmoji('🇲🇦')
                .setStyle(ButtonStyle.Secondary),
            new ButtonBuilder()
                .setCustomId('turkije')
                .setEmoji('🇹🇷')
                .setStyle(ButtonStyle.Secondary),
            new ButtonBuilder()
                .setCustomId('pakistan')
                .setEmoji('🇵🇰')
                .setStyle(ButtonStyle.Secondary),
            new ButtonBuilder()
                .setCustomId('irak')
                .setEmoji('🇮🇶')
                .setStyle(ButtonStyle.Secondary),
            new ButtonBuilder()
                .setCustomId('afghanistan')
                .setEmoji('🇦🇫')
                .setStyle(ButtonStyle.Secondary),
        );

    const row1 = new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder()
                .setCustomId('brazilie')
                .setEmoji('🇧🇷')
                .setStyle(ButtonStyle.Secondary),
            new ButtonBuilder()
                .setCustomId('rusland')
                .setEmoji('🇷🇺')
                .setStyle(ButtonStyle.Secondary),
            new ButtonBuilder()
                .setCustomId('spanje')
                .setEmoji('🇪🇸')
                .setStyle(ButtonStyle.Secondary),
            new ButtonBuilder()
                .setCustomId('saudi-arabie')
                .setEmoji('🇸🇦')
                .setStyle(ButtonStyle.Secondary),
            new ButtonBuilder()
                .setCustomId('belgie')
                .setEmoji('🇧🇪')
                .setStyle(ButtonStyle.Secondary),
        );

    const row2 = new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder()
                .setCustomId('frankrijk')
                .setEmoji('🇫🇷')
                .setStyle(ButtonStyle.Secondary),
            new ButtonBuilder()
                .setCustomId('duitsland')
                .setEmoji('🇩🇪')
                .setStyle(ButtonStyle.Secondary),
            new ButtonBuilder()
                .setCustomId('china')
                .setEmoji('🇨🇳')
                .setStyle(ButtonStyle.Secondary),
            new ButtonBuilder()
                .setCustomId('suriname')
                .setEmoji('🇸🇷')
                .setStyle(ButtonStyle.Secondary),
            new ButtonBuilder()
                .setCustomId('curacao')
                .setEmoji('🇨🇼')
                .setStyle(ButtonStyle.Secondary),
        );

    const row3 = new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder()
                .setCustomId('servie')
                .setEmoji('🇷🇸')
                .setStyle(ButtonStyle.Secondary),
            new ButtonBuilder()
                .setCustomId('engeland')
                .setEmoji('🇬🇧')
                .setStyle(ButtonStyle.Secondary),
            new ButtonBuilder()
                .setCustomId('algerije')
                .setEmoji('🇩🇿')
                .setStyle(ButtonStyle.Secondary),
            new ButtonBuilder()
                .setCustomId('india')
                .setEmoji('🇮🇳')
                .setStyle(ButtonStyle.Secondary),
            new ButtonBuilder()
                .setCustomId('indonesie')
                .setEmoji('🇮🇩')
                .setStyle(ButtonStyle.Secondary),
        );

        const row4 = new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder()
                .setCustomId('syrie')
                .setEmoji('🇸🇾')
                .setStyle(ButtonStyle.Secondary),
            new ButtonBuilder()
                .setCustomId('somalie')
                .setEmoji('🇸🇴')
                .setStyle(ButtonStyle.Secondary),
            new ButtonBuilder()
                .setCustomId('egypte')
                .setEmoji('🇪🇬')
                .setStyle(ButtonStyle.Secondary),
            new ButtonBuilder()
                .setCustomId('nigeria')
                .setEmoji('🇳🇬')
                .setStyle(ButtonStyle.Secondary),
            new ButtonBuilder()
                .setCustomId('italie')
                .setEmoji('🇮🇹')
                .setStyle(ButtonStyle.Secondary),
        );

    interaction.reply({ content: 'Tekst met succes verzonden.', ephemeral: true });
    interaction.channel.send({ content: 'Selecteer je nationaliteiten(en) met behulp van de knoppen', components: [row, row1, row2, row3, row4] });
}

module.exports = landen;