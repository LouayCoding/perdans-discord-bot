const card = require("../models/cardSchema");

const rankCard = async (...type) => {
    if(!type[0]?.interaction) return console.log('Je moet een interactie opgeven!');

    const interaction = type[0].interaction;
    const userId = interaction.user.id;
    const levelColor = type[0].levelColor;
    const rankColor = type[0].rankColor;
    const balkColor = type[0].balkColor;

    let data = await card.findOne({
        userId: interaction.user.id
    });

    if (data) {
        if(levelColor) data.levelColor = levelColor; 
        if(rankColor) data.rankColor = rankColor; 
        if(balkColor) data.balkColor = balkColor; 
        await data.save()
    } else {
        let dataa = await new card({
            userId: userId,
            background: 'ff',
            levelColor: levelColor || '#ffffff',
            rankColor: rankColor || '#ffffff',
            balkColor: balkColor || '#ffffff'
        });
        await dataa.save();
    }
}

module.exports = rankCard;