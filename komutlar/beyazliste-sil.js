module.exports = {
  name:"beyazliste-sil",
  code:`
<@$mentioned[1]> Adlı Kullanıcıyı Artık Tüm Korumalar Etkilicektir
$onlyForIDs[$ownerID;Bu Komut Sunucu Sahibine Özeldir]
$argsCheck[>1;Birini Etiketle]
$setUserVar[beyazliste;false;$mentioned[1]]
$onlyIf[$getGlobalUserVar[bakım]!=true;{description:Şuanda Bakım Modum Açık Daha Sonra Tekrar Deneyin
> Bakım Sebebi **$getGlobalUserVar[bakımsbp]**
[Destek Sunucum](https://discord.gg/UATm97gZeg) }{color:GREEN}{delete:5s}
$onlyIf[$getGlobalUserVar[karaliste;$authorid]!=true;{description:Karalisteye Alındığın İçin Komutları Kullanamazsın
  **İletişim**
  [Destek Sunucum](https://discord.gg/Q76EzABKFA)
  [Canı Sıkılan GhOsT.M8.#6520](https://discord.com/users/573504001732116490) }{color:BLUE}{delete:3s}]
  `}