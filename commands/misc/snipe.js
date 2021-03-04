const Commando = require('discord.js-commando')
const Discord = require('discord.js')

module.exports = class SnipeCommand extends Commando.Command {
    constructor(client){
        super(client, {
            name: 'snipe',
            description: 'Reveals deleted messages',
            userPermissions: ['SEND_MESSAGES'],
            memberName: 'snipe',
            group: 'misc',
            guildOnly: true,
        })
    }
    async run(client, message, args) {
        const msg = client.snipes.get(message.channel.id)
    if(!msg) return message.channel.send("There are no deleted messages in this channel!")
    const embed = new Discord.MessageEmbed()
    .setAuthor(msg.author.tag, msg.author.displayAvatarURL())
    .setDescription(msg.content)
    
    message.channel.send(embed)
    }
}