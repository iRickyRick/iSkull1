const Discord = require("discord.js")

const chalk = require("chalk")
const {e} = require("discord.js")

const client = new Discord.Client()

const log = console.log

module.exports = {
    name: "help-a",
    description: "Komendy administracji",
    
    run(msg, args)
    {
     var pies = msg.member.hasPermission("ADMINISTRATOR");
     if (pies==true)
     {
      const exampleEmbed = new Discord.MessageEmbed()
      .setColor('#bdbdbd')
      .setTitle('Komendy Administracyjne!')
      .setThumbnail('https://cdn.discordapp.com/attachments/798288589859192884/889543514235490334/xvxio4mcj9m51.png')
      .setFooter('W razie błędów, zgłoś to do KΣΓVΙW$#2489', 'https://cdn.discordapp.com/attachments/798288589859192884/889614992394055700/piracka_przystan.png')
      .setImage('https://cdn.discordapp.com/attachments/798288589859192884/889621274157015063/unknown.png')
      .addFields(
        { name: 'Wysyła wiadomość na wybrany kanał. (oznaczenie w embed = NIE PINGUJE ŻADNEJ OSOBY. Jesli przy embedzie chcesz mieć ping np. @everyone musisz wysłać go przez [!oglo-n] po embedzie)', value: '`[!oglo-e <#kanał> <treść>]`' },
        { name: 'Wysyła wiadomość na wybrany kanał. (zwykła wiadomość)', value: '`[!oglo-n <#kanał> <treść>]`' },
        //{ name: 'Wysyła pytanie na pytanie dnia.', value: '`[!pd <#kanał> <pytanie>]`' },
        { name: 'Wysyła ankiete', value: '`[!ank <#kanał> <treść ankiety>]`' },
        { name: 'Edytuje normalną wiadomość', value: '`[!edit-n <#kanał z wiadomością> <ID wiadomości> <Nowa treść>]`' },
        { name: 'Edytuje wiadomość w embed (jeśli w embed jest zdjęcie, po edycji zostanie ono zamienione bezpowrotnie w link, w takim przypadku należy ponownie wysłać swoje ogłoszenie)', value: '`[!edit-e <#kanał z wiadomością> <ID wiadomości> <Nowa treść>]`' },
        { name: 'Wysyła ID oznaczonego kanału [GET CHANNEL ID]', value: '`[!gchid <#kanał>]`' },
        { name: '*WAŻNE!!!*', value: '*WYMAGANE JEST WŁĄCZENIE TRYBU DEWELOPERA - ZNAJDZIESZ GO W USTAWIENIACH: ZAAWANSOWANE. DZIĘKI TEJ OPCJI JESTEŚ W STANIE UZYSKAĆ NP. ID WIADOMOŚCI LUB KANAŁU*'},
      )
    msg.channel.send(exampleEmbed);
  
  
     }
     else if(pies==false)
     {
       msg.channel.send('``Nie masz uprawnień do tej komendy``')
     }
    }
}