const { ApplicationCommandType, EmbedBuilder, ApplicationCommandOptionType } = require('discord.js');

module.exports = {
    name: 'avatar',
    description: "Display user's avatar",
    type: ApplicationCommandType.ChatInput,
    cooldown: 3000,
    options: [
        {
            name: 'get',
            description: 'Gets a users avatar',
            type: ApplicationCommandOptionType.Subcommand,
            options: [
                {
                    name: 'user',
                    description: 'User to fetch the avatar from',
                    type: ApplicationCommandOptionType.User
                }
            ]
        },
        {
            name: 'guild',
            description: 'Gets a users guild avatar, if they have one',
            type: ApplicationCommandOptionType.Subcommand,
            options: [
                {
                    name: 'user',
                    description: 'User to fetch the avatar from',
                    type: ApplicationCommandOptionType.User
                }
            ]
        },
    ],
    run: async (client, interaction) => {
        const command = interaction.options.getSubcommand();
        const user = interaction.options.get('user')?.user || interaction.user;
        let avatar;
        
        if(command === 'guild'){
          let fetchMember = await interaction.guild.members.fetch(user.id);
          let guildAvatar = fetchMember.avatarURL({ size:408});

          if(guildAvatar) avatar = guildAvatar;
          else return client.embed.errorEmbed(interaction, `${fetchMember.user.tag} does not have a server avatar.`)
        }

        if(command === 'get'){
            avatar = user.displayAvatarURL({ size: 4096 });
        }
        

        const embed = new EmbedBuilder()
            .setAuthor({ name: `${user.tag}` })
            .setTitle('Avatar')
            .setImage(user.displayAvatarURL({ size: 4096 }))

        return interaction.reply({ embeds: [embed] })
    }
};
