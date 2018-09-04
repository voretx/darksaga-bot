const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let pages = ['[❯ Tüm Komutlar]\n\n[d!yardım](https://discord.gg/BDBsjC2)  •  Botun tüm komutlarını gösterir.\n[d!istatistik](https://discord.gg/BDBsjC2)  • Botun istatistiklerini gönderir.\n[d!avatar](https://discord.gg/BDBsjC2) •  Kendi avatarınızı veya etiketlediğiniz kişinin avatarını verir.\n[d!sunucubilgi](https://discord.gg/BDBsjC2)  •  Sunucu hakkında bilgi verir.\n[d!temizle](https://discord.gg/BDBsjC2) • Belirttiğiniz kadar mesajı siler.\n[d!bilgi](https://discord.gg/BDBsjC2) • Bot hakkında bilgiler verir.\n[d!kick](https://discord.gg/BDBsjC2) • Etiketlediğiniz üyeyi sunucudan atar.\n[d!servericon](https://discord.gg/BDBsjC2) • Sunucunun ikonunu gösterir.\n[d!ping](https://discord.gg/BDBsjC2) • Botun pingini gösterir.\n[d!woodie](hthttps://discord.gg/BDBsjC2) • Woodie hakkında bilgiler gösterir (dont starve together)\n[d!8ball](https://discord.gg/BDBsjC2) • komut kapalı \n[d!yaz](https://discord.gg/BDBsjC2 ) • İstediğiniz şeyi bota yazdırır\n[d!emojiyazı](https://discord.gg/BDBsjC2 ) • Yazdığınız metni emoji olarak atar\n[d!yazıtura](https://discord.gg/BDBsjC2) • Yazıtura yapar\n[d!slots](https://discord.gg/BDBsjC2) • Slotu çevirir\n[d!şifre](https://discord.gg/BDBsjC2) • Rastgele şifre oluşturur'];
  let page = 1; // Sayfa 1

  const embed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setAuthor(message.guild.name,bot.user.avatarURL)
  .setFooter(`© 2018 ÇetinBOT BOTU | Sayfa ${page} / ${pages.length}`,bot.user.avatarURL)
  .setThumbnail(bot.user.avatarURL)
  .setDescription(pages[page-1])
  .setAuthor(message.guild.name,bot.user.avatarURL)
message.channel.send(embed).then(msg => {

    msg.react('⬅').then(r => {
      msg.react('➡')

      //Filter
      const backwardsFilter = (reaction, user) => reaction.emoji.name === '⬅' && user.id === message.author.id;
      const forwardsFilter = (reaction, user) => reaction.emoji.name === '➡' && user.id === message.author.id;

      const backwards = msg.createReactionCollector(backwardsFilter, { time: 60000 });
      const forwards = msg.createReactionCollector(forwardsFilter, { time: 60000 });

      forwards.on('collect', r => {
        if(page === pages.length) return;
        page++;
        embed.setDescription(pages[page-1]);
        embed.setFooter(`© 2018 ÇetinBOT BOTU | Sayfa ${page} / ${pages.length}`,bot.user.avatarURL)
        msg.edit(embed)
      })
      backwards.on('collect', r => {
        if(page === 1) return;
        page--;
        embed.setDescription(pages[page-1]);
        embed.setFooter(`© 2018 ÇetinBOT BOTU | Sayfa ${page} / ${pages.length}`,bot.user.avatarURL)
        msg.edit(embed)
      })

    })
  })
}

module.exports.help = {
  name: "yardım"
}