const { EmbedBuilder, ButtonBuilder, ButtonStyle, ActionRowBuilder, TextInputStyle, ModalBuilder, TextInputBuilder } = require("discord.js");

module.exports = {
    id: 'rank',
    permissions: [],
    run: async (client, interaction) => {

        const modal = new ModalBuilder()
            .setCustomId('rank')
            .setTitle('Kleur wijzigen');

        const imageInput = new TextInputBuilder()
            .setCustomId('kleur')
            .setLabel("Kleur code (#ff0000)")
            .setStyle(TextInputStyle.Short);

        const secondActionRow = new ActionRowBuilder().addComponents(imageInput);

        modal.addComponents(secondActionRow);

        await interaction.showModal(modal);

    }
};
