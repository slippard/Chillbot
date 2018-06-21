module.exports.run = async (bot, message, args) => {
    
    const moment = require('moment');
    const mongoose = require('mongoose');
    const config = require('../config.json');
    mongoose.connect(config.dburl);
    const User = require('../models/user');
    let time = moment().hour();

    
    User.findOne({userId:message.author.id}, function(err, record) {
        if(err){
            console.log(err.stack)
        }
        if(!record) {
            message.channel.send('You were not found in the database. Try again.');
        } 
        if (record.collected != time) {
            User.update({ userId : message.author.id }, {$set: {collected: time}}).then(function() {
                User.update({ userId : message.author.id }, {$inc: {money: 500}}).then(function() {
                    console.log(message.author.username + ' got $500.' + ' at ' + time);
                })
            })
            message.channel.send({
                embed: {
                    color: 0x19ce3c, // color of sidebar
                    title: `Hourly Collection`,
                    description: `$500 has been added to your account.`
                }
            })
        }
        if (record.collected == time) return message.channel.send({
            embed: {
                color: 0x811515,
                title: "Hourly Collection",
                description: "You have already collected your daily reward! You can collect again " + moment().endOf('hour').fromNow()
            }
        })
    })
}

module.exports.config = {
    command: "collect"
};