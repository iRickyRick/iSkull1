const Discord = require("discord.js")
const chalk = require("chalk")
const {e} = require("discord.js")
const { default: Axios } = require("axios")

const client = new Discord.Client()

const log = console.log

module.exports = {
  name: "korona",
  description:
    "Korna virus",
  aliases: ["virus", "vir"],
  args: true,
  usage: "<country|all>",
  cooldown: 10,

  async run(msg, args) {
    const {channel, client: {axios}} = msg

    const exampleEmbed = new Discord.MessageEmbed()
    .setColor('#329230')
    

  if(args[0] === "all")
  {
    var data = await axios.get("all").then(({data}) => data)

    const {cases, deaths, recovered} = data
    
    exampleEmbed.addFields(
      { name: 'Zachorowania:\u3164\u3164', value: '**'+cases+'**', inline: true},
      { name: 'Śmierci:\u3164\u3164', value: '**'+deaths+'**', inline: true},
      { name: 'Wyzdrowienia:', value: '**'+recovered+'**', inline: true}
      )
      .setThumbnail('https://media.discordapp.net/attachments/758071395900063775/788904260455890954/gsdg.png')
      .setTitle('Statystyki dla World:')
      return msg.channel.send(exampleEmbed)
    }

    const data1 = await axios.get("countries").then(({ data }) => {
      return data
    })
    const countryName = args[0]

    if(countryName!='USA' || countryName!='UK')
    {
      countryName.toLowerCase()
    }

    const dz = countryName.charAt(0).toUpperCase() + countryName.slice(1);

    const country = data1.filter((x) => x.country === dz)

    if (!country.length) {
      return msg.reply(`country \`${dz}\` not found.`)
    }

    const { cases, deaths, recovered} = country[0]
    
    exampleEmbed.addFields(
      { name: 'Zachorowania:\u3164\u3164', value: '**'+cases+'**', inline: true},
      { name: 'Śmierci:\u3164\u3164', value: '**'+deaths+'**', inline: true},
      { name: 'Wyzdrowienia:', value: '**'+recovered+'**', inline: true}
      )
      .setThumbnail('https://media.discordapp.net/attachments/758071395900063775/788904260455890954/gsdg.png')
      .setTitle('Statystyki dla '+ `${dz}` + ':')
    return msg.channel.send(exampleEmbed)
    },


}
