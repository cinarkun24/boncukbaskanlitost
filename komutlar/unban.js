module.exports = {
name: "unban",
code:`
$description[
Banı Açılan Kişi - *$username[$message[1]]#$discriminator[$message[1]]*
Banı Açan Yetkili - *$username#$discriminator[$authorID]*]
$color[BLUE]
$onlyPerms[ban;**Üyeleri Yasakla** İznine Sahip Değilsin!]
$unban[$message[1]]
$suppressErrors[Bir İD Yaz]
$onlyIf[$getGlobalUserVar[bakım]!=true;{description:Şuanda Bakım Modum Açık Daha Sonra Tekrar Deneyin
> Bakım Sebebi **$getGlobalUserVar[bakımsbp]**
[Destek Sunucum](https://discord.gg/UATm97gZeg) }{color:GREEN}{delete:5s}
$onlyIf[$getGlobalUserVar[karaliste;$authorid]!=true;{description:Karalisteye Alındığın İçin Komutları Kullanamazsın
  **İletişim**
  [Destek Sunucum](https://discord.gg/Q76EzABKFA)
  [Canı Sıkılan GhOsT.M8.#6520](https://discord.com/users/573504001732116490) }{color:BLUE}{delete:3s}]
`
}
