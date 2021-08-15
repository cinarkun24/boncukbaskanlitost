module.exports = {
name:"forceban",
code:`
$description[<@$message[1]> Adlı Kullanıcı <@$authorID> Tarafından Sunucudan Yasaklandı Sebep **$message[2] $message[3] $message[4] $message[5] $message[6]**]
$footer[$username]
$color[BLUE]
$argsCheck[>1;Bir İD yaz Ve sebep Belirt]
$ban[$message[1];$message[2] $message[3] $message[4] $message[5] $message[6]]
$onlyPerms[ban;**Üyeleri Yasakla** İznine Sahip Değilsin!]
$suppressErrors[Bir İD yaz Ve sebep Belirt]
$onlyIf[$getGlobalUserVar[bakım]!=true;{description:Şuanda Bakım Modum Açık Daha Sonra Tekrar Deneyin
> Bakım Sebebi **$getGlobalUserVar[bakımsbp]**
[Destek Sunucum](https://discord.gg/UATm97gZeg) }{color:GREEN}{delete:5s}
$onlyIf[$getGlobalUserVar[karaliste;$authorid]!=true;{description:Karalisteye Alındığın İçin Komutları Kullanamazsın
  **İletişim**
  [Destek Sunucum](https://discord.gg/Q76EzABKFA)
  [Canı Sıkılan GhOsT.M8.#6520](https://discord.com/users/573504001732116490) }{color:BLUE}{delete:3s}]
`
}