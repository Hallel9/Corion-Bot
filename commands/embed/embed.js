const Commando = require('discord.js-commando')
const Discord = require('discord.js')
module.exports = class EmbedCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'embed',
            description: 'Sends an example embed',
            group: 'embed',
            guildOnly: true,
            memberName: 'embed',
        })
    }
    async run(message, client){
    const embed = new Discord.MessageEmbed()
        .setTitle('This is your title')
        .setDescription('This is your description')
        .setTimestamp()
        .addField('this is the name', 'this is the field value', true)
    	.setColor('RANDOM')

        message.channel.send(embed)
    }
}
