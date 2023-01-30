const Discord = require('discord.js');
const Client = new Discord.Client();

Client.on('message' , msg => {
    if (msg.content === "serwus") {
        msg.channel.send('<:klocuch:869989469456064575> ');
        }
        else if(msg.content === "co?"){
            msg.channel.send('gówno');
        }
        else if(msg.content === "mrozi"){
            msg.channel.send('🥶');
        }
        else if(msg.content === "szef"){
            msg.channel.send('😎');
        }
        else if(msg.content === "Seba"){
            msg.channel.send('Co tam mordeczko?');
        }
        else if(msg.content === "Tidit"){
            msg.channel.send('Ziuuum');
        }
        else if(msg.content === "Mrozi"){
            msg.channel.send('🥶');
        }
        else if(msg.content === "Szef"){
            msg.channel.send('😎');
        }
        else if(msg.content === "seba"){
            msg.channel.send('Co tam mordeczko?');
        }
        else if(msg.content === "Co?"){
            msg.channel.send('gówno');
        }
        else if(msg.content === "Okay"){
            msg.channel.send('<:rammus:869998580134453319>');
        }
        else if(msg.content === "okay"){
            msg.channel.send('<:rammus:869998580134453319>');
        }
        else if(msg.content === "Spoczko foczko"){
            msg.channel.send('https://tenor.com/view/seal-dgaf-seal-with-it-gif-7886518');
        }        
        else if(msg.content === "spoczko foczko"){
            msg.channel.send('https://tenor.com/view/seal-dgaf-seal-with-it-gif-7886518');
        }
        else if(msg.content === "ahoj"){
            msg.channel.send('Ahoj piracie <:gp:889859355577561088>');
        }   
        else if(msg.content === "Ahoj"){
            msg.channel.send('Ahoj piracie <:gp:889859355577561088>');
        }   
        
    });

    Client.login('ODY5NjQwODk3MTk1ODMxMzM3.YQBKMw.lWF4GsvYFVpqDLxqSUghXsMmS9c')