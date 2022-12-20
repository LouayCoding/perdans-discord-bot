const { ApplicationCommandType, EmbedBuilder, ApplicationCommandOptionType, ActionRowBuilder, ButtonBuilder, ButtonStyle, ComponentType } = require('discord.js');
const seksBerichten = require('../../data/seks');

module.exports = {
    name: 'sex',
    description: "Sex hebben met je partner",
    type: ApplicationCommandType.ChatInput,
    cooldown: 3000,
    options: [
        {
            name: 'user',
            description: 'User to fetch the avatar from',
            type: ApplicationCommandOptionType.User,
            required: true
        }
    ],
    run: async (client, interaction) => {
        const author = interaction.user;
        const member = interaction.options.get('user')?.user;

        if(author.id === member.id) return interaction.reply({ content: 'Je kan geen sex hebben met jezelf.', ephemeral: true});

        const row = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('ja')
                    .setLabel('Ja')
                    .setStyle(ButtonStyle.Success),
                new ButtonBuilder()
                    .setCustomId('nee')
                    .setLabel('Nee')
                    .setStyle(ButtonStyle.Danger),
            );

        
        const geweigerdGetal = Math.floor(Math.random() * geweigerdMessages.length)

        const embed = new EmbedBuilder()
            .setDescription(`${member} wil je sex hebben met ${author}?`)
        let bericht = await interaction.reply({ embeds: [embed], components: [row], fetchReply: true });

        const ingetrokkenEmbed = new EmbedBuilder()
            .setDescription(`${author} heeft het sex verzoek met ${member} ingetrokken.`)

        const geweigerdEmbed = new EmbedBuilder()
            .setDescription(geweigerdMessages[geweigerdGetal])

        const sexEmbed = new EmbedBuilder()
            .setDescription(seksBerichten(author, member))
        // let berichtIngetrokken = await interaction.reply({ embeds: [embed], components: [row], fetchReply: true });

        const collector = bericht.createMessageComponentCollector({ componentType: ComponentType.Button, time: 150000 });

        collector.on('collect', (interaction) => {
            if (interaction.customId === 'ja') {
                if (interaction.user.id === member.id) {
                    bericht.delete();
                    return interaction.channel.send({ embeds: [sexEmbed] });
                } else return interaction.reply({ content: `Alleen ${member} kan het verzoek accepteren.`, ephemeral: true })
                
            } else if (interaction.customId === 'nee') {
                if (interaction.user.id === author.id) {
                    interaction.channel.send({ embeds: [ingetrokkenEmbed], ephemeral: true })
                    return bericht.delete();
                } else if (interaction.user.id === member.id) {
                    interaction.channel.send({ embeds: [geweigerdEmbed], ephemeral: true })
                    return bericht.delete();
                }
            }
        });
    }
};
