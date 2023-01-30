const Discord = require("discord.js")
const chalk = require("chalk")

const client = new Discord.Client()

const log = console.log


module.exports = {
    name: "ank",
    description: "Ankiety",
    
    run(msg, args)
    {
      var ch = args[0].slice(2, -1);
      var m = args.slice(1);
      const e = new Discord.MessageEmbed()
      .setColor('#bdbdbd')
      .setTitle('Ankieta')
      .addFields(
        { name: 'Pytanie:\n' + m.join(' '), value: '\u3164' }
      )
      msg.guild.channels.cache.get(ch).send(e)
      .then(function (msg){
         msg.react('<:yes:869691639789137970>')
         msg.react('<:no:869691639625576489>')
    })
    }
}