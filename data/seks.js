const seksBerichten = (author, member) => {

    const messages = [
        `${author} heeft anale seks gehad met ${member} en is op de muur klaargekomen.`,
        `${author} heeft orale seks gehad met ${member} en heeft alle sperma doorgeslikt.`
        `${author} werd zo lekker gepijpt door ${member} dat ${author} even dacht dat hij aan het dromen was.`,
        `${author} heeft ${member} mishandelt, omdat ${member} hem niet geil genoeg maakte om klaar te komen.`
    ];
        

    const getal = Math.floor(Math.random() * messages.length);

    return messages[getal];
}

module.exports = seksBerichten;