const Discord = require("discord.js")
const chalk = require("chalk")
const {e} = require("discord.js")

const client = new Discord.Client()

const log = console.log

module.exports = {
    name: "help",
    description: "Komendy",
    
    run(msg, args)
    {
      const exampleEmbed = new Discord.MessageEmbed()
      .setColor('#bdbdbd')
      .setTitle('Komendy Pierdolonej Przystani Koksów!')
      .setThumbnail('https://cdn.discordapp.com/attachments/798288589859192884/889543514235490334/xvxio4mcj9m51.png')
      .setFooter('W razie błędów, koniecznie zgłoś to administracji -> #pomoc', 'https://cdn.discordapp.com/attachments/798288589859192884/889614992394055700/piracka_przystan.png')
      .addFields(
        { name: 'Gra w kamień/papier/nożyce z botem.', value: '`[!kpn <kamień|papier|nożyce>]`' },
        { name: 'Ciastko z wróżbą itp.', value: '`[!ciastko]`' },
        { name: 'Długość szbli( ͡° ͜ʖ ͡°)', value: '`[!szabla]`' },
        { name: 'Ilość IQ.', value: '`[!iq <@osoba>]`' },
        { name: 'Losowe zwierzę.', value: '`[!animal]`' },
        { name: 'Triggered.', value: '`[!triggered]`' },
        { name: 'Rzut monetą (CoinFlip).', value: '`[!cf]`' },
        { name: 'Champion-Roll (Losowanie championa z Lola).', value: '`[!cr]`' },
        { name: 'Generuje zaproszenie.', value: '`[!zapro]`' },
        { name: 'Gra w kości..', value: '`[!kości]`' },
        )
        msg.channel.send(exampleEmbed)
    }
}