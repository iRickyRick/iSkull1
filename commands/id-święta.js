const Discord = require("discord.js")
const chalk = require("chalk")
const {e} = require("discord.js")

const client = new Discord.Client()

const log = console.log

module.exports = {
    name: "idś",
    description: "Wyświetla czas do świąt",
    
    run(msg, args)
    {
        const Dat = new Date();
        const Do = new Date(2021, 11, 24, 0);
        var czas = Do.getTime() - Dat.getTime();
       
        var s = czas / 1000
        var m = s/60
        var h = m/60
        var d = h/24

        var sT = Math.floor(s % 60)
        var mT = Math.floor(m % 60)
        var hT = Math.floor(h % 24)
        var dT = Math.floor(d)

        if(czas <= 0)
        {
            const e = new Discord.MessageEmbed()
            .setColor('#bdbdbd')
            .setTitle('Do świąt zostało:')
            .setThumbnail('https://cdn.discordapp.com/attachments/798288589859192884/889627915371835433/48B.gif')
            .addFields(
              { name: 'Wesołych świąt!', value: '\u3164' })
              msg.channel.send(e)
        }
        else
        {
          const e = new Discord.MessageEmbed()
          .setColor('#bdbdbd')
          .setTitle('Do świąt zostało:')
          .setThumbnail('https://cdn.discordapp.com/attachments/798288589859192884/889627915371835433/48B.gif')
          .addFields(
            { name: dT + ' dni, ' + hT + ' godzin, ' + mT + ' minut, ' + sT + ' sekund', value: '\u3164' })
            msg.channel.send(e)
        }
    }
}