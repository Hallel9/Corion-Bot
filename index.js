const Commando = require('discord.js-commando');
const path = require('path');
const config = require('./config.json')
const client = new Commando.Client({
    owner: config.ownerId,
    commandPrefix: config.prefix
});
client.login(config.token);
client.registry
    // Registers your custom command groups
    .registerGroups([
        ['moderation', 'Moderation commands'],
        ['misc', 'Misc Commands'],
        ['music', 'Music commands'],
        ['owneronly', 'Owner Only Commands']
    ])

    // Registers all built-in groups, commands, and argument types
    .registerDefaults()

    // Registers all of your commands in the ./commands/ directory
    .registerCommandsIn(path.join(__dirname, 'commands'));

client.on('ready', () => {
    console.log(`Logged in as ${client.user.username}`);
});