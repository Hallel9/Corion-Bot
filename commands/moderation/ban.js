const Commando = require('discord.js-commando')

module.exports = class BanCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: 'ban',
      group: 'moderation',
      memberName: 'ban',
      description: 'Bans a member from the discord server',
      clientPermissions: ['BAN_MEMBERS'],
      userPermissions: ['BAN_MEMBERS'],
    })
  }

  async run(message) {
    const target = message.mentions.users.first()
    if (!target) {
      message.reply('Please specify someone to ban!')
      return
    }

    const { guild } = message

    const member = guild.members.cache.get(target.id)
    if (member.bannable) {
      member.ban()
      message.reply('That user has been banned')
    } else {
      message.reply('I cannot ban that user')
    }
  }
}
