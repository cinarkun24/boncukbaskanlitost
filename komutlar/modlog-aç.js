module.exports = {
  name:"modlog-aç",
  code:`
$description[**Modlog Sistemi Sistemi** \`Açıldı\`
Log Kanalı <#$mentionedChannels[1]> Olarak Ayarlandı]
$onlyPerms[admin;**Yönetici** İznine Sahip Değilsin]
$setServerVar[modlog;$mentionedChannels[1]]
$setServerVar[modlog2;true]
$color[RANDOM]
$onlyIf[$getGlobalUserVar[bakım]!=true;{description:Şuanda Bakım Modum Açık Daha Sonra Tekrar Deneyin
> Bakım Sebebi **$getGlobalUserVar[bakımsbp]**
[Destek Sunucum](https://discord.gg/UATm97gZeg) }{color:GREEN}{delete:5s}
$onlyIf[$getGlobalUserVar[karaliste;$authorid]!=true;{description:Karalisteye Alındığın İçin Komutları Kullanamazsın
  **İletişim**
  [Destek Sunucum](https://discord.gg/Q76EzABKFA)
  [Canı Sıkılan GhOsT.M8.#6520](https://discord.com/users/573504001732116490) }{color:BLUE}{delete:3s}]
  `}