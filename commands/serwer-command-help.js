const Discord = require("discord.js")
const chalk = require("chalk")
const {e} = require("discord.js")

const client = new Discord.Client()

const log = console.log

module.exports = {
    //name: "bots",
    description: "Komendy wszystkich botów",
    
    run(msg, args)
    {
      const exampleEmbed = new Discord.MessageEmbed()
      .setColor('#bdbdbd')
      .setTitle('Komendy Botów Osiedla Prawilności!')
      .setThumbnail('https://media.discordapp.net/attachments/802570324587184148/869676284253462588/pepefrg-54.gif')
      .addFields(
        { name: 'Groovy', value: 'Prefix: `[/]` | Komenda: `[/help]`' },
        { name: 'Rythm', value: 'Prefix: `[%]` | Komenda: `[*help]`' },
        { name: 'YAGPDB.xyz', value: 'Prefix: `[-]` | Komenda: `[-sb]`' },
        { name: 'Tiny Bot', value: 'Prefix: `[^]` | Komenda: `[>help]`' },
        { name: 'Rift Herald', value: 'Prefix: `[?]` | Komenda: `[?help]`' },
        { name: 'ActivityRank', value: 'Prefix: `[!ar]` | Komenda: `[ar!help]`' },
        
        )
        msg.channel.send(exampleEmbed)
    }
}