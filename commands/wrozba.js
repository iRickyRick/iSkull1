const Discord = require("discord.js")
const chalk = require("chalk")

const client = new Discord.Client()

const log = console.log


module.exports = {
    name: "ciastko",
    description: "Wyświetla ciacha z wróżbą",
    
    run(msg, args)
    {
      let min = Math.ceil(0);
      let max = Math.floor(72);
      var UwU = Math.floor(Math.random() * (max - min + 1))+min;
      var pilka_plazowa;

      switch(UwU)
      {
        case 0:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/758071395900063775/788077187693412362/73.png'
        break;
        case 1:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/758071395900063775/788077179585167390/72.png'
        break;
        case 2:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/758071395900063775/788077168381919263/71.png'
        break;
        case 3:
          pilka_plazowa ='https://cdn.discordapp.com/attachments/758071395900063775/788077154612150312/70.png'
        break;
        case 4:
          pilka_plazowa ='https://cdn.discordapp.com/attachments/758071395900063775/788077145284280390/69.png'
        break;
        case 5:
          pilka_plazowa ='https://cdn.discordapp.com/attachments/758071395900063775/788077135251243008/68.png'
        break;
        case 6:
          pilka_plazowa ='https://cdn.discordapp.com/attachments/758071395900063775/788077125026447390/67.png'
        break;
        case 7:
          pilka_plazowa ='https://cdn.discordapp.com/attachments/758071395900063775/788077114950942720/66.png'
        break;
        case 8:
          pilka_plazowa ='https://cdn.discordapp.com/attachments/758071395900063775/788077104460726362/65.png'
        break;
        case 9:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/758071395900063775/788077092444176437/64.png'
        break;
        case 10:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/758071395900063775/788077085347938334/63.png'
        break;
        case 11:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/758071395900063775/788077074513395742/62.png'
        break;
        case 12:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/758071395900063775/788077065919922176/61.png'
        break;
        case 13:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/758071395900063775/788077056717881386/60.png'
        break;
        case 14:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/758071395900063775/788077046827843594/59.png'
        break;
        case 15:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/758071395900063775/788077035544903710/58.png'
        break;
        case 16:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/758071395900063775/788077027550298122/57.png'
        break;
        case 17:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/758071395900063775/788077017681625088/56.png'
        break;
        case 18:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/758071395900063775/788077002498375700/55.png'
        break;
        case 19:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/758071395900063775/788076997887787048/54.png'
        break;
        case 20:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/758071395900063775/788076985817497630/53.png'
        break;
        case 21:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/758071395900063775/788076971593695292/52.png'
        break;
        case 22:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/758071395900063775/788076961162723338/51.png'
        break;
        case 23:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/758071395900063775/788076947682754621/50.png'
        break;
        case 24:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/758071395900063775/788076931487629363/49.png'
        break;
        case 25:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/758071395900063775/788076922240237648/48.png'
        break;
        case 26:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/758071395900063775/788076911368077372/47.png'
        break;
        case 27:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/758071395900063775/788076901818302514/46.png'
        break;
        case 28:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/758071395900063775/788076891860107284/45.png'
        break;
        case 29:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/758071395900063775/788076882113462342/44.png'
        break;
        case 30:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/758071395900063775/788076872776155136/43.png'
        break;
        case 31:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/758071395900063775/788076856095014942/42.png'
        break;
        case 32:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/758071395900063775/788076845681344542/41.png'
        break;
        case 33:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/758071395900063775/788076831260934194/40.png'
        break;
        case 34:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/758071395900063775/788076819156172881/39.png'
        break;
        case 35:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/758071395900063775/788076808993636402/38.png'
        break;
        case 36:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/758071395900063775/788076797337272351/37.png'
        break;
        case 37:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/758071395900063775/788076786441257040/36.png'
        break;
        case 38:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/758071395900063775/788076776235991110/35.png'
        break;
        case 39:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/758071395900063775/788076763589902386/34.png'
        break;
        case 40:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/758071395900063775/788076743969865834/33.png'
        break;
        case 41:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/758071395900063775/788076734930747412/32.png'
        break;
        case 42:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/758071395900063775/788076724109443102/31.png'
        break;
        case 43:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/758071395900063775/788076714315874304/30.png'
        break;
        case 44:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/758071395900063775/788076703552634940/29.png'
        break;
        case 45:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/758071395900063775/788076684355305503/28.png'
        break;
        case 46:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/758071395900063775/788076671177457744/27.png'
        break;
        case 47:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/758071395900063775/788076660321943572/26.png'
        break;
        case 48:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/758071395900063775/788076651204182036/25.png'
        break;
        case 49:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/758071395900063775/788076639652544582/24.png'
        break;
        case 50:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/758071395900063775/788076629141225502/23.png'
        break;
        case 51:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/758071395900063775/788076617812541460/22.png'
        break;
        case 52:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/758071395900063775/788076546358771772/20.png'
        break;
        case 53:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/758071395900063775/788076558489223209/19.png'
        break;
        case 54:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/758071395900063775/788076569884622898/18.png'
        break;
        case 55:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/758071395900063775/788076579292971098/17.png'
        break;


          case 56:
            pilka_plazowa = 'https://cdn.discordapp.com/attachments/758071395900063775/788076593876566036/16.png'
          break;
          case 57:
            pilka_plazowa = 'https://cdn.discordapp.com/attachments/758071395900063775/788076604580560946/15.png'
          break;
          case 58:
            pilka_plazowa = 'https://cdn.discordapp.com/attachments/758071395900063775/788076533956870174/21.png'
          break;
          case 59:
            pilka_plazowa ='https://cdn.discordapp.com/attachments/758071395900063775/788076520383840286/14.png'
          break;
          case 60:
            pilka_plazowa ='https://cdn.discordapp.com/attachments/758071395900063775/788076507784413194/13.png'
          break;
          case 61:
            pilka_plazowa ='https://cdn.discordapp.com/attachments/758071395900063775/788076487328006144/12.png'
          break;
          case 62:
            pilka_plazowa ='https://cdn.discordapp.com/attachments/758071395900063775/788076472862244874/11.png'
          break;
          case 63:
            pilka_plazowa ='https://cdn.discordapp.com/attachments/758071395900063775/788076461940146198/10.png'
          break;
          case 64:
            pilka_plazowa ='https://cdn.discordapp.com/attachments/758071395900063775/788076446463557642/9.png'
          break;
          case 65:
            pilka_plazowa = 'https://cdn.discordapp.com/attachments/758071395900063775/788076439663673344/8.png'
          break;
          case 66:
            pilka_plazowa = 'https://cdn.discordapp.com/attachments/758071395900063775/788076428226854963/7.png'
          break;
          case 67:
            pilka_plazowa = 'https://cdn.discordapp.com/attachments/758071395900063775/788076417740701727/6.png'
          break;
          case 68:
            pilka_plazowa = 'https://cdn.discordapp.com/attachments/758071395900063775/788076405593866290/5.png'
          break;
          case 69:
            pilka_plazowa = 'https://cdn.discordapp.com/attachments/758071395900063775/788076395208245288/4.png'
          break;
          case 70:
            pilka_plazowa = 'https://cdn.discordapp.com/attachments/758071395900063775/788076381942054983/3.png'
          break;
          case 71:
            pilka_plazowa = 'https://cdn.discordapp.com/attachments/758071395900063775/788076367224242176/2.png'
          break;
          case 72:
            pilka_plazowa = 'https://cdn.discordapp.com/attachments/758071395900063775/788076354729803786/1.png'
          break;
          case 73:
            pilka_plazowa = ''
          break;
          case 74:
            pilka_plazowa = ''
          break;
          case 75:
            pilka_plazowa = ''
          break;
          case 76:
            pilka_plazowa = ''
          break;
          case 77:
            pilka_plazowa = ''
          break;
          case 78:
            pilka_plazowa = ''
          break;
          case 79:
            pilka_plazowa = ''
          break;
          case 80:
            pilka_plazowa = ''
          break;
          case 81:
            pilka_plazowa = ''
          break;
          case 82:
            pilka_plazowa = ''
          break;
          case 83:
            pilka_plazowa = ''
          break;
          case 84:
            pilka_plazowa = ''
          break;
          case 85:
            pilka_plazowa = ''
          break;
          case 86:
            pilka_plazowa = ''
          break;
          case 87:
            pilka_plazowa = ''
          break;
          case 88:
            pilka_plazowa = ''
          break;
          case 89:
            pilka_plazowa = ''
          break;
          case 90:
            pilka_plazowa = ''
          break;
          case 91:
            pilka_plazowa = ''
          break;
          case 92:
            pilka_plazowa = ''
          break;
          case 92:
            pilka_plazowa = ''
          break;
          case 93:
            pilka_plazowa = ''
          break;
          case 94:
            pilka_plazowa = ''
          break;
          case 95:
            pilka_plazowa = ''
          break;
          case 96:
            pilka_plazowa = ''
          break;
          case 97:
            pilka_plazowa = ''
          break;
          case 98:
            pilka_plazowa = ''
          break;
          case 99:
            pilka_plazowa = ''
          break;
          case 100:
            pilka_plazowa = ''
          break;
          case 101:
            pilka_plazowa = ''
          break;
          case 102:
            pilka_plazowa = ''
          break;
          case 103:
            pilka_plazowa = ''
          break;
          case 104:
            pilka_plazowa = ''
          break;
          case 105:
            pilka_plazowa = ''
          break;
          case 106:
            pilka_plazowa = ''
          break;
          case 107:
            pilka_plazowa = ''
          break;
          case 108:
            pilka_plazowa = ''
          break;
          case 109:
            pilka_plazowa = ''
          break;
          case 110:
            pilka_plazowa = ''
          break;

      }

        const exampleEmbed = new Discord.MessageEmbed()
        .setColor('#bdbdbd')
        .setTitle('W ciasteczku znajdujesz...')
        .setImage(pilka_plazowa)

        msg.channel.send(exampleEmbed)
    }
}