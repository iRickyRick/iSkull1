const Discord = require("discord.js")
const chalk = require("chalk")

const client = new Discord.Client()

const log = console.log

module.exports = {
    name: "kpn",
    description: "Gra w kamień papier nożyce",
    
    run(msg, args)
    {
        let min = Math.ceil(1);
        let max = Math.floor(3);
        var UwU = Math.floor(Math.random() * (max - min + 1))+min;
          var t = args[0];
      
          if (UwU == 1 && t === 'kamień')
             {
              const exampleEmbed = new Discord.MessageEmbed()
              .setColor('#bdbdbd')
              .setThumbnail('https://cdn.discordapp.com/attachments/869600497164754979/869711314547777556/istockphoto-1056840214-612x612.png')
              .setTitle('\u3164\u3164\u3164\u3164\u3164\u3164\u3164\u3164Wynik!\u3164\u3164\u3164\u3164')
              .addFields(
                { name: 'Ty wybrałeś:', value: t },
                { name: 'Bot wybrał:', value: 'kamień'},
                { name: 'Wynik:', value: 'Remis' }
              )
              msg.channel.send(exampleEmbed)
              .then(function (msg){
                msg.react('<:kamien:869674671078010880>')
                msg.react('<:vs:869704026038616164>')
                msg.react('<:kamien2:869704354461012089>')
           })
      
             }
          if (UwU == 1 && t === 'nożyce')
             {
              const exampleEmbed = new Discord.MessageEmbed()
              .setColor('#bdbdbd')
              .setThumbnail('https://cdn.discordapp.com/attachments/869600497164754979/869711314547777556/istockphoto-1056840214-612x612.png')
              .setTitle('\u3164\u3164\u3164\u3164\u3164\u3164\u3164\u3164Wynik!\u3164\u3164\u3164\u3164')
              .addFields(
                { name: 'Ty wybrałeś:', value: t },
                { name: 'Bot wybrał:', value: 'kamień'},
                { name: 'Wynik:', value: 'Przegrałeś!' }
              )
              msg.channel.send(exampleEmbed)
              .then(function (msg){
                msg.react('<:nozyce:869674671182848011>')
                msg.react('<:vs:869704026038616164>')
                msg.react('<:kamien:869674671078010880>')
             })
            }
         if(UwU == 1 && t === 'papier')
         {
          const exampleEmbed = new Discord.MessageEmbed()
          .setColor('#bdbdbd')
          .setThumbnail('https://cdn.discordapp.com/attachments/869600497164754979/869711314547777556/istockphoto-1056840214-612x612.png')
          .setTitle('\u3164\u3164\u3164\u3164\u3164\u3164\u3164\u3164Wynik!\u3164\u3164\u3164\u3164')
          .addFields(
            { name: 'Ty wybrałeś:', value: t },
            { name: 'Bot wybrał:', value: 'kamień'},
            { name: 'Wynik:', value: 'Wygrałeś!' }
          )
          msg.channel.send(exampleEmbed)
          .then(function (msg){
            msg.react('<:papier:869674671161897070>')
            msg.react('<:vs:869704026038616164>')
            msg.react('<:kamien2:869704354461012089>')
         })
        }
             if (UwU == 2 && t === 'kamień')
             {
              const exampleEmbed = new Discord.MessageEmbed()
              .setColor('#bdbdbd')
              .setThumbnail('https://cdn.discordapp.com/attachments/869600497164754979/869711314547777556/istockphoto-1056840214-612x612.png')
              .setTitle('\u3164\u3164\u3164\u3164\u3164\u3164\u3164\u3164Wynik!\u3164\u3164\u3164\u3164')
              .addFields(
                { name: 'Ty wybrałeś:', value: t },
                { name: 'Bot wybrał:', value: 'nożyce'},
                { name: 'Wynik:', value: 'Wygrałeś!' }
              )
              msg.channel.send(exampleEmbed)
              .then(function (msg){
                msg.react('<:kamien2:869704354461012089>')
                msg.react('<:vs:869704026038616164>')
                msg.react('<:nozyce2:869704392624971876>')
             })
             }
          if (UwU == 2 && t === 'nożyce')
             {
              const exampleEmbed = new Discord.MessageEmbed()
              .setColor('#bdbdbd')
              .setThumbnail('https://cdn.discordapp.com/attachments/869600497164754979/869711314547777556/istockphoto-1056840214-612x612.png')
              .setTitle('\u3164\u3164\u3164\u3164\u3164\u3164\u3164\u3164Wynik!\u3164\u3164\u3164\u3164')
              .addFields(
                { name: 'Ty wybrałeś:', value: t },
                { name: 'Bot wybrał:', value: 'nożyce'},
                { name: 'Wynik:', value: 'Remis' }
              )
              msg.channel.send(exampleEmbed)
              .then(function (msg){
                msg.react('<:nozyce:869674671182848011>')
                msg.react('<:vs:869704026038616164>')
                msg.react('<:nozyce2:869704392624971876>')
             })
             }
         if (UwU == 2 && t === 'papier')
             {
              const exampleEmbed = new Discord.MessageEmbed()
              .setColor('#bdbdbd')
              .setThumbnail('https://cdn.discordapp.com/attachments/869600497164754979/869711314547777556/istockphoto-1056840214-612x612.png')
              .setTitle('\u3164\u3164\u3164\u3164\u3164\u3164\u3164\u3164Wynik!\u3164\u3164\u3164\u3164')
              .addFields(
                { name: 'Ty wybrałeś:', value: t },
                { name: 'Bot wybrał:', value: 'nożyce'},
                { name: 'Wynik:', value: 'Przegrałeś!' }
              )
              msg.channel.send(exampleEmbed)
              .then(function (msg){
                msg.react('<:papier:869674671161897070>')
                msg.react('<:vs:869704026038616164>')
                msg.react('<:nozyce2:869704392624971876>')
             })
             }
             if (UwU == 3 && t === 'kamień')
             {
              const exampleEmbed = new Discord.MessageEmbed()
              .setColor('#bdbdbd')
              .setThumbnail('https://cdn.discordapp.com/attachments/869600497164754979/869711314547777556/istockphoto-1056840214-612x612.png')
              .setTitle('\u3164\u3164\u3164\u3164\u3164\u3164\u3164\u3164Wynik!\u3164\u3164\u3164\u3164')
              .addFields(
                { name: 'Ty wybrałeś:', value: t },
                { name: 'Bot wybrał:', value: 'papier'},
                { name: 'Wynik:', value: 'Przegrałeś!' }
              )
              msg.channel.send(exampleEmbed)
              .then(function (msg){
                msg.react('<:kamien2:869704354461012089>')
                msg.react('<:vs:869704026038616164>')
                msg.react('<:papier:869674671161897070>')
             })
             }
          if (UwU == 3 && t === 'nożyce')
             {
              const exampleEmbed = new Discord.MessageEmbed()
              .setColor('#bdbdbd')
              .setThumbnail('https://cdn.discordapp.com/attachments/869600497164754979/869711314547777556/istockphoto-1056840214-612x612.png')
              .setTitle('\u3164\u3164\u3164\u3164\u3164\u3164\u3164\u3164Wynik!\u3164\u3164\u3164\u3164')
              .addFields(
                { name: 'Ty wybrałeś:', value: t },
                { name: 'Bot wybrał:', value: 'papier'},
                { name: 'Wynik:', value: 'Wygrałeś!' }
              )
              msg.channel.send(exampleEmbed)
              .then(function (msg){
                msg.react('<:nozyce:869674671182848011>')
                msg.react('<:vs:869704026038616164>')
                msg.react('<:papier:869674671161897070>')
             })
             }
         if (UwU == 3 && t === 'papier')
             {
              const exampleEmbed = new Discord.MessageEmbed()
              .setColor('#bdbdbd')
              .setThumbnail('https://cdn.discordapp.com/attachments/869600497164754979/869711314547777556/istockphoto-1056840214-612x612.png')
              .setTitle('\u3164\u3164\u3164\u3164\u3164\u3164\u3164\u3164Wynik!\u3164\u3164\u3164\u3164')
              .addFields(
                { name: 'Ty wybrałeś:', value: t },
                { name: 'Bot wybrał:', value: 'papier'},
                { name: 'Wynik:', value: 'Remis' }
              )
              msg.channel.send(exampleEmbed)
              .then(function (msg){
                msg.react('<:papier2:869704401814683678>')
                msg.react('<:vs:869704026038616164>')
                msg.react('<:papier:869674671161897070>')
             })
             }
          else if(t != 'kamień' && t != 'nożyce' && t != 'papier')
          {
            msg.channel.send('``Błędny argument komendy``')
          }
    }
}