const { RichEmbed } = require('discord.js');
const fetch = require('node-fetch');

exports.run = async (client, message, args, level) => {
    // eslint-disable-line no-unused-vars
    message.react('🔒');
    let embed = new RichEmbed().setColor(0xffff00).setTitle(`Lastest Commit`);
    let json = await fetch('https://api.github.com/repos/venomu/lalatina/commits/master')
        .then(res => res.json());
    embed.addField(json.commit.message, json.commit.committer.date.substring(0, 10));
    if (embed.fields.length > 0) message.channel.send({ embed });
    else message.channel.send('Wh-What should I do, Kazuma? 😵');
};
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 'User'
};
exports.help = {
    name: 'commit',
    category: '🔒 System',
    description: "Get lastest committed change to Lalatina.",
    usage: 'commit'
};