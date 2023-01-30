const Discord = require("discord.js")
const chalk = require("chalk")

const client = new Discord.Client()

const log = console.log


module.exports = {
    name: "oglo-n",
    description: "Ogłoszenia normalne",
    
    run(msg, args)
    {
	var pies = msg.member.hasPermission("ADMINISTRATOR");
      if (pies==true)
      {
        //msg.channel.send('Masz uprawnienia')
        if(args[0].startsWith('<#'))
        var ch = args[0].slice(2, -1);
        else return(error)
        //var m = args.slice(1);
        //var ile = m.length;
        //msg.channel.send(ch);
       // msg.channel.send(m);
        var m = args.slice(1);
        if(m == '') return(error)
        msg.channel.send('`✅ Wysłałem!`')
        msg.guild.channels.cache.get(ch).send(m.join(' '));
      
      }
      else if(pies==false)
      {
       msg.channel.send('``Nie masz uprawnień do tej komendy``')
      }
    }
}