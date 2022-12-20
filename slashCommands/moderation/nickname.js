const { ApplicationCommandType, EmbedBuilder, ApplicationCommandOptionType, PermissionsBitField } = require('discord.js');

module.exports = {
    name: 'nickname',
    description: "Verander de nickname van een gebruiker in de server",
    type: ApplicationCommandType.ChatInput,
    cooldown: 3000,
    options: [
        {
            name: 'gebruiker',
            description: 'Gebruiker waarvan je de nickname wilt aanpassen',
            type: ApplicationCommandOptionType.User,
            required: true
        },
        {
            name: 'naam',
            description: 'De nieuwe naam die je wilt geven',
            type: ApplicationCommandOptionType.String,
            required: true
        },
    ],
    run: async (client, interaction) => {

        const gebruiker = interaction.options.get('gebruiker');
        const naam = interaction.options.get('naam').value;

        if (!interaction.guild.members.me.permissions.has(PermissionsBitField.Flags.ChangeNickname)) return interaction.reply({ content: 'Ik heb niet genoeg permissies om dit commando te kunnen uitvoeren.', ephemeral: true });
        if (!gebruiker) return interaction.reply({ content: 'Opgegeven gebruiker niet gevonden.', ephemeral: true });
        if (gebruiker.member.roles.highest.position >= interaction.guild.members.me.roles.highest.position) return interaction.reply({ content: 'Ik heb niet genoeg permissies om dit commando te kunnen uitvoeren.', ephemeral: true });
        if (gebruiker.member.roles.highest.position >= interaction.member.guild.members.me.roles.highest.position) return interaction.reply({ content: 'Je hebt niet genoeg rechten om de opgegeven gebruiker te modificeren.', ephemeral: true });

        let oudeNaam = gebruiker.member.nickname;
        await gebruiker.member.setNickname(naam);

        const embed = new EmbedBuilder().setDescription(`${gebruiker.member}'s naam is aangepast naar **${naam}**.`).setColor('Random');
        const embedLog = new EmbedBuilder()
            .setAuthor({ name: `[NICKNAME] ${gebruiker.user.tag}`, iconURL: gebruiker.user.displayAvatarURL() })
            .addFields(
                { name: 'Oude naam', value: oudeNaam, inline: true },
                { name: 'Nieuwe naam', value: naam, inline: true },
                { name: 'Moderator', value: `${interaction.member}`, inline: true },
            )
            .setColor('White')
            .setFooter({ text: `Seed` })
            .setTimestamp()

        interaction.reply({ embeds: [embed] });
        const logChannel = await interaction.guild.channels.fetch(process.env.LOG_CHANNEL);
        await logChannel.send({ embeds: [embedLog] });
    }
};
