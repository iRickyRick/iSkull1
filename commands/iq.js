const Discord = require("discord.js")
const chalk = require("chalk")

const client = new Discord.Client()

const log = console.log


module.exports = {
    name: "iq",
    description: "Wyświetla ilość iq",
    
    run(msg, args)
    {
     let min = Math.ceil(-100);
          let max = Math.floor(250);
          var UwU = Math.floor(Math.random() * (max - min + 1))+min;
          if(args == '')
          {
                const exampleEmbed = new Discord.MessageEmbed()
                .setColor('#bdbdbd')
                .setTitle('Wynik')
                .setThumbnail('https://media.discordapp.net/attachments/869600497164754979/869692940614774866/iq-512.png')
                .addFields(
                  { name: `${msg.author.tag}`+', Twoje IQ wynosi: ' + UwU, value: '\u3164'})
                msg.channel.send(exampleEmbed)
          }
          else
          {
            let person = msg.guild.member(msg.mentions.users.first() || msg.guild.members.fetch(args[0]))
            const exampleEmbed = new Discord.MessageEmbed()
            .setColor('#bdbdbd')
            .setTitle('Wynik')
            .setThumbnail('https://media.discordapp.net/attachments/869600497164754979/869692940614774866/iq-512.png')
            .addFields(
              { name: 'IQ ' + `${person.user.tag}` + ' wynosi: ' + UwU, value: '\u3164'})
            msg.channel.send(exampleEmbed)
          }
    }
}