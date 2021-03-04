const Commando = require('discord.js-commando')
const Discord  = require('discord.js')
module.exports = class DeleteChannelCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'delete-channel',
            description: 'Deletes the mentioned channel',
            group: 'moderation',
            aliases: ['dc'],
            usage: '${prefix}delete #channelname',
            examples: ['${prefix} delete #general'],
            userPermissions: ['MANAGE_CHANNELS'],
            clientPermissions: ['MANAGE_CHANNELS'],
            guildOnly: true,
            memberName: 'deletechannel',
        })
    }
    async run(message, args, client) {
        const channel = message.mentions.channels.first()
        if(!channel) return message.channel.send('Please mention a channel!');

        if(channel) {
            await channel.delete()
            message.channel.send(`**${channel.name}** has been deleted`)
        }
    }
}