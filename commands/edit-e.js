const Discord = require("discord.js")
const chalk = require("chalk")

const client = new Discord.Client()

const log = console.log


module.exports = {
    name: "edit-e",
    description: "Edytowanie wiadomości",
    
    run(msg, args)
    {
	var pies = msg.member.hasPermission("ADMINISTRATOR");
      if (pies==true)
      {
        if(args[0].startsWith('<#'))
        var ch = args[0].slice(2, -1);
        else return(error)

        var id = args[1];
        var tak = args.slice(2);
        if(tak == '') return(error)
        msg.channel.send('`✅ Zedytowane!`')
        
        msg.guild.channels.cache.get(ch).messages.fetch({around: id, limit: 1})
        .then(msg => {
            const fetchedMsg = msg.first();

            const e = new Discord.MessageEmbed()

            .setColor('#bdbdbd')
            .setDescription(tak.join(' '))
            .setTitle('Ogłoszenie!')
            fetchedMsg.edit(e);
        });
        
      }
      else if(pies==false)
      {
       msg.channel.send('``Nie masz uprawnień do tej komendy``')
      }
    }
}