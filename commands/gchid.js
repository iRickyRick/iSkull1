const Discord = require("discord.js")
const chalk = require("chalk")

const client = new Discord.Client()

const log = console.log


module.exports = {
    name: "gchid",
    description: "Daje ID oznaczonego kanału",
    
    run(msg, args)
    {
	var pies = msg.member.hasPermission("ADMINISTRATOR");
      if (pies==true)
      {
        var ch = args[0].slice(2, -1);
        msg.channel.send(ch);
//        msg.channel.send('<a:32:786210476988170270>');
      }
      else if(pies==false)
      {
       msg.channel.send('``Nie masz uprawnień do tej komendy``')
      }     
    }
}