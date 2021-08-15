module.exports = {
  name: "istatistik",
aliases:['i'],
  code:`
$author[Tiger İstatistik]
$thumbnail[$userAvatar[848883103446335498]]
$description[
:crown: \`| Geliştiriciler\`         
Sahibim: **$username[573504001732116490]#$discriminator[573504001732116490]**
  Geliştiriciler: **$username[573504001732116490]#$discriminator[573504001732116490]**
:robot: \`| Veriler\`
Toplam Sunucu Sayım: **$serverCount**
 Toplam Kullanıcı Sayım: **$allMembersCount**
  Toplam Komut Sayım: **$commandsCount**
Toplam Kanal(Yazı Sesli Kategori) Sayım: **$sum[$allChannelsCount[text];$allChannelsCount[voice];$allChannelsCount[category]]**
:gear: \`| İşletim Sistemi Ve Sürümler\`
İşletim Sistemi: **$replaceText[$replaceText[$djsEval[require ('os').platform();yes];linux;Linux;-1];win32; Windows;-1]**
 İşlemci Modeli: **$djsEval[require ('os').cpus()[0].model;yes]**
  Kütüphane: **AOİ.JS** 
   AOİ.JS Sürümü: **$packageVersion**
  Kullanılan CPU: **$cpu**
Kullanılan Ram: **$ram MB/$replaceText[$abbreviate[$maxRam];K; GB;-1]**
:timer: \`| Gecikme\`
Pingim: **$botping**
 Database Ping: **$dbPing**
:star: \`| Diğer Bilgiler\`
Oluşturulma Sürem: **$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$creationDate[$clientid;time];years;Yıl;-1];year;Yıl;-1];months;Ay;-1];month;Ay;-1];weeks;Hafta;-1];week;Hafta;-1];days;Gün;-1];day;Gün;-1];hour;Saat;-1];hours;Saat;-1];minute;Dakika;-1];minutes;Dakika;-1];and;Ve;-1];seconds;Saniye;-1];second;Saniye!;-1]**
Aktif Olduğum Süre: **$replaceText[$replaceText[$replaceText[$uptime;s; Saniye;-1];h; Saat;-1];m; Dakika;-1]**
Destek Sunucum: [Tıkla](https://discord.gg/Q76EzABKFA)
Davet Linkim: [Tıkla](https://discord.com/oauth2/authorize?client_id=854971946038984714&scope=bot&permissions=8)]
$color[GREEN]
$onlyIf[$getGlobalUserVar[bakım]!=true;{description:Şuanda Bakım Modum Açık Daha Sonra Tekrar Deneyin
> Bakım Sebebi **$getGlobalUserVar[bakımsbp]**
[Destek Sunucum](https://discord.gg/UATm97gZeg) }{color:GREEN}{delete:5s}
$onlyIf[$getGlobalUserVar[karaliste;$authorid]!=true;{description:Karalisteye Alındığın İçin Komutları Kullanamazsın
  **İletişim**
  [Destek Sunucum](https://discord.gg/Q76EzABKFA)
  [Canı Sıkılan GhOsT.M8.#6520](https://discord.com/users/573504001732116490) }{color:BLUE}{delete:3s}]
`
}