var Aoi = require("aoi.js");
var bot = new Aoi.Bot({
  token: process.env.token,

  prefix: "$getServerVar[prefix]",
  mobile: true,
  fetchInvites: true
});
bot.onMessage()
bot.loadCommands(`./komutlar/`);

bot.command({
  name: "ping",
  code: `
:ping_pong: Ping: $botpingMs 
`
});
bot.command({
  name: "mesaj-ping",
  code: `
:ping_pong: Ping: $executionTime
`
});

bot.variables({
  spamkoruma: "",
  spamkoruma2: "no",
  reklamkoruma: "",
  reklamkoruma2: "no",
  kfkoruma: "",
  kfkoruma2: "no",
  modlog: "",
  muterol: "yok",
  mutelog: "",
  spam: "kapalı",
  srakam: "-1",
  muteyetkili: "yok",
  snipe: "",
  snipek: "",
  snipekk: "",
  mutedurum: "false",
  beyazliste: "false",
  prefix: "t/",
  kanal: "",
  modlog2: "false",
  tag: "",
  tagrol: "",
  taglog: "",
  tagmesaj: "false",
  ticketlimit: "false",
  ticketyet: "",
  tkat: "no",
  spamkorumasayı: "0",
  tagdurum: "false",
  otorollog: "",
  otorol: "",
  otorolbot: "",
  otorollogbot: "",
  sayac: "",
  sayaclog: "",
  mesaj: "",
  ulog: "",
  usayı: "",
  uyar: "false",
  udurum: "",
  u: "",
  linkdeaktif: "",
  linktespit: "",
  linkengel: "0",
  kfdeaktif: "",
  kftespit: "",
  cpdeaktif: "",
  cptespit: "",
  cpengel: "0",
  kfengel: "0",
  bankoruma: "no",
  bankoruma2: "",
  banlimit: "",
  ban: "0",
  caps: "no",
  capslog: "",
  para: "0",
  banka: "2500",
  ökm: "",
  öki: "",
  altchan: "",
  altduration: "",
  alt: "no",
  botkoruma: "",
  botkoruma2: "no",
  botizin: "false",
  bakım: "false",
  bakımsbp: "",
  karaliste: "false",
  etiket: "false",
  etikets: "5",
  etiketu: "0",
  gecersizisim: ""
});

bot.status({
  text: "TiGeRrRrRrRrRrRrRr",
  type: "PLAYING",
  time: 12
});

bot.status({
  text: "Database Silindi :(",
  type: "PLAYING",
  time: 12
});
bot.status({
  text: "Database Silindi  ÜhÜ",
  type: "PLAYING",
  time: 12
});
bot.command({
  name: "yardım",
  code: `
 $title[Tiger Yardım Menüsü]
 $description[
<a:uyari:874695843343650868> **Tüm Korumaların Birisini Etkilemesini İstemiyorsanız** \`$getServerVar[prefix]beyazliste-ekle/sil @Kişi\`

<:ayar2:874696418105892915> **Prefixi Değiştirmek İçin** \`$getServerVar[prefix]prefix-ayarla\`
<a:onay:874697478258192505> **Sunucudaki Prefixim** \`$getServerVar[prefix]\`

<a:polis:874698212060049519> **Reklam Koruma** Sistemini Görmek İçin \`$getServerVar[prefix]reklam-koruma\`
<a:polis:874698212060049519> **Küfür Koruma** Sistemini Görmek İçin \`$getServerVar[prefix]küfür-koruma\`
<a:polis:874698212060049519> **Spam Koruma** Sistemini Görmek İçin \`$getServerVar[prefix]spam-koruma\`
<a:polis:874698212060049519> **Caps Lock Koruma** Sistemini Görmek İçin \`$getServerVar[prefix]caps-koruma\`
<a:polis:874698212060049519> **Yeni Hesap Koruma** Sistemini Görmek İçin \`$getServerVar[prefix]yeni-hesap-koruma\`
<a:polis:874698212060049519> **Etiket Koruma** Sistemini Görmek İçin \`$getServerVar[prefix]etiket-koruma\`

**Diğer Komutlar**
<a:ban:874699156587958342> \`$getServerVar[prefix]moderasyon\`(24)
<a:maviyildiz:874699416454455355> \`$getServerVar[prefix]kullanıcı\`(3)
<a:muzik:874699940922789948> \`$getServerVar[prefix]müzik\`(6)[BETA]]
$color[#c77015]
$footer[Tiger]
`
});

bot.command({
  name: "spam-koruma",
  code: `
  $description[
<:police1:848886750977589269> **Spam Koruma Sistemini Aktif Etmek İçin Şunu Dene** \`t/spam-koruma-aç\` (Aşırı Spamda Kullanıcıyı Banlar)
<:police1:848886750977589269> **Spam Koruma Sistemini Kapatmak İçin Şunu Dene** \`t/spam-koruma-kapat\`]
$color[#c77015]
  
  `
});

bot.command({
  name: "reklam-koruma",
  code: ` 
  $description[
<:police1:848886750977589269> **Reklam Koruma Sistemini Aktif Etmek İçin Şunu Dene** \`t/reklam-koruma-aç #Log Kanalı\`
<:police1:848886750977589269> **Reklam Koruma Sistemini Kapatmak İçin Şunu Dene** \`t/reklam-koruma-kapat\`
<:police1:848886750977589269> **Reklam Korumayı Bazı Kanallardan Devre-dışı Bırakmak İçin** \`t/reklam-koruma-yoksay ayarla/sıfırla\`]
$color[#c77015]
  
  `
});

bot.command({
  name: "küfür-koruma",
  code: ` 
  $description[
<:police1:848886750977589269> **Küfür Koruma Sistemini Aktif Etmek İçin Şunu Dene** \`t/küfür-koruma-aç #Log Kanalı\`
<:police1:848886750977589269> **Küfür Koruma Sistemini Kapatmak İçin Şunu Dene** \`t/küfür-koruma-kapat\`
<:police1:848886750977589269> **Küfür Korumayı Bazı Kanallardan Devre-dışı Bırakmak İçin** \`t/küfür-koruma-yoksay ayarla/sıfırla\`]
$color[#c77015]
  
  `
});
bot.command({
  name: "etiket-koruma",
  code: `
  $description[
<:police1:848886750977589269> **Etiket Koruma Sistemini Aktif Etmek İçin Şunu Dene** \`t/etiket aç\` (Sınırı Geçen Kullanıcı Sunucudan Banlanır Ve Dm Yoluyla Bir Mesaj Gider)
<:police1:848886750977589269> **Etiket Koruma Sisteminde Kaç Kişi Etiketleyince Yasaklanacağını Ayarlamak İçin** \`t/etiket sayı\`
<:police1:848886750977589269> **Etiket Koruma Sistemini Kapatmak İçin Şunu Dene** \`t/etiket kapat\`]
$color[#c77015]
  
  `
});
bot.command({
  name: "modlog-sistemi",
  code: ` 
  $description[
<:police1:848886750977589269> **Modlog Sistemini Açmak İçin** \`t/modlog-aç #Log Kanalı\`
<:police1:848886750977589269> **Modlog Sistemini Kapatmak İçin Şunu Dene** \`t/modlog-kapat\`

Modlog Ne İşe Yarar?
**Modlog Sistemini Kurarak Sunucudan Olanlardan Haberdar Olabilirsin**
**Modlogda Nelerden Haberdar Olabileceğin Şeyler**
<:police1:848886750977589269> 1. Oluşturulan Kanal
<:police1:848886750977589269> 2. Silinen Kanal
<:police1:848886750977589269> 3. Düzenlenen Kanal
<:police1:848886750977589269> 4. Oluşturulan Rol
<:police1:848886750977589269> 5. Silinen Rol
<:police1:848886750977589269> 6. Silinen Mesaj
<:police1:848886750977589269> 7: Düzenlenen Mesaj]
$color[#c77015]
`
});

bot.command({
  name: "$alwaysExecute",
  code: `
    $if[$getServerVar[linktespit]==1] 
$onlyIf[$checkContains[$getServerVar[linkdeaktif];$channelID]==true;{execute:linkengel}]
$onlyIf[$checkContains[$toLowercase[$message];https;discord.gg;discord.gift]==true;]
$else
    $deletecommand
    $channelSendMessage[$channelID;Bu sunucuda atılan linkler **Tiger** tarafından yasaklandı{delete:5s}]
    $useChannel[$getServerVar[reklamkoruma]]
    $description[
**Reklam Yapan Kişi** \`$username#$discriminator[$authorID] \`($authorID)
**Yaptığı Reklam** \`$message\`]
    $title[REKLAM UYARISI]
    $color[GREEN]
    $onlyIf[$checkContains[$toLowercase[$message];https;discord.gg;discord.gift;htt.p;ht.tp;h.ttp]==true;]
    $endif
    $onlyIf[$hasPerms[$authorID;admin]!=true;]
    $onlyIf[$getServerVar[reklamkoruma2]!=no;]
$onlyIf[$getUserVar[beyazliste;$authorID]!=true;]
    $suppressErrors[]
    
    `,
  nonPrefixed: true
});
bot.awaitedCommand({
  name: "linkengel",
  code: `
$deletecommand
$onlyBotPerms[managemessages;Mesajlar Yönet İznine Sahip Değilim :({delete:30s}]
$channelSendMessage[$channelID;Bu sunucuda atılan linkler **Tiger** tarafından yasaklandı{delete:5s}]
    $useChannel[$getServerVar[reklamkoruma]]
    $description[
**Reklam Yapan Kişi** \`$username#$discriminator[$authorID] \`($authorID)
**Yaptığı Reklam** \`$message\`]
    $title[REKLAM UYARISI]
    $color[GREEN]
    $onlyIf[$checkContains[$toLowercase[$message];https;discord.gg;discord.gift;htt.p;ht.tp;h.ttp]==true;]
    $onlyIf[$hasPerms[$authorID;admin]!=true;]
    $onlyIf[$getServerVar[reklamkoruma2]!=no;]
$onlyIf[$getUserVar[beyazliste;$authorID]!=true;]
$suppressErrors[]
`
});

