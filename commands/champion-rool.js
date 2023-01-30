const Discord = require("discord.js")
const chalk = require("chalk")

const client = new Discord.Client()

const log = console.log


module.exports = {
    name: "cr",
    description: "champions-rool",
    
    run(msg, args)
    {
      let min = Math.ceil(0);
      let max = Math.floor(158);
      var UwU = Math.floor(Math.random() * (max - min + 1))+min;
      var pilka_plazowa;

      switch(UwU)
      {
        case 0:
          morsowanie = ('Aatrox')
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/798288589859192884/870028523174244442/RiotX_ChampionList_aatrox.png'
        break;
        case 1:
          morsowanie = ('Ahri')
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/798288589859192884/870028539641086013/RiotX_ChampionList_ahri.png'
        case 2:
          morsowanie = ('Akali')
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/798288589859192884/870028556816769094/RiotX_ChampionList_akali.png'
        break;
        case 3:
          morsowanie = ('Akshan')
          pilka_plazowa ='https://cdn.discordapp.com/attachments/798288589859192884/870028576009879602/RiotX_ChampionList_akshan_v2.png'
        break;
        case 4:
          morsowanie = ('Alistar')
          pilka_plazowa ='https://cdn.discordapp.com/attachments/798288589859192884/870028595102380062/RiotX_ChampionList_alistar.png'
        break;
        case 5:
          morsowanie = ('Amumu')
          pilka_plazowa ='https://cdn.discordapp.com/attachments/798288589859192884/870028615625080852/RiotX_ChampionList_amumu.png'
        break;
        case 6:
          morsowanie = ('Anivia')
          pilka_plazowa ='https://cdn.discordapp.com/attachments/798288589859192884/870028631257280522/RiotX_ChampionList_anivia.png'
        break;
        case 7:
          morsowanie = ('Anivia')
          pilka_plazowa ='https://cdn.discordapp.com/attachments/798288589859192884/870028631257280522/RiotX_ChampionList_anivia.png'
        break;
        case 8:
          morsowanie = ('Annie')
          pilka_plazowa ='https://cdn.discordapp.com/attachments/798288589859192884/870028649791881236/RiotX_ChampionList_annie.png'
        break;
        case 9:
          morsowanie =  ('Aphelios')
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/798288589859192884/870028673439375460/Aphelios_0.png'
        break;
        case 10:
          morsowanie = ('Ashe')
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/798288589859192884/870028691130970172/RiotX_ChampionList_ashe.png'
        break;
        case 11:
          morsowanie = ('Aurelion Sol')
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/798288589859192884/870028745707249785/RiotX_ChampionList_aurelionsol.png'
        break;
        case 12:
          morsowanie = ('Azir')
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/798288589859192884/870028767467286588/RiotX_ChampionList_azir.png'
        break;
        case 13:
          morsowanie = ('Bard')
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/798288589859192884/870028794684145745/RiotX_ChampionList_bard.png'
        break;
        case 14:
          morsowanie = ('Blitzcrank')
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/798288589859192884/870028813071966288/RiotX_ChampionList_blitzcrank.png'
        break;
        case 15:
          morsowanie = ('Brand')
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/798288589859192884/870028831665303702/RiotX_ChampionList_brand.png'
        break;
        case 16:
          morsowanie = ('Braum')
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/798288589859192884/870028856088735784/RiotX_ChampionList_braum.png'
        break;
        case 17:
          morsowanie = ('Caitlyn')
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/798288589859192884/870028874669490256/RiotX_ChampionList_caitlyn.png'
        break;
        case 18:
          morsowanie = ('Camille')
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/798288589859192884/870028902121218048/RiotX_ChampionList_camille.png'
        break;
        case 19:
          morsowanie = ('Cassiopeia')
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/798288589859192884/870028917849849856/RiotX_ChampionList_cassiopeia.png'
        break;
        case 20:
          morsowanie = ('Cho`Gath')
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/798288589859192884/870028942688526396/RiotX_ChampionList_chogath.png'
        break;
        case 21:
          morsowanie = ('Corki')
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/798288589859192884/870028971016880138/RiotX_ChampionList_corki.png'
        break;
        case 22:
          morsowanie = ('Darius')
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/798288589859192884/870029039254003772/RiotX_ChampionList_darius.png'
        break;
        case 23:
          morsowanie = ('Diana')
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/798288589859192884/870029054370258944/RiotX_ChampionList_diana.png'
        break;
        case 24:
          morsowanie = ('Dr.Mundo')
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/798288589859192884/870029074389671996/RiotX_ChampionList_drmundo.png'
        break;
        case 25:
          morsowanie = ('Draven')
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/798288589859192884/870029094107115620/RiotX_ChampionList_draven.png'
        break;
        case 26:
          morsowanie = ('Ekko')
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/798288589859192884/870029116894740510/RiotX_ChampionList_ekko.png'
        break;
        case 27:
          morsowanie = ('Elise')
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/798288589859192884/870029132292055040/RiotX_ChampionList_elise.png'
        break;
        case 28:
          morsowanie = ('Evelynn')
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/798288589859192884/870029162558144522/RiotX_ChampionList_evelynn.png'
        break;
        case 29:
          morsowanie = ('Ezreal')
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/798288589859192884/870029179368902686/RiotX_ChampionList_ezreal.png'
        break;
        case 30:
          morsowanie = ('Fiddlesticks')
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/798288589859192884/870029205566545990/RiotX_ChampionList_fiddlesticks.png'
        break;
        case 31:
          morsowanie = ('Fiora')
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/798288589859192884/870029225149759588/RiotX_ChampionList_fiora.png'
        break;
        case 32:
          morsowanie = ('Fizz')
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/798288589859192884/870029247870275624/RiotX_ChampionList_fizz.png'
        break;
        case 33:
          morsowanie = ('Galio')
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/798288589859192884/870029263867371580/RiotX_ChampionList_galio.png'
        break;
        case 34:
          morsowanie = ('Gangplank')
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/798288589859192884/870029287850405978/RiotX_ChampionList_gangplank.png'
        break;
        case 35:
          morsowanie = ('Garen')
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/798288589859192884/870029305869107280/RiotX_ChampionList_garen.png'
        break;
        case 36:
          morsowanie = ('Gnar')
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/798288589859192884/870029323061571604/RiotX_ChampionList_gnar.png'
        break;
        case 37:
          morsowanie = ('Gragas')
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/798288589859192884/870029346734227456/RiotX_ChampionList_gragas.png'
        break;
        case 38:
          morsowanie = ('Graves')
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/798288589859192884/870029363071029278/RiotX_ChampionList_graves-cigar.png'
        break;
        case 39:
          morsowanie = ('Gwen')
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/798288589859192884/870029385162436678/RiotX_ChampionList_gwen.png'
        break;
        case 40:
          morsowanie = ('Hecarim')
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/798288589859192884/870029402182938665/RiotX_ChampionList_hecarim.png'
        break;

        case 41:
          morsowanie = ('Heimerdinger')
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/798288589859192884/870029425150947378/RiotX_ChampionList_heimerdinger.png'
        break;
        case 42:
          morsowanie = ('Ilaoi')
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/798288589859192884/870029439621292082/RiotX_ChampionList_illaoi.png'
        break;
        case 43:
          morsowanie = ('Irelia')
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/798288589859192884/870029463495245944/RiotX_ChampionList_irelia.png'
        break;
        case 44:
          morsowanie = ('Ivern')
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/798288589859192884/870029480377340004/RiotX_ChampionList_ivern.png'
        break;
        case 45:
          morsowanie = ('Janna')
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/798288589859192884/870029498974871592/RiotX_ChampionList_janna.png'
        break;
        case 46:
          morsowanie = ('Jarvan IV')
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/798288589859192884/870029546324385902/RiotX_ChampionList_jarvaniv.png'
        break;
        case 47:
          morsowanie = ('Jax')
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/798288589859192884/870029558437515264/RiotX_ChampionList_jax.png'
        break;
        case 48:
          morsowanie = ('Jayce')
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/798288589859192884/870029575588032583/RiotX_ChampionList_jayce.png'
        break;
        case 50:
          morsowanie = ('Jhin')
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/798288589859192884/870029593787125821/RiotX_ChampionList_jhin.png'
        break;
        case 51:
          morsowanie = ('Jinx')
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/798288589859192884/870029613315797002/RiotX_ChampionList_jinx.png'
        break;
        case 52:
          morsowanie = ('Kaisa')
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/798288589859192884/870029643028238336/RiotX_ChampionList_kaisa.png'
        break;
        case 53:
          morsowanie = ('Kalista')
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/798288589859192884/870029657238544464/RiotX_ChampionList_kalista.png'
        break;
        case 54:
          morsowanie = ('Karma')
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/798288589859192884/870029673038499981/RiotX_ChampionList_karma.png'
        break;
        case 55:
          morsowanie = ('Karthus')
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/798288589859192884/870029693905170483/RiotX_ChampionList_karthus.png'
        break;
        case 56:
          morsowanie = ('Kassadin')
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/798288589859192884/870029717393272872/RiotX_ChampionList_kassadin.png'
        break;
        case 57:
          morsowanie = ('Katarina')
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/798288589859192884/870029753321664532/RiotX_ChampionList_katarina.png'
        break;
        case 58:
          morsowanie = ('Kayle')
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/798288589859192884/870029765975896154/RiotX_ChampionList_kayle.png'
        break;
        case 60:
          morsowanie = ('Kayn')
          pilka_plazowa ='https://cdn.discordapp.com/attachments/798288589859192884/870029786918035506/RiotX_ChampionList_kayn.png'
        break;
        case 61:
          morsowanie = ('Kennen')
          pilka_plazowa ='https://cdn.discordapp.com/attachments/798288589859192884/870029802889936946/RiotX_ChampionList_kennen.png'
        break;
        case 62:
          morsowanie = ('Kha`Zix')
          pilka_plazowa ='https://cdn.discordapp.com/attachments/798288589859192884/870029825786667038/RiotX_ChampionList_khazix.png'
        break;
        case 63:
          morsowanie = ('Kindred')
          pilka_plazowa ='https://cdn.discordapp.com/attachments/798288589859192884/870029942757408789/RiotX_ChampionList_kindred.png'
        break;
        case 64:
          morsowanie = ('Kled')
          pilka_plazowa ='https://cdn.discordapp.com/attachments/798288589859192884/870029958897082488/RiotX_ChampionList_kled.png'
        break;
        case 65:
          morsowanie = ('Kog`maw')
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/798288589859192884/870029976769024091/RiotX_ChampionList_kogmaw.png'
        break;
        case 66:
          morsowanie = ('Leblanc')
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/798288589859192884/870029994313785384/RiotX_ChampionList_leblanc.png'
        break;
        case 67:
          morsowanie = ('Lee Sin')
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/798288589859192884/870030015025254410/RiotX_ChampionList_leesin.png'
        break;
        case 68:
          morsowanie = ('Leona')
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/798288589859192884/870030044465094758/RiotX_ChampionList_leona.png'
        break;
        case 69:
          morsowanie = ('Lillia')
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/798288589859192884/870030070134243408/Lillia_0.png'
        break;
        case 70:
          morsowanie = ('Lissandra')
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/798288589859192884/870030116057661490/RiotX_ChampionList_lissandra.png'
        break;
        case 71:
          morsowanie = ('Lucian')
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/798288589859192884/870030168041869342/RiotX_ChampionList_lucian.png'
        break;
        case 72:
          morsowanie = ('Lulu')
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/798288589859192884/870030191936819200/RiotX_ChampionList_lulu.png'
        break;
        case 73:
          morsowanie = ('Lux')
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/798288589859192884/870030221250809906/RiotX_ChampionList_lux.png'
        break;
        case 75:
          morsowanie = ('Malphite')
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/798288589859192884/870030239768653865/RiotX_ChampionList_malaphite.png'
        break;
        case 76:
          morsowanie = ('Malzahar')
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/798288589859192884/870030267107123230/RiotX_ChampionList_malzahar.png'
        break;
        case 77:
          morsowanie = ('Maokai')
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/798288589859192884/870030283020304495/RiotX_ChampionList_maokai.png'
        break;
        case 78:
          morsowanie = ('Master YI')
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/798288589859192884/870030301479469107/RiotX_ChampionList_masteryi.png'
        break;
        case 79:
          morsowanie = ('Miss Fortune')
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/798288589859192884/870030399408058368/RiotX_ChampionList_missfortune.png'
        break;
        case 80:
          morsowanie = ('Mordekaiser')
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/798288589859192884/870030414989897838/RiotX_ChampionList_mordekaiser.png'
        break;
        case 81:
          morsowanie = ('Nami')
          pilka_plazowa = 'https://cdn.discordapp.com/attachments/798288589859192884/870030452637958184/RiotX_ChampionList_nami.png'
        break;
        case 82:
          morsowanie = ('Zyra')
          pilka_plazowa = 'https://media.discordapp.net/attachments/798288589859192884/870032571713589298/RiotX_ChampionList_zyra.png'
        break;
         case 83:
          morsowanie = ('Zoe')
          pilka_plazowa = 'https://media.discordapp.net/attachments/798288589859192884/870032551014699028/RiotX_ChampionList_zoe.png'
        break;
        case 84:
         morsowanie = ('Zilean')
          pilka_plazowa = 'https://media.discordapp.net/attachments/798288589859192884/870032534141009950/RiotX_ChampionList_zilean.png'
        break;
        case 85:
         morsowanie = ('Ziggs')
          pilka_plazowa = 'https://media.discordapp.net/attachments/798288589859192884/870032512628441138/RiotX_ChampionList_ziggs.png'
        break;
        case 86:
          morsowanie = ('Zed')
          pilka_plazowa = 'https://media.discordapp.net/attachments/798288589859192884/870032496371331072/RiotX_ChampionList_zed.png'
        break;
        case 87:
          morsowanie = ('Zac')
          pilka_plazowa = 'https://media.discordapp.net/attachments/798288589859192884/870032476301557820/RiotX_ChampionList_zac.png'
        break;
        case 88:
          morsowanie = ('Yuumi')
          pilka_plazowa = 'https://media.discordapp.net/attachments/798288589859192884/870032456152133652/RiotX_ChampionList_yuumi.png'
        break;
        case 89:
          morsowanie = ('Yorick')
          pilka_plazowa = 'https://media.discordapp.net/attachments/798288589859192884/870032438817095740/RiotX_ChampionList_yorick.png'
        break;
        case 90:
          morsowanie = ('Yone')
          pilka_plazowa = 'https://media.discordapp.net/attachments/798288589859192884/870032422950019102/Yone_0.png?width=948&height=559'
        break;
        case 91:
          morsowanie = ('Yasuo')
          pilka_plazowa = 'https://media.discordapp.net/attachments/798288589859192884/870032397478002718/RiotX_ChampionList_yasuo.png'
        break;
        case 92:
          morsowanie = ('Xin Zhao')
          pilka_plazowa = 'https://media.discordapp.net/attachments/798288589859192884/870032381258653716/RiotX_ChampionList_xinzhao.png'
        break;

        case 93:
          morsowanie = ('Xerath')
          pilka_plazowa = 'https://media.discordapp.net/attachments/798288589859192884/870032362862420018/RiotX_ChampionList_xeratth.png'
        break;
        case 94:
          morsowanie = ('Xayah')
          pilka_plazowa = 'https://media.discordapp.net/attachments/798288589859192884/870032341093986344/RiotX_ChampionList_xayah.png'
        break;
        case 95:
          morsowanie = ('Wukong')
          pilka_plazowa = 'https://media.discordapp.net/attachments/798288589859192884/870032324836876298/RiotX_ChampionList_monkeyking.png'
        break;
        case 96:
          morsowanie = ('Warwick')
          pilka_plazowa ='https://media.discordapp.net/attachments/798288589859192884/870032301365555260/RiotX_ChampionList_warwick.png'
        break;
        case 97:
          morsowanie = ('Volibear')
          pilka_plazowa ='https://media.discordapp.net/attachments/798288589859192884/870032294008741888/Volibear_0.png?width=948&height=559'
        break;
    
        case 98:
          morsowanie = ('Vladimir')
          pilka_plazowa ='https://media.discordapp.net/attachments/798288589859192884/870032267857248297/RiotX_ChampionList_vladimir.png'
        break;
        case 99:
          morsowanie = ('Viktor')
          pilka_plazowa ='https://media.discordapp.net/attachments/798288589859192884/870032244352352386/RiotX_ChampionList_viktor.png'
        break;
        case 100:
          morsowanie = ('Viego')
          pilka_plazowa ='https://media.discordapp.net/attachments/798288589859192884/870032229986877490/RiotX_ChampionList_viego.png'
        break;
        case 101:
          morsowanie = ('Vi')
          pilka_plazowa ='https://media.discordapp.net/attachments/798288589859192884/870032130456031323/RiotX_ChampionList_vi.png'
        break;
        case 102:
          morsowanie = ('Vel`Koz')
          pilka_plazowa = 'https://media.discordapp.net/attachments/798288589859192884/870032108846989322/RiotX_ChampionList_velkoz.png'
        break;
        case 103:
          morsowanie = ('Veigar')
          pilka_plazowa = 'https://media.discordapp.net/attachments/798288589859192884/870032088110354482/RiotX_ChampionList_veigar.png'
        break;
        case 104:
          morsowanie = ('Vayne')
          pilka_plazowa = 'https://media.discordapp.net/attachments/798288589859192884/870032072192978954/RiotX_ChampionList_vayne.png'
        break;
        case 105:
          morsowanie = ('Varus')
          pilka_plazowa = 'https://media.discordapp.net/attachments/798288589859192884/870032056585953310/RiotX_ChampionList_varus.png'
        break;
        case 106:
          morsowanie = ('Urgot')
          pilka_plazowa = 'https://media.discordapp.net/attachments/798288589859192884/870032037422182442/RiotX_ChampionList_urgot.png'
        break;
        case 107:
          morsowanie = ('Udyr')
          pilka_plazowa = 'https://media.discordapp.net/attachments/798288589859192884/870032023044116480/RiotX_ChampionList_udyr.png'
        break;
        case 108:
          morsowanie = ('Twitch')
          pilka_plazowa = 'https://media.discordapp.net/attachments/798288589859192884/870031992962564126/RiotX_ChampionList_twitch.png'
        break;
        case 109:
          morsowanie = ('Twisted Fate')
          pilka_plazowa = 'https://media.discordapp.net/attachments/798288589859192884/870031974922862642/RiotX_ChampionList_twistedfate.png'
        break;
        case 110:
          morsowanie = ('Tryndamere')
          pilka_plazowa = 'https://media.discordapp.net/attachments/798288589859192884/870031956727980052/RiotX_ChampionList_tryndamere.png'
        break;
        case 111:
          morsowanie = ('Trundle')
          pilka_plazowa = 'https://media.discordapp.net/attachments/798288589859192884/870031942479904808/RiotX_ChampionList_trundle.png'
        break;
        case 112:
          morsowanie = ('Tristana')
          pilka_plazowa = 'https://media.discordapp.net/attachments/798288589859192884/870031923735592960/RiotX_ChampionList_tristana.png'
        break;
        case 113:
          morsowanie = ('Thresh')
          pilka_plazowa = 'https://media.discordapp.net/attachments/798288589859192884/870031904576012358/RiotX_ChampionList_thresh.png'
        break;
        case 114:
          morsowanie = ('Teemo')
          pilka_plazowa = 'https://media.discordapp.net/attachments/798288589859192884/870031887878483978/RiotX_ChampionList_teemo.png'
        break;
        case 115:
          morsowanie = ('Taric')
          pilka_plazowa = 'https://media.discordapp.net/attachments/798288589859192884/870031866026143744/RiotX_ChampionList_taric.png'
        break;
        case 116:
          morsowanie = ('Talon')
          pilka_plazowa = 'https://media.discordapp.net/attachments/798288589859192884/870031844190605422/RiotX_ChampionList_talon.png'
        break;
        case 117:
          morsowanie = ('Taliyah')
          pilka_plazowa = 'https://media.discordapp.net/attachments/798288589859192884/870031720978735104/RiotX_ChampionList_ialiyah.png'
        break;
        case 118:
          morsowanie = ('Tahm Kench')
          pilka_plazowa = 'https://media.discordapp.net/attachments/798288589859192884/870031690972692570/RiotX_ChampionList_tahmkench.png'
        break;
        case 119:
          morsowanie = ('Syndra')
          pilka_plazowa = 'https://media.discordapp.net/attachments/798288589859192884/870031673943801937/RiotX_ChampionList_syndra.png'
        break;
        case 120:
          morsowanie = ('Sylas')
          pilka_plazowa = 'https://media.discordapp.net/attachments/798288589859192884/870031660714950716/RiotX_ChampionList_sylas.png'
        break;
        case 121:
          morsowanie = ('Swain')
          pilka_plazowa = 'https://media.discordapp.net/attachments/798288589859192884/870031641177907290/RiotX_ChampionList_swain.png'
        break;
        case 122:
          morsowanie = ('Soraka')
          pilka_plazowa = 'https://media.discordapp.net/attachments/798288589859192884/870031627068264498/RiotX_ChampionList_soraka.png'
        break;
        case 123:
          morsowanie = ('Sona')
          pilka_plazowa = 'https://media.discordapp.net/attachments/798288589859192884/870031605727649833/RiotX_ChampionList_sona.png'
        break;
        case 124:
          morsowanie = ('Skarner')
          pilka_plazowa = 'https://media.discordapp.net/attachments/798288589859192884/870031590447800371/RiotX_ChampionList_skarner.png'
        break;
        case 125:
          morsowanie = ('Sivir')
          pilka_plazowa = 'https://media.discordapp.net/attachments/798288589859192884/870031575591579738/RiotX_ChampionList_sivir.png'
        break;
        case 126:
          morsowanie = ('Sion')
          pilka_plazowa = 'https://media.discordapp.net/attachments/798288589859192884/870031559317680138/RiotX_ChampionList_sion.png'
        break;
        case 127:
          morsowanie = ('Singed')
          pilka_plazowa = 'https://media.discordapp.net/attachments/798288589859192884/870031546990592031/RiotX_ChampionList_singed.png'
        break;
        case 128:
          morsowanie = ('Shyvana')
          pilka_plazowa = 'https://media.discordapp.net/attachments/798288589859192884/870031524005834762/RiotX_ChampionList_shyvana.png'
        break;
        case 129:
          morsowanie = ('Shen')
          pilka_plazowa = 'https://media.discordapp.net/attachments/798288589859192884/870031509522878535/RiotX_ChampionList_shen.png'
        break;
        case 130:
          morsowanie = ('Shaco')
          pilka_plazowa = 'https://media.discordapp.net/attachments/798288589859192884/870031491860693072/RiotX_ChampionList_shaco.png'
        break;
        case 131:
          morsowanie = ('Sett')
          pilka_plazowa = 'https://media.discordapp.net/attachments/798288589859192884/870031475813265428/Sett_0.png?width=948&height=559'
        break;
        case 132:
          morsowanie = ('Seraphine')
          pilka_plazowa = 'https://media.discordapp.net/attachments/798288589859192884/870031459912650803/Seraphine_0.png?width=948&height=559'
        break;
        case 133:
          morsowanie = ('Senna')
          pilka_plazowa = 'https://media.discordapp.net/attachments/798288589859192884/870031434209972304/RiotX_ChampionList_senna.png'
        break;
        case 134:
          morsowanie = ('Sejuani')
          pilka_plazowa = 'https://media.discordapp.net/attachments/798288589859192884/870031415906013254/RiotX_ChampionList_sejuani.png'
        break;
        case 135:
          morsowanie = ('Samira')
          pilka_plazowa = 'https://media.discordapp.net/attachments/798288589859192884/870031399791501332/Samira_0.png?width=948&height=559'
        break;
        case 136:
          morsowanie = ('Ryze')
          pilka_plazowa = 'https://media.discordapp.net/attachments/798288589859192884/870031379713380362/RiotX_ChampionList_ryze.png'
        break;
        case 137:
          morsowanie = ('Rumble')
          pilka_plazowa = 'https://media.discordapp.net/attachments/798288589859192884/870031367524724776/RiotX_ChampionList_rumble.png'
        break;
        case 138:
          morsowanie = ('Riven')
          pilka_plazowa = 'https://media.discordapp.net/attachments/798288589859192884/870031349241761792/RiotX_ChampionList_riven.png'
        break;
        case 139:
          morsowanie = ('Rengar')
          pilka_plazowa = 'https://media.discordapp.net/attachments/798288589859192884/870031238361124865/RiotX_ChampionList_rengar.png'
        break;
        case 140:
          morsowanie = ('Renekton')
          pilka_plazowa = 'https://media.discordapp.net/attachments/798288589859192884/870031223202922526/RiotX_ChampionList_renekton.png'
        break;
        case 141:
          morsowanie = ('Rell')
          pilka_plazowa = 'https://media.discordapp.net/attachments/798288589859192884/870031178424541264/RiotX_ChampionList_Rell_v2.png'
        break;
        case 142:
          morsowanie = ('Rek`Sai')
          pilka_plazowa = 'https://media.discordapp.net/attachments/798288589859192884/870031163136290887/RiotX_ChampionList_reksai.png'
        break;
        case 143:
          morsowanie = ('Rammus')
          pilka_plazowa = 'https://media.discordapp.net/attachments/798288589859192884/870031141254602812/RiotX_ChampionList_rammus.png'
        break;
        case 144:
          morsowanie = ('Rakan')
          pilka_plazowa = 'https://media.discordapp.net/attachments/798288589859192884/870031124112494702/RiotX_ChampionList_rakan.png'
        break;
        case 145:
          morsowanie = ('Quinn')
          pilka_plazowa = 'https://media.discordapp.net/attachments/798288589859192884/870031105875640380/RiotX_ChampionList_quinn.png'
        break;
        case 146:
          morsowanie = ('Qiyana')
          pilka_plazowa = 'https://media.discordapp.net/attachments/798288589859192884/870031087223582721/RiotX_ChampionList_qiyana.png'
        break;
        case 147:
          morsowanie = ('Pyke')
          pilka_plazowa = 'https://media.discordapp.net/attachments/798288589859192884/870031071859839016/RiotX_ChampionList_pyke.png'
        break;
        case 148:
          morsowanie = ('Poppy')
          pilka_plazowa = 'https://media.discordapp.net/attachments/798288589859192884/870030674009153546/RiotX_ChampionList_poppy.png'
        break;

        case 149:
          morsowanie = ('Pantheon')
          pilka_plazowa = 'https://media.discordapp.net/attachments/798288589859192884/870030652957921350/RiotX_ChampionList_pantheon.png'
        break;
        case 150:
          morsowanie = ('Ornn')
          pilka_plazowa = 'https://media.discordapp.net/attachments/798288589859192884/870030637439008788/RiotX_ChampionList_ornn.png'
        break;
        case 151:
          morsowanie = ('Orianna')
          pilka_plazowa = 'https://media.discordapp.net/attachments/798288589859192884/870030615016243290/RiotX_ChampionList_orianna.png'
        break;
        case 152:
          morsowanie = ('Olaf')
          pilka_plazowa ='https://media.discordapp.net/attachments/798288589859192884/870030597446320218/RiotX_ChampionList_olaf.png'
        break;
        case 153:
          morsowanie = ('Nunu i Willump')
          pilka_plazowa ='https://media.discordapp.net/attachments/798288589859192884/870030573450715136/RiotX_ChampionList_nunu.png'
        break;
        case 154:
          morsowanie = ('Nocturne')
          pilka_plazowa ='https://media.discordapp.net/attachments/798288589859192884/870030559190069348/RiotX_ChampionList_nocturne.png'
        break;
        case 155:
          morsowanie = ('Nidalee')
          pilka_plazowa ='https://media.discordapp.net/attachments/798288589859192884/870030535886528522/RiotX_ChampionList_nidalee.png'
        break;
        case 156:
          morsowanie = ('Neeko')
          pilka_plazowa ='https://media.discordapp.net/attachments/798288589859192884/870030515422519326/RiotX_ChampionList_neeko.png'
        break;
        case 157:
          morsowanie = ('Nautilus')
          pilka_plazowa ='https://media.discordapp.net/attachments/798288589859192884/870030498460745778/RiotX_ChampionList_nautilus.png'
        break;
        case 158:
          morsowanie = ('Nasus')
          pilka_plazowa = 'https://media.discordapp.net/attachments/798288589859192884/870030476021223434/RiotX_ChampionList_nasus.png'
        break;  

      }

        const exampleEmbed = new Discord.MessageEmbed()
        .setColor('#bdbdbd')
        .setImage(pilka_plazowa)
        .setTitle(morsowanie)

        msg.channel.send(exampleEmbed)
    }
}