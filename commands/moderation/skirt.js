const Commando = require('discord.js-commando')
const Discord = require('discord.js')

module.exports = class KickCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: 'skirt',
      group: 'moderation',
      memberName: 'skirt',
      description: 'Kicks a member from the discord server',
      clientPermissions: ['KICK_MEMBERS'],
      userPermissions: ['KICK_MEMBERS'],
      usage: '>skirt <@user>',
      examples: ['${prefix}skirt @josh'],
    })
  }

  async run(message) {
    const target = message.mentions.users.first()
    if (!target) {
      message.reply('Please specify someone to skirt')
      return
    }

    const { guild } = message

    const member = guild.members.cache.get(target.id)
    
    const author = message.author
    if (member.kickable) {
      member.kick()
      const embed = new Discord.MessageEmbed()
        .setTitle('Skirt!')
        .setDescription(`${member} has been yeeted by ${author}!`)
        .setColor('RANDOM')
      message.channel.send(embed)
    } else {
      message.reply('I cannot skirt that user')
    }
  }
}
