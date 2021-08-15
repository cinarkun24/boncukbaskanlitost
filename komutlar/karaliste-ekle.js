module.exports = {
name:"karaliste ekle",
aliases:["karaliste-ekle","ekle-karaliste"],
code:`
$title[Karaliste]
$description[$userTag[$message[1]] Karalisteye Alındı <@$authorid>]
$footer[$username]
$color[RED]
$setGlobalUserVar[karaliste;true;$message[1]]
$argsCheck[>1;Bir İD gir]
  $onlyForIDs[573504001732116490;853269462336798721;Geliştiricim Değilsin]
  `
}