const { ApplicationCommandType, EmbedBuilder, ApplicationCommandOptionType, AttachmentBuilder } = require('discord.js');
const Levels = require("discord-xp");
const canvacord = require("canvacord");

module.exports = {
    name: 'ban',
    description: "Verban een gebruiker van de server",
    type: ApplicationCommandType.ChatInput,
    cooldown: 3000,
    options: [
        {
            name: 'gebruiker',
            description: 'Gebruiker die verbannen moet worden',
            type: ApplicationCommandOptionType.User,
            required: true
        },
        {
            name: 'reden',
            description: 'Reden van verbanning',
            type: ApplicationCommandOptionType.String,
            required: false
        },
    ],
    run: async (client, interaction) => {

        const gebruiker = interaction.options.get('gebruiker');

        if (!gebruiker) return interaction.reply({ content: 'Opgegeven gebruiker niet gevonden.', ephemeral: true });
        if (gebruiker.id === client.user.id) return interaction.reply({ content: 'Je kan mij niet bannen.', ephemeral: true });
        if (gebruiker.id === interaction.user.id) return interaction.reply({ content: 'Je kan jezelf niet bannen.', ephemeral: true });
        if (gebruiker.member.roles.highest.position >= interaction.guild.members.me.roles.highest.position) return interaction.reply({ content: 'Ik heb niet genoeg permissies om dit commando te kunnen uitvoeren.', ephemeral: true });
        if (gebruiker.member.roles.highest.position >= interaction.member.roles.highest.position) interaction.reply({ content: 'Je hebt niet genoeg rechten om de opgegeven gebruiker te verbannen.', ephemeral: true });
        if (!gebruiker.member.bannable) return interaction.reply({ content: 'De opgegeven gebruiker kan niet worden verbannen!', ephemeral: true });

        const avatar = await gebruiker.user.displayAvatarURL({ format: "png", dynamic: true });
        let reden = interaction.options.get('reden')?.value || 'geen reden';

        const embed = new EmbedBuilder().setAuthor({ name: `${gebruiker.user.tag} is verbannen!`, iconURL: avatar }).setDescription(`**reden**: ${reden}`).setColor('#ff0000')
        const embedLog = new EmbedBuilder().setAuthor({ name: `[VERBANNEN] ${gebruiker.user.tag}`, iconURL: avatar }).addFields({ name: 'Gebruiker', value: gebruiker.user.tag, inline: true }, { name: 'Moderator', value: interaction.user.tag, inline: true },{ name: 'Reden', value: reden, inline: true },).setThumbnail(avatar).setColor('#ff0000').setFooter({ text: `ID: ${gebruiker.user.id}` }).setTimestamp()

        await interaction.reply({ embeds: [embed] })
        const logChannel = await interaction.guild.channels.fetch(process.env.LOG_CHANNEL);
        if(logChannel) await logChannel.send({ embeds: [embedLog] });
        
        interaction.guild.bans.create(gebruiker.member);
    }
};
