const Commando = require('discord.js-commando')
const Discord = require('discord.js')
const RandomFact = require('discordjs-facts');
module.exports = class CatFactsCommand  extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'fact',
            group: 'misc',
            description: 'Sends facts',
            memberName: 'fact',
            guildOnly: true,
        })
    }
    async run(message) {
        const fact = new RandomFact({
            title: 'facts', // Title of the embed while displaying the game. Default: facts
            color: 'RANDOM', // Color of the embed. Default: RANDOM
            lang: 'en', // Custom the language for the embeds. Default: en
            footer: 'This is my custom footer', // Custom text for the embed title of the game over embed. Default: 'Game Over'
            subject: "dogs", // chose a category for the facts. Default: random
            thumbnail: 'https://www.gettyimages.be/gi-resources/images/500px/983794168.jpg', // A thumbnail at the embed. Remove this to remove the embed 
            embed: true, // remove rhis for your facts in text version without embed
          });

          fact.newFact(message);
    }
}