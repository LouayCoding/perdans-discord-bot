const { ApplicationCommandType, EmbedBuilder, ApplicationCommandOptionType, ActionRowBuilder, ButtonBuilder, ButtonStyle, ComponentType } = require('discord.js');
const Levels = require("discord-xp");

const leveling = async (message) => {
    const randomAmountOfXp = Math.floor(Math.random() * 100) + 1; // Min 1, Max 30
    const hasLeveledUp = await Levels.appendXp(message.author.id, message.guild.id, randomAmountOfXp);

    if (hasLeveledUp) {
        const user = await Levels.fetch(message.author.id, message.guild.id);
        const channel = await message.guild.channels.fetch(process.env.LEVELUP_CHANNEL)
        const embed = new EmbedBuilder()
            .setDescription(`Goed bezig ${message.author} je bent een level omhoog gegaan, je bent nu level **${user.level}**.`)
            .setColor('Random')
        await channel.send({ embeds: [embed] });
    };

    
}

module.exports = leveling;