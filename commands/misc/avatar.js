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
            format: '${prefix}avatar @user',
            clientPermissions: ['SEND_MESSAGES'],
            userPermissions: ['SEND_MESSAGES'],
            aliases: ['av', 'pfp'],
        })
    }
    async run (message, args) {
        const member = message.mentions.users.first() || message.guild.members.cache.get(args[0])
        const author = message.author
        if(!member){
            return message.reply('Please mention a user!')
        }
        const embed = new Discord.MessageEmbed()
            .setTitle(author.username)
        	.setDescription(`Here's ${member.username}'s avatar!`)
            .setImage(member.displayAvatarURL({dynamic: true, size: 1024}))
            .setColor('#3443eb')
        	.setTimestamp()
        message.channel.send(embed)
    }
}