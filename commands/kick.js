module.exports.run = async (bot, message, args) => {
    let member = message.mentions.members.first();
    let reason = args.slice(1).join(" ");

    if (!member) {
        message.channel.send('Please mention the member to kick.');
    } else {
        if (!reason) {
            //console.log(member);
            message.channel.send('Please include a reason for kicking ' + member.user.username + '.');
        } else {
            message.channel.send('Kicking ' + member.user.username + '. Reason: ' + reason);
            member.kick(reason);
        }
    }
    
}

module.exports.config = {
    command: "kick"
};