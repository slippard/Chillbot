module.exports.run = async (bot, message, args) => {

    let userlist = '';

    message.guild.members.array().forEach(member =>{
        userlist++
    });

    bot.user.setPresence({ game: { name: `${userlist} members chillin`, type: 0 } });
    // console.log(userlist)
    
}

module.exports.config = {
    command: "getusers"
};