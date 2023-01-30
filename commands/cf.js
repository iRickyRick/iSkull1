const Discord = require("discord.js")
const chalk = require("chalk")

const client = new Discord.Client()

const log = console.log


module.exports = {
    name: "cf",
    description: "rzut monetą",
    
    run(msg, args)
    {
      let min = Math.ceil(0);
      let max = Math.floor(1);
      var UwU = Math.floor(Math.random() * (max - min + 1))+min;
      var pilka_plazowa;

      switch(UwU)
      {
case 0:
    morsowanie = ('Wynik:')
    pila = ('Silver serpent!')
    pilka_plazowa ='https://cdn.discordapp.com/attachments/798288589859192884/889538693403115540/reszkaaa.png'
  break;
  case 1:
    morsowanie = ('Wynik:')
    pila = ('Golden kraken!')
    pilka_plazowa = 'https://cdn.discordapp.com/attachments/798288589859192884/889538514423779448/orzel.png'
  break;  

}

  const exampleEmbed = new Discord.MessageEmbed()
  .setColor('#bdbdbd')
  .setImage(pilka_plazowa)
  .setTitle(morsowanie)
  .setDescription(pila)

  msg.channel.send(exampleEmbed)
}
}