const Skull = require("discord.js-selfbot");
const Hiro = new Skull.Client();

module.exports.execute = async (msg, args) => {
    const embed = new Skull.MessageEmbed()
        .setTitle(`|Skull Rain-SelfBot|`)
        .setThumbnail("https://c.tenor.com/-aMTLP5ZUQcAAAAC/rain-pouring.gif")
        .setColor('#6a329f')
        .setDescription('Skull Rain SelfBot 1.0V\n\nGithub Repository:\nhttps://github.com/SkullRa1n\nDiscord: https://discord.gg/BmXAswdGzH\nComandos:\nsr.div\nsr.nuke\nsr.help')
    msg.channel.send(embed)
}

module.exports.confs = {
    id: '01',
    etc: ['help', 'Help']
}