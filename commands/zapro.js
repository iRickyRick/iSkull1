const Discord = require("discord.js")
const chalk = require("chalk")

const client = new Discord.Client()

const log = console.log


module.exports = {
    name: "zapro",
    description: "wysyła zapke na serwer",
    
    run(msg, args)
    {
        msg.channel.send('https://discord.gg/5DHPCckq7w')
    }
}