bot.command({
  name: "reklam-koruma-yoksay",
  code: `
$if[$message[1]==ayarla]
$setServerVar[linktespit;1]
$setServerVar[linkdeaktif;$joinSplitText[ ]]
$description[Reklam Koruma Sistemi Artık Etiketlediğin Kanal(larda) Devredışı Olarak Bırakıldı]
$color[BLUE]
$textSplit[$djseval[message.mentions.channels.map(ch => ch.id).join(" ");yes]; ]
$onlyIf[$serverChannelExists[$replaceText[$replaceText[$checkCondition[$mentionedChannels[8]==];true;$channelID;-1];false;$mentionedChannels[8];-1]]==true;Kanal Bulunamadı]
$onlyIf[$serverChannelExists[$replaceText[$replaceText[$checkCondition[$mentionedChannels[7]==];true;$channelID;-1];false;$mentionedChannels[7];-1]]==true;Kanal Bulunamadı]
$onlyIf[$serverChannelExists[$replaceText[$replaceText[$checkCondition[$mentionedChannels[6]==];true;$channelID;-1];false;$mentionedChannels[6];-1]]==true;Kanal Bulunamadı]
$onlyIf[$serverChannelExists[$replaceText[$replaceText[$checkCondition[$mentionedChannels[5]==];true;$channelID;-1];false;$mentionedChannels[5];-1]]==true;Kanal Bulunamadı]
$onlyIf[$serverChannelExists[$replaceText[$replaceText[$checkCondition[$mentionedChannels[4]==];true;$channelID;-1];false;$mentionedChannels[4];-1]]==true;Kanal Bulunamadı]
$onlyIf[$serverChannelExists[$replaceText[$replaceText[$checkCondition[$mentionedChannels[3]==];true;$channelID;-1];false;$mentionedChannels[3];-1]]==true;Kanal Bulunamadı]
$onlyIf[$serverChannelExists[$replaceText[$replaceText[$checkCondition[$mentionedChannels[2]==];true;$channelID;-1];false;$mentionedChannels[2];-1]]==true;Kanal Bulunamadı]
$onlyIf[$serverChannelExists[$replaceText[$replaceText[$checkCondition[$mentionedChannels[1]==];true;$channelID;-1];false;$mentionedChannels[1];-1]]==true;Kanal Bulunamadı]
$onlyIf[$mentionedChannels[8]==;En Fazla 8 Kanalda Devredışı Bırakabilirsin!]
$onlyIf[$mentionedChannels[1]!=;Kanal Etiketle!]
$onlyIf[$getservervar[linkdeaktif]==;Zaten Ayarlanmış!]
$elseIf[$message[1]==sıfırla]
$setServerVar[linktespit;0]
$resetServerVar[linkdeaktif]
$description[Reklam Koruma Sisteminda Ayarlanan Kanallar Sıfırlandı]
$color[BLUE]
$textSplit[$djseval[message.mentions.channels.map(ch => ch.id).join(" ");yes]; ]
$onlyIf[$getservervar[linkdeaktif]!=;Zaten Hiçbir Kanalda Yoksayılmamış]
$endelseIf
$endif
$onlyIf[$getServerVar[reklamkoruma2]!=no;Reklam Koruma Açık Değil!]
$onlyPerms[manageserver;Yetkin Yok !]
$suppressErrors[]
$onlyIf[$getGlobalUserVar[bakım]!=true;{description:Şuanda Bakım Modum Açık Daha Sonra Tekrar Deneyin
> Bakım Sebebi **$getGlobalUserVar[bakımsbp]**
[Destek Sunucum](https://discord.gg/UATm97gZeg) }{color:GREEN}{delete:5s}
$onlyIf[$getGlobalUserVar[karaliste;$authorid]!=true;{description:Karalisteye Alındığın İçin Komutları Kullanamazsın
  **İletişim**
  [Destek Sunucum](https://discord.gg/Q76EzABKFA)
  [Canı Sıkılan GhOsT.M8.#6520](https://discord.com/users/573504001732116490) }{color:BLUE}{delete:3s}]
`
});

bot.updateCommand({
  channel: "$channelID",
  code: `
$if[$getServerVar[linktespit]==1] 
$onlyIf[$checkContains[$getServerVar[linkdeaktif];$channelID]==true;{execute:linkengel}]
$onlyIf[$checkContains[$toLowercase[$message];https;discord.gg;discord.gift]==true;]
$else
$deletecommand
$channelsendMessage[$channelid;Mesajını editlesen bile engellerim!{delete:5s}]
$useChannel[$getServerVar[reklamkoruma]]
    $description[
**Reklam Yapan Kişi** \`$username#$discriminator[$authorID] \`($authorID)
**Yaptığı Reklam** \`$message\`]
    $title[REKLAM UYARISI]
    $color[GREEN]
$onlyIf[$checkContains[$toLowercase[$message];https;discord.gg;discord.gift;htt.p;ht.tp;h.ttp]==true;]
$endif
$onlyIf[$hasAnyPerm[$authorId;admin]==false;]
$onlyIf[$getservervar[linkengel]==1;]
$suppressErrors[]
`
});

bot.command({
  name: "$alwaysExecute",
  code: `
$if[$getServerVar[kftespit]==1] 
$onlyIf[$checkContains[$getServerVar[kfdeaktif];$channelID]==true;{execute:engelkf}]
$onlyIf[$checkContains[$toLowercase[$message];amk;yaraq;aq;sikik;orospu;ananı;oç;aptal;beyinsiz;yarrak;bitch;yarr;yavvak;amq;sq;sg;siktir;siktir git;siki;sikiş;amcık;penis;göt;piç;orzbu]==true;]
$else
    $deletecommand
    $channelSendMessage[$channelID;Bu sunucuda edilen küfürler **Tiger** tarafından yasaklanmıştır{delete:5s}]
    $useChannel[$getServerVar[kfkoruma]]
    $description[
**Küfür Eden Kişi** \`$username#$discriminator[$authorID] \`($authorID)
**Ettiği Küfür** \`$message\`]
    $title[KÜFÜR UYARISI]
    $color[RED]
    $onlyIf[$checkContains[$toLowercase[$message];amk;yaraq;aq;sikik;orospu;ananı;oç;aptal;beyinsiz;yarrak;bitch;yarr;yavvak;amq;sq;sg;siktir;siktir git;siki;sikiş;amcık;penis;göt;piç;orzbu]==true;]
    $endif
$onlyIf[$hasPerms[$authorID;admin]!=true;]
    $onlyIf[$getServerVar[kfkoruma2]!=no;]
$onlyIf[$getUserVar[beyazliste;$authorID]!=true;]
$suppressErrors[]
 `,
  nonPrefixed: true
});
bot.awaitedCommand({
  name: "engelkf",
  code: `
$deletecommand
$onlyBotPerms[managemessages;Mesajlar Yönet İznine Sahip Değilim :({delete:30s}]
$channelSendMessage[$channelID;Bu sunucuda edilen küfürler **Tiger** tarafından yasaklanmıştır{color:RED}{delete:5s}]
    $useChannel[$getServerVar[kfkoruma]]
    $description[
**Küfür Eden Kişi** \`$username#$discriminator[$authorID] \`($authorID)
**Ettiği Küfür** \`$message\`]
    $title[KÜFÜR UYARISI]
    $color[RED]
    $onlyIf[$checkContains[$toLowercase[$message];amk;yaraq;aq;sikik;orospu;ananı;oç;aptal;beyinsiz;yarrak;bitch;yarr;yavvak;amq;sq;sg;siktir;siktir git;siki;sikiş;amcık;penis;göt;piç;orzbu]==true;]
$onlyIf[$hasPerms[$authorID;admin]!=true;]
    $onlyIf[$getServerVar[kfkoruma2]!=no;]
$onlyIf[$getUserVar[beyazliste;$authorID]!=true;]
$suppressErrors[]

`
});
bot.command({
  name: "küfür-koruma-yoksay",
  code: `
$if[$message[1]==ayarla]
$setServerVar[kftespit;1]
$setServerVar[kfdeaktif;$joinSplitText[ ]]
$description[Küfür Koruma Sistemi Artık Etiketlediğin Kanal(larda) Devredışı Olarak Bırakıldı]
$color[BLUE]
$textSplit[$djseval[message.mentions.channels.map(ch => ch.id).join(" ");yes]; ]
$onlyIf[$serverChannelExists[$replaceText[$replaceText[$checkCondition[$mentionedChannels[8]==];true;$channelID;-1];false;$mentionedChannels[8];-1]]==true;Kanal Bulunamadı]
$onlyIf[$serverChannelExists[$replaceText[$replaceText[$checkCondition[$mentionedChannels[7]==];true;$channelID;-1];false;$mentionedChannels[7];-1]]==true;Kanal Bulunamadı]
$onlyIf[$serverChannelExists[$replaceText[$replaceText[$checkCondition[$mentionedChannels[6]==];true;$channelID;-1];false;$mentionedChannels[6];-1]]==true;Kanal Bulunamadı]
$onlyIf[$serverChannelExists[$replaceText[$replaceText[$checkCondition[$mentionedChannels[5]==];true;$channelID;-1];false;$mentionedChannels[5];-1]]==true;Kanal Bulunamadı]
$onlyIf[$serverChannelExists[$replaceText[$replaceText[$checkCondition[$mentionedChannels[4]==];true;$channelID;-1];false;$mentionedChannels[4];-1]]==true;Kanal Bulunamadı]
$onlyIf[$serverChannelExists[$replaceText[$replaceText[$checkCondition[$mentionedChannels[3]==];true;$channelID;-1];false;$mentionedChannels[3];-1]]==true;Kanal Bulunamadı]
$onlyIf[$serverChannelExists[$replaceText[$replaceText[$checkCondition[$mentionedChannels[2]==];true;$channelID;-1];false;$mentionedChannels[2];-1]]==true;Kanal Bulunamadı]
$onlyIf[$serverChannelExists[$replaceText[$replaceText[$checkCondition[$mentionedChannels[1]==];true;$channelID;-1];false;$mentionedChannels[1];-1]]==true;Kanal Bulunamadı]
$onlyIf[$mentionedChannels[8]==;En Fazla 8 Kanalda Devredışı Bırakabilirsin!]
$onlyIf[$mentionedChannels[1]!=;Kanal Etiketle!]
$onlyIf[$getservervar[kfdeaktif]==;Zaten Ayarlanmış!]
$elseIf[$message[1]==sıfırla]
$setServerVar[kftespit;0]
$resetServerVar[kfdeaktif]
$description[Küfür Koruma Sisteminda Ayarlanan Kanallar Sıfırlandı]
$color[BLUE]
$textSplit[$djseval[message.mentions.channels.map(ch => ch.id).join(" ");yes]; ]
$onlyIf[$getservervar[kfdeaktif]!=;Zaten Hiçbir Kanalda Yoksayılmamış]
$endelseIf
$endif
$onlyIf[$getServerVar[kfkoruma2]!=no;Küfür Koruma Açık Değil!]
$onlyPerms[manageserver;Yetkin Yok !]
$onlyIf[$getGlobalUserVar[bakım]!=true;{description:Şuanda Bakım Modum Açık Daha Sonra Tekrar Deneyin
> Bakım Sebebi **$getGlobalUserVar[bakımsbp]**
[Destek Sunucum](https://discord.gg/UATm97gZeg) }{color:GREEN}{delete:5s}
$onlyIf[$getGlobalUserVar[karaliste;$authorid]!=true;{description:Karalisteye Alındığın İçin Komutları Kullanamazsın
  **İletişim**
  [Destek Sunucum](https://discord.gg/Q76EzABKFA)
  [Canı Sıkılan GhOsT.M8.#6520](https://discord.com/users/573504001732116490) }{color:BLUE}{delete:3s}]
`
});
bot.updateCommand({
  channel: "$channelID",
  code: `
$if[$getServerVar[kftespit]==1] 
$onlyIf[$checkContains[$getServerVar[kfdeaktif];$channelID]==true;{execute:engelkf}]
$onlyIf[$checkContains[$toLowercase[$message];amk;yaraq;aq;sikik;orospu;ananı;oç;aptal;beyinsiz;yarrak;bitch;yarr;yavvak;amq;sq;sg;siktir;siktir git;siki;sikiş;amcık;penis;göt;piç;orzbu]==true;]
$else
$deletecommand
$channelSendMessage[$channelid;Mesajını editlesen bile engellerim!{delete:5s}]
$onlyIf[$checkContains[$toLowercase[$message];amk;yaraq;aq;sikik;orospu;ananı;oç;aptal;beyinsiz;yarrak;bitch;yarr;yavvak;amq;sq;sg;siktir;siktir git;siki;sikiş;amcık;penis;göt;piç;orzbu]==true;]
$useChannel[$getServerVar[kfkoruma]]
    $description[
**Küfür Eden Kişi** \`$username#$discriminator[$authorID] \`($authorID)
**Ettiği Küfür** \`$message\`]
    $title[KÜFÜR UYARISI]
    $color[RED]
$endif
$onlyIf[$hasAnyPerm[$authorId;admin]==false;]
$onlyIf[$getservervar[kfengel]==1;]
$suppressErrors[]
`
});

