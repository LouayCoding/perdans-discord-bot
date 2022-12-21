const { EmbedBuilder, ButtonBuilder, ButtonStyle, ActionRowBuilder, TextInputStyle, ModalBuilder, TextInputBuilder } = require("discord.js");

module.exports = {
    id: 'kleur',
    permissions: [],
    run: async (client, interaction) => {
        const modal = new ModalBuilder()
            .setCustomId('kleur')
            .setTitle('Achtergrond wijzigen');

        const imageInput = new TextInputBuilder()
            .setCustomId('kleur')
            .setLabel("Kleur code")
            .setStyle(TextInputStyle.Short);

        const secondActionRow = new ActionRowBuilder().addComponents(imageInput);

        modal.addComponents(secondActionRow);

        await interaction.showModal(modal);

    }
};
