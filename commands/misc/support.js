const commando = require('discord.js-commando');
const Discord = require('discord.js')

module.exports = class InviteCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'support',
            group: 'misc',
            memberName: 'support',
            description: 'Sends an invite link to the support server',
            guarded: true,
            guildOnly: 'true',

        })
    }
    async run (commandoMsg) {
        const embed = new Discord.MessageEmbed()
            .setTitle('Support')
            .setDescription('[Join the support server!](https://discord.gg/wcbQ7Cx6Tt)')
            .setColor('#5621d1')

        commandoMsg.channel.send(embed)
    }
}