bot.onPresenceUpdate();
bot.onChannelDelete();
bot.onChannelCreate();
bot.onChannelUpdate();
bot.onRoleCreate();
bot.onRoleDelete();
bot.onLeave();
bot.onJoined();
bot.onMessageUpdate();
bot.onMessageDelete();
bot.onBanAdd();
bot.roleDeleteCommand({
  channel: "$getServerVar[modlog]",
  code: `$title[ROL SİLİNDİ]
        $description[
**Silinen Rol** \`$oldRole[name]\`]
    $color[RED]
$suppressErrors[]`
});
bot.roleCreateCommand({
  channel: "$getServerVar[modlog]",
  code: `$title[ROL OLUŞTURULDU]
        $description[
**Oluşturulan Rol** \`$newRole[name]\` ($roleID[$newRole[name]])
**Rol İzinleri** \`$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$rolePerms[$roleID[$newRole[name]];|];Administrator;Yönetici;-1];Manage Guild;Sunucuyu Yönet;-1];Kick Members;Üyeleri At;-1];Create Instant Invite;Davet Oluştur;-1];Ban Members;Üyeleri Yasakla;-1];Manage Channels;Kanalları Yönet;-1];Add Reactions;Tepki Ekle;-1];View Audit Log;Denetim Kaydını Görüntüle;-1];View Channel;Kanalları Görüntüle;-1];Send Messages;Mesaj Gönder;-1];Manage Messages;Mesajları Yönet;-1];Embed Links;Gömülü Bağlantı Yerleştir;-1];Attach Files;Dosya Ekle;-1];Read Message History;Mesaj Geçmişini Görüntüle;-1];Mention Everyone;Herkesten Bahset;-1];View Guild Insights;Sunucu İstatistiklerini Görüntüle;-1];Connect;Bağlan;-1];Speak;Konuş;-1];Mute Members;Üyeleri Sustur;-1];Deafen Members;Üyeleri Sağırlaştır;-1];Move Members;Üyeleri Taşı;-1];Manage Nicknames;Kullanıcı Adlarını Yönet;-1];Manage Roles;Rolleri Yönet;-1];Manage Webhooks;Webhook'ları Yönet;-1];Manage Emojis;Emojileri Yönet;-1]\`
**Rolün Pozisyonu** \`$rolePosition[$roleID[$newRole[name]]]\`]
    $color[GREEN]
$suppressErrors[]`
});
bot.channelCreateCommand({
  channel: "$getServerVar[modlog]",
  code: `$title[KANAL OLUŞTURULDU]
        $description[
**Oluşturulan Kanal** \`$newChannel[name]\` ($channelID[$newChannel[name]])]
    $color[GREEN]
$onlyIf[$getServerVar[modlog2]!=false;]
$suppressErrors[]`
});
bot.channelDeleteCommand({
  channel: "$getServerVar[modlog]",
  code: `$title[KANAL SİLİNDİ]
        $description[
**Silinen Kanal** \`$oldChannel[name]\`]
    $color[RED]
$suppressErrors[]`
});
bot.channelUpdateCommand({
  channel: "$getServerVar[modlog]",
  code: `$title[KANAL DÜZENLENDİ]
        $description[
**Kanalın Eski İsmi** \`$oldChannel[name]\`
 **Kanalın Yeni İsmi** \`$newChannel[name]\`]
    $color[RED]
$suppressErrors[]`
});
bot.updateCommand({
  channel: "$getServerVar[modlog]",
  code: `
$description[
**Eski Mesaj** \`
$oldMessage\`

**Düzenlenen Mesaj** \`$message\`

**Mesajın Düzenlendiği Kanal** <#$channelUsed>]
$color[GREEN]
$title[$username#$discriminator[$authorID] MESAJINI DÜZENLEDİ]
 $onlyIf[$isBot[$authorID]!=true;]
$suppressErrors[]`
});
bot.deletedCommand({
  channel: "$getServerVar[modlog]",
  code: `
$description[
**Silinen Mesaj**
\`$message\`

**Mesajın Silindiği Kanal** <#$channelUsed>
]
$title[$username#$discriminator[$authorID] MESAJINI SİLDİ]
$color[RED]
$onlyIf[$isBot[$authorID]!=true;]
$suppressErrors[]
`
});

bot.deletedCommand({
  channel: "845648494379270145",
  code: `
$setServerVar[snipek;$channelUsed]
$setServerVar[snipe;$message]
$setServerVar[snipekk;$authorID]
$suppressErrors[]
`
});

bot.command({
  name: "snipe",
  code: `
  $color[RANDOM]
  $description[
  **En Son Silinen Mesaj** \`$getServerVar[snipe]\` (<@$getServerVar[snipekk]>)
  **Mesajın Silindiği Kanal** <#$getServerVar[snipek]>
  ]
  $onlyIf[$hasPerms[$authorID;admin]!=false;Yönetici İznin Bulunmamaktadır]
$suppressErrors[]
  `
});

bot.joinCommand({
  channel: "$getServerVar[mutelog]",
  code: `
$title[MUTELENDİ]
$description[
**Mutelenen Kişi** \`$username#$discriminator[$authorID] \`($authorID)
**Muteleyen Kişi** \`Tiger Guard#0088 (848883103446335498)\`
**Süre** \`Sınırsız\`
**Sebep** \`Muteliyken Sunucdan Çık Gir Yapmak\`]
$color[GREEN]

        $giveRoles[$authorID;$getServerVar[muterol]]
        
        $onlyIf[$getUserVar[mutedurum;$authorID]!=false;]
$suppressErrors[]
        `
});

bot.command({
  name: "moderasyon",
  aliases: ["mod"],
  code: `
$reactionCollector[$splitText[1];everyone;1m;🔄,⏩;geri,mod;no]
$textSplit[$sendMessage[{description:<:police1:848886750977589269> **Mute Log Ayarlama** \`t/mutelog-ayarla #Log\`
<:police1:848886750977589269> **Mute Rol Ayarlama** \`t/muterol-ayarla @Rol\`
<:police1:848886750977589269> **Mute Yetkili Ayarlama** \`t/muteyetkili-ayarla @Rol\`
<:police1:848886750977589269> **Sınırsız Muteleme** \`t/mute @Kişi Sebep\`
<:police1:848886750977589269> **Süreli Muteleme** \`t/tempmute @Kişi süre sebep\`
<:police1:848886750977589269> **Mute Açma** \`t/unmute @Kişi\`
<:police1:848886750977589269> Not: Muteliyken Sunucudan Çık Gir Yapanlara Mute Rolü Tekrar Verilir!
<:police1:848886750977589269> **Mute Log Sıfırlama** \`t/mutelog-sıfırla\`
<:police1:848886750977589269> **Mute Rol Sıfırlama** \`t/muterol-sıfırla\`
<:police1:848886750977589269> **Mute Yetkili Sıfırlama** \`t/muteyetkili-sıfırla\`

<:police1:848886750977589269> **Belirttiğiniz Kadar Mesaj Siler** \`t/sil\`
<:police1:848886750977589269> **Son Silinen Mesajı Gösterir** \`t/snipe\`
<:police1:848886750977589269> **Modlog Sistemini Gösterir** \`t/modlog-sistemi\`
<:police1:848886750977589269> **Etiketlediğiniz Kişiyi Sunucudan Yasaklar** \`t/ban\`
<:police1:848886750977589269> **Girdiğin İD deki Kişiyi Sunucudan Yasaklar** \`t/forceban\`
<:police1:848886750977589269> **Girdiğin İD deki Kişinin Yasaklamasını Kaldırır** \`t/unban\`}{color:#c77015}{footer:Sayfa 1/2};yes]; ]
  
  `
});

