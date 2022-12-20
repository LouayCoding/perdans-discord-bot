const { EmbedBuilder, PermissionsBitField } = require('discord.js');
const client = require('..');

client.on('interactionCreate', async interaction => {
	if (!interaction.isModalSubmit()) return;

    const modal = client.modals.get(interaction.customId);
    if (!modal) return;

    try {
        if(modal.permissions) {
            if(!interaction.memberPermissions.has(PermissionsBitField.resolve(modal.permissions || []))) {
                const perms = new EmbedBuilder()
                .setDescription(`🚫 ${interaction.user}, You don't have \`${modal.permissions}\` permissions to interact this button!`)
                .setColor('Red')
                return interaction.reply({ embeds: [perms], ephemeral: true })
            }
        }
        await modal.run(client, interaction);
    } catch (error) {
        console.log(error);
    }
});
