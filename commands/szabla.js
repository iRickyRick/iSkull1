const Discord = require("discord.js")
const chalk = require("chalk")

const client = new Discord.Client()

const log = console.log


module.exports = {
    name: "szabla",
    description: "Wyświetla długość kijka",
    
    run(msg, args)
    {
	  let min = Math.ceil(0);
          let max = Math.floor(40);
          var UwU = Math.floor(Math.random() * (max - min + 1))+min;

          if(UwU == 0 && args == '')
          {
            const exampleEmbed = new Discord.MessageEmbed()
            .setColor('#bdbdbd')
            .setTitle('Wynik')
            .setThumbnail('https://cdn.discordapp.com/attachments/798288589859192884/876908319820877915/123991.png')
            .addFields(
              { name: 'Ojoj, ' + `${msg.author.tag}` + ' nie ma czego mierzyć', value: '\u3164'})
              msg.channel.send(exampleEmbed)
          }
          if(UwU == 0 && args != '')
          {
            let person = msg.guild.member(msg.mentions.users.first() || msg.guild.members.fetch(args[0]))
            const exampleEmbed = new Discord.MessageEmbed()
            .setColor('#bdbdbd')
            .setTitle('Wynik')
            .setThumbnail('https://cdn.discordapp.com/attachments/798288589859192884/876908319820877915/123991.png')
            .addFields(
              { name: 'Ojoj,' + `${person.user.tag}` + 'nie ma czego mierzyć', value: '\u3164'})
              msg.channel.send(exampleEmbed)
          }
          else
          {
           
              if(args == '' && UwU != 0)
              {
                const exampleEmbed = new Discord.MessageEmbed()
                .setColor('#bdbdbd')
                .setTitle('Wynik')
                .setThumbnail('https://cdn.discordapp.com/attachments/798288589859192884/876908319820877915/123991.png')
                .addFields(
                  { name: `${msg.author.tag}`+', długość Twojej szabli to: ' + UwU + 'cm', value: '\u3164'})
                msg.channel.send(exampleEmbed)
            }
            else if (args != '' && UwU != 0)
            {
                
              let person = msg.guild.member(msg.mentions.users.first() || msg.guild.members.fetch(args[0]))
                const exampleEmbed = new Discord.MessageEmbed()
                .setColor('#bdbdbd')
                .setTitle('Wynik')
                .setThumbnail('https://cdn.discordapp.com/attachments/798288589859192884/876908319820877915/123991.png')
                .addFields({ name: 'Długość szabli ' + `${person.user.tag}` +' to: ' + UwU + 'cm', value: '\u3164'})
                msg.channel.send(exampleEmbed)
            }
          }
    } 
}