const { EmbedBuilder, ButtonBuilder, ButtonStyle, ActionRowBuilder, TextInputStyle, ModalBuilder, TextInputBuilder } = require("discord.js");

module.exports = {
    id: 'achtergrond',
    permissions: [],
    run: async (client, interaction) => {

        const row = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('afbeelding')
                    .setLabel('Afbeelding')
                    .setStyle(ButtonStyle.Secondary),
                new ButtonBuilder()
                    .setCustomId('kleur')
                    .setLabel('Kleur')
                    .setStyle(ButtonStyle.Secondary),
            );

        interaction.reply({ content: 'Wil je de achtergrond een kleur of afbeelding geven?', components: [row], ephemeral: true });

       
    }
};
