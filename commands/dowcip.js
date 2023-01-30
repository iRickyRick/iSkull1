const Discord = require("discord.js")
const chalk = require("chalk")

const client = new Discord.Client()

module.exports = {
    name: "dowcip",
    description: "Mówi żart",
    
    run(msg, args)
    {
      let min = Math.ceil(0);
      let max = Math.floor(16);
      var UwU = Math.floor(Math.random() * (max - min + 1))+min;
      var OwO = Math.floor(Math.random() *(3-1+1))+1
      var pomidor;
        switch(OwO)
        {
        case 1:
            pomidor = 'https://www.kindpng.com/picc/m/204-2042843_open-eye-laughing-emoji-png-download-open-eye.png'
        break;

        case 2:
            pomidor = 'https://media.tenor.com/images/492895007a6a0a2a1972ff51f4abf7f3/tenor.png'
        break;

        case 3:
            pomidor = 'https://pbs.twimg.com/profile_images/1027314133585154048/cRCN2r7-.jpg'
        break;
        }

        if(UwU == 0)
            {
                const exampleEmbed = new Discord.MessageEmbed()
                .setColor('#329230')
                .setTitle('Dowcip')
                .setImage(pomidor)
                .addFields({ name: 'Jak nazywa się najlepszy czworonożny przyjaciel człowieka? \n\n Łóżko.', value: '\u3164' })
                msg.channel.send(exampleEmbed)
            }
        
        if(UwU == 1)
            {
                const exampleEmbed = new Discord.MessageEmbed()
                .setColor('#329230')
                .setTitle('Dowcip')
                .setImage(pomidor)
                .addFields({ name: 'Podczas kłótni, żona żeby do żywego dopiec mężowi, mówi:\n– Jak umrzesz, natychmiast wyjdę za mąż!\n– A co mnie obchodzi nieszczęście obcego człowieka?!', value: '\u3164' })
                msg.channel.send(exampleEmbed)
            }

        if(UwU == 2)
            {
                const exampleEmbed = new Discord.MessageEmbed()
                .setColor('#329230')
                .setTitle('Dowcip')
                .setImage(pomidor)
                .addFields({ name: 'Dzwoni koleś do Sejmu:\n– Dzień dobry, chciałbym zostać posłem.\n– Poj%$^ło pana?!?!\n– Tak. A jakieś inne wymagania?', value: '\u3164' })
                msg.channel.send(exampleEmbed)
            }

        if(UwU == 3)
            {
                const exampleEmbed = new Discord.MessageEmbed()
                .setColor('#329230')
                .setTitle('Dowcip')
                .setImage(pomidor)
                .addFields({ name: 'Młody mężczyzna mówi do ojca swojej dziewczyny:\n– Wiem, że to tylko zwykła formalność, ale chciałbym prosić o rękę pańskiej córki.\n– Kto ci, do cholery, powiedział – że to jest tylko zwykła formalność?!!!\n– Ginekolog…!', value: '\u3164' })
                msg.channel.send(exampleEmbed)
            }

        if(UwU == 4)
            {
                const exampleEmbed = new Discord.MessageEmbed()
                .setColor('#329230')
                .setTitle('Dowcip')
                .setImage(pomidor)
                .addFields({ name: 'Idzie student fizyki ulicą, zaczepia go babka:\n– Do kościoła to dobry kierunek?\n– Dobry – odpowiada student.\nBabka odchodzi, a student do siebie:\n– Kierunek dobry, ale zwrot przeciwny.', value: '\u3164' })
                msg.channel.send(exampleEmbed)
            }

        if(UwU == 5)
            {
                const exampleEmbed = new Discord.MessageEmbed()
                .setColor('#329230')
                .setTitle('Dowcip')
                .setImage(pomidor)
                .addFields({ name: 'Matka krzyczy na 17-letnią córkę, która późno wróciła z imprezy:\n– Zabraniam Ci wracać tak późno do domu masz dopiero 17 lat. Ja w Twoim wieku…\n– Tak, tak wiem… Przerywa córka. Siedziałaś w domu, bo ja miałam 5 miesięcy.', value: '\u3164' })
                msg.channel.send(exampleEmbed)
            }

        if(UwU == 6)
            {
                const exampleEmbed = new Discord.MessageEmbed()
                .setColor('#329230')
                .setTitle('Dowcip')
                .setImage(pomidor)
                .addFields({ name: 'Żona przymilnie zwraca się do męża:\n– Koteczku, kupisz mi nowe futro?\n– Dlaczego, żabeczko… Przecież to stare wygląda jeszcze bardzo dobrze…\n– Aha! Widzisz, sam uważasz, że jest stare…', value: '\u3164' })
                msg.channel.send(exampleEmbed)
            }

        if(UwU == 7)
            {
                const exampleEmbed = new Discord.MessageEmbed()
                .setColor('#329230')
                .setTitle('Dowcip')
                .setImage(pomidor)
                .addFields({ name: 'Matka krzyczy na 17-letnią córkę, która późno wróciła z imprezy:\n– Zabraniam Ci wracać tak późno do domu masz dopiero 17 lat. Ja w Twoim wieku…\n– Tak, tak wiem… Przerywa córka. Siedziałaś w domu, bo ja miałam 5 miesięcy.', value: '\u3164' })
                msg.channel.send(exampleEmbed)
            }
            
        if(UwU == 8)
            {
                const exampleEmbed = new Discord.MessageEmbed()
                .setColor('#329230')
                .setTitle('Dowcip')
                .setImage(pomidor)
                .addFields({ name: 'Rozmowa kwalifikacyjna:\n– Proszę wymienić swoją 1 mocną cechę\n– Jestem wytrwały\n– Dziękuję, skontaktujemy się z panem później\n– Zaczekam tutaj', value: '\u3164' })
                msg.channel.send(exampleEmbed)
            }

        if(UwU == 9)
            {
                const exampleEmbed = new Discord.MessageEmbed()
                .setColor('#329230')
                .setTitle('Dowcip')
                .setImage(pomidor)
                .addFields({ name: 'Dwóch Polaków na stacji benzynowej w Niemczech zaczepia Niemca tankującego swój samochód celem złapania stopa:\n– Dzień dobry, podwiózłby nas pan do Berlina?\n– Was?\n– Tak, mnie i kolegę.', value: '\u3164' })
                msg.channel.send(exampleEmbed)
            }
    
        if(UwU == 10)
            {
                const exampleEmbed = new Discord.MessageEmbed()
                .setColor('#329230')
                .setTitle('Dowcip')
                .setImage(pomidor)
                .addFields({ name: '– Jak pan może puszczać psa bez kagańca?!\n– Ale wie pan, mnie go żal. Chory jest biedaczek, niedługo umrze, niech się chociaż nacieszy.\n– A na co choruje?\n– Na wściekliznę.', value: '\u3164' })
                msg.channel.send(exampleEmbed)
            }

        if(UwU == 11)
            {
                const exampleEmbed = new Discord.MessageEmbed()
                .setColor('#329230')
                .setTitle('Dowcip')
                .setImage(pomidor)
                .addFields({ name: 'Powiedziałem dziewczynie, że za wysoko namalowała sobie brwi. Wyglądała na zaskoczoną...', value: '\u3164' })
                msg.channel.send(exampleEmbed)
            }

        if(UwU == 12)
            {
                const exampleEmbed = new Discord.MessageEmbed()
                .setColor('#329230')
                .setTitle('Dowcip')
                .setImage(pomidor)
                .addFields({ name: 'Jestem tak dobry w spaniu, że mogę to robić z zamkniętymi oczami.', value: '\u3164' })
                msg.channel.send(exampleEmbed)
            }
        
        if(UwU == 13)
            {
                const exampleEmbed = new Discord.MessageEmbed()
                .setColor('#329230')
                .setTitle('Dowcip')
                .setImage(pomidor)
                .addFields({ name: 'Szef życzył mi dziś rano miłego dnia. Poszedłem więc do domu.', value: '\u3164' })
                msg.channel.send(exampleEmbed)
            }

        if(UwU == 14)
            {
                const exampleEmbed = new Discord.MessageEmbed()
                .setColor('#329230')
                .setTitle('Dowcip')
                .setImage(pomidor)
                .addFields({ name: 'Żona prosiła mnie, żebym jej przyniósł szminkę. Przez pomyłkę podałem jej klej w sztyfcie. Chyba ciągle jest obrażona, bo nadal się nie odzywa...', value: '\u3164' })
                msg.channel.send(exampleEmbed)
            }

        if(UwU == 15)
            {
                const exampleEmbed = new Discord.MessageEmbed()
                .setColor('#329230')
                .setTitle('Dowcip')
                .setImage(pomidor)
                .addFields({ name: 'Mój dziadek ma serce lwa i... dożywotni zakaz wstępu do zoo.', value: '\u3164' })
                msg.channel.send(exampleEmbed)
            }
        
        if(UwU == 16)
            {
                const exampleEmbed = new Discord.MessageEmbed()
                .setColor('#329230')
                .setTitle('Dowcip')
                .setImage(pomidor)
                .addFields({ name: 'Linie równoległe mają tak wiele wspólnego ze sobą! Szkoda, że się nigdy nie spotkają!', value: '\u3164' })
                msg.channel.send(exampleEmbed)
            }
        }

}
