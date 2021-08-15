module.exports = {
  name: "otorol-ayarla-üye",
  code: `
$setServerVar[otorol;$mentionedRoles[1]]
  $setServerVar[otorollog;$mentionedChannels[1]]
$description[Otorol <@&$mentionedRoles[1]> Olarak Ayarlandı
Log Kanalı <#$mentionedChannels[1]> Olarak Ayarlandı]
$color[RANDOM]
$onlyPerms[admin;**Yönetici** İznine Sahip Değilsin]
  $onlyIf[$message[2]!=;**Otorolü Ayarlamak için Şunu Dene** t/otorol-ayarla-üye @Rol @Log]
$onlyIf[$getGlobalUserVar[bakım]!=true;{description:Şuanda Bakım Modum Açık Daha Sonra Tekrar Deneyin
> Bakım Sebebi **$getGlobalUserVar[bakımsbp]**
[Destek Sunucum](https://discord.gg/UATm97gZeg) }{color:GREEN}{delete:5s}
$onlyIf[$getGlobalUserVar[karaliste;$authorid]!=true;{description:Karalisteye Alındığın İçin Komutları Kullanamazsın
  **İletişim**
  [Destek Sunucum](https://discord.gg/Q76EzABKFA)
  [Canı Sıkılan GhOsT.M8.#6520](https://discord.com/users/573504001732116490) }{color:BLUE}{delete:3s}]
   `
}