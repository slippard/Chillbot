module.exports.run = async (bot, message, args) => {

    
    const mongoose = require('mongoose');
    const config = require('../config.json');
    mongoose.connect(config.dburl);
    const User = require('../models/user');

    let userToFind = args[0];

    if (!userToFind) {
        User.findOne({
            userId: message.author.id
        }, function (err, record) {
            if (err) {
                console.log(err.stack);
            }
            message.channel.send('**' + message.author.username + `'s** profile: \nusername: ${record.username}\nMoney: ${record.money}\nMessages Sent: ${record.messageCount}`);
        })
    } else {
        let member = message.mentions.members.first();
        if (!member) {
            message.channel.send('Please mention a user.')
        } else {
            User.findOne({
                userId: member.id
            }, function (err, record) {
                if (err) {
                    console.log(err.stack);
                }
                if (!record) {
                    let user = new User();
                    user.username = member.user.username;
                    user.userId = member.user.id;
                    user.messageCount = 0;
                    user.money = 0;
                    user.collected = '0';
                    user.save(function (err) {
                        if (err) {
                            console.log(err.stack)
                        } else {
                            console.log(member.user.username + ' added to the database.');
                        }
                    })
                    message.channel.send('User was not found, but was added. Try again.')
                } else {
                    message.channel.send('**' + record.username + `'s** profile: \nusername: ${record.username}\nMoney: ${record.money}\nMessages Sent: ${record.messageCount}`);
                }
            })
        }
    }
}

module.exports.config = {
    command: "profile"
};