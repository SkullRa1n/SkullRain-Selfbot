const Skull = require("discord.js-selfbot")
const Rain = new Skull.Client()
const { prefix, token, AccountID, text } = require("./infos.json");
const fs = require('fs');

Rain.on("ready", () => {
    console.log(`Ligado a: ${Rain.user.tag}`)
})

Rain.commands = new Skull.Collection()
Rain.aliases = new Skull.Collection()

fs.readdir('./Commads/', (err, files) => {
    if (err) console.log(err)
    let file = files.filter(f => f.split(".").pop() === "js")
    if (!fs.existsSync("./Commads/help.js")) {
        console.log('Verifique o help.js')
        process.exit()
    }
    if (files.length <= 0) return process.stdout.write("Comandos não encontrados!\n")
    files.forEach((f, i) => {
        let props = require(`./Commads/${f}`)
        process.stdout.write(`={Comando: ${f} Carregado!}=\n`)
        Rain.commands.set(props.confs.id, props)
        if (props.confs.etc)
            props.confs.etc.forEach(alias => Rain.commands.set(alias, props))
    })
})

Rain.on('message', async msg => {
    if (msg.author.id !== AccountID) return;
    if (!msg.content.startsWith(prefix)) return;
    let messageArray = msg.content.split(" ")
    let cmd = messageArray[0]
    let args = messageArray.slice(1)

    let cmdFile = Rain.commands.get(cmd.slice(prefix.length))

    if (cmdFile) {
        console.log(cmdFile)
        msg.delete().catch(O_o => { });
        if (cmdFile) cmdFile.execute(msg, args, text)
        console.log('Comando executado')
    }
})

Rain.login(token)