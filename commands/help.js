module.exports.run = async (bot, message, args) => {
    const embed = {
        "color": 9218754,
        "author": {
            "name": "Chillbot Help"
        },
        "fields": [{
                "name": "Current Prefix: +",
                "value": "Prefix used by this server for commands"
            },
            {
                "name": "+money",
                "value": "Display Users current money"
            },
            {
                "name": "slots (Currently just for testing)",
                "value": "+slots {bet}"
            },
            {
                "name": "+purge {#}",
                "value": "Collects and deletes between 2-99 messages in a channel."
            },
            {
                "name": "+role",
                "value": "Assigns the author the requested role."            
            },
            {
                "name": "+profile",
                "value": "outputs users current profile with varias data."
            },
            {
                "name": "+collect",
                "value": "Obtain hourly $500."
            },
            {
                "name": "+give <user> <amount>",
                "value": "Give someone your money."
            },
            {
                "name": "+kick <user> <reason>",
                "value": "Kick user from server, with a mandatory reason."
            }
        ]
    };
    message.channel.send({
        embed
    });
}

module.exports.config = {
    command: "help"
};