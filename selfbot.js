const Discord = require("discord.js");

const client = new Discord.Client();

var fs = require('fs');

var streaming = false;

client.on('message', msg => {
    if (msg.author.id != client.user.id)
        return;
    else{
        if (msg.content.toLowerCase().startsWith("embed")){
            msg.delete();
            var words = msg.content.split(" ");
            var title = "";
            var desc = "";
            var author = "";
            var footer = "";
            var color = 0x888888;
            
            var skipFlag = false;
            var descFlag = false;
            var titleFlag = false;
            var authorFlag = false;
            var footerFlag = false;
            var colorFlag = false;

            words.forEach(word =>{
                skipFlag = false;
                if (word == "description:"){
                    skipFlag = true;
                    descFlag = true;
                    titleFlag = false;
                    authorFlag = false;
                    footerFlag = false;
                    colorFlag = false;
                }
                if (word == "title:"){
                    skipFlag = true;
                    descFlag = false;
                    titleFlag = true;
                    authorFlag = false;
                    footerFlag = false;
                    colorFlag = false;
                }
                if (word == "author:"){
                    skipFlag = true;
                    descFlag = false;
                    titleFlag = false;
                    authorFlag = true;
                    footerFlag = false;
                    colorFlag = false;
                }
                if (word == "footer:"){
                    skipFlag = true;
                    descFlag = false;
                    titleFlag = false;
                    authorFlag = false;
                    footerFlag = true;
                    colorFlag = false;
                }
                if (word == "color:"){
                    skipFlag = true;
                    descFlag = false;
                    titleFlag = false;
                    authorFlag = false;
                    footerFlag = false;
                    colorFlag = true;
                }

                if (skipFlag){}
                else if (descFlag){
                    desc += word + " ";
                }
                else if (titleFlag){
                    title += word + " ";
                }
                else if (footerFlag){
                    footer += word + " ";
                }
                else if (authorFlag){
                    author += word + " ";
                }
                else if (colorFlag){
                    color = parseInt("0x" + word);
                }
            });
            msg.channel.send({embed:{
                title: title,
                description: desc,
                color: color
            }});
        }
        else if (msg.content.toLowerCase().startsWith("quote ")){
            msg.delete();
            msg.channel.fetchMessage(msg.content.substr("quote ".length)).then(message=>{
                msg.channel.send({
                    embed: {
                        color: 0x999999,
                        author: {
                            name: "In " + message.channel.name + ", " + message.author.username + " said: ",
                            icon_url: message.author.avatarURL
                        },
                        description: message.content
                    }
                });
            });
        }
        else if (msg.content.toLowerCase().startsWith("stream")){
            msg.delete();
            if (!streaming) {
                var options = {
                    "type": "STREAMING",
                    "url": "https://www.twitch.tv/vincent7"
                }
                client.user.setActivity('TWITCH', options);
                streaming = true;
            }
            else {
                var options = {
                    "type": "PLAYING"
                }
                client.user.setActivity('with Discord', options);
                streaming = false;
            }
        }
        else if (msg.content.toLowerCase().startsWith("count")){
            msg.delete();
            msg.channel.send({
                embed: {
                    color: 0x999999,
                    description: msg.guild.memberCount + " members in " + msg.guild.name
                }
            });
        }
    }
});

client.on("ready", ()=>{
    console.log("self bot running");
});

client.login();
