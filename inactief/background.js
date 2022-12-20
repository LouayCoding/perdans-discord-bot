// const { ApplicationCommandType, EmbedBuilder, ApplicationCommandOptionType } = require('discord.js');

// module.exports = {
//     name: 'background',
//     description: "Display user's avatar",
//     type: ApplicationCommandType.ChatInput,
//     cooldown: 3000,
//     options: [
//         {
//             name: 'kleur',
//             description: 'Gets a users avatar',
//             type: ApplicationCommandOptionType.Subcommand,
//             options: [
//                 {
//                     name: 'l',
//                     description: 'User to fetch the avatar from',
//                     type: ApplicationCommandOptionType.String,
//                     required: true
//                 }
//             ]
//         },
//         {
//             name: 'afbeelding',
//             description: 'Gets a users guild avatar, if they have one',
//             type: ApplicationCommandOptionType.Subcommand,
//             options: [
//                 {
//                     name: 'afbeelding',
//                     description: 'User to fetch the avatar from',
//                     type: ApplicationCommandOptionType.Attachment,
//                     required: true
//                 }
//             ]
//         },
//     ],
//     run: async (client, interaction) => {
//         let afbeelding = interaction.options.get('afbeelding');
//         console.log(afbeelding)
//     }
// };
