const Discord = require("discord.js")

const chalk = require("chalk")

const client = new Discord.Client()

const commandHedler = require("./hedlers/hedler.js")

const apiHedler = require("./hedlers/api.hedler.js")

const canvacord = require("canvacord")

const log = console.log

commandHedler(client)

apiHedler(client)


client.on('ready', () => {
  console.log(chalk.blue("Odpalił!"));
  console.log(`Logged in as ${client.user.tag}!`);
    client.user.setPresence({
      status: 'online',
      //activity: {
          //name: '',
          //type: '',
      //}
  });
  
}); 
    
client.login('ODY5NjQwODk3MTk1ODMxMzM3.YQBKMw.lWF4GsvYFVpqDLxqSUghXsMmS9c')

client.on("debug", () => {})
client.on("warn", () => {})
client.on("error", () => {})

