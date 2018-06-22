const Discord = require("discord.js");
const bot = new Discord.Client();
const mongoose = require('mongoose');
mongoose.connect('mongodb://koubi:PH7cyvyB@ds153980.mlab.com:53980/chillbot');
const User = require('./models/user');
const fs = require('fs');
const config = require('./config.json');
var global = require("./global.js");
const db = mongoose.connection;
bot.commands = new Discord.Collection();
var Roll = require('roll'),
    roll = new Roll();

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
    let guildMember = message.member;
    let cont = message.content.slice(prefix.length).split(" ");
    let args = cont.slice(1);
    let a = message.author;
    let cmd = bot.commands.get(cont[0]);
    if (cmd) cmd.run(bot, message, args);
    if (bot.user.id === message.author.id) { return };
    if (!message.content.startsWith(prefix)) return;
    updateUsers()
    global.checkPlayer(a);

    if (message.content == prefix + 'log') {
        message.channel.send(global.log());
    }

    if (message.content == prefix + 'update') {
        if (guildMember.roles.some(r => ["Admins", "Mods"].includes(r.name))) {
            message.channel.send('Updating Users.');
            updateUsers();
        } else {
            message.channel.send('You do not have permission to do that.');
        }
    }
    
});

function updateUsers() {
    bot.user.setActivity(bot.users.size + ' members chillin 😎', {"type": "playing"});
}

bot.on('guildMemberAdd', member => {
    let guild = bot.guilds.get("241455314669535234");
    guild.channels.get(config.joinleave).send('**' + member.user.username + '**, has joined ' + member.guild.name);
    updateUsers()
});

bot.on('guildMemberRemove', member => {
    let guild = bot.guilds.get("241455314669535234");
    guild.channels.get(config.joinleave).send('**' + member.user.username + '**, has left ' + member.guild.name);
    updateUsers()
});

bot.on('ready', () => {
    updateUsers()
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