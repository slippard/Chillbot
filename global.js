var exports = module.exports = {};
const User = require('./models/user');
const mongoose = require('mongoose');
mongoose.connect('mongodb://koubi:PH7cyvyB@ds153980.mlab.com:53980/chillbot');

exports.log = function() {
    return 'logged';
  };

exports.checkPlayer = function(a){

    User.findOne({userId:a.id}, function(err,record){
        if(err){
            console.log(err.stack);
        }
        if (!record) {
            let user = new User();
            user.username = a.username;
            user.userId = a.id;
            user.messageCount = 0;
            user.money = 0;
            user.collected = '0';
            user.save(function (err) {
                if (err) {
                    console.log(err)
                } else {
                    console.log(a.username + ' added to the database.');
                }
            })
        } else {
            User.update({ userId : a.id }, {$inc: {money: 1}}).then(function() {
                User.update({ userId : a.id }, {$inc: {messageCount: 1}}).then(function() {
                    console.log('data incremented for ' + record.username);
                })
            })
        }
    })
}