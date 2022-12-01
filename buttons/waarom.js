module.exports = {
	id: 'waarom',
	permissions: [],
	run: async (client, interaction) => {
		interaction.reply({ content: 'Wij willen voorkomen dat geautomatiseerde bots onze server joinen.', ephemeral: true})
	}
};
