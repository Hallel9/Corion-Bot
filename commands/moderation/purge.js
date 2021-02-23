const Commando = require('discord.js-commando')

module.exports = class purgeCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'purge',
            description: 'Deletes messages',
            group: 'moderation',
            memberName: 'purge',
            userPermissions:[
                'MANAGE_MESSAGES'
            ],
            clientPermissions: [
                'MANAGE_MESSAGES'
            ],
            format: 'purge (number)',
            examples: ['purge 2'],

        })
    }
    async run(message, args, client) {
        const messageArray = message.content.split(' ');
        
        let deleteAmount;

        if (isNaN(args[0]) || parseInt(args[0]) <= 0) { return message.reply('Please put a number only!') }
    
        if (parseInt(args[0]) > 100) {
            return message.reply('You can only delete 100 messages at a time!')
        } else {
            deleteAmount = parseInt(args[0]);
        }
    
        message.channel.bulkDelete(deleteAmount + 1, true);
        message.reply(`**Successfully** Deleted ***${deleteAmount}*** Messages.`)
    }
}