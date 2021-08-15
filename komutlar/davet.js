module.exports =({
  name:"davet",
  code:`
  $color[BLUE]
  $description[$thumbnail[$userAvatar[848883103446335498]]
  **Selam <@$authorid> Demek Beni Sevdin Ve Davet Etmek İstiyorsun :) Aşşağıdaki** Davet Et **Yazısına Tıklıyarak Davet Edebilirsin**
  [Davet Et](https://discord.com/oauth2/authorize?client_id=854971946038984714&scope=bot&permissions=8)
 [Destek Sunucum](https://discord.gg/Q76EzABKFA)
[Oy Ver](https://top.gg/bot/854971946038984714/vote)
[DBL Sayfam](https://top.gg/bot/854971946038984714)]
$onlyIf[$getGlobalUserVar[bakım]!=true;{description:Şuanda Bakım Modum Açık Daha Sonra Tekrar Deneyin
> Bakım Sebebi **$getGlobalUserVar[bakımsbp]**
[Destek Sunucum](https://discord.gg/UATm97gZeg) }{color:GREEN}{delete:5s}
$onlyIf[$getGlobalUserVar[karaliste;$authorid]!=true;{description:Karalisteye Alındığın İçin Komutları Kullanamazsın
  **İletişim**
  [Destek Sunucum](https://discord.gg/Q76EzABKFA)
  [Canı Sıkılan GhOsT.M8.#6520](https://discord.com/users/573504001732116490) }{color:BLUE}{delete:3s}]
  `
})