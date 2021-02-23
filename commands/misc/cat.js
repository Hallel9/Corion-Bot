const Commando = require('discord.js-commando')
const got = require('got')
const Discord = require('discord.js')
module.exports = class CatCommand extends Commando.Command {
    constructor(client){
        super(client, {
            name: 'cat',
            aliases:['kitty'],
            description: 'Sends a picture of a cat',
            group: 'misc',
            guildOnly: true,
            memberName: 'cat',
            details: 'Currently unloaded due to problems with the images',

        })
    }
    async run(message){
        let cats = [
            'Kitten',
            'SadCats',
            'KittenGifs',
            'CuteCats',
            'FluffyCats',
            'WetCats',
            'Cats'
        ]
        let cat = cats[Math.floor(Math.random() * cats.length)];
        got(`https://www.reddit.com/r/${cat}/random/.json`).then(response => {
            let content = JSON.parse(response.body);
            let image = content[0].data.children[0].data.url
            const embed = new Discord.MessageEmbed()
                .setImage(image)
                .setColor('RANDOM')
                .setTimestamp()
            message.channel.send(embed)
        })
    }
}