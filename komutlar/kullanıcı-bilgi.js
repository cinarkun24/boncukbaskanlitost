module.exports = {
name:"profil",
aliases:['kullanıcı-bilgi'],
code:`
$title[Kullanıcı Bilgi]
$description[
**Kullanıcı** : \`$username[$mentioned[1;yes]]#$discriminator[$mentioned[1;yes]]\`
**Kullanıcı ID** : \`$mentioned[1;yes]\`
**Sunucudaki İsmi** : \`$nickname[$mentioned[1;yes]]\`
**Hesabının Oluşturulma Tarihi** : \`$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$creationDate[$mentioned[1;yes];time];year;Yıl;-1];years;Yıl;-1];months;Ay;-1];week;Hafta;-1];day;Gün;-1];days;Gün;-1];hours;Saat;-1];minutes;Dakika;-1];and;Ve;-1];seconds;Saniye Önce Kuruldu]\`
**Oynuyor Bölümü** : \`$replaceText[$getCustomStatus[$mentioned[1;yes]];none;Bulunamadı;-1]\`
**Rozetleri** : $replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$getUserBadges[$mentioned[1;yes]];House Brilliance;<:Brilliance:855002940196257793>;-1];House Bravery;<:Bravery:855002920730361876>;-1];House Balance;<:Balance:855002897334927370>;-1];Early Supporter;<:early:855002867039600640>;-1];Early Verified Developer;<:dev:855002954088316959>;-1];Verified Developer;<:dev:855002954088316959>;-1];Nitro Classic;<:nitro2:855006812474048532>;-1];Nitro Boosting;<a:boost:855763948116246569>;-1]
**Discorda Giriş Yaptığı Platform** : \`$replaceText[$replaceText[$replaceText[$replaceText[$platform[$mentioned[1;yes]];mobile;Telefon;-1];desktop;Masaüstü;-1];none;Kullanıcı Çevrımdışı;-1];web;İnternet Tarayıcısı;-1]\`
**Bot Mu?** : \`$replaceText[$replaceText[$isBot[$mentioned[1;yes]];false;Hayır;-1];true;Evet;-1]\`
**Rolleri** : $userRoles[$mentioned[1;yes];mentions]
]
$color[$randomText[BLUE;YELLOW;GREEN]]
$onlyIf[$getGlobalUserVar[bakım]!=true;{description:Şuanda Bakım Modum Açık Daha Sonra Tekrar Deneyin
> Bakım Sebebi **$getGlobalUserVar[bakımsbp]**
[Destek Sunucum](https://discord.gg/UATm97gZeg) }{color:GREEN}{delete:5s}
$onlyIf[$getGlobalUserVar[karaliste;$authorid]!=true;{description:Karalisteye Alındığın İçin Komutları Kullanamazsın
  **İletişim**
  [Destek Sunucum](https://discord.gg/Q76EzABKFA)
  [Canı Sıkılan GhOsT.M8.#6520](https://discord.com/users/573504001732116490) }{color:BLUE}{delete:3s}]
`
}