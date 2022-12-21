const { TextInputBuilder, ModalBuilder, ActionRowBuilder } = require('@discordjs/builders');
const { TextInputStyle } = require('discord.js');
const { QuickDB } = require("quick.db");
const db = new QuickDB();


module.exports = {
    id: 'ticket',
    permissions: [],
    run: async (client, interaction) => {
        const data = await db.get(interaction.user.id);

        try {
            const ticketChannel = await interaction.guild.channels.fetch(data.channelId);
            if(ticketChannel) return interaction.reply({ content: `Je hebt al een openstaande ticket staan in ${ticketChannel}.`, ephemeral: true});
        } catch (error) {};

        const modal = new ModalBuilder()
            .setCustomId('ticket')
            .setTitle('Ticket openen');

        const hobbiesInput = new TextInputBuilder()
            .setCustomId('vraag')
            .setLabel("Wat is je vraag/verzoek?")
            .setStyle(TextInputStyle.Paragraph);

        const secondActionRow = new ActionRowBuilder().addComponents(hobbiesInput);

        modal.addComponents(secondActionRow);

        await interaction.showModal(modal);
    }
};
