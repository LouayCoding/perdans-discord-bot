const { EmbedBuilder, ButtonBuilder, ButtonStyle, ActionRowBuilder, TextInputStyle, ModalBuilder, TextInputBuilder } = require("discord.js");

module.exports = {
    id: 'afbeelding',
    permissions: [],
    run: async (client, interaction) => {

        const modal = new ModalBuilder()
            .setCustomId('afbeelding')
            .setTitle('Afbeelding wijzigen');

        const imageInput = new TextInputBuilder()
            .setCustomId('afbeelding')
            .setLabel("Link naar je afbeelding.")
            .setStyle(TextInputStyle.Short);

        const secondActionRow = new ActionRowBuilder().addComponents(imageInput);

        modal.addComponents(secondActionRow);

        await interaction.showModal(modal);

    }
};
