const { EmbedBuilder } = require('discord.js');
const timestampToDate = require('timestamp-to-date');

module.exports = {
    name: 'serverinfo',
    description: "get server info/stats.",
    run: async (client, interaction) => {
        const guildName = interaction.guild.name;
        const guildIcon = interaction.guild.iconURL();
        const guildOwner = await interaction.guild.fetchOwner().then(member => member.user.tag);
        const categoryAmount = interaction.guild.channels.cache.filter(channel => channel.type === 4).size.toString();
        const textAmount = interaction.guild.channels.cache.filter(channel => channel.type === 0).size.toString();
        const voiceAmount = interaction.guild.channels.cache.filter(channel => channel.tpye === 4).size.toString();
        const memberCount = interaction.guild.memberCount.toString();
        const rolesAmount = interaction.guild.roles.cache.size.toString();
        const guildId = interaction.guild.id;
        const guildCreatedTimestamp = interaction.guild.createdTimestamp;
        const footerText = `ID: ${guildId} | Server created • ${timestampToDate(guildCreatedTimestamp,'yyyy-MM-dd HH:mm')}`;


        console.log(categoryAmount)


        console.log(guildOwner)

        const embed = new EmbedBuilder()
            .setAuthor({ name: guildName, iconURL: guildIcon })
            .addFields(
                { name: 'Owner', value: guildOwner, inline: true },
                { name: 'Category Channels', value: categoryAmount, inline: true },
                { name: 'Text Channels', value: textAmount, inline: true },
                { name: 'Voice Channels', value: voiceAmount, inline: true },
                { name: 'Members', value: memberCount, inline: true },
                { name: 'Roles', value: rolesAmount, inline: true },
            )
            .setFooter({ text: footerText })

        return interaction.reply({ embeds: [embed] })
    }
};
