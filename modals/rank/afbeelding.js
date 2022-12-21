const { QuickDB } = require("quick.db");
const db = new QuickDB();
const { ApplicationCommandType, EmbedBuilder, ApplicationCommandOptionType, AttachmentBuilder, ButtonBuilder, ActionRowBuilder, ButtonStyle } = require('discord.js');
const Levels = require("discord-xp");
const canvacord = require("canvacord");

const isImageUrl = require('is-image-url');

module.exports = {
    id: 'afbeelding',
    permissions: [],
    run: async (client, interaction) => {
        console.log('dd')
        const afbeelding = interaction.fields.getTextInputValue('afbeelding');
        if (!isImageUrl(afbeelding)) return interaction.reply({ content: 'Het opgegeven link bevat geen afbeelding.', ephemeral: true });

        let target = interaction.user;

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
            .setBackground("IMAGE", afbeelding)

        const row = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('achtergrond')
                    .setLabel('Achtergrond')
                    .setStyle(ButtonStyle.Secondary),
                new ButtonBuilder()
                    .setCustomId('level')
                    .setLabel('Level')
                    .setStyle(ButtonStyle.Secondary),
                new ButtonBuilder()
                    .setCustomId('rank')
                    .setLabel('Rank')
                    .setStyle(ButtonStyle.Secondary),
                new ButtonBuilder()
                    .setCustomId('balk')
                    .setLabel('Balk')
                    .setStyle(ButtonStyle.Secondary),
                new ButtonBuilder()
                    .setCustomId('uitleg')
                    .setLabel('Hoe?')
                    .setStyle(ButtonStyle.Primary),
            );


        rankCard.build()
            .then(data => {
                const attachment = new AttachmentBuilder(data, { name: 'rank.png' })
                interaction.reply({ files: [attachment], components: [row] });
            });

    }
};
