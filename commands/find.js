module.exports.run = async (bot, message, args) => {
    let users = bot.users;
    let search = args[0];

    if (!search) {
        message.channel.send('What do you want to search for?');
    } else {
        let matches = users.filter(u => u.username.toLowerCase().includes(search.toLowerCase()))
        message.channel.send(matches.map(u => u.username).join(", "));
    }
}

module.exports.config = {
    command: "find"
};