const { verifyRole } = require('../config.json');

module.exports = {
    id: 'verifieren',
    permissions: [],
    run: async (client, interaction) => {

        let role = await interaction.guild.roles.cache.find(role => role.id === verifyRole);

        if (!role) return interaction.reply({ content: 'Er is een fout opgetreden geef deze gegevens door aan de eigenaar `ERR_VERIFY_ROLE`.', ephemeral: true });

        interaction.reply({ content: 'Je ontvangt binnen **5 seconden** toegang tot alle kanalen.', ephemeral: true })

        setTimeout(() => {
            interaction.member.roles.add(role)
        }, 5000);






    }
};
