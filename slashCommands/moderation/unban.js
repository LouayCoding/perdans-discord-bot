const { ApplicationCommandType, EmbedBuilder, ApplicationCommandOptionType, AttachmentBuilder } = require('discord.js');
const Levels = require("discord-xp");
const canvacord = require("canvacord");

module.exports = {
    name: 'unban',
    description: "Unban een gebruiker van de server",
    type: ApplicationCommandType.ChatInput,
    cooldown: 3000,
    options: [
        {
            name: 'id',
            description: 'Gebruiker die unbanned moet worden',
            type: ApplicationCommandOptionType.String,
            required: true
        },
    ],
    run: async (client, interaction) => {

        const gebruiker = interaction.options.get('id').value;
        
        interaction.guild.bans.fetch(gebruiker).then(user => {
            if(user) interaction.guild.bans.remove(gebruiker);
        });
    }
};
