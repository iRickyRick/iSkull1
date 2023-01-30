const Discord = require("discord.js")
const chalk = require("chalk")

const client = new Discord.Client()

const { MessageAttachment } = require('discord.js');

const log = console.log


module.exports = {
    name: "oglo-e",
    description: "Ogłoszenia embed",
    
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
          if(args[1].startsWith('http') || args[1].startsWith('https')) 
          {  
            var Obraz = args[1];
            e.setImage(Obraz);
            if(m == '') return(error);
            var m = args.slice(2);
            
          }
          else
          {
            if(m == '') return(error);
            var m = args.slice(1);        
          }
//          e.setTitle('Ogłoszenie!')
          e.setDescription(m.join(' '));
          e.setTimestamp()
          e.setFooter('Administracja Pirackiej Przystani', 'https://cdn.discordapp.com/attachments/798288589859192884/889614992394055700/piracka_przystan.png')
          msg.guild.channels.cache.get(ch).send(e);
        
          
        }
        
      else if(pies==false)
      {
       msg.channel.send('``Nie posiadasz uprawnień do tej komendy``')
      }
      
    }
}