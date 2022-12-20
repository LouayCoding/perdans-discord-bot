const { EmbedBuilder } = require('discord.js');
const moment = require('moment');

const afk = (message, client) => {
    moment.locale('nl');

    if (!message.guild || message.author.bot) return;
    const mentionedMember = message.mentions.members.first();
    if (mentionedMember) {
        const data = client.afk.get(mentionedMember.id);

        if (data) {
            const [timestamp, reason] = data;
            const timeAgo = moment(timestamp).fromNow();

            const agoEmbed = new EmbedBuilder().setDescription(`${mentionedMember} is afk (**${timeAgo}**)\n**Reden**: ${reason.value}`).setColor('Random');
            message.reply({
                embeds: [agoEmbed], allowedMentions: {
                    repliedUser: false
                }
            });
        }
    }

    const getData = client.afk.get(message.author.id);
    if (getData) {
        client.afk.delete(message.author.id);
        const embed = new EmbedBuilder().setDescription(`${message.member} je AFK status is verwijderd`).setColor('Random');
        message.reply({
            embeds: [embed], allowedMentions: {
                repliedUser: false
            }
        });
    }
}

module.exports = afk;