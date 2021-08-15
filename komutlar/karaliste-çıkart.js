module.exports = {
  name:"karaliste çıkar",
  aliases:["karaliste-çıkar","karaliste-çıkart","çıkar-karaliste","çıkart-karaliste"],
  code:`
  $title[Karaliste]
  $description[$userTag[$message[1]] Karalisteden Çıkartıldı <@$authorid>]
  $footer[$username]
  $color[GREEN]
  $setGlobalUserVar[karaliste;false;$message[1]]
  $argsCheck[>1;Bir İD gir]
  $onlyForIDs[573504001732116490;853269462336798721;Geliştiricim Değilsin]
  `
}