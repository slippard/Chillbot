module.exports.run = async (bot, message, args) => {

    let guildMember = message.member;
    let newRole = message.content.substr("+role ".length);    
    let devRole = message.guild.roles.find("name", "Devs");
    let realmRole = message.guild.roles.find("name", "RotMG");
    let nsfw = message.guild.roles.find("name", "NSFW");
    let LoL = message.guild.roles.find('name', "League");
    let pubg = message.guild.roles.find('name', "PUBG");
    let Weeb = message.guild.roles.find('name', 'Weeb');
    let Artist = message.guild.roles.find('name', 'Artist');
    let homeworkHelper = message.guild.roles.find('name', 'HomeworkHelper');
    let dj = message.guild.roles.find('name', 'DJ');
    let Javascript = message.guild.roles.find('name', 'Javascript');
    let Python = message.guild.roles.find('name', 'Python');

    if (!newRole) {
        message.channel.send(`Provide a role to add/remove. ex: +role DJ\n\n**Available Roles:** RotMG, League, Pubg, Weeb, Artist, Devs, Javascript, Python, Homeworkhelper, DJ, nsfw`);
    } else {
        switch (newRole) {

            case 'Javascript':
            case 'javascript':
            case 'js':
                if (guildMember.roles.some(r => ["Javascript"].includes(r.name))) {
                    message.channel.send('Removing Javascript Role.');
                    guildMember.removeRole(Javascript).catch(console.error);
                } else {
                    message.channel.send('You have been given Javascript role.');
                    guildMember.addRole(Javascript).catch(console.error);
                }
                break;
            case 'Python':
            case 'python':
            case 'py':
                if (guildMember.roles.some(r => ["Python"].includes(r.name))) {
                    message.channel.send('Removing Python Role.');
                    guildMember.removeRole(Python).catch(console.error);
                } else {
                    message.channel.send('You have been given Python role.');
                    guildMember.addRole(Python).catch(console.error);
                }
                break;

            case 'DJ':
            case 'music':
            case 'dj':
                if (guildMember.roles.some(r => ["DJ"].includes(r.name))) {
                    message.channel.send('Removing DJ Role.');
                    guildMember.removeRole(dj).catch(console.error);
                } else {
                    message.channel.send('You have been given DJ role.');
                    guildMember.addRole(dj).catch(console.error);
                }
                break;

            case 'HomeworkHelper':
            case 'homeworkhelper':
            case 'homework':
                if (guildMember.roles.some(r => ["HomeworkHelper"].includes(r.name))) {
                    message.channel.send('Removing HomeworkHelper Role.');
                    guildMember.removeRole(homeworkHelper).catch(console.error);
                } else {
                    message.channel.send('You have been given HomeworkHelper role.');
                    guildMember.addRole(homeworkHelper).catch(console.error);
                }
                break;

            case 'Artist':
            case 'artist':
            case 'art':
                if (guildMember.roles.some(r => ["Artist"].includes(r.name))) {
                    message.channel.send('Removing Artist Role.');
                    guildMember.removeRole(Artist).catch(console.error);
                } else {
                    message.channel.send('You have been given Artist role.');
                    guildMember.addRole(Artist).catch(console.error);
                }
                break;

            case 'Weeb':
            case 'weeb':
            case 'trash':
                if (guildMember.roles.some(r => ["Weeb"].includes(r.name))) {
                    message.channel.send('Removing Weeb Role.');
                    guildMember.removeRole(Weeb).catch(console.error);
                } else {
                    message.channel.send('You have been given Weeb role.');
                    guildMember.addRole(Weeb).catch(console.error);
                }
                break;

            case 'Devs':
            case 'devs':
                if (guildMember.roles.some(r => ["Devs", "Dev", "dev"].includes(r.name))) {
                    message.channel.send('Removing Dev Role.');
                    guildMember.removeRole(devRole).catch(console.error);
                } else {
                    message.channel.send('You have been given Dev role.');
                    guildMember.addRole(devRole).catch(console.error);
                }
                break;

            case 'PUBG':
            case 'pubg':
                if (guildMember.roles.some(r => ["PUBG"].includes(r.name))) {
                    message.channel.send('Removing PUBG Role.');
                    guildMember.removeRole(pubg).catch(console.error);
                } else {
                    message.channel.send('You have been given PUBG role.');
                    guildMember.addRole(pubg).catch(console.error);
                }
                break;

            case 'League':
            case 'league':
            case 'LoL':
            case 'LOL':
                if (guildMember.roles.some(r => ["League"].includes(r.name))) {
                    message.channel.send('Removing League Role.');
                    guildMember.removeRole(LoL).catch(console.error);
                } else {
                    message.channel.send('You have been given League role.');
                    guildMember.addRole(LoL).catch(console.error);
                }
                break;

            case 'RotMG':
            case 'rotmg':
            case 'ROTMG':
                if (guildMember.roles.some(r => ["rotmg", "RotMG", "ROTMG"].includes(r.name))) {
                    message.channel.send('Removing RotMG Role.');
                    guildMember.removeRole(realmRole).catch(console.error);
                } else {
                    message.channel.send('You have been given RotMG role.');
                    guildMember.addRole(realmRole).catch(console.error);
                }
                break;

            case 'nsfw':
            case 'NSFW':
                if (guildMember.roles.some(r => ["nsfw", "NSFW"].includes(r.name))) {
                    message.channel.send('Removing nsfw Role.');
                    guildMember.removeRole(nsfw).catch(console.error);
                } else {
                    message.channel.send('You have been given nsfw role.');
                    guildMember.addRole(nsfw).catch(console.error);
                }
                break;

            default:
                message.channel.send('Sorry, Something went wrong. Please try again.');
        }
    }
}


module.exports.config = {
    command: "role"
};