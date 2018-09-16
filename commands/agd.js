const { RichEmbed } = require('discord.js');
const fetch = require('node-fetch');
const cheerio = require('cheerio');
exports.run = async (client, message, args, level) => {
	// eslint-disable-line no-unused-vars
	message.react('🎮');
	let embed = new RichEmbed().setColor(0xffff00).setTitle(`All Games Delta`);
	let body = await fetch('http://www.allgamesdelta.net/').then(res => res.text());
	let ch = cheerio.load(body);
	ch('.post-title').each(function (i, elem) {
		embed.addField(`${ch(this).text()}`, `[View full post](${ch(this).children().attr('href')})`);
	});
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
	name: 'agd',
	category: '🎮 Video Games',
	description: "Get AllGamesDelta's last published page.",
	usage: 'agd'
};