const Discord = require("discord.js")
const chalk = require("chalk")
const {e} = require("discord.js")

const client = new Discord.Client()

const log = console.log

module.exports = {
    name: "custom",
    description: "Komendy",
    
    run(msg, args)
    {
      var pies = msg.member.hasPermission("ADMINISTRATOR");
      if (pies==true)
{
      const exampleEmbed = new Discord.MessageEmbed()
      .setColor('#bdbdbd')
      .setTitle('Custom słowa!')
      //.setThumbnail('https://media.discordapp.net/attachments/802570324587184148/869676284253462588/pepefrg-54.gif')
      .addFields(
        { name: 'Next:', value: 'mrozi' },
        { name: 'Next:', value: 'szef' },
        { name: 'Next:', value: 'co?' },
        { name: 'Next:', value: 'tidit' },
        { name: 'Next:', value: 'seba' },
        { name: 'Next:', value: 'serwus' },
        { name: 'Next:', value: 'spoczko foczko' },
        { name: 'Next:', value: 'ahoj' },
        )
        msg.channel.send(exampleEmbed)}
    }
    
}