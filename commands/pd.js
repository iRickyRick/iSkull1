const Discord = require("discord.js")
const chalk = require("chalk")
const {e} = require("discord.js")

const client = new Discord.Client()

const log = console.log

module.exports = {
    name: "pd",
    description: "Pytanie dzienne",
    
    run(msg, args)
    {
      var pies = msg.member.hasPermission("ADMINISTRATOR");
      if (pies==true)
      {
        if(args[0].startsWith('<#'))
          var ch = args[0].slice(2, -1);
        else return(error)
        
          var m = args.slice(1);
        
        if(m == '') return(error)
          
          msg.channel.send('`✅ Wysłałem!`')

          const e = new Discord.MessageEmbed()
          .setColor('#bdbdbd')
          .setTitle('Pytanie dnia!')
          .setDescription('**╔════════════════╗\n᲼Dzisiejsze pytanie dnia:\n᲼' + m.join(' ') + '\n╚════════════════╝**')

          msg.guild.channels.cache.get(ch).send(e);
          //msg.guild.channels.cache.get(ch).send('<@&869684168261529700>');
      
        }
      else if(pies==false)
      {
       msg.channel.send('``Nie masz uprawnień do tej komendy``')
      }
    }
}