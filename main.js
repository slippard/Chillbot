const Discord = require("discord.js");
const bot = new Discord.Client();
const mongoose = require('mongoose');
mongoose.connect('mongodb://koubi:pir0g03th@ds153980.mlab.com:53980/chillbot');
const User = require('./models/user');
const fs = require('fs');
const config = require('./config.json');
const db = mongoose.connection;
bot.commands = new Discord.Collection();

db.on('error', function (err) {
    console.log('Something went wrong: ' + err);
});

db.once('open', function () {
    console.log('Connected to mongo database.');
})

fs.readdir('./commands/', (err, files) => {
    if (err) console.error(err);
    var jsfiles = files.filter(f => f.split('.').pop() === 'js');
    if (jsfiles.length <= 0) {
        return console.log('No commands found...')
    } else {
        console.log(jsfiles.length + ' commands found.')
    }
    jsfiles.forEach((f, i) => {
        var cmds = require(`./commands/${f}`);
        console.log(`${f} loaded.`);
        bot.commands.set(cmds.config.command, cmds);
    })
})

bot.on('message', message => {
    let prefix = config.prefix;
    let msg = message.content.toLowerCase();
    let cont = message.content.slice(prefix.length).split(" ");
    let args = cont.slice(1);
    let cmd = bot.commands.get(cont[0]);
    if (cmd) cmd.run(bot, message, args);
    if (bot.user.id === message.author.id) {
        return
    };
    if (!msg.startsWith(prefix)) {
        User.count({
            username: message.author.username
        }, function (err, count) {
            if (err) {
                console.log(err)
            } else if (count == 0) {
                let user = new User();
                user.username = message.author.username;
                user.userId = message.author.id;
                user.messageCount = 0;
                user.money = 0;
                user.save(function (err) {
                    if (err) {
                        console.log(err)
                    } else {
                        console.log(message.author.username + ' added to the database.');
                    }
                })
            } else {
                User.update({
                    $inc: {
                        money: 1
                    }
                }).exec();
                User.update({
                    $inc: {
                        messageCount: 1
                    }
                }).exec();
                console.log('incremented money and message count');
            }
        });
    }
});

function updateUsers() {
    let guild = bot.guilds.get("241455314669535234");
    setTimeout(() => {
        let userlist = '';
        guild.members.array().forEach(member => {
            userlist++
        });
        bot.user.setPresence({ game: { name: `${userlist} members chillin`, type: 0 } });
    }, 1000);
}

bot.on('guildMemberAdd', member => {
    member.guild.channels.get(config.joinleave).send('**' + member.user.username + '**, has joined the server');
    updateUsers()
});

bot.on('guildMemberRemove', member => {
    member.guild.channels.get(config.joinleave).send('**' + member.user.username + '**, has left the server');
    updateUsers()
});

bot.on('ready', () => {
    console.log('Chillbot ready...');
    bot.user.setStatus('available')
    bot.user.setPresence({
        game: {
            name: updateUsers(),
            type: 0,
        }
    });
});

// bot login
bot.login(config.token);