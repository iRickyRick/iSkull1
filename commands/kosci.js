const Discord = require("discord.js")
const chalk = require("chalk")

const client = new Discord.Client()

const log = console.log


module.exports = {
    name: "kości",
    description: "rzut kośćmi",
    
    run(msg, args)
    {
      let min = Math.ceil(0);
      let max = Math.floor(35);
      var UwU = Math.floor(Math.random() * (max - min + 1))+min;
      var pilka_plazowa;

      switch(UwU)
      {
        case 0:
          morsowanie = ('Wynik:')
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/877180925463642122/877181105462214686/1_1.png'
        break;
        case 1:
          morsowanie = ('Wynik:')
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/877180925463642122/877181323868012574/1_2.png'
        case 2:
          morsowanie = ('Wynik:')
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/877180925463642122/877181113540419624/1_3.png'
        break;
        case 3:
          morsowanie = ('Wynik:')
          pilka_plazowa ='https://cdn.discordapp.com/attachments/877180925463642122/877181115775987762/1_4.png'
        break;
        case 4:
          morsowanie = ('Wynik:')
          pilka_plazowa ='https://cdn.discordapp.com/attachments/877180925463642122/877180983244378143/1_5.png'
        break;
        case 5:
          morsowanie = ('Wynik:')
          pilka_plazowa ='https://cdn.discordapp.com/attachments/877180925463642122/877180985807097896/1_6.png'
        break;
        case 6:
          morsowanie = ('Wynik:')
          pilka_plazowa ='https://cdn.discordapp.com/attachments/877180925463642122/877180989435179019/2_1.png'
        break;
        case 7:
          morsowanie = ('Wynik:')
          pilka_plazowa ='https://cdn.discordapp.com/attachments/877180925463642122/877180988428533760/2_2.png'
        break;
        case 8:
          morsowanie = ('Wynik:')
          pilka_plazowa ='https://cdn.discordapp.com/attachments/877180925463642122/877180991129669733/2_3.png'
        break;
        case 9:
          morsowanie =  ('Wynik:')
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/877180925463642122/877180992530554910/2_4.png'
        break;
        case 10:
          morsowanie = ('Wynik:')
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/877180925463642122/877180993667231794/2_5.png'
        break;
        case 11:
          morsowanie = ('Wynik:')
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/877180925463642122/877180995206520943/2_6.png'
        break;
        case 12:
          morsowanie = ('Wynik:')
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/877180925463642122/877180996343169104/3_1.png'
        break;
        case 13:
          morsowanie = ('Wynik:')
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/877180925463642122/877180997907660880/3_2.png'
        break;
        case 14:
          morsowanie = ('Wynik:')
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/877180925463642122/877182119485522000/3_3.png'
        break;
        case 15:
          morsowanie = ('Wynik:')
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/877180925463642122/877182121330999336/3_4.png'
        break;
        case 16:
          morsowanie = ('Wynik:')
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/877180925463642122/877182123356872754/3_5.png'
        break;
        case 17:
          morsowanie = ('Wynik:')
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/877180925463642122/877181028047933510/3_6.png'
        break;
        case 18:
          morsowanie = ('Wynik:')
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/877180925463642122/877181034603618334/4_1.png'
        break;
        case 19:
          morsowanie = ('Wynik:')
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/877180925463642122/877181037111808010/4_2.png'
        break;
        case 20:
          morsowanie = ('Wynik:')
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/877180925463642122/877181038730813460/4_3.png'
        break;
        case 21:
          morsowanie = ('Wynik:')
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/877180925463642122/877181040765067334/4_4.png'
        break;
        case 22:
          morsowanie = ('Wynik:')
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/877180925463642122/877181042652508160/4_5.png'
        break;
        case 23:
          morsowanie = ('Wynik:')
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/877180925463642122/877181044187619388/4_6.png'
        break;
        case 24:
          morsowanie = ('Wynik:')
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/877180925463642122/877181045932441630/5_1.png'
        break;
        case 25:
          morsowanie = ('Wynik:')
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/877180925463642122/877181047777951744/5_2.png'
        break;
        case 26:
          morsowanie = ('Wynik:')
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/877180925463642122/877181049887662130/5_3.png'
        break;
        case 27:
          morsowanie = ('Wynik:')
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/877180925463642122/877181074764095599/5_4.png'
        break;
        case 28:
          morsowanie = ('Wynik:')
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/877180925463642122/877181071362523136/5_5.png'
        break;
        case 29:
          morsowanie = ('Wynik:')
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/877180925463642122/877181083572113419/5_6.png'
        break;
        case 30:
          morsowanie = ('Wynik:')
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/877180925463642122/877181085824475176/6_1.png'
        break;
        case 31:
          morsowanie = ('Wynik:')
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/877180925463642122/877181088584302633/6_2.png'
        break;
        case 32:
          morsowanie = ('Wynik:')
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/877180925463642122/877181091772002424/6_3.png'
        break;
        case 33:
          morsowanie = ('Wynik:')
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/877180925463642122/877181094074679336/6_4.png'
        break;
        case 34:
          morsowanie = ('Wynik:')
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/877180925463642122/877181096306040842/6_5.png'
        break;
        case 35:
          morsowanie = ('Wynik:')
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/877180925463642122/877181098428358686/6_6.png'
        break;

      }

        const exampleEmbed = new Discord.MessageEmbed()
        .setColor('#bdbdbd')
        .setImage(pilka_plazowa)
        .setTitle(morsowanie)

        msg.channel.send(exampleEmbed)
    }
}