const Commando = require('discord.js-commando')
const Discord = require('discord.js')
module.exports = class serverinfoCommmand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'serverinfo',
            aliases: ['si', 'server-info'],
            group: 'misc',
            description: 'Sends info about a server in an embed',
            memberName: 'serverinfo',
            guildOnly: true,
        })
    }
    async run (message) {
        function checkDays(date) {
            let now = new Date();
            let diff = now.getTime() - date.getTime();
            let days = Math.floor(diff / 86400000);
            return days + (days == 1 ? " day" : " days") + " ago";
        };
        let region = {
            "brazil": ":flag_br: Brazil",
            "eu-central": ":flag_eu: Central Europe",
            "singapore": ":flag_sg: Singapore",
            "us-central": ":flag_us: U.S. Central",
            "sydney": ":flag_au: Sydney",
            "us-east": ":flag_us: U.S. East",
            "us-south": ":flag_us: U.S. South",
            "us-west": ":flag_us: U.S. West",
            "eu-west": ":flag_eu: Western Europe",
            "vip-us-east": ":flag_us: VIP U.S. East",
            "london": ":flag_gb: London",
            "amsterdam": ":flag_nl: Amsterdam",
            "hongkong": ":flag_hk: Hong Kong",
            "russia": ":flag_ru: Russia",
            "southafrica": ":flag_za:  South Africa"
        };
        const { guild } = message

        const { name, memberCount, owner, afkTimeout, joinedAt, afkChannel, createdAt, premiumSubscriptionCount, verified, premiumTier, partnered } = guild
        const icon = guild.iconURL()

        const embed = new Discord.MessageEmbed()
            .setTitle(`Server info for ${name}`)
            .setThumbnail(icon)
            .setImage(icon)
            .setColor('RANDOM')
            .setTimestamp()
            .setFooter(`Created by Hallel#1103`)
            .setAuthor(message.guild.name, message.guild.iconURL)
            .addField("Total | Humans | Bots", `${message.guild.members.cache.size} | ${message.guild.members.cache.filter(member => !member.user.bot).size} | ${message.guild.members.cache.filter(member => member.user.bot).size}`, true)
            .addField("Region", region[message.guild.region], true)
            .addField("Owner", `${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`, true)
            .addField('AFK Timeout', `${afkTimeout} seconds`, true)
            .addField('Joined At', `${joinedAt}`, true)
        	.addField('AFK Channel', `${afkChannel}`, true)
            .addField("Creation Date", `${message.channel.guild.createdAt.toUTCString().substr(0, 16)} (${checkDays(message.channel.guild.createdAt)})`, true)
            .addField('Is Verified?', `${verified}`, true)
            .addField('# of Boosts', `${premiumSubscriptionCount}`, true)
            .addField('Server Level', `${premiumTier}`, true)
            .addField('Is Partnered with Discord?', `${partnered}`, true)
            .addField("Roles", message.guild.roles.cache.size, true)
            .addField("Channels", message.guild.channels.cache.size, true)
            .addField("Verification Level", message.guild.verificationLevel, true)
        message.channel.send(embed)
    }
}