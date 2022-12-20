const { ApplicationCommandType, EmbedBuilder, ApplicationCommandOptionType, ActionRowBuilder, ButtonBuilder, ButtonStyle, ComponentType } = require('discord.js');
const quotes = require('../../data/quotes.json');

module.exports = {
    name: 'quote',
    description: "Genereer een random quote",
    type: ApplicationCommandType.ChatInput,
    cooldown: 3000,
    run: async (client, interaction) => {

        const getal = Math.floor(Math.random() * quotes.quotes.length);
        const message = quotes.quotes[getal].quote;
        const author = quotes.quotes[getal].author;

        const embed = new EmbedBuilder()
            .setAuthor({ name: author, iconURL: interaction.user.displayAvatarURL() })
            .setDescription(message)
            .setColor('Random')
        await interaction.reply({ embeds: [embed] });
    }
};
