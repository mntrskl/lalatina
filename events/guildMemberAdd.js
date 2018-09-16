// This event executes when a new member joins a server. Let's welcome them!

module.exports = (client, member) => {
	// Load the guild's settings
	console.log("ADDD");
	const settings = client.getGuildSettings(member.guild);

	// If welcome is off, don't proceed (don't welcome the user)
	if (settings.welcomeEnabled === "true") {
		// Replace the placeholders in the welcome message with actual data
		const welcomeMessage = settings.welcomeMessage.replace('{{user}}', member.user.tag);

		// Send the welcome message to the welcome channel
		// There's a place for more configs here.
		member.guild.channels.find('name', settings.welcomeChannel).send(welcomeMessage).catch(console.error);
	}

	// Check if auto assinging roles is enabled
	if (settings.newUserRoleEnabled === "true") {
		client.logger.log(`[MEMBER JOINED] ${member.user.tag}`);
		// Get the default role
		var role = member.guild.roles.find(x => x.name === settings.newUserRole);
		// Assing said role
		member.addRole(role).catch(console.error);
	}
};
