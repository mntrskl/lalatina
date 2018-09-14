const { RichEmbed } = require('discord.js');
const snek = require('snekfetch');
const cheerio = require('cheerio');
exports.run = async (client, message, args, level) => {
    let embed = new RichEmbed().setColor(0xff0000).setTitle(`All Games Delta`);
    let { body } = await snek.get('api.github.com/repos/venomu/lalatina/commits/master');
    console.log(body);
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
    description: "Get last commited change to Lalatina.",
    usage: 'commit'
};