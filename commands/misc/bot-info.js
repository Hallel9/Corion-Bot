const Discord = require('discord.js')
const Commando = require('discord.js-commando')
const { version } = require('../../package.json')

module.exports = class BotInfoCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: 'botinfo',
      group: 'misc',
      memberName: 'botinfo',
      description: 'Displays bot information',
      guildOnly: true
    })
  }

  run = async (message) => {
    let totalMembers = 0

    for (const guild of this.client.guilds.cache) {
      totalMembers += (await guild[1].members.fetch()).size
    }

    const embed = new Discord.MessageEmbed()
      .setAuthor(
        `Information about ${this.client.user.username}`,
        this.client.user.displayAvatarURL()
      )
      .addFields(
        {
          name: 'Bot tag',
          value: this.client.user.tag,
        },
        {
          name: 'Version',
          value: version,
        },
        {
          name: "Server's command prefix",
          value: message.guild.commandPrefix,
        },
        {
          name: 'Time since last restart',
          value: `${process.uptime().toFixed(2)}s`,
        },
        {
          name: 'Server count',
          value: this.client.guilds.cache.size,
        },
        {
          name: 'Total members',
          value: totalMembers,
        },
        {
            name: 'Verified?',
            value: this.client.user.verified
        },
        {
            name: 'Nodejs',
            value: '15.5.1'
        },
        {
            name: 'Discordjs',
            value: '12.5.1'
        },
        {
            name: 'Client Options',
            value: options
        }
      )

    message.channel.send(embed)
  }
}