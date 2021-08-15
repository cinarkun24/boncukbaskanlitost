module.exports = {
  name:"tempmute",
  code:`
$setUserVar[mutedurum;false;$mentioned[1]]
$channelSendMessage[$channelID;<a:pempicarp:805183746525233202>  <@$mentioned[1]> Mute Bitti!]
$takeRoles[$mentioned[1];$getServerVar[muterol]]
  $wait[$message[2]]
  $channelSendMessage[$channelID;<@$mentioned[1]> Adlı Kullanıcı $message[2] Süre Boyunca Susturuldu]
$useChannel[$getServerVar[mutelog]]
$title[MUTE BİTTİ]
$description[
**Mutelenen Kişi** \`$username[$mentioned[1]]#$discriminator[$mentioned[1]] ($authorID)\`
**Muteleyen Yetkili** \`$username#$discriminator[$authorID] ($authorID)\`
**Süre** \`$message[2]\`
**Sebep** \`$message[3] $message[4] $message[5] $message[6] $message[7] $message[8] $message[9] $message[10]\`]
$color[GREEN]
$giveRoles[$mentioned[1];$getServerVar[muterol]]
  $onlyPerms[admin;Yetkin Yok !]
  $onlyIf[$getServerVar[muterol]!=yok;Mute Rol Ayarlanmamış!]
 $onlyIf[$getServerVar[muteyetkili]!=yok;Mute Yetkili Ayarlanmamış]
  $onlyIf[$message[2]!=;\`t/tempmute @Kişi Süre Sebep\`]
$suppressErrors[Geçerli Bir Süre Girin \`1 Dakika = 1m | 1 Saat = 1h | 1 Gün = 1d\` (Botun Rolünü En Üste Koymayı Unutmayın!)]
$onlyIf[$hasRole[$authorID;$getServerVar[muteyetkili]]!=false;**Ayarlanan Role Sahip Değilsin!**]
$onlyIf[$hasRole[$mentioned[1];$getServerVar[muterol]]!=true;Kullanıcı Zaten Muteli!]
$setUserVar[mutedurum;true;$mentioned[1]]
$suppressErrors[]
$onlyIf[$getGlobalUserVar[bakım]!=true;{description:Şuanda Bakım Modum Açık Daha Sonra Tekrar Deneyin
> Bakım Sebebi **$getGlobalUserVar[bakımsbp]**
[Destek Sunucum](https://discord.gg/UATm97gZeg) }{color:GREEN}{delete:5s}
$onlyIf[$getGlobalUserVar[karaliste;$authorid]!=true;{description:Karalisteye Alındığın İçin Komutları Kullanamazsın
  **İletişim**
  [Destek Sunucum](https://discord.gg/Q76EzABKFA)
  [Canı Sıkılan GhOsT.M8.#6520](https://discord.com/users/573504001732116490) }{color:BLUE}{delete:3s}]
  `
}