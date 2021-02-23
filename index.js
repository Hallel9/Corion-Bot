const { ClientUser } = require('discord.js');
const Commando = require('discord.js-commando');
const path = require('path');
const config = require('./config.json')
const client = new Commando.Client({
    owner: config.ownerId,
    commandPrefix: config.prefix,
    disableEveryone: true
});
client.login(config.token);
client.registry
    // Registers your custom command groups
    .registerGroups([
        ['moderation', 'Moderation commands'],
        ['misc', 'Misc Commands'],
        ['music', 'Music commands'],
        ['owneronly', 'Owner Only Commands'],
        ['roles', 'Roles Commands'],
        ['embed', 'Embed example commands']
    ])

    // Registers all built-in groups, commands, and argument types
    .registerDefaults()

    // Registers all of your commands in the ./commands/ directory
    .registerCommandsIn(path.join(__dirname, 'commands'));

client.on('ready', () => {
    console.log(`${client.user.username} has successfully logged in!`);
})

client.on('guildMemberAdd', async member => {
    const channel = member.guild.channels.cache.get('802323324772286506');
  if (!channel) return;

channel.send(`${member} has sucsessfully logged in!`)
});

client.on('guildMemberRemove', async member => {
    const channel = member.guild.channels.cache.get('802323324772286506');
  if (!channel) return;

channel.send(`${member.user.tag} has logged out!`)
});

channel_id = '808335210788683777' // ID here

client.on('guildCreate', (guild) => {
  const notice = {
    title: `New server`,
    description: `I've been added to ${guild.name}`,
    thumbnail: { url: guild.iconURL() },
    timestamp: Date.now()
  }
  client.channels.cache.get(channel_id).send({ embed: notice })
})

client.on('guildDelete', (guild) => {
  const notice = {
    title: `New server`,
    description: `I've been removed to ${guild.name}`,
    thumbnail: { url: guild.iconURL() },
    timestamp: Date.now()
  }
  client.channels.cache.get(channel_id).send({ embed: notice })
})
