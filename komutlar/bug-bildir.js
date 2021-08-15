module.exports = {
  name:"bug",
  code:`
  $globalCooldown[1h;{title:Hata}{description:Lütfen 1 Saat Sonra Tekrar Deneyin!}{color:RED}]
$channelsendmessage[$channelid;{description:Bug Bildirildi}{color:GREEN}]
$useChannel[850431513735987231]
  $color[RED]
  $description[$thumbnail[$authorAvatar]
  Bugu Bildiren Kişi: **$username#$discriminator** ($authorid) [$serverName[$guildID]\\]($getServerInvite)
  
Bug: **$message**]
  $addTimestamp
$onlyIf[$message[2]!=;En az 2 Kelime ile anlat]
$onlyIf[$getGlobalUserVar[bakım]!=true;{description:Şuanda Bakım Modum Açık Daha Sonra Tekrar Deneyin
> Bakım Sebebi **$getGlobalUserVar[bakımsbp]**
[Destek Sunucum](https://discord.gg/UATm97gZeg) }{color:GREEN}{delete:5s}
$onlyIf[$getGlobalUserVar[karaliste;$authorid]!=true;{description:Karalisteye Alındığın İçin Komutları Kullanamazsın
  **İletişim**
  [Destek Sunucum](https://discord.gg/Q76EzABKFA)
  [Canı Sıkılan GhOsT.M8.#6520](https://discord.com/users/573504001732116490) }{color:BLUE}{delete:3s}]
`
}