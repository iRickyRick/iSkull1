const Discord = require("discord.js");
const client = new Discord.Client();
const canvacord = require("canvacord");

client.on("message", async (message) => {
    if (message.author.bot) return;
    if (message.content === "!triggered") {
        let avatar = message.author.displayAvatarURL({ dynamic: false, format: 'png' });
        let image = await canvacord.Canvas.trigger(avatar);
        let attachment = new Discord.MessageAttachment(image, "triggered.gif");
        return message.channel.send(attachment);
    }
});

client.login("ODY5NjQwODk3MTk1ODMxMzM3.YQBKMw.lWF4GsvYFVpqDLxqSUghXsMmS9c");