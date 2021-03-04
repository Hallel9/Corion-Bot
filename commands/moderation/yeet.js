const Commando = require('discord.js-commando')

module.exports = class BanCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: 'yeet',
      group: 'moderation',
      memberName: 'yeet',
      description: 'Bans a member from the discord server',
      clientPermissions: ['BAN_MEMBERS'],
      userPermissions: ['BAN_MEMBERS'],
    })
  }

  async run(message) {
    const target = message.mentions.users.first()
    if (!target) {
      message.reply('Please specify someone to yeet!')
      return
    }

    const { guild } = message
    const author = message.author

    const member = guild.members.cache.get(target.id)
    if (member.bannable) {
      member.ban()
      const embed = new Discord.MessageEmbed()
        .setTitle('Yeeted!')
        .setDescription(`${member} has been yeeted by ${author}!`)
        .setColor('RANDOM')
      message.channel.send(embed)
    } else {
      message.reply('I cannot yeet that user')
    }
  }
}
