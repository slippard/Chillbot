module.exports.run = async (bot, message, args) => {

    const config = require('../config.json');
    let prefix = config.prefix;
    var Roll = require('roll'),
        roll = new Roll();
    // Importing Emojis from ./emoji folder
    // if adding to new server, these files must be added to the server or changed to match current emojis
    const brown = bot.emojis.find("name", "brown");
    const pink = bot.emojis.find("name", "pink");
    const pbag = bot.emojis.find("name", "pbag");
    const cyan = bot.emojis.find("name", "cyan");
    const blue = bot.emojis.find("name", "blue");
    const wild = bot.emojis.find("name", "wild");
    const white = bot.emojis.find("name", "white");

    // bag values
    var brownValue = 0.1;
    var pbagValue = 0.2;
    var pinkValue = 0.3;
    var blueValue = 0.4;
    var cyanValue = 0.5;
    var whiteValue = 0.8;
    var wildValue = 0.7;

    // brown pink pbag blue cyan white wild
    if (message.content === prefix + 'SLOTS') {
        message.channel.send("Please specify an amount to bet. ex: +slots {bet}");
    }

    if (message.content.startsWith("+slots ")) {
        var bet = message.content.substr("+slots ".length);
        var betValue = isNaN(`${bet}`);
        var rolled = roll.roll('d100');
        const slotResultsLost = [
            [`${brown}${brown}${brown}`],
            [`${brown}${brown}${pink}`],
            [`${brown}${brown}${pbag}`],
            [`${brown}${pink}${brown}`],
            [`${brown}${pink}${pink}`],
            [`${brown}${pink}${pbag}`],
            [`${brown}${pbag}${brown}`],
            [`${brown}${pbag}${pink}`],
            [`${brown}${pbag}${pbag}`],
            [`${pink}${brown}${brown}`],
            [`${pink}${brown}${pink}`],
            [`${pink}${brown}${pbag}`],
            [`${pink}${pink}${brown}`],
            [`${pink}${pink}${pink}`],
            [`${pink}${pink}${pbag}`],
            [`${pink}${pbag}${brown}`],
            [`${pink}${pbag}${pink}`],
            [`${pink}${pbag}${pbag}`],
            [`${pbag}${brown}${brown}`],
            [`${pbag}${brown}${pink}`],
            [`${pbag}${brown}${pbag}`],
            [`${pbag}${pink}${brown}`],
            [`${pbag}${pink}${pink}`],
            [`${pbag}${pink}${pbag}`],
            [`${pbag}${pbag}${brown}`],
            [`${pbag}${pbag}${pink}`],
            [`${pbag}${pbag}${pbag}`]
        ];

        var slotLost = slotResultsLost[Math.floor(Math.random() * slotResultsLost.length)];
        if (betValue == true) {
            message.channel.send(`Please specify an amount to bet.`);
        } else {
            if (rolled.result <= 72) {
                message.channel.send(`${slotLost}\nYou have lost $${bet}`)
            }
            if (rolled.result == 73) {
                var winnings = Math.floor(bet * 1.1);
                message.channel.send(`${blue}${blue}${blue}\n**You have won $${winnings}**`)
            }
            if (rolled.result == 74) {
                var winnings = Math.floor(bet * 1.2);
                message.channel.send(`${blue}${blue}${cyan}\n**You have won $${winnings}**`)
            }
            if (rolled.result == 75) {
                var winnings = Math.floor(bet * 1.3);
                message.channel.send(`${blue}${blue}${wild}\n**You have won $${winnings}**`)
            }
            if (rolled.result == 76) {
                var winnings = Math.floor(bet * 1.4);
                message.channel.send(`${blue}${blue}${white}\n**You have won $${winnings}**`)
            }
            if (rolled.result == 77) {
                var winnings = Math.floor(bet * 1.5);
                message.channel.send(`${blue}${cyan}${blue}\n**You have won $${winnings}**`)
            }
            if (rolled.result == 78) {
                var winnings = Math.floor(bet * 1.6);
                message.channel.send(`${blue}${cyan}${cyan}\n**You have won $${winnings}**`)
            }
            if (rolled.result == 79) {
                var winnings = Math.floor(bet * 1.7);
                message.channel.send(`${blue}${cyan}${wild}\n**You have won $${winnings}**`)
            }
            if (rolled.result == 80) {
                var winnings = Math.floor(bet * 1.8);
                message.channel.send(`${blue}${cyan}${white}\n**You have won $${winnings}**`)
            }
            if (rolled.result == 81) {
                var winnings = Math.floor(bet * 1.9);
                message.channel.send(`${blue}${wild}${blue}\n**You have won $${winnings}**`)
            }
            if (rolled.result == 82) {
                var winnings = Math.floor(bet * 2);
                message.channel.send(`${blue}${wild}${cyan}\n**You have won $${winnings}**`)
            }
            if (rolled.result == 83) {
                var winnings = Math.floor(bet * 2.1);
                message.channel.send(`${blue}${wild}${wild}\n**You have won $${winnings}**`)
            }
            if (rolled.result == 84) {
                var winnings = Math.floor(bet * 2.2);
                message.channel.send(`${blue}${white}${blue}\n**You have won $${winnings}**`)
            }
            if (rolled.result == 85) {
                var winnings = Math.floor(bet * 2.3);
                message.channel.send(`${blue}${white}${cyan}\n**You have won $${winnings}**`)
            }
            if (rolled.result == 86) {
                var winnings = Math.floor(bet * 2.4);
                message.channel.send(`${blue}${white}${wild}\n**You have won $${winnings}**`)
            }
            if (rolled.result == 87) {
                var winnings = Math.floor(bet * 2.5);
                message.channel.send(`${blue}${white}${white}\n**You have won $${winnings}**`)
            }
            if (rolled.result == 88) {
                var winnings = Math.floor(bet * 2.6);
                message.channel.send(`${cyan}${blue}${blue}\n**You have won $${winnings}**`)
            }
            if (rolled.result == 89) {
                var winnings = Math.floor(bet * 2.7);
                message.channel.send(`${wild}${white}${wild}\n**You have won $${winnings}**`)
            }
            if ((rolled.result >= 90) && !(rolled.result >= 97)) {
                var winnings = Math.floor(bet * 2.8);
                message.channel.send(`${white}${wild}${cyan}\n**You have won $${winnings}**`)
            }
            if (rolled.result >= 97) {
                var winnings = Math.floor(bet * 3);
                message.channel.send(`${white}${white}${white}\n**You have won the jackpot!! $${winnings}**`)
            }

        }
    }

}

module.exports.config = {
    command: "slots"
};