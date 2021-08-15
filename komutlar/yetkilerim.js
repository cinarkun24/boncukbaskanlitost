module.exports = {
  name:"yetkilerim",
  code:`
  $color[RANDOM]
  $description[
  Sunucuyu Yönet $replaceText[$replaceText[$hasPerms[$authorID;manageserver];false;<a:carpi:805183087184576592>;-1];true;<a:Tik:805182741796618240>;-1]
  
  Üyeleri Atma $replaceText[$replaceText[$hasPerms[$authorID;kick];false;<a:carpi:805183087184576592>;-1];true;<a:Tik:805182741796618240>;-1]
  
  Üyeleri Yasaklama = $replaceText[$replaceText[$hasPerms[$authorID;ban];false;<a:carpi:805183087184576592>;-1];true;<a:Tik:805182741796618240>;-1]
  
  Rolleri Yönet $replaceText[$replaceText[$hasPerms[$authorID;manageroles];false;<a:carpi:805183087184576592>;-1];true;<a:Tik:805182741796618240>;-1]
  
  Kanalları Yönet $replaceText[$replaceText[$hasPerms[$authorID;managechannels];false;<a:carpi:805183087184576592>;-1];true;<a:Tik:805182741796618240>;-1]
  
  WebHookları Yönet $replaceText[$replaceText[$hasPerms[$authorID;managewebhooks];false;<a:carpi:805183087184576592>;-1];true;<a:Tik:805182741796618240>;-1]
  
  Mesajları Yönet $replaceText[$replaceText[$hasPerms[$authorID;managemessages];false;<a:carpi:805183087184576592>;-1];true;<a:Tik:805182741796618240>;-1]
  
  Denetim Kaydını Görüntüle $replaceText[$replaceText[$hasPerms[$authorID;viewauditlog];false;<a:carpi:805183087184576592>;-1];true;<a:Tik:805182741796618240>;-1]
  
  Kullanıcı Adlarını Yönet $replaceText[$replaceText[$hasPerms[$authorID;managenicknames];false;<a:carpi:805183087184576592>;-1];true;<a:Tik:805182741796618240>;-1]
  
  Mesaj Gönder $replaceText[$replaceText[$hasPerms[$authorID;sendmessages];false;<a:carpi:805183087184576592>;-1];true;<a:Tik:805182741796618240>;-1]
  
  Mesajları Oku $replaceText[$replaceText[$hasPerms[$authorID;readmessages];false;<a:carpi:805183087184576592>;-1];true;<a:Tik:805182741796618240>;-1]
  
  ]
$onlyIf[$getGlobalUserVar[bakım]!=true;{description:Şuanda Bakım Modum Açık Daha Sonra Tekrar Deneyin
> Bakım Sebebi **$getGlobalUserVar[bakımsbp]**
[Destek Sunucum](https://discord.gg/UATm97gZeg) }{color:GREEN}{delete:5s}
$onlyIf[$getGlobalUserVar[karaliste;$authorid]!=true;{description:Karalisteye Alındığın İçin Komutları Kullanamazsın
  **İletişim**
  [Destek Sunucum](https://discord.gg/Q76EzABKFA)
  [Canı Sıkılan GhOsT.M8.#6520](https://discord.com/users/573504001732116490) }{color:BLUE}{delete:3s}]
  
  `
}