bot.awaitedCommand({
  name: "mod",
  code: `
  $editMessage[$message[1];{description:<:police1:848886750977589269> **Sunucuya Katılan Üyelere Otorol Vermek İçin** \`t/otorol-ayarla-üye @Rol #log\`
<:police1:848886750977589269> **Sunucuya Eklenen Botlara Otorol Vermek İçin** \`t/otorol-ayarla-bot @Rol #log\`
<:police1:848886750977589269> **Sayaç Sistemini Kurmak İçin** \`t/sayaç-ayarla Hedef #log\`
<:police1:848886750977589269> **Otorol Üye Sıfırlama** \`t/otorol-üye-sıfırla\`
<:police1:848886750977589269> **Otorol Bot Sıfırlama** \`t/otorol-bot-sıfırla\`
<:police1:848886750977589269> **Sayaç Kapatma** \`t/sayaç-kapat\`
<:police1:848886750977589269> **Emoji Eklemek İçin** \`t/emoji-ekle :emoji: emojiİsmi\`}{color:#c77015}{footer:Moderasyon Sayfa 2/2}]
 `
});
bot.awaitedCommand({
  name: "geri",
  code: `
  $editMessage[$message[1];{description:<:police1:848886750977589269> **Mute Log Ayarlama** \`t/mutelog-ayarla #Log\`
<:police1:848886750977589269> **Mute Rol Ayarlama** \`t/muterol-ayarla @Rol\`
<:police1:848886750977589269> **Mute Yetkili Ayarlama** \`t/muteyetkili-ayarla @Rol\`
<:police1:848886750977589269> **Sınırsız Muteleme** \`t/mute @Kişi Sebep\`
<:police1:848886750977589269> **Süreli Muteleme** \`t/tempmute @Kişi süre sebep\`
<:police1:848886750977589269> **Mute Açma** \`t/unmute @Kişi\`
<:police1:848886750977589269> Not: Muteliyken Sunucudan Çık Gir Yapanlara Mute Rolü Tekrar Verilir!
<:police1:848886750977589269> **Mute Log Sıfırlama** \`t/mutelog-sıfırla\`
<:police1:848886750977589269> **Mute Rol Sıfırlama** \`t/muterol-sıfırla\`
<:police1:848886750977589269> **Mute Yetkili Sıfırlama** \`t/muteyetkili-sıfırla\`

<:police1:848886750977589269> **Belirttiğiniz Kadar Mesaj Siler** \`t/sil\`
<:police1:848886750977589269> **Son Silinen Mesajı Gösterir** \`t/snipe\`
<:police1:848886750977589269> **Modlog Sistemini Gösterir** \`t/modlog-sistemi\`
<:police1:848886750977589269> **Etiketlediğiniz Kişiyi Sunucudan Yasaklar** \`t/ban\`
<:police1:848886750977589269> **Girdiğin İD deki Kişiyi Sunucudan Yasaklar** \`t/forceban\`
<:police1:848886750977589269> **Girdiğin İD deki Kişinin Yasaklamasını Kaldırır** \`t/unban\`
<:police1:848886750977589269> **Etiketlenen Kişiyi Sunucudan Kickler** \`t/kick\`}{color:#c77015} {footer:Moderasyon Sayfa 1/2}]
 `
});

bot.command({
  name: "kullanıcı",
  aliases: ["ana-komutlar"],
  code: `
$description[<:police1:848886750977589269> **Beni Sunucuna Davet Etmek İçin** \`t/davet\`
<:police1:848886750977589269>  **Sunucudaki Yetkilerini Öğrenmek İçin** \`t/yetkilerim\`
<:police1:848886750977589269> **İstatistiklerime Erişmek İçin** \`t/istatistik\`
<:police1:848886750977589269> **Discord Hesabınız Hakkında Bilgi Verir** \`t/profil\`
<:police1:848886750977589269> **Sunucudan Yasaklananları Görmek İçin** \`t/yasaklılar\`
<:police1:848886750977589269> **Ayarlanan Sistemleri Görmek için** \`t/ayarlar\`
<:police1:848886750977589269> **Botta Bir Sorun Yaşarsanız** \`t/bug-bildir\`
]
$color[ORANGE]

`
});

bot.command({
  name: "çal",
  aliases: ["play"],
  code: `
$suppressErrors[]
$description[
$get[şarkı] Çalmaya Başladı [<@$authorID>]
$color[RED]
$let[şarkı;$playSong[$message;...;yes;yes;\`$message\`İsimli Müzik Bulunamadı!]]
$onlyIf[$voiceID!=;Lütfen Bir Ses Kanalına Gir]
$argsCheck[>1;Bir Şarkı İsmi Gir!]
$onlyIf[$getGlobalUserVar[bakım]!=true;{description:Şuanda Bakım Modum Açık Daha Sonra Tekrar Deneyin
> Bakım Sebebi **$getGlobalUserVar[bakımsbp]**
[Destek Sunucum](https://discord.gg/UATm97gZeg) }{color:GREEN}{delete:5s}
$onlyIf[$getGlobalUserVar[karaliste;$authorid]!=true;{description:Karalisteye Alındığın İçin Komutları Kullanamazsın
  **İletişim**
  [Destek Sunucum](https://discord.gg/Q76EzABKFA)
  [Canı Sıkılan GhOsT.M8.#6520](https://discord.com/users/573504001732116490) }{color:BLUE}{delete:3s}]`
});
bot.command({
  name: "durdur",
  aliases: ["stop", "pause"],
  code: `
$pauseSong
$onlyIf[$voiceID[$clientID]!=;]
$onlyIf[$voiceID!=;Lütfen Bir Ses Kanalına Gir]
$description[Müzik Durduruldu [<@$authorID>]]
$color[RED]
$suppressErrors[]
$onlyIf[$getGlobalUserVar[bakım]!=true;{description:Şuanda Bakım Modum Açık Daha Sonra Tekrar Deneyin
> Bakım Sebebi **$getGlobalUserVar[bakımsbp]**
[Destek Sunucum](https://discord.gg/UATm97gZeg) }{color:GREEN}{delete:5s}
$onlyIf[$getGlobalUserVar[karaliste;$authorid]!=true;{description:Karalisteye Alındığın İçin Komutları Kullanamazsın
  **İletişim**
  [Destek Sunucum](https://discord.gg/Q76EzABKFA)
  [Canı Sıkılan GhOsT.M8.#6520](https://discord.com/users/573504001732116490) }{color:BLUE}{delete:3s}]
`
});

bot.command({
  name: "tekrarla",
  aliases: ["loop"],
  code: `
$let[geç;$skipSong]
$let[şarkı;$playSong[$songInfo[title];...;yes;yes;\`$songInfo[title]\` İsimli Müzik Bulunamadı]]
$onlyIf[$voiceID[$clientID]!=;Herhan gibi Bir Şarkı Çalmıyor!]
$onlyIf[$voiceID!=;Lütfen Bir Ses Kanalına Gir]
$description[Müzik Tekrarlandı! [<@$authorID>]]
$color[RED]
$suppressErrors[Herhan gibi Bir Şarkı Çalmıyor!]
$onlyIf[$getGlobalUserVar[bakım]!=true;{description:Şuanda Bakım Modum Açık Daha Sonra Tekrar Deneyin
> Bakım Sebebi **$getGlobalUserVar[bakımsbp]**
[Destek Sunucum](https://discord.gg/UATm97gZeg) }{color:GREEN}{delete:5s}
$onlyIf[$getGlobalUserVar[karaliste;$authorid]!=true;{description:Karalisteye Alındığın İçin Komutları Kullanamazsın
  **İletişim**
  [Destek Sunucum](https://discord.gg/Q76EzABKFA)
  [Canı Sıkılan GhOsT.M8.#6520](https://discord.com/users/573504001732116490) }{color:BLUE}{delete:3s}]
`
});

bot.command({
  name: "geç",
  aliases: ["skip"],
  code: `
$let[geç;$skipSong]
$onlyIf[$voiceID[$clientID]!=;Herhan gibi Bir Şarkı Çalmıyor!]
$onlyIf[$voiceID!=;Lütfen Bir Ses Kanalına Gir]
$description[Şarkı Geçildi [<@$authorid>]
$color[RED]
$suppressErrors[Herhan gibi Bir Şarkı Çalmıyor!]
$onlyIf[$getGlobalUserVar[bakım]!=true;{description:Şuanda Bakım Modum Açık Daha Sonra Tekrar Deneyin
> Bakım Sebebi **$getGlobalUserVar[bakımsbp]**
[Destek Sunucum](https://discord.gg/UATm97gZeg) }{color:GREEN}{delete:5s}
$onlyIf[$getGlobalUserVar[karaliste;$authorid]!=true;{description:Karalisteye Alındığın İçin Komutları Kullanamazsın
  **İletişim**
  [Destek Sunucum](https://discord.gg/Q76EzABKFA)
  [Canı Sıkılan GhOsT.M8.#6520](https://discord.com/users/573504001732116490) }{color:BLUE}{delete:3s}]`
});

bot.command({
  name: "çık",
  aliases: ["leave"],
  code: `
$djsEval[message.member.voice.channel.leave();]
$onlyIf[$voiceID[$clientID]!=;Bir Ses Kanalında Değilim!]
$onlyIf[$voiceID!=;Lütfen Bir Ses Kanalına Gir]
$description[Sesli Kanaldan Çıktım [<@$authorid>]]
$color[RED]
$suppressErrors[Hata Oluştu]
$onlyPerms[managechannels;\`Kanalları Yönet\` İznine Sahip Değilsin]
$onlyIf[$getGlobalUserVar[bakım]!=true;{description:Şuanda Bakım Modum Açık Daha Sonra Tekrar Deneyin
> Bakım Sebebi **$getGlobalUserVar[bakımsbp]**
[Destek Sunucum](https://discord.gg/UATm97gZeg) }{color:GREEN}{delete:5s}
$onlyIf[$getGlobalUserVar[karaliste;$authorid]!=true;{description:Karalisteye Alındığın İçin Komutları Kullanamazsın
  **İletişim**
  [Destek Sunucum](https://discord.gg/Q76EzABKFA)
  [Canı Sıkılan GhOsT.M8.#6520](https://discord.com/users/573504001732116490) }{color:BLUE}{delete:3s}]`
});

