module.exports = {
  name: "sayaç-ayarla",
  code: `
  $setServerVar[sayaclog;$mentionedChannels[1]]
$setServerVar[sayac;$noMentionMessage]
$description[Sayaç Hedefi $noMentionMessage Olarak Ayarlandı
Log Kanalı <#$mentionedChannels[1]> Olarak Ayarlandı]
$color[RANDOM]
$onlyPerms[admin;**Yönetici** İznine Sahip Değilsin]
  $onlyIf[$message[2]!=;**Sayaçı Ayarlamak İçin Şunu Dene** t/sayaç-ayarla Hedef @Log]
$onlyIf[$getGlobalUserVar[bakım]!=true;{description:Şuanda Bakım Modum Açık Daha Sonra Tekrar Deneyin
> Bakım Sebebi **$getGlobalUserVar[bakımsbp]**
[Destek Sunucum](https://discord.gg/UATm97gZeg) }{color:GREEN}{delete:5s}
$onlyIf[$getGlobalUserVar[karaliste;$authorid]!=true;{description:Karalisteye Alındığın İçin Komutları Kullanamazsın
  **İletişim**
  [Destek Sunucum](https://discord.gg/Q76EzABKFA)
  [Canı Sıkılan GhOsT.M8.#6520](https://discord.com/users/573504001732116490) }{color:BLUE}{delete:3s}]
   `
}
