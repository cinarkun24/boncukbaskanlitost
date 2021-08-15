module.exports = {
  name:"sil",
  code:`
<a:acildi:805358695818723338> $noMentionMessage Mesaj Silindi! [<@$authorID>]
$deleteIn[5s]
$argsCheck[>1;Kaç Mesaj Silmem Gerek? **Örnek t/sil 35**] 
$clear[$noMentionMessage]
$onlyIf[$noMentionMessage<=100;100'den Fazla Mesaj Silemem] 
$onlyIf[$noMentionMessage>=2;1 Veya 1'den Az Sayı Silemem]
$onlyPerms[managemessages;Mesajları Yönet İznine Sahip Değilsin]
$onlyIf[$isNumber[$message]!=false;Lütfen Sayı Gir] 
$cooldown[5s;Oops Yavaş Ol Biraz Tekrar Kullanmak İçin %time% Bekle]
$onlyIf[$getGlobalUserVar[bakım]!=true;{description:Şuanda Bakım Modum Açık Daha Sonra Tekrar Deneyin
> Bakım Sebebi **$getGlobalUserVar[bakımsbp]**
[Destek Sunucum](https://discord.gg/UATm97gZeg) }{color:GREEN}{delete:5s}
$onlyIf[$getGlobalUserVar[karaliste;$authorid]!=true;{description:Karalisteye Alındığın İçin Komutları Kullanamazsın
  **İletişim**
  [Destek Sunucum](https://discord.gg/Q76EzABKFA)
  [Canı Sıkılan GhOsT.M8.#6520](https://discord.com/users/573504001732116490) }{color:BLUE}{delete:3s}]
`
}