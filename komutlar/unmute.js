module.exports = {
  name:"unmute",
  code:`
  $channelSendMessage[$channelID;<a:pempicarp:805183746525233202> <@$mentioned[1]> Susturulman Kaldırıldı]
  $takeRoles[$mentioned[1];$getServerVar[muterol]]
  $onlyIf[$hasRole[$mentioned[1];$getServerVar[muterol]]!=false;Kullanıcı Muteli Değil!!]
$setUserVar[mutedurum;false;$mentioned[1]]
  $onlyIf[$hasRole[$authorID;$getServerVar[muteyetkili]]!=false;**Ayarlanan Role Sahip Değilsin!**]
  $onlyBotPerms[manageroles;]
  $onlyIf[$mentioned[1]!=;Birisini Etiketle]
  $onlyIf[$getServerVar[muterol]!=yok;Mute Rol Ayarlanmamış!]
 $onlyIf[$getServerVar[muteyetkili]!=yok;Mute Yetkili Ayarlanmamış]
$useChannel[$getServerVar[mutelog]]
$title[MUTE KALDIRILDI]
$description[
**Mutesi Kaldırılan Kişi** \`$username[$mentioned[1]]#$discriminator[$mentioned[1]] ($authorID)\`
**Muteyi Kaldıran Yetkili** \`$username#$discriminator[$authorID] ($authorID)\`]
$onlyIf[$getGlobalUserVar[bakım]!=true;{description:Şuanda Bakım Modum Açık Daha Sonra Tekrar Deneyin
> Bakım Sebebi **$getGlobalUserVar[bakımsbp]**
[Destek Sunucum](https://discord.gg/UATm97gZeg) }{color:GREEN}{delete:5s}
$onlyIf[$getGlobalUserVar[karaliste;$authorid]!=true;{description:Karalisteye Alındığın İçin Komutları Kullanamazsın
  **İletişim**
  [Destek Sunucum](https://discord.gg/Q76EzABKFA)
  [Canı Sıkılan GhOsT.M8.#6520](https://discord.com/users/573504001732116490) }{color:BLUE}{delete:3s}]
`
}