module.exports = {
  name:"spam-koruma-aç",
  code:`
  $argsCheck[>1;Lütfen Kanal Etiketle]
$description[**Spam Koruma Sistemi** \`Açıldı\`
Log Kanalı <#$mentionedChannels[1]> Olarak Ayarlandı]
$onlyForIDs[$ownerID;Bu Komut Sunucu Sahibine Özeldir]
$setServerVar[spamkoruma;$mentionedChannels[1]]
$setServerVar[spamkoruma2;yes]
$color[RANDOM]
$onlyIf[$getGlobalUserVar[bakım]!=true;{description:Şuanda Bakım Modum Açık Daha Sonra Tekrar Deneyin
> Bakım Sebebi **$getGlobalUserVar[bakımsbp]**
[Destek Sunucum](https://discord.gg/UATm97gZeg) }{color:GREEN}{delete:5s}
$onlyIf[$getGlobalUserVar[karaliste;$authorid]!=true;{description:Karalisteye Alındığın İçin Komutları Kullanamazsın
  **İletişim**
  [Destek Sunucum](https://discord.gg/Q76EzABKFA)
  [Canı Sıkılan GhOsT.M8.#6520](https://discord.com/users/573504001732116490) }{color:BLUE}{delete:3s}]
  `}