bot.command({
  name: "devam",
  aliases: ["resume"],
  code: `
$resumeSong
$onlyIf[$voiceID[$clientID]!=;Herhan gibi Bir Şarkı Çalmıyor!]
$onlyIf[$voiceID!=;Lütfen Bir Ses Kanalına Gir]
$suppressErrors[Herhan gibi Bir Şarkı Çalmıyor!]
$description[Müzik Devam Ettirildi! [<@$authorID>]]
$color[RED]
$onlyIf[$getGlobalUserVar[bakım]!=true;{description:Şuanda Bakım Modum Açık Daha Sonra Tekrar Deneyin
> Bakım Sebebi **$getGlobalUserVar[bakımsbp]**
[Destek Sunucum](https://discord.gg/UATm97gZeg) }{color:GREEN}{delete:5s}
$onlyIf[$getGlobalUserVar[karaliste;$authorid]!=true;{description:Karalisteye Alındığın İçin Komutları Kullanamazsın
  **İletişim**
  [Destek Sunucum](https://discord.gg/Q76EzABKFA)
  [Canı Sıkılan GhOsT.M8.#6520](https://discord.com/users/573504001732116490) }{color:BLUE}{delete:3s}]`
});

bot.musicStartCommand({
  channel: "$channelID",
  code: ``
});

bot.musicEndCommand({
  channel: "$channelID",
  code: `Şarkı Çalmadığı Veya Kanalda Kimse Olmadığı İçin Kanaldan Çıktım`
});

bot.command({
  name: "müzik",
  code: `
  $description[
<a:dj:849973260116033556> **Müzik Çalmak İçin** \`t/çal/play\`
<a:dj:849973260116033556> **Müziği Tekrarlamak İçin** \`t/tekrarla/loop\`
<a:dj:849973260116033556> **Müziği Durdurmak İçin** \`t/durdur/pause\`
<a:dj:849973260116033556> **Müziği Başlatmak İçin** \`t/devam/resume\`
<a:dj:849973260116033556> **Müziği Geçmek İçin** \`t/geç/skip\`
<a:dj:849973260116033556> **Müziğin Sesini Ayarlamak İçin** \`t/ses/volume\`
<a:dj:849973260116033556> **Müziği Kapatmak İçin** \`t/çık/leave\`]
$color[#c77015]
`
});

bot.command({
  name: "<@!854971946038984714>",
  code: `
$description[Burdayım Merak Etme Sunucudaki Prefixim **$getServerVar[prefix]**]
$color[GREEN]
  `,
  nonPrefixed: true
});

bot.command({
  name: "<@854971946038984714>",
  code: `
$description[Burdayım Merak Etme Sunucudaki Prefixim **$getServerVar[prefix]**]
$color[GREEN]
  `,
  nonPrefixed: true
});

bot.updateCommand({
  channel: "$channelID",
  code: `
$deletecommand
    $channelSendMessage[$channelID;**Bu sunucuda atılan linkler **Tiger** tarafından yasaklandı!]
    $useChannel[$getServerVar[reklamkoruma]]
    $description[
**Reklam Yapan Kişi** \`$username#$discriminator[$authorID] \`($authorID)
**Yaptığı Reklam** \`$message\`]
    $title[REKLAM UYARISI]
    $color[GREEN]
    $onlyIf[$checkContains[$toLowercase[$message];https;discord.gg;discord.gift]==true;]
    $onlyIf[$hasPerms[$authorID;admin]!=true;]
    $onlyIf[$getServerVar[reklamkoruma2]!=no;]
$onlyIf[$getUserVar[beyazliste;$authorID]!=true;]
$suppressErrors[]
`
});

bot.command({
  name: "$alwaysExecute",
  code: `

$onlyIf[$hasPerms[$authorID;admin]!=true;]
    $onlyIf[$getServerVar[spamkoruma2]!=no;]
$onlyIf[$getUserVar[beyazliste;$authorID]!=true;]
$setUserVar[spamkorumasayı;$sum[$getUserVar[spamkorumasayı];1]]
$suppressErrors[]
`
});
bot.command({
  name: "$alwaysExecute",
  code: `

$onlyIf[$hasPerms[$authorID;admin]!=true;]
    $onlyIf[$getServerVar[spamkoruma2]!=no;]
$onlyIf[$getUserVar[beyazliste;$authorID]!=true;]
$setUserVar[spamkorumasayı;$sum[$getUserVar[spamkorumasayı];1]]
$suppressErrors[]

`
});
bot.command({
  name: "$alwaysExecute",
  code: `

$onlyIf[$hasPerms[$authorID;admin]!=true;]
    $onlyIf[$getServerVar[spamkoruma2]!=no;]
$onlyIf[$getUserVar[beyazliste;$authorID]!=true;]
$setUserVar[spamkorumasayı;$sum[$getUserVar[spamkorumasayı];1]]
$suppressErrors[]

`
});
bot.command({
  name: "$alwaysExecute",
  code: `
$onlyIf[$hasPerms[$authorID;admin]!=true;]
    $onlyIf[$getServerVar[spamkoruma2]!=no;]
$onlyIf[$getUserVar[beyazliste;$authorID]!=true;]
$if[$getUserVar[spamkorumasayı]==5]
<@$authorID> Bu Sunucu **Tiger** Tarafından Korunuyor Spam Yapmaya Devam Edersen Banlanacaksın! [1/3]
$deleteIn[5s]
$setUserVar[spamkorumasayı;$sum[$getUserVar[spamkorumasayı];1]]
$endif
$suppressErrors[]

`
});

bot.command({
  name: "$alwaysExecute",
  code: `

$onlyIf[$hasPerms[$authorID;admin]!=true;]
    $onlyIf[$getServerVar[spamkoruma2]!=no;]
$onlyIf[$getUserVar[beyazliste;$authorID]!=true;]
$setUserVar[spamkorumasayı;0]
$wait[15s]
$suppressErrors[]
`
});
bot.command({
  name: "$alwaysExecute",
  code: `
$onlyIf[$hasPerms[$authorID;admin]!=true;]
    $onlyIf[$getServerVar[spamkoruma2]!=no;]
$onlyIf[$getUserVar[beyazliste;$authorID]!=true;]
$if[$getUserVar[spamkorumasayı]==7]
<@$authorID> Bu Sunucu **Tiger** Tarafından Korunuyor Spam Yapmaya Devam Edersen Banlanacaksın! [2/3]
$deleteIn[5s]
$setUserVar[spamkorumasayı;$sum[$getUserVar[spamkorumasayı];1]]
$endif
$suppressErrors[]
`
});

bot.command({
  name: "$alwaysExecute",
  code: `
$onlyIf[$hasPerms[$authorID;admin]!=true;]
    $onlyIf[$getServerVar[spamkoruma2]!=no;]
$onlyIf[$getUserVar[beyazliste;$authorID]!=true;]
$if[$getUserVar[spamkorumasayı]==9]
$setUserVar[spamkorumasayı;0]
<@$authorID> Bu Sunucu **Tiger**Tarafından Korunuyor Spam Yapmaya Devam Edersen Banlanacaksın! [3/3]
$deleteIn[5s]
$ban[$authorid]
$clear[20;$authorid]
$endif
$suppressErrors[]
`
});

bot.botJoinCommand({
  channel: "$randomChannelID",
  code: `Beni Sunucuna Eklediğin İçin Teşekkürler Komutlarımı Görmek İçin **t/yardım**
$channelSendMessage[850428910213660683;
{author:Bir Sunucuya Eklendim !}
{thumbnail:$replaceText[$serverIcon;null;https://cdn.discordapp.com/attachments/788433498158399488/794897686616080384/indir_1.png;-1]}
{description:
  **Eklendiğim Sunucu** [$serverName\\]($getBotInvite)
  **Sunucu Sahibi** \`$username[$ownerID]#$discriminator[$ownerID]\`
  **Sunucudaki Üye Sayısı** \`$membersCount\`}{color:#277ecd}{footer: }
]
`
});
bot.onGuildJoin();

bot.botLeaveCommand({
  channel: "850428950122463232",
  code: `
$author[Sunucudan Atıldım]
$thumbnail[$replaceText[$serverIcon;null;https://cdn.discordapp.com/attachments/788433498158399488/794897686616080384/indir_1.png;-1]]
$description[
  **Atıldığım Sunucu** [$serverName\\]($getBotInvite)
  **Sunucu Sahibi** \`$username[$ownerID]#$discriminator[$ownerID]\`
  **Sunucudaki Üye Sayısı** \`$membersCount\`]
  $color[BLUE]`
});
bot.onGuildLeave();

bot.command({
  name: "ses",
  aliases: ["volume"],
  code: `
$volume[$message]
$onlyIf[$voiceID[$clientID]!=;]
$onlyIf[$voiceID!=;]
$description[Müziğin Sesi $message Olarak Ayarlandı [<@$authorid>]]
$color[RED]
$suppressErrors[]
$onlyIf[$message<=100;Maximum 100 Olarak Auarlanabilir]
$onlyIf[$isNumber[$message]!=false;]
$argsCheck[1;1-100 Arası Bir Sayı Gir]
$onlyIf[$getGlobalUserVar[bakım]!=true;{description:Şuanda Bakım Modum Açık Daha Sonra Tekrar Deneyin
> Bakım Sebebi **$getGlobalUserVar[bakımsbp]**
[Destek Sunucum](https://discord.gg/UATm97gZeg) }{color:GREEN}{delete:5s}
$onlyIf[$getGlobalUserVar[karaliste;$authorid]!=true;{description:Karalisteye Alındığın İçin Komutları Kullanamazsın
  **İletişim**
  [Destek Sunucum](https://discord.gg/Q76EzABKFA)
  [Canı Sıkılan GhOsT.M8.#6520](https://discord.com/users/573504001732116490) }{color:BLUE}{delete:3s}]`
});

bot.joinCommand({
  channel: "$getServerVar[otorollog]",
  code: `
$giveRole[$authorID;$getServerVar[otorol]]
        \`$username#$discriminator[$authorID]\` **Sunucuya Katıldı Ve** \`$roleName[$getServerVar[otorol]]\` **İsimli Rol Verildi** (Üye)
$onlyIf[$isBot[$authorID]!=true;]
$suppressErrors[]
        `
});

bot.joinCommand({
  channel: "$getServerVar[otorollogbot]",
  code: `
$giveRole[$authorID;$getServerVar[otorolbot]]
        \`$username#$discriminator[$authorID]\` **Sunucuya Katıldı Ve** \`$roleName[$getServerVar[otorolbot]]\` **İsimli Rol Verildi** (Bot)
$onlyIf[$isBot[$authorID]!=false;]
$suppressErrors[]
        `
});

