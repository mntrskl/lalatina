const { RichEmbed } = require('discord.js');
// const snek = require('snekfetch');
const fetch = require('node-fetch');
const cheerio = require('cheerio');
exports.run = async (client, message, args, level) => {
	// eslint-disable-line no-unused-vars
	message.react('🎮');
	let embed = new RichEmbed().setColor(0xffff00).setTitle(`All Games Delta`);
	// let { body } = await snek.get('http://www.allgamesdelta.net/');
	let body = await fetch('http://www.allgamesdelta.net/').then(res => res.text()).then(body => body);
	let ch = cheerio.load(body);
	ch('.post-title').each(function (i, elem) {
		embed.addField(`${ch(this).text()}`, `[View full post](${ch(this).children().attr('href')})`);
	});
	// If the embed is empty is because we couldn't find anything
	if (embed.fields.length > 0) message.channel.send({ embed });
	else message.channel.send('I failed you master 😭');
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