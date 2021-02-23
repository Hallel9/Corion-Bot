const commando = require('discord.js-commando');
const Discord = require('discord.js')

module.exports = class GithubCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'github',
            group: 'misc',
            memberName: 'github',
            description: 'Sends a github link',
            guildOnly: 'true',

        })
    }
    async run (commandoMsg) {
        const embed = new Discord.MessageEmbed()
            .setTitle('GitHub')
            .setDescription('[Github Repository](https://github.com/Hallel9/Corion-Bot)')
            .setColor('#5621d1')

        commandoMsg.channel.send(embed)
    }
}