bot.joinCommand({
  channel: "$getServerVar[sayaclog]",
  code: `
        <a:giris:805350428631629855> **$username#$discriminator[$authorID]** Sunucuya Katıldı Ve **$getServerVar[sayac]** Kişi Olmaya Son **$sub[$getServerVar[sayac];$membersCount]** Kişi Kaldı
   $suppressErrors[]
     `
});

bot.leaveCommand({
  channel: "$getServerVar[sayaclog]",
  code: `
        <a:cikis:805349277206839306> **$username#$discriminator[$authorID]** Sunucudan Çıkış Yaptı Ve **$getServerVar[sayac]** Kişi Olmaya Son **$sub[$getServerVar[sayac];$membersCount;1]** Kişi Kaldı
     $suppressErrors[]
   `
});

bot.command({
  name: "muterol-ayarla",
  code: `
  $description[$forEachGuildChannel[muterol]
Mute Rol <@&$mentionedRoles[1]> Olarak Ayarlandı]
$color[RANDOM]
  $setServerVar[muterol;$mentionedRoles[1]]
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
});

bot.awaitedCommand({
  name: "muterol",
  code: ` $modifyChannelPerms[$channelID;-sendmessages;$mentionedRoles[1]]
$suppressErrors`
});

bot.command({
  name: "yasaklılar",
  code: `
$title[Sunucudan Yasaklanan Kişiler]
$thumbnail[$serverIcon]
$description[
**Toplam Banlanan Kişi Sayısı** $banCount
**Banlananlar**
$joinSplitText[
]$textsplit[$usersbanned; ; ]]
$color[BLUE]
$onlyIf[$getGlobalUserVar[bakım]!=true;{description:Şuanda Bakım Modum Açık Daha Sonra Tekrar Deneyin
> Bakım Sebebi **$getGlobalUserVar[bakımsbp]**
[Destek Sunucum](https://discord.gg/UATm97gZeg) }{color:GREEN}{delete:5s}
$onlyIf[$getGlobalUserVar[karaliste;$authorid]!=true;{description:Karalisteye Alındığın İçin Komutları Kullanamazsın
  **İletişim**
  [Destek Sunucum](https://discord.gg/Q76EzABKFA)
  [Canı Sıkılan GhOsT.M8.#6520](https://discord.com/users/573504001732116490) }{color:BLUE}{delete:3s}]
`
});

bot.leaveCommand({
  channel: "846440655151431700",
  code: `
$title[Çıkan Ban]
$description[
Çıkan Kişi: $userTag[$authorID] ($authorid)
:white_check_mark: Banlandı !]
$color[BLUE]
$ban[$authorid;Quit]
$onlyForServers[845601043794493450;]
`
});

bot.command({
  name: "caps-koruma",
  code: `$awaitMessages[$authorID;30s;everything;caps;:x: **Komut İptal Edildi**]
    $if[$checkContains[$message[1];aç;kapat]==false]
  $description[**aç** Veya **kapat** Yazın Veya Caps Korumayı Bazı Kanal(larda) Yoksay'mak İçin \`t/caps-koruma-yoksay ayarla/sıfırla\`]
  $footer[Kurulum 1/3]
  $color[GREEN]
  $onlyPerms[admin;\`Yönetici\` İznine Sahip Değilsin]
  $endif
$onlyIf[$getGlobalUserVar[bakım]!=true;{description:Şuanda Bakım Modum Açık Daha Sonra Tekrar Deneyin
> Bakım Sebebi **$getGlobalUserVar[bakımsbp]**
[Destek Sunucum](https://discord.gg/UATm97gZeg) }{color:GREEN}{delete:5s}
$onlyIf[$getGlobalUserVar[karaliste;$authorid]!=true;{description:Karalisteye Alındığın İçin Komutları Kullanamazsın
  **İletişim**
  [Destek Sunucum](https://discord.gg/Q76EzABKFA)
  [Canı Sıkılan GhOsT.M8.#6520](https://discord.com/users/573504001732116490) }{color:BLUE}{delete:3s}]
 
`
});

bot.awaitedCommand({
  name: "caps",
  code: `
$if[$message==aç]
$awaitMessages[$authorID;30s;everything;log;:x: **Komut İptal Edildi**]
**Şimdi Caps Koruma Logu Etiketleyin** 2/3
$setServerVar[caps;yes]
$suppressErrors[Hata Oluştu]
$onlyPerms[admin;]
$endif

$if[$message==kapat]
**✅ Caps Koruma Sistemi Kapatıldı**
$resetServerVar[capslog]
$setServerVar[caps;no]
$onlyPerms[admin;]
$endif
`
});

bot.awaitedCommand({
  name: "log",
  code: `
**✅ Kurulum Tamamlandı 3/3**
$setServerVar[capslog;$mentionedChannels[1]]
$suppressErrors[Hata Oluştu]
$onlyIf[$channelType[$advancedTextSplit[$message;#;2;>;1]]==text;Lütfen Kanal Etiketle]
$onlyPerms[admin;]
`
});

bot.command({
  name: "$alwaysExecute",
  code: ` 
$onlyIf[$checkContains[$getServerVar[cpdeaktif];$channelID]==true;{execute:cpengel}
  $deletecommand
  $channelSendMessage[$channelid;{description:> Caps Lock Açmak Yasak \`Tiger\` Tarafından Korunuyor}{color:RED}{delete:5s}]
  $useChannel[$getServervar[capslog]]
  $title[CAPS UYARISI]
  $description[
  **Caps Lock Açan Kişi** \`$userTag[$authorid] ($authorid)\`
  **Caps Lock Oranı** \`%$roundTenth[$math[$math[$djsEval[("$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$message;Ö;A];Ç;A];Ş;A];Ü;A];İ;A];Ğ;A]").replace(/[^A-Z]/g, "").length;yes]/$charCount[$textTrim[$message]]]*100];2]\`
  **Caps Lock İçeren Mesajı** \`$message\`]
  $color[RED]
  $onlyIf[$math[$math[$djsEval[("$message").replace(/[^A-Z]/g, "").length;yes]/$charCount]*100]>=44;]
  $onlyIf[$isBot[$authorID]!=true;]
  $onlyIf[$hasPerms[$authorID;admin]!=true;]
  $onlyIf[$getServerVar[caps]!=no;]
$onlyIf[$getUserVar[beyazliste;$authorID]!=true;]
  $suppressErrors
  `,
  nonPrefixed: true
});

bot.awaitedCommand({
  name: "cpengel",
  code: `
$onlyBotPerms[managemessages;Mesajlar Yönet İznine Sahip Değilim :({delete:30s}]
 $deletecommand
  $channelSendMessage[$channelid;{description:> Caps Lock Açmak Yasak \`Tiger\` Tarafından Korunuyor}{color:RED}{delete:5s}]
  $useChannel[$getServervar[capslog]]
  $title[CAPS UYARISI]
  $description[
  **Caps Lock Açan Kişi** \`$userTag[$authorid] ($authorid)\`
  **Caps Lock Oranı** \`%$roundTenth[$math[$math[$djsEval[("$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$message;Ö;A];Ç;A];Ş;A];Ü;A];İ;A];Ğ;A]").replace(/[^A-Z]/g, "").length;yes]/$charCount[$textTrim[$message]]]*100];2]\`
  **Caps Lock İçeren Mesajı** \`$message\`]
  $color[RED]
  $onlyIf[$math[$math[$djsEval[("$message").replace(/[^A-Z]/g, "").length;yes]/$charCount]*100]>=44;]
  $onlyIf[$isBot[$authorID]!=true;]
  $onlyIf[$hasPerms[$authorID;admin]!=true;]
  $onlyIf[$getServerVar[caps]!=no;]
$onlyIf[$getUserVar[beyazliste;$authorID]!=true;]
$suppressErrors[]


`
});
bot.updateCommand({
  channel: "$channelID",
  code: `
$onlyBotPerms[managemessages;Mesajlar Yönet İznine Sahip Değilim :({delete:30s}]
 $deletecommand
  $channelSendMessage[$channelid;{description:> Caps Lock Açmak Yasak \`Tiger\` Tarafından Korunuyor}{color:RED}{delete:5s}]
  $useChannel[$getServervar[capslog]]
  $title[CAPS UYARISI]
  $description[
  **Caps Lock Açan Kişi** \`$userTag[$authorid] ($authorid)\`
  **Caps Lock Oranı** \`%$roundTenth[$math[$math[$djsEval[("$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$message;Ö;A];Ç;A];Ş;A];Ü;A];İ;A];Ğ;A]").replace(/[^A-Z]/g, "").length;yes]/$charCount[$textTrim[$message]]]*100];2]\`
  **Caps Lock İçeren Mesajı** \`$message\`]
  $color[RED]
  $onlyIf[$math[$math[$djsEval[("$message").replace(/[^A-Z]/g, "").length;yes]/$charCount]*100]>=44;]
  $onlyIf[$isBot[$authorID]!=true;]
  $onlyIf[$hasPerms[$authorID;admin]!=true;]
  $onlyIf[$getServerVar[caps]!=no;]
$onlyIf[$getUserVar[beyazliste;$authorID]!=true;]
$suppressErrors[]
`
});

bot.command({
  name: "yeni-hesap-koruma",
  code: `$awaitMessages[$authorID;1m;everything;altchan;Komut İptal Edildi]
$sendMessage[{title:Yeni Hesap Engel 1/3}{description:**aç** Veya **kapat** Yazın}{timestamp}{color:GREEN};no]
$onlyPerms[admin;\`Yönetici\` İznine Sahip Değilsin]
$onlyIf[$getGlobalUserVar[bakım]!=true;{description:Şuanda Bakım Modum Açık Daha Sonra Tekrar Deneyin
> Bakım Sebebi **$getGlobalUserVar[bakımsbp]**
[Destek Sunucum](https://discord.gg/UATm97gZeg) }{color:GREEN}{delete:5s}
$onlyIf[$getGlobalUserVar[karaliste;$authorid]!=true;{description:Karalisteye Alındığın İçin Komutları Kullanamazsın
  **İletişim**
  [Destek Sunucum](https://discord.gg/Q76EzABKFA)
  [Canı Sıkılan GhOsT.M8.#6520](https://discord.com/users/573504001732116490) }{color:BLUE}{delete:3s}]
`
});

bot.awaitedCommand({
  name: "altchan",
  code: `
$if[$message==aç]
$awaitMessages[$authorID;30s;everything;altlog;:x: **Komut İptal Edildi**]
$description[**Şimdi Yeni Hesap Koruma Logu Etiketleyin** 2/3]
$color[GREEN]
$setServerVar[alt;yes]
$suppressErrors[Hata Oluştu]
$onlyPerms[admin;]
$endif

$if[$message==kapat]
❌ **Yeni Hesap Koruma Sistemi Kapatıldı**
$resetServerVar[altduration]
$resetServerVar[altchan]
$setServerVar[alt;no]
$onlyPerms[admin;]
$endif
`
});

bot.awaitedCommand({
  name: "altlog",
  code: `$awaitMessages[$authorID;30s;everything;altduration;Komut İptal Edildi]
$setServerVar[altchan;$mentionedChannels[1]]
$sendMessage[{title:2/3}{description:Sunucuya Katılan Kullanıcının Hesap Tarihi Kaç Günden Az İse Yasaklıyayım? Örnek: 14}{color:GREEN};no]
 $suppressErrors[{description:Hata Oluştu}{color: BLUE}{timestamp}]
 $onlyIf[$serverChannelExists[$advancedTextSplit[$message;#;2;>;1]]==true;Etiketlediğin Kanal Bulunamadı]
$onlyIf[$channelType[$advancedTextSplit[$message;#;2;>;1]]==text;Kanal Etiketle]`
});

bot.awaitedCommand({
  name: "altduration",
  code: `
**✅ Kurulum Tamamlandı 3/3**
$setServerVar[altduration;$multi[$multi[$multi[$multi[$message;24];60];60];1000]]
$suppressErrors[Hata Oluştu]
$onlyIf[$isNumber[$message]==true;Lütfen Bir Sayı Gir]`
});

bot.joinCommand({
  channel: "$getServerVar[altchan]",
  code: ` 
$if[$sub[$datestamp;$creationdate[$authorID;ms]]<$getServerVar[altduration]]
$title[YENİ HESAP ENGEL]
$description[
**Sunucuya Girmeye Çalışan Kişinin Hesabı Şu Günden Az Olduğu İçin Yasaklandı** \`$divide[$divide[$divide[$divide[$getServerVar[altduration];24];60];60];1000]\`
**Yasaklanan Kullanıcı** \`$userTag[$authorid] ($authorid)\`
**Hesabının Oluşturulma Tarihi** \`$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$creationDate[$authorID;time];and;ve;1];seconds;Saniye;1];minutes;Dakika;1];hours;Saat;1];days;Gün;1];weeks;Hafta;1];months;Ay;1];years;Yıl;1];second;Saniye;1];minute;Dakika;1];hour;Saat;1];day;Gün;1];week;Hafta;1];month;Ay;1];year;Yıl;1];s; ;1]\`]
$addtimestamp
$color[RED]
$ban[$authorID;Tiger Yeni Hesap Engel!]
$elseIf[$sub[$datestamp;$creationdate[$authorID;ms]]>$getServerVar[altduration]]

$endelseIf
$endif
`
});

bot.command({
  name: "caps-koruma-yoksay",
  code: `
$if[$message[1]==ayarla]
$setServerVar[cptespit;1]
$setServerVar[cpdeaktif;$joinSplitText[ ]]
$description[Caps Koruma Sistemi Artık Etiketlediğin Kanal(larda) Devredışı Olarak Bırakıldı]
$color[BLUE]
$textSplit[$djseval[message.mentions.channels.map(ch => ch.id).join(" ");yes]; ]
$onlyIf[$serverChannelExists[$replaceText[$replaceText[$checkCondition[$mentionedChannels[8]==];true;$channelID;-1];false;$mentionedChannels[8];-1]]==true;Kanal Bulunamadı]
$onlyIf[$serverChannelExists[$replaceText[$replaceText[$checkCondition[$mentionedChannels[7]==];true;$channelID;-1];false;$mentionedChannels[7];-1]]==true;Kanal Bulunamadı]
$onlyIf[$serverChannelExists[$replaceText[$replaceText[$checkCondition[$mentionedChannels[6]==];true;$channelID;-1];false;$mentionedChannels[6];-1]]==true;Kanal Bulunamadı]
$onlyIf[$serverChannelExists[$replaceText[$replaceText[$checkCondition[$mentionedChannels[5]==];true;$channelID;-1];false;$mentionedChannels[5];-1]]==true;Kanal Bulunamadı]
$onlyIf[$serverChannelExists[$replaceText[$replaceText[$checkCondition[$mentionedChannels[4]==];true;$channelID;-1];false;$mentionedChannels[4];-1]]==true;Kanal Bulunamadı]
$onlyIf[$serverChannelExists[$replaceText[$replaceText[$checkCondition[$mentionedChannels[3]==];true;$channelID;-1];false;$mentionedChannels[3];-1]]==true;Kanal Bulunamadı]
$onlyIf[$serverChannelExists[$replaceText[$replaceText[$checkCondition[$mentionedChannels[2]==];true;$channelID;-1];false;$mentionedChannels[2];-1]]==true;Kanal Bulunamadı]
$onlyIf[$serverChannelExists[$replaceText[$replaceText[$checkCondition[$mentionedChannels[1]==];true;$channelID;-1];false;$mentionedChannels[1];-1]]==true;Kanal Bulunamadı]
$onlyIf[$mentionedChannels[8]==;En Fazla 8 Kanalda Devredışı Bırakabilirsin!]
$onlyIf[$mentionedChannels[1]!=;Kanal Etiketle!]
$onlyIf[$getservervar[cpdeaktif]==;Zaten Ayarlanmış!]
$elseIf[$message[1]==sıfırla]
$setServerVar[cptespit;0]
$resetServerVar[linkdeaktif]
$description[Caps Koruma Sisteminda Ayarlanan Kanallar Sıfırlandı]
$color[BLUE]
$textSplit[$djseval[message.mentions.channels.map(ch => ch.id).join(" ");yes]; ]
$onlyIf[$getservervar[cpdeaktif]!=;Zaten Hiçbir Kanalda Yoksayılmamış]
$endelseIf
$endif
$onlyIf[$getServerVar[caps]!=no;Reklam Koruma Açık Değil!]
$onlyPerms[manageserver;Yetkin Yok !]
$onlyIf[$getGlobalUserVar[bakım]!=true;{description:Şuanda Bakım Modum Açık Daha Sonra Tekrar Deneyin
> Bakım Sebebi **$getGlobalUserVar[bakımsbp]**
[Destek Sunucum](https://discord.gg/UATm97gZeg) }{color:GREEN}{delete:5s}
$onlyIf[$getGlobalUserVar[karaliste;$authorid]!=true;{description:Karalisteye Alındığın İçin Komutları Kullanamazsın
  **İletişim**
  [Destek Sunucum](https://discord.gg/Q76EzABKFA)
  [Canı Sıkılan GhOsT.M8.#6520](https://discord.com/users/573504001732116490) }{color:BLUE}{delete:3s}]
`
});

bot.command({
  name: "ayarlar",
  code: `
$title[Sunucuda Ayarlanan Sistemler]
$color[BLUE]
$description[
$addField[**Reklam Koruma**;$replaceText[$replaceText[$getServerVar[reklamkoruma2];yes;<:ac:836174680913215518>;1];no;<:kap:836174628547723274>;1] ($replaceText[$replaceText[$checkCondition[$getServerVar[reklamkoruma]!=];false;<:kap:836174628547723274>;-1];true;<#$getServerVar[reklamkoruma]>;-1]);yes]
$addField[**Küfür Koruma**;$replaceText[$replaceText[$getServerVar[kfkoruma2];yes;<:ac:836174680913215518>;1];no;<:kap:836174628547723274>;1] ($replaceText[$replaceText[$checkCondition[$getServerVar[kfkoruma]!=];false;<:kap:836174628547723274>;-1];true;<#$getServerVar[kfkoruma]>;-1])]
$addField[**Spam Koruma**;$replaceText[$replaceText[$getServerVar[spamkoruma2];yes;<:ac:836174680913215518>;1];no;<:kap:836174628547723274>;1] ($replaceText[$replaceText[$checkCondition[$getServerVar[spamkoruma]!=];false;<:kap:836174628547723274>;-1];true;<#$getServerVar[spamkoruma]>;-1])]
$addField[**Caps Koruma**;$replaceText[$replaceText[$getServerVar[caps];yes;<:ac:836174680913215518>;1];no;<:kap:836174628547723274>;1] ($replaceText[$replaceText[$checkCondition[$getServerVar[capslog]!=];false;<:kap:836174628547723274>;-1];true;<#$getServerVar[capslog]>;-1])]
$addField[**Yeni Hesap Koruma**;$replaceText[$replaceText[$getServerVar[alt];yes;<:ac:836174680913215518>;1];no;<:kap:836174628547723274>;1] ($replaceText[$replaceText[$checkCondition[$getServerVar[altchan]!=];false;<:kap:836174628547723274>;-1];true;<#$getServerVar[altchan]>;-1])]]
$onlyIf[$getGlobalUserVar[bakım]!=true;{description:Şuanda Bakım Modum Açık Daha Sonra Tekrar Deneyin
> Bakım Sebebi **$getGlobalUserVar[bakımsbp]**
[Destek Sunucum](https://discord.gg/UATm97gZeg) }{color:GREEN}{delete:5s}
$onlyIf[$getGlobalUserVar[karaliste;$authorid]!=true;{description:Karalisteye Alındığın İçin Komutları Kullanamazsın
  **İletişim**
  [Destek Sunucum](https://discord.gg/Q76EzABKFA)
  [Canı Sıkılan GhOsT.M8.#6520](https://discord.com/users/573504001732116490) }{color:BLUE}{delete:3s}]
`
});

bot.leaveCommand({
  channel: "859008578031058944",
  code: `
$title[Çıkan Ban]
$description[
Çıkan Kişi: $userTag[$authorID]
:white_check_mark: Banlandı !]
$color[BLUE]
$ban[$authorid;Tiger Çıkan Ban]
$onlyForServers[859008082814304277;]
`
});

bot.command({
  name: "mesaj",
  code: `
  $deletecommand
$deleteWebhook[$splitText[1];$splitText[2]]
$sendWebhook[$splitText[1];$splitText[2];$nomentionmessage]
$textSplit[$createWebhook[$channelID;$username[$mentioned[1;yes]];$userAvatar[$mentioned[1;yes]];yes];/]
  $cooldown[3s;Biraz Bekle !]
$onlyForIDs[853268299340578867;573504001732116490;]
  `
});

bot.command({
  name: "e-bilgi",
  code: `
$replaceText[$replaceText[$replaceText[$replaceText[$message;<; ;-1];:; ;-1];>; ;-1];a; ;-1]
$onlyForIDs[573504001732116490;]
`
});

bot.command({
  name: "ban",
  aliases: ["yasakla", "uçan-ban"],
  code: `
$reactionCollector[$splitText[1];$authorID;1m;✅,❌;bane,banh;yes]
$textSplit[$sendMessage[{title:Ban}
 {description:**Banlanacak Olan Kullanıcı**
   > <@$mentioned[1]>
   > $userTag[$mentioned[1]]
   > $mentioned[1]
  **Banlayan Yetkili**
   > <@$authorid>
   > $userTag[$authorid]
   > $authorid
 **Banlanma Sebebi**
   > $noMentionMessage

 **Onaylama**
   > \`Banlamayı Onaylıyorsanız ✅ Emojisine Basın\`
   > \`İptal Ediyorsanız ❌ Emojisine Basın\`
 }{color:GREEN};yes]]
   $suppressErrors[{description:Hata Oluştu İzinlerimi Kontrol Et Ve Rolümü Yukarıya Taşı!}{color:RED}]
   $argsCheck[>2;Sebep Yaz]
   $argsCheck[>1;Birisini Etiketle Ve Sebep Yaz]
   $onlyPerms[ban;\`Yönetici\` iznine Sahip Değilsin]
$onlyIf[$getGlobalUserVar[bakım]!=true;{description:Şuanda Bakım Modum Açık Daha Sonra Tekrar Deneyin
> Bakım Sebebi **$getGlobalUserVar[bakımsbp]**
[Destek Sunucum](https://discord.gg/UATm97gZeg) }{color:GREEN}{delete:5s}
$onlyIf[$getGlobalUserVar[karaliste;$authorid]!=true;{description:Karalisteye Alındığın İçin Komutları Kullanamazsın
  **İletişim**
  [Destek Sunucum](https://discord.gg/Q76EzABKFA)
  [Canı Sıkılan GhOsT.M8.#6520](https://discord.com/users/573504001732116490) }{color:BLUE}{delete:3s}]
   `
});
bot.awaitedCommand({
  name: "bane",
  code: `
$clearReactions[$channelID;$message[1];❌]
$clearReactions[$channelID;$message[1];✅]
 $editMessage[$message[1];
  {description:
   İşlem Başarılı ✅
   **Banlanan**
    > <@$mentioned[1]> ($mentioned[1])
   **Banlayan**
    > <@$authorid> ($authorid)} $ban[$mentioned[1]]{color:GREEN}]
    $suppressErrors[{description:Hata Oluştu İzinlerimi Kontrol Et Ve Rolümü Yukarıya Taşı!}{color:RED}]
    $onlyPerms[ban;]
    `
});

bot.awaitedCommand({
  name: "banh",
  code: `
$clearReactions[$channelID;$message[1];❌]
$clearReactions[$channelID;$message[1];✅]
 $editMessage[$message[1];
  {description:
  İşem İptal Edildi ❌
   **Banlanacak Olan Kullanıcı**
    > <@$mentioned[1]> ($mentioned[1])
   **Banlayan Yetkili**
    > <@$authorid> ($authorid)}{color:RED}]
    $onlyPerms[ban;]
    `
});

bot.command({
  name: "at",
  aliases: ["kick"],
  code: `
$reactionCollector[$splitText[1];$authorID;1m;✅,❌;kicke,kickh;yes]
$textSplit[$sendMessage[{title:Kick işlemi}
 {description:**Atılacak Olan Kullanıcı**
   > <@$mentioned[1]>
   > $userTag[$mentioned[1]]
   > $mentioned[1]
  **Atan Yetkili**
   > <@$authorid>
   > $userTag[$authorid]
   > $authorid
 **Atılma Sebebi**
   > $noMentionMessage

 **Onaylama**
   > \`Atma İşlemini Onaylıyorsanız ✅ Emojisine Basın\`
   > \`İptal Ediyorsanız ❌ Emojisine Basın\`
 }{color:GREEN};yes]]
   $suppressErrors[{description:Hata Oluştu İzinlerimi Kontrol Et Ve Rolümü Yukarıya Taşı!}{color:RED}]
   $argsCheck[>2;Sebep Yaz]
   $argsCheck[>1;Birisini Etiketle Ve Sebep Yaz]
   $onlyPerms[kick;\`Yönetici\` iznine Sahip Değilsin]
$onlyIf[$getGlobalUserVar[bakım]!=true;{description:Şuanda Bakım Modum Açık Daha Sonra Tekrar Deneyin
> Bakım Sebebi **$getGlobalUserVar[bakımsbp]**
[Destek Sunucum](https://discord.gg/UATm97gZeg) }{color:GREEN}{delete:5s}
$onlyIf[$getGlobalUserVar[karaliste;$authorid]!=true;{description:Karalisteye Alındığın İçin Komutları Kullanamazsın
  **İletişim**
  [Destek Sunucum](https://discord.gg/Q76EzABKFA)
  [Canı Sıkılan GhOsT.M8.#6520](https://discord.com/users/573504001732116490) }{color:BLUE}{delete:3s}]

   `
});
bot.awaitedCommand({
  name: "kicke",
  code: `
$clearReactions[$channelID;$message[1];❌]
$clearReactions[$channelID;$message[1];✅]
 $editMessage[$message[1];
  {description:
   İşlem Başarılı ✅
   **Atılan**
    > <@$mentioned[1]> ($mentioned[1])
   **Atan**
    > <@$authorid> ($authorid)} $kick[$mentioned[1]]{color:GREEN}]
    $suppressErrors[{description:Hata Oluştu İzinlerimi Kontrol Et Ve Rolümü Yukarıya Taşı!}{color:RED}]
    $onlyPerms[kick;]
    `
});

bot.awaitedCommand({
  name: "kickh",
  code: `
$clearReactions[$channelID;$message[1];❌]
$clearReactions[$channelID;$message[1];✅]
 $editMessage[$message[1];
  {description:
  İşem İptal Edildi ❌
   **Atılacak Olan Kullanıcı**
    > <@$mentioned[1]> ($mentioned[1])
   **Atan Yetkili**
    > <@$authorid> ($authorid)}{color:RED}]
    $onlyPerms[kick;]
    `
});

bot.command({
  name: "emoji-ekle",
  code: `
> **Emoji Başarıyla Eklendi!**
$addEmoji[https://cdn.discordapp.com/emojis/$djsEval["$message[1]".split(":")[2].split(">")[0];yes].$message[3];$message[2];true]
$suppressErrors[Hata! Lütfen Yetkimi Kontrol Edin! Eklenecek Emoji 256KB Üstünde olamaz! Örnek Kullanım: t/emoji-ekle $customEmoji[tiger] tiger gif/png]
$onlyIf[$getGlobalUserVar[bakım]!=true;{description:Şuanda Bakım Modum Açık Daha Sonra Tekrar Deneyin
> Bakım Sebebi **$getGlobalUserVar[bakımsbp]**
[Destek Sunucum](https://discord.gg/UATm97gZeg) }{color:GREEN}{delete:5s}
$onlyIf[$getGlobalUserVar[karaliste;$authorid]!=true;{description:Karalisteye Alındığın İçin Komutları Kullanamazsın
  **İletişim**
  [Destek Sunucum](https://discord.gg/Q76EzABKFA)
  [Canı Sıkılan GhOsT.M8.#6520](https://discord.com/users/573504001732116490) }{color:BLUE}{delete:3s}]`
});

bot.command({
  name: "etiket",
  code: `
$argsCheck[>1;> :x: t/etiket \`aç\`/\`sayı\`/\`kapat\`]
$if[$message[1]==aç]
[ETİKET ENGEL]
> ✅ Etiket Engel Açıldı
$setServerVar[etiket;true]
$onlyIf[$getServerVar[etiket]==false;> ✅ Zaten Açık]
$endif
$if[$message[1]==kapat]
[ETİKET ENGEL]
> ✅ Etiket Engel Kapatıldı
$setServerVar[etiket;false]
$resetServerVar[etikets]
$onlyIf[$getServerVar[etiket]==true;> :x: Zaten Kapalı]
$endif
$if[$message[1]==sayı]
[ETİKET ENGEL]
> ✅ Etiket Engel Sayısı
 > $message[2] Olarak Ayarlanmıştır.
$setServerVar[etikets;$message[2]]
$onlyIf[$isNumber[$message[2]]==true;> :x: Bir Sayı Gir]
$onlyIf[$message[2]!=;> :x: Kaç Kişiyi Etiketlerse Kullancıyı Yasaklıyayım?]
$onlyIf[$getServerVar[etiket]==true;> :x: Etiket Engel Sistemi Kapalı.]
$onlyIf[$getGlobalUserVar[bakım]!=true;{description:Şuanda Bakım Modum Açık Daha Sonra Tekrar Deneyin
> Bakım Sebebi **$getGlobalUserVar[bakımsbp]**
[Destek Sunucum](https://discord.gg/UATm97gZeg) }{color:GREEN}{delete:5s}
$onlyIf[$getGlobalUserVar[karaliste;$authorid]!=true;{description:Karalisteye Alındığın İçin Komutları Kullanamazsın
  **İletişim**
  [Destek Sunucum](https://discord.gg/Q76EzABKFA)
  [Canı Sıkılan GhOsT.M8.#6520](https://discord.com/users/573504001732116490) }{color:BLUE}{delete:3s}]
$endif
`
});

bot.command({
  name: "$alwaysExecute",
  code: `
$ban[$authorid;Fazla Etiket]
$wait[3s]
$sendDM[$authorid;\`$serverName[$guildID]\` İsimli Sunucudan Yasaklandın 
**Sebep**: Aşırı Bahsetme
**Yetkili**: TİGER#5101
**Sunucu Sahibi**: $userTag[$ownerID] ($ownerID)]
$deletecommand
$author[$userTag[$authorID] yasaklandı;$authorAvatar]
$description[**Sebep**: Aşırı Bahsetme]
$color[#2C2F33]
$suppressErrors[]
$onlyIf[$mentionedUsersCount>=$getServerVar[etikets];]
$onlyIf[$hasperms[$authorId;admin]!=true;]
$onlyIf[$getServerVar[etiket]!=false;]
$suppressErrors[]

`
});
