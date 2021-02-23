const Commando = require('discord.js-commando')
const Discord = require('discord.js')

module.exports = class userinfoCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'userinfo',
            aliases: ['ui', 'user-info'],
            group: 'misc',
            description: 'Sends info about the specified user',
            memberName: 'userinfo',
        })
    }
    async run(message) {
        const member = message.mentions.members.first();
        if(!member) return message.channel.send('Please specify a user');

        if(member) {
            const embed = new Discord.MessageEmbed()
                .setTitle(`User information for ${member.user.username}`)
                .setColor('RANDOM')
                .setTimestamp()
                .setFooter(`Created by ${message.guild.owner.user.username}`)
                .addField('Created At', `${member.user.createdAt}`)
                .addField('Is Bot?', `${member.user.bot}`)
                .addField('User id',`${member.user.id}`)
                .addField('User Discriminator', `${member.user.discriminator}`)
            message.channel.send(embed)
            }
        }
    }