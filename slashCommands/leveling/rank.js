const { ApplicationCommandType, EmbedBuilder, ApplicationCommandOptionType, AttachmentBuilder } = require('discord.js');
const Levels = require("discord-xp");
const canvacord = require("canvacord");

module.exports = {
    name: 'rank',
    description: "Zie de rank detals van een gebruiker",
    type: ApplicationCommandType.ChatInput,
    cooldown: 3000,
    options: [
        {
            name: 'gebruiker',
            description: 'Gebruiker waarvan je de rank details wilt zien',
            type: ApplicationCommandOptionType.User,
            required: false
        },
    ],
    run: async (client, interaction) => {

        let target = interaction.options.get('gebruiker')?.user || interaction.user

        const user = await Levels.fetch(target.id, interaction.guild.id, true);
        if (!user) return interaction.reply({ content: `${target} heeft nog geen xp en er kan daarom geen rank kaart worden gemaakt.`, ephemeral: true });

        const img = target.displayAvatarURL();
        const level = Number(user.level);
        const rank = Number(user.position);
        const discriminator = target.discriminator;
        const username = target.username;
        const requiredXP = Levels.xpFor(level + 1);
        const xp = user.xp;

        const rankCard = new canvacord.Rank()
            .setAvatar(img)
            .setCurrentXP(xp)
            .setRequiredXP(requiredXP)
            .setProgressBar("#FFFFFF", "COLOR")
            .setUsername(username)
            .setDiscriminator(discriminator)
            .setLevel(level)
            .setRank(rank)

        rankCard.build()
            .then(data => {
                const attachment = new AttachmentBuilder(data, { name: 'rank.png' })
                interaction.reply({ files: [attachment] });
            });
    }
};
