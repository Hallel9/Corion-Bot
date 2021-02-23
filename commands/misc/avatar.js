const Discord = require('discord.js')
const commando = require('discord.js-commando')
module.exports = class AvatarCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'avatar',
            description: 'Displays your avatar',
            group: 'misc',
            memberName: 'avatar',
            guildOnly: true,
            clientPermissions: ['SEND_MESSAGES'],
            userPermissions: ['SEND_MESSAGES'],
            aliases: ['av', 'pfp'],
        })
    }
    async run (message) {
        const member = message.mentions.users.first()
        const author = message.author
        if(!member){
            message.reply('Please mention a user!')
        }
        const embed = new Discord.MessageEmbed()
            .setTitle(`${author}`)
            .setImage(member.displayAvatarURL({dynamic: true, size: 1024}))
            .setColor('RANDOM')
        message.channel.send(embed)
    }
}
