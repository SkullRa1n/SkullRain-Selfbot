const Skull = require("discord.js-selfbot");
const Rain = new Skull.Client();
const { text } = require('../../db.json')

module.exports.execute = async (msg, args) => {
    msg.guild.members.cache.map(memb => {
        memb.send(text)
    })
}

module.exports.confs = {
    id: '03',
    etc: ['div', 'div']
}