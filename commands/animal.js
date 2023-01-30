const Discord = require("discord.js")
const chalk = require("chalk")

const client = new Discord.Client()

const log = console.log


module.exports = {
    name: "animal",
    description: "Wyświetla zwierzęta",
    
    run(msg, args)
    {
      let min = Math.ceil(0);
      let max = Math.floor(176);
      var UwU = Math.floor(Math.random() * (max - min + 1))+min;
      var pilka_plazowa;

      switch(UwU)
      {
        case 0:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/869718025916514355/869718103691497523/0f5678744bc2b21546b88ca70b6acd12.png'
        break;
        case 1:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/869718025916514355/869718123392139294/675db601f9bca8d80a567e6504cc2bd4.png'
        break;
        case 2:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/869718025916514355/869718143948443658/ce47aa1b417a0194f5e0e571492d7985.png'
        break;
        case 3:
          pilka_plazowa ='https://cdn.discordapp.com/attachments/869718025916514355/869718878966657054/3d4e46437eab3ebdcd09769c3dcf2782.png'
        break;
        case 4:
          pilka_plazowa ='https://cdn.discordapp.com/attachments/869718025916514355/869718896826019860/b62a6cd76abc74602ef54c1697c740f1.png'
        break;
        case 5:
          pilka_plazowa ='https://cdn.discordapp.com/attachments/869718025916514355/869718916153372682/9827829754ac6c16ee28410dce34385c.png'
        break;
        case 6:
          pilka_plazowa ='https://cdn.discordapp.com/attachments/869718025916514355/869718916153372682/9827829754ac6c16ee28410dce34385c.png'
        break;
        case 7:
          pilka_plazowa ='https://cdn.discordapp.com/attachments/869718025916514355/869718989864063036/8e4907daac6f39a20533bc0f510b8bf5.png'
        break;
        case 8:
          pilka_plazowa ='https://cdn.discordapp.com/attachments/869718025916514355/869719041600806982/848453d6e671acd1afbac2acebb0e808.png'
        break;
        case 9:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/869718025916514355/869719060781350942/a488075bdba7111a1db9776e0afb4873.png'
        break;
        case 10:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/869718025916514355/869719081677385818/f535cc8b8b5abb271bc5ac7c06b23e81.png'
        break;
        case 11:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/869718025916514355/869719097401827349/f3dbbdb2ecc016510a4771c400b37122.png'
        break;
        case 12:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/869718025916514355/869719137704869908/5ac47ecbe3b63903a45367138a7f9e16.png'
        break;
        case 13:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/869718025916514355/869719168981815416/2cfff0249c9a563f9ed059cd9efdf915.png'
        break;
        case 14:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/869718025916514355/869719187717754971/a4bd3ddb88f6696fea8cb44b36dc0bb6.png'
        break;
        case 15:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/869718025916514355/869719205849747527/3f156defacd3a9a3d7a5780088eba00a.png'
        break;
        case 16:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/869718025916514355/869719222585016390/c8829eb2ae62c9a75002ffd7090df714.png'
        break;
        case 17:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/869718025916514355/869719241446793266/4a3bfdc092acd43e32d4abb297836317.png'
        break;
        case 18:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/869718025916514355/869719261084549160/0973dfa71112213d7aee9f9e47b5c006.png'
        break;
        case 19:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/869718025916514355/869719282546802729/f0250455fadb4ac12772e2f51f86a24f.png'
        break;
        case 20:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/869718025916514355/869719373584162896/fc7b7198956afeaa0175847e5bc4f881.png'
        break;
        case 21:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/869718025916514355/869719352851701770/0fead041603cd7301a6dfb00a70b00d2.png'
        break;
        case 22:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/869718025916514355/869719390462021672/8a19ad15a16bffc27739d93145b4900c.png'
        break;
        case 23:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/869718025916514355/869719409944592404/235c2f743d103a0b32880da97f650e63.png'
        break;
        case 24:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/869718025916514355/869719430698000494/5547d4f5b614689d2eacdb65015c46ff.png'
        break;
        case 25:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/869718025916514355/869719455318544454/7a821765499232d0b0020f42acc2bae8.png'
        break;
        case 26:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/869718025916514355/869719478638903337/3d816155f3dc8b472d745bd7285c42d3.png'
        break;
        case 27:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/869718025916514355/869719513317376010/a0c8db0920c9967ccdf71f90dad4722a.png'
        break;
        case 28:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/869718025916514355/869719547459035176/fc4bba35d26820b6198db3cfa01a382d.png'
        break;
        case 29:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/869718025916514355/869719564378832957/f029842b575a414b9c0ef04810b5b6c9.png'
        break;
        case 30:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/869718025916514355/869719589490159616/902e41dd2f66ff48086736c5a3b035c3.png'
        break;
        case 31:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/869718025916514355/869719613645135912/5fc187729c640c152e7bb3d59fa93d75.png'
        break;
        case 32:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/869718025916514355/869719631500292196/b980f88cad8971c0495c20c1d4223c0f.png'
        break;
        case 33:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/869718025916514355/869719650429198386/14df3febf80f3dcee774a36c3ad137db.png'
        break;
        case 34:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/869718025916514355/869719699280265216/3374891f9942ef3baa7356468909b692.png'
        break;
        case 35:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/869718025916514355/869719738559901756/9c5bbacaa05650e605f9e416dd1204f1.png'
        break;
        case 36:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/869718025916514355/869719779882192956/58108ea5870b53b436138a1ab0e13474.png'
        break;
        case 37:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/869718025916514355/869719800933404733/40fe24e9e802623d403b8c78a9b8a555.png'
        break;
        case 38:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/869718025916514355/869719817479925790/1311dc29ddca61dd2a8ecba14800ea46.png'
        break;
        case 39:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/869718025916514355/869719840796049459/c6a3c68cae7be165cf386658b6463b9d.png'
        break;
        case 40:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/869718025916514355/869719890167218176/938bbc4908ce62b1ee511ced5fe59117.png'
        break;
        case 41:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/869718025916514355/869719911281332254/e79ad842d6109d07bf5b631bc2e87d75.png'
        break;
        case 42:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/869718025916514355/869719930751307796/ba4dfae4f7a05fe994351b06c1a93e29.png'
        break;
        case 43:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/869718025916514355/869719949374025728/618d3c6e6d972f5e18e73c734b3d14fa.png'
        break;
        case 44:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/869718025916514355/869719949374025728/618d3c6e6d972f5e18e73c734b3d14fa.png'
        break;
        case 45:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/869718025916514355/869722187647569990/f090beaea1513cad24c47b1a381ab43e.png'
        break;
        case 46:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/869718025916514355/869722211446038558/1a3d72830e1c4026b5043d82a6de16ca.png'
        break;
        case 47:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/869718025916514355/869722243444404259/349fb2489c08be1fedeb3d966ae44586.png'
        break;
        case 48:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/869718025916514355/869722262624956447/51341e8452954e03365a54b7492ca294.png'
        break;
        case 49:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/869718025916514355/869722283785199696/3cf2882de424d4c52cbd9bc21bb09bca.png'
        break;
        case 50:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/869718025916514355/869722303137718332/fa55f44948cf4e607c40314106a51138.png'
        break;
        case 51:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/869718025916514355/869722321890476032/1f803a87bfed8f5642d8c74444a137f4.png'
        break;
        case 52:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/869718025916514355/869722340265709598/48ed6d98beeb287129ccb63a5b37079a.png'
        break;
        case 53:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/869718025916514355/869722368812146709/b169ceaddf1aeeb03be9d411e3943391.png'
        break;
        case 54:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/869718025916514355/869722386436603994/d9fc51072e52729caa0b40f81f53a468.png'
        break;
        case 55:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/869718025916514355/869722403662606356/85dea260cff659803b27976e21874c88.png'
        break;
        case 56:
          pilka_plazowa = 'https://media.discordapp.net/attachments/869718025916514355/869722422532780123/f7c18d8b40f8475e70db52ffe0c78dbb.png'
        break;
        case 57:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/869718025916514355/869722440639590420/9b8bd7eb7bb5f540e429144fef58c3fc.png'
        break;
        case 58:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/869718025916514355/869722457089654794/73ee624b15817b7eee6258c22c23423f.png'
        break;
        case 59:
          pilka_plazowa ='https://cdn.discordapp.com/attachments/869718025916514355/869722474659577936/d3fc527b4441d8829e1f0fa3b0686cb8.png'
        break;
        case 60:
          pilka_plazowa ='https://cdn.discordapp.com/attachments/869718025916514355/869722499171094578/1c9524ed18c8d6e84c1fdf1842f29e09.png'
        break;
        case 61:
          pilka_plazowa ='https://cdn.discordapp.com/attachments/869718025916514355/869722522709549146/a666edecdfa1cc11e44fb244fda1dfac.png'
        break;
        case 62:
          pilka_plazowa ='https://cdn.discordapp.com/attachments/869718025916514355/869722538245226537/e5f08d30e248c24213b29d4298b084d0.png'
        break;
        case 63:
          pilka_plazowa ='https://cdn.discordapp.com/attachments/869718025916514355/869722556263981056/2e3db717e22553e679cd8bbfe3f6de8d.png'
        break;
        case 64:
          pilka_plazowa ='https://cdn.discordapp.com/attachments/869718025916514355/869722573729042442/e2b705bd9bd2c52332c6183eea5bfe87.png'
        break;
        case 65:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/869718025916514355/869722605291192320/625ebf6edc6240b9bd9a67b19f2005e1.png'
        break;
        case 66:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/869718025916514355/869722662694441040/d00d347a0a8021c787f01e3965020a9b.png'
        break;
        case 67:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/869718025916514355/869722678888640632/3f738833b6a6fc77f233e1098da51323.png'
        break;
        case 68:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/869718025916514355/869722703895076894/b41db135fd6dfb23446a2ae5e57fd0d5.png'
        break;
        case 69:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/869718025916514355/869722724828872774/39c15b80e136c832d20556efd22bc57d.png'
        break;
        case 70:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/869718025916514355/869722743996809226/db2dbf1887cba0ffac478c6604f0070a.png'
        break;
        case 71:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/869718025916514355/869722761793257532/12855781333601a8938e4ad008f2816c.png'
        break;
        case 72:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/869718025916514355/869722778595655740/94b60da42f599d402e00e482e06477fc.png'
        break;
        case 73:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/869718025916514355/869722798682173440/acc226fe3827e306ef9cd43e9eb22acc.png'
        break;
        case 74:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/869718025916514355/869722814717001799/831892915d16e521bac47d17153ede10.png'
        break;
        case 75:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/869718025916514355/869722831196389407/8af1b950d99ad4f21f1afd5b6856cc8b.png'
        break;
        case 76:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/869718025916514355/869722848908951592/366fef114bafef723e3f4f9cedde72a0.png'
        break;
        case 77:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/869718025916514355/869722878013218817/c92176a02aca2dd2d8b59ae2e28db4ef.png'
        break;
        case 78:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/869718025916514355/869722899370639401/fd94012206ecd070e7fe13750e118cc3.png'
        break;
        case 79:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/869718025916514355/869722922498031666/cbb5746db43e4aa4ec4dae13ef563d1b.png'
        break;
        case 80:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/869718025916514355/869722943649902653/b6d1490fb7748f678dd297fbde9cfec5.png'
        break;
        case 81:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/869718025916514355/869722962280980531/0e09e38ab6a60247b5c2be06a6b2c304.png'
        break;
        case 82:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/869718025916514355/869722981427998760/ebc8057e50cdc91856573fb59b312cbc.png'
        break;
        case 83:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/869718025916514355/869723009781485608/af2347967ef13e113f2a2cc8340a25b4.png'
        break;
        case 84:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/869718025916514355/869723026076344340/9fcd6d7f9475d39e01f8033653916378.png'
        break;
        case 85:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/869718025916514355/869723042677391420/20addf93acbd1a9428037544223b42a5.png'
        break;
        case 86:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/869718025916514355/869723065867714580/3b5e35f986ddccbfbc86e21e7b2679ca.png'
        break;
        case 87:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/869718025916514355/869723084284903454/2341884c822c4727d5e922bfbd85ba15.png'
        break;
        case 88:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/869718025916514355/869723106611167232/595f42f15093040fa5d1838206325fc9.png'
        break;
        case 89:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/869718025916514355/869723124206293092/81ca5295fa799e5b03b2680bc476a603.png'
        break;
        case 90:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/869718025916514355/869723145626603590/816253ea951625f113f377e8b427f3ca.png'
        break;
        case 91:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/869718025916514355/869723198638399558/663fe49b2de0703104746e77b8e8b25b.png'
        break;
        case 92:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/869718025916514355/869723214643875890/5ec7fda8eed72a5fd0e646ccdbc6e57a.png'
        break;
        case 92:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/869718025916514355/869723236374560858/62c91ba474752b49ceb113e63b0c1ba3.png'
        break;
        case 93:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/869718025916514355/869723266011508756/c2890d4d9f9f3607b180aa5004ceff20.png'
        break;
        case 94:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/869718025916514355/869723266011508756/c2890d4d9f9f3607b180aa5004ceff20.png'
        break;
        case 95:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/869718025916514355/869723289231175700/eb61f84e422d65b766064b02998ae715.png'
        break;
        case 96:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/869718025916514355/869723320042537030/4bea12ef924f9e93772776b7f5c918ba.png'
        break;
        case 97:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/869718025916514355/869723341295071282/f5979ab52810aef786ca23c167900c0c.png'
        break;
        case 98:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/869718025916514355/869723360442077244/1c0d998803a4cbb1bf2683cfcdfa8114.png'
        break;
        case 99:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/869718025916514355/869723386450944010/6bf98e37f0ff0de7065dcded6c833602.png'
        break;
        case 100:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/869718025916514355/869723409486082098/50c9eaedb360f057b32f3c554acec711.png'
        break;
        case 101:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/869718025916514355/869723426967932989/972dfd1476e4e2d028a5ed3abed3f105.png'
        break;
        case 102:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/869718025916514355/869723443048898610/6246020db5f8be1c5a942401577318d1.png'
        break;
        case 103:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/869718025916514355/869723461755498586/3c1080ca23793a5eb0ef9d3795c11eec.png'
        break;
        case 104:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/869718025916514355/869723482370478121/33056fa0b05216e5fc896aaec9ec8ca6.png'
        break;
        case 105:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/869718025916514355/869723498325614622/e46af9c1b9b380d85e2e26129d9ab2f0.png'
        break;
        case 106:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/869718025916514355/869723524024119326/0325a9595b13606621a90d2d278f1cf0.png'
        break;
        case 107:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/869718025916514355/869723541640208414/dcbb50d0d9a9993ea09aa8c74647da91.png'
        break;
        case 108:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/869718025916514355/869723555015823390/97c04df52ad1141369ad3693121d2552.png'
        break;
        case 109:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/869718025916514355/869723573537882192/75487ada8a24f30ceb20e615a661253e.png'
        break;
        case 110:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/869718025916514355/869723591753744464/7a2cbc62ea5822189daccc28f19a889f.png'
        break;
        case 111:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/869718025916514355/869723611953528873/e792e95bc8ebea273b8a1f4423478c55.png'
        break;
        case 112:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/869718025916514355/869723636959965234/d01610cd5c2cf5f8d4c07152436bea8e.png'
        break;
        case 113:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/869718025916514355/869723659642748938/7a0453c3c81f1373e94361936a0f2e63.png'
        break;
        case 114:
          pilka_plazowa ='https://cdn.discordapp.com/attachments/869718025916514355/869723673651720192/c29e17e6ea7f984b4a785aa4f4a3bbf1.png'
        break;
        case 115:
          pilka_plazowa ='https://cdn.discordapp.com/attachments/869718025916514355/869723693478211624/bd9c931ca152a2323a4293ff5ad9846b.png'
        break;
        case 116:
          pilka_plazowa ='https://cdn.discordapp.com/attachments/869718025916514355/869723709781475438/9e2578b324defdbcafe64f41376c055f.png'
        break;
        case 117:
          pilka_plazowa ='https://cdn.discordapp.com/attachments/869718025916514355/869723726520930334/e6cd99615f52d8537b8425677a14b94c.png'
        break;
        case 118:
          pilka_plazowa ='https://cdn.discordapp.com/attachments/869718025916514355/869723750352973875/0f678203dbf047a51eba337523fa3ef5.png'
        break;
        case 119:
          pilka_plazowa ='https://cdn.discordapp.com/attachments/869718025916514355/869723773568438312/abd7cc71d6868b2da5237047de9ede90.png'
        break;
        case 120:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/869718025916514355/869723793315221544/cd0236aeb40d856f3a042f508be1cb58.png'
        break;
        case 121:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/869718025916514355/869723817835110460/fb4e5d8e05b5a9b345871d800d4b0e96.png'
        break;
        case 122:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/869718025916514355/869723844666089503/a75e6ec56b42a6ba73a2325ead15faf7.png'
        break;
        case 123:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/869718025916514355/869723869659942912/b516d8f1958cc6782953e960d7d81e19.png'
        break;
        case 124:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/869718025916514355/869723904288104458/b717a11c1d70cf1632aecd70deadecfd.png'
        break;
        case 125:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/869718025916514355/869723978070110218/0f4c2ab9e422d4e7c38e5b14b1e5e157.png'
        break;
        case 126:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/869718025916514355/869723996277575760/a637dcca2f061a5ce9cc888b7db719ac.png'
        break;
        case 127:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/869718025916514355/869724011045736518/0a4e52741342c028ba527a8930d47012.png'
        break;
        case 128:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/869718025916514355/869724041190203402/e35289a543809f96a9e051245ab6e35e.png'
        break;
        case 129:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/869718025916514355/869724058223255603/94e1c652657b93dec972020b42c247ec.png'
        break;
        case 130:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/869718025916514355/869724084513177691/3e47812fc18e0176b8149003ceb35b3e.png'
        break;
        case 131:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/869718025916514355/869724100061450290/9b5dd100a6cf5fd9b70a38df3556a9b1.png'
        break;
        case 132:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/869718025916514355/869724121892802600/ec1821893e39e28d3bdcd1138408308b.png'
        break;
        case 133:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/869718025916514355/869724143086604298/92b000d7f99f2a83b5379d3f843eb0d2.png'
        break;
        case 134:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/869718025916514355/869724165945581618/ecb5f7483c7bee6b64c32e7786d80b3e.png'
        break;
        case 135:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/869718025916514355/869724191077830677/d4813c0f973ff213f0f7b495c3421fda.png'
        break;
        case 136:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/869718025916514355/869724213282504744/24544da7b66dd52528de95ed50037df1.png'
        break;
        case 137:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/869718025916514355/869724235164180550/04d6146c2a21c7ceb6c3f5580afd1297.png'
        break;
        case 138:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/869718025916514355/869724266717933628/1d8c4e0da93b54080bcde33a58cfdccb.png'
        break;
        case 139:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/869718025916514355/869724251173842984/189709d45112ff563090dc8dfc828c44.png'
        break;
        case 140:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/869718025916514355/869724282236862464/a3023ecdfb5ba72c4c6b0f4a8d28340f.png'
        break;
        case 141:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/869718025916514355/869724296539418655/47607603ab94023597553e76c2a34df3.png'
        break;
        case 142:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/869718025916514355/869724323999547402/c5d96d1afb32d694c8c7345374c96a81.png'
        break;
        case 143:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/869718025916514355/869727107914293268/354fae3a511678f59a0c18d41cb33f5e.png'
        break;
        case 144:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/869718025916514355/869727126939656222/a581ca15befbb3cb98db0c0b82019f6b.png'
        break;
        case 145:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/869718025916514355/869727143045783573/86686d800ba9dbbba42642eb30474196.png'
        break;
        case 146:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/869718025916514355/869727159114149978/53b8782eded5212fe0e8bb98e950b893.png'
        break;
        case 147:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/869718025916514355/869727177447448616/4778a2cd04e94199d6382d797f90d731.png'
        break;
        case 148:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/869718025916514355/869727217427550208/2c0d36694b13c338a0ec21a8a352f70f.png'
        break;
        case 149:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/869718025916514355/869727241460936724/605e3d85c7888a15a81a1e0f56984e11.png'
        break;
        case 150:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/869718025916514355/869727273849344000/6ce90a4abb5eaa1348a0d77afbc30ef4.png'
        break;
        case 151:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/869718025916514355/869727329516150854/947372e9853555b8e7ddd1a084828bfc.png'
        break;
        case 152:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/869718025916514355/869727351699828796/6a58e14ee3bbf7bcc9965f19c53ad8f2.png'
        break;
        case 153:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/869718025916514355/869727372499386448/c710d4a4c7608bfd0c95f40f8d3ba564.png'
        break;
        case 154:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/869718025916514355/869727388777476096/2466d18bc37c4a0f5854dd199f98464e.png'
        break;
        case 155:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/869718025916514355/869727405319790682/d434656d9050965ef663e3ced7e0b9a3.png'
        break;
        case 156:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/869718025916514355/869727429881651270/9b40bed205235afb166a3008728bbb0e.png'
        break;
        case 157:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/869718025916514355/869727471526871060/7acf5e796b3e66b34d781c25d869fea8.png'
        break;
        case 158:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/869718025916514355/869727488681586738/e20cb148c846598d8edb602ce14dd0af.png'
        break;
        case 159:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/869718025916514355/869727957491523584/e95ee832ab989e85e405ecf84654edfe.png'
        break;
        case 160:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/869718025916514355/869727962306580560/1bcf467441ce9ce66ac1069fc585969c.png'
        break;
        case 161:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/869718025916514355/869727965271973948/899836b204cc1eaa655ccd968a88a510.png'
        break;
        case 162:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/869718025916514355/869728015955943464/db548df70ce11f43fe2ee7d0765b512c.png'
        break;
        case 163:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/869718025916514355/869728069710127135/7191732cb49cdadf46f2c01d8bdbd9b3.png'
        break;
        case 164:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/869718025916514355/869728090274795600/23e7048ab64ab75b28b55ec5ca0b7f9e.png'
        break;
        case 165:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/869718025916514355/869728108809433169/15281e521875c30ada3998bebac802bd.png'
        break;
        case 166:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/869718025916514355/869728126773653524/7a121eec70aa62523041127d0db390b3.png'
        break;
        case 167:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/869718025916514355/869728168481787925/4d3fa1482a6770f459e4d988166326ba.png'
        break;
        case 168:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/869718025916514355/869728194532605992/4cd3ab5aba24b3e0e85e5f5287bfe478.png'
        break;
        case 169:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/869718025916514355/869728258013421619/8113ddb9080efd48ab55d9afc915b675.png'
        break;
        case 170:
          pilka_plazowa ='https://cdn.discordapp.com/attachments/869718025916514355/869728277865062420/ffee27ebc20f0d518f6d6f4ddd0313cb.png'
        break;
        case 171:
          pilka_plazowa ='https://cdn.discordapp.com/attachments/869718025916514355/869728308479275098/3f4f91dcc25d5ce5ad50088bc9dca82d.png'
        break;
        case 172:
          pilka_plazowa ='https://cdn.discordapp.com/attachments/869718025916514355/869728330587443200/10f234fe4d24b83b7989ec9e9ec3ead5.png'
        break;
        case 173:
          pilka_plazowa ='https://cdn.discordapp.com/attachments/869718025916514355/869728351244406844/eddf051ef39fa35d69dbcbf89b3198dd.png'
        break;
        case 174:
          pilka_plazowa ='https://cdn.discordapp.com/attachments/869718025916514355/869728374849945620/902af3f33938b0182690b391e0b491fe.png'
        break;
        case 175:
          pilka_plazowa ='https://cdn.discordapp.com/attachments/869718025916514355/869728397054586920/f71d55f0b3a0c5938c0c25991b372b2b.png'
        break;
        case 176:
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/869718025916514355/869728452889178172/4f6102cc770455d1e6d030d04ac82574.png'
        break;
      }

        const exampleEmbed = new Discord.MessageEmbed()
        .setColor('#bdbdbd')
        .setTitle('Animal')
        .setImage(pilka_plazowa)


        msg.channel.send(exampleEmbed)
    }
}