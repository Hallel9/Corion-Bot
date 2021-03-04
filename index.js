const { ClientUser } = require('discord.js');
const Commando = require('discord.js-commando');
const path = require('path');
const config = require('./config.json')
const Discord = require('discord.js')
const fetch = require('node-fetch')
const client = new Commando.Client({
    owner: ['241632903258177536','704879934505615420','513773028606476308'],
    commandPrefix: config.prefix,
    disableEveryone: true
});
const fs = require('fs');






client.login(config.token);
client.registry
    // Registers your custom command groups
    .registerGroups([
        ['moderation', 'Moderation commands'],
        ['misc', 'Misc Commands'],
        ['music', 'Music commands'],
        ['owneronly', 'Owner Only Commands'],
        ['roles', 'Roles Commands'],
        ['embed', 'Embed example commands'],
        ['economy', 'Economy Commands'],
    	['games', 'Game Commands'],
    	['thanks', 'Commands to thanks people who helped you']
    ])

    // Registers all built-in groups, commands, and argument types
    .registerDefaults()

    // Registers all of your commands in the ./commands/ directory
    .registerCommandsIn(path.join(__dirname, 'commands'));

client.on('ready', () => {
    console.log(`${client.user.username} is online on ${client.guilds.cache.size} servers! `);
    client.user.setActivity("Prefix: > or @Corion Bot#0284", { type: "STREAMING", url: 'https://twitch.tv/Corion' });
})

channel_id = '808335210788683777' // ID here

client.on('guildCreate', (guild) => {
    const notice = {
    title: `New server`,
    description: `I've been added to ${guild.name}`,
    thumbnail: { url: guild.iconURL() },
    timestamp: Date.now()
  }
  if(guild.deleted) return
  client.channels.cache.get(channel_id).send({ embed: notice })
})

client.on('guildDelete', (guild) => {
    if(guild.deleted) return
    const notice = {
    title: `New server`,
    description: `I've been removed to ${guild.name}`,
    thumbnail: { url: guild.iconURL() },
    timestamp: Date.now()
  }
  client.channels.cache.get(channel_id).send({ embed: notice })
});

client.on('guildCreate', (guild) => {
  const channel = client.channels.cache.find(ch => ch.name == 'welcome')
  if(!channel) {
    console.log('No welcome channel found')
  }
  if(channel){
    const embed = new Discord.MessageEmbed()
      .setTitle(`${message.guild}`)
      .setDescription('Thanks for inviting me! Say >help for commands!')
      .setColor('RANDOM')
      .setFooter('Hallel#4444')
      .setTimestamp()
  }
  })

  client.snipes = new Map()
client.on('messageDelete', function(message, channel){
  
  client.snipes.set(message.channel.id, {
    content:message.content,
    author:message.author.tag,
    image:message.attachments.first() ? message.attachments.first().proxyURL : null
  })
})

client.on('guildMemberAdd', (member) => {
  const channel = member.guild.channels.cache.get('802323324772286506');
  channel.send(`Welcome ${member} to Corion Bot's Support Server!`)
});

client.on('guildMemberRemove', async member => {
  const channel = member.guild.channels.cache.get('802323324772286506');
if (!channel) return;

channel.send(`${member.user.tag} has logged out!`)
});

client.on("message", async message => {
  if (message.author.bot) return;
  if (message.channel.id === '816129376499925052') {
      message.channel.startTyping();
      const response = await fetch(`https://some-random-api.ml/chatbot?message=${encodeURIComponent(message.content)}`)
      const json = await response.json();
      message.channel.send(json.response);
      return message.channel.stopTyping(true);
  }
});
