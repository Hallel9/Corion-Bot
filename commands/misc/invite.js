const commando = require('discord.js-commando');
const Discord = require('discord.js')

module.exports = class InviteCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'invite',
            group: 'misc',
            memberName: 'invite',
            description: 'Sends an invite link',
            guildOnly: 'true',

        })
    }
    async run (commandoMsg) {
        const embed = new Discord.MessageEmbed()
            .setTitle('Invite')
            .setDescription('[Invite me here](https://discord.com/api/oauth2/authorize?client_id=801842822172246066&permissions=8&scope=bot)')
            .setColor('#5621d1')

        commandoMsg.channel.send(embed)
    }
}