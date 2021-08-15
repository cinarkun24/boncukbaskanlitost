module.exports = {
  name:"muteyetkili-ayarla",
  code:`
  $description[
Mute Yetkili <@&$mentionedRoles[1]> Olarak Ayarlandı]
$color[RANDOM]
  $setServerVar[muteyetkili;$mentionedRoles[1]]
  $suppressErrors[Rol Bulunamadı]
  $onlyIf[$hasPerms[$authorID;admin]!=false;Yetkin Yok]
  $onlyIf[$message!=;Bir Rol Etiketle]
$onlyIf[$getGlobalUserVar[bakım]!=true;{description:Şuanda Bakım Modum Açık Daha Sonra Tekrar Deneyin
> Bakım Sebebi **$getGlobalUserVar[bakımsbp]**
[Destek Sunucum](https://discord.gg/UATm97gZeg) }{color:GREEN}{delete:5s}
$onlyIf[$getGlobalUserVar[karaliste;$authorid]!=true;{description:Karalisteye Alındığın İçin Komutları Kullanamazsın
  **İletişim**
  [Destek Sunucum](https://discord.gg/Q76EzABKFA)
  [Canı Sıkılan GhOsT.M8.#6520](https://discord.com/users/573504001732116490) }{color:BLUE}{delete:3s}]
  `
}