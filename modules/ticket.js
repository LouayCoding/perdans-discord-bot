const { ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder } = require('discord.js');

const ticket = async (interaction, client) => {

    interaction.reply({ content: 'Tekst met succes verzonden.', ephemeral: true });

    const row = new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder()
                .setCustomId('ticket')
                .setLabel('Open een ticket')
                .setEmoji('📩')
                .setStyle(ButtonStyle.Secondary),
        );

    const embed = new EmbedBuilder()
        .setAuthor({ name: 'Ticket', iconURL: interaction.guild.members.me.displayAvatarURL()})
        .setDescription('Heb je een vraag en zou je met moderator willen spreken? Maak dan een ticket aan en een moderator zal je zo snel mogelijk te woord staan.')
        .setColor('White')

    interaction.channel.send({ embeds: [embed], components: [row] })
}

module.exports = ticket;