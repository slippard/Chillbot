module.exports.run = async (bot, message, args) => {
    
    const mongoose = require('mongoose');
    const config = require('../config.json');
    mongoose.connect(config.dburl);
    const User = require('../models/user');
    let userToFind = args[0];
    
    if (!userToFind) {
        User.findOne({userId:message.author.id}, function(err, record) {
            if(err){
                console.log(err.stack);
            }
            message.channel.send({embed: {
                color: 3447003,
                description: 'You have $' + record.money + '.'
              }});
        })
    } else {
        let member = message.mentions.members.first();
        if(!member) {
            message.channel.send('Please mention a user.')
        } else {
            User.findOne({userId:member.id}, function(err, record) {
                if(err){
                    console.log(err.stack);
                }
                message.channel.send({embed: {
                    color: 3447003,
                    description: `**${record.username}** has $${record.money}.`
                  }});
            })
        }
    }
}

module.exports.config = {
    command: "money"
};