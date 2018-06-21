module.exports.run = async (bot, message, args) => {
    
    const mongoose = require('mongoose');
    const config = require('../config.json');
    mongoose.connect(config.dburl);
    const User = require('../models/user');
    
    let amt = args[1];
    
    
    if (!amt) {
        message.channel.send('please specify how much money you would like to give.');
    } else {
        let member = message.mentions.members.first();
        if(!member) {
            message.channel.send('Please mention a user to give to.')
        } else {
            checkMoney(message.author, member, amt);
        }
    }

    function checkMoney(from,to,amt) {
        User.findOne({userId:from.id}, function(err,record) {
            if(err){
                console.log(err.stack);
            }
            if(amt > record.money) {
               return message.channel.send(`You only have $${record.money}, you cannot give $${amt}.`)
            } else {
                User.update({ userId : to.user.id }, {$inc: {money: amt}}).then(function() {
                    message.channel.send(`You gave ${to.user.username} $${amt}.`);
                    User.update({ userId : from.id }, {$inc: {money: -amt}}).then(function() {
                        
                    })
                })
            } 
        })
        console.log(`${from.username} would like to give ${to.user.username} $${amt}.`);
    }
}

module.exports.config = {
    command: "give"
};