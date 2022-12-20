const { EmbedBuilder, ActionRowBuilder } = require('@discordjs/builders');
const { ChannelType, ButtonStyle, ButtonBuilder } = require('discord.js');
const { QuickDB } = require("quick.db");
const db = new QuickDB();

module.exports = {
    id: 'ticket',
    permissions: [],
    run: async (client, interaction) => {

        const vraag = interaction.fields.getTextInputValue('vraag');

        const channel = await interaction.guild.channels.create({
            name: `${interaction.user.username}-${interaction.user.discriminator}`,
            type: ChannelType.GuildText,
            parent: process.env.TICKET_CATEGORY
        });

        interaction.reply({ content: `Ik heb een ticket voor je aangemaakt in ${channel}.`, ephemeral: true });

        const row = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('close')
                    .setLabel('Sluiten')
                    .setEmoji('🔒')
                    .setStyle(ButtonStyle.Danger),
            );

        const embed = new EmbedBuilder()
            .setAuthor({ name: interaction.user.tag, iconURL: interaction.user.displayAvatarURL() })
            .setDescription(`Bedankt voor het openen van een ticket, een moderator zal je zo snel mogelijk te woord staan.\n\n**Vraag**: ${vraag}`)
            .setFooter({ text: 'Seed' })
            .setTimestamp()

        channel.send({ embeds: [embed], components: [row] })
        await db.set(interaction.user.id, { channelId: channel.id })
    }
};
