module.exports.run = async (bot, message, args) => {

    let guildMember = message.member;

    if (guildMember.roles.some(r => ["Admins", "Mods"].includes(r.name))) {
        const user = message.mentions.users.first();
        const amount = !!parseInt(message.content.split(' ')[1]) ? parseInt(message.content.split(' ')[1]) : parseInt(message.content.split(' ')[2])
        if (!amount) return message.reply('Must specify an amount to delete!');
        if (!amount && !user) return message.reply('Must specify a user and amount, or just an amount, of messages to purge!');
        message.channel.fetchMessages({
            limit: amount,
        }).then((messages) => {
            if (user) {
                const filterBy = user ? user.id : Client.user.id;
                messages = messages.filter(m => m.author.id === filterBy).array().slice(0, amount);
            }
            message.channel.bulkDelete(messages).catch(error => console.log(error.stack));
        });
    } else {
        message.channel.send('You do not have permission to purge in this channel.');
    }


}

module.exports.config = {
    command: "purge"
};