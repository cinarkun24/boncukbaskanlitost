module.exports = {
  name:"bakım-aç",
  code: `
 $title[Bakım]
 $useChannel[850422168680267806]
 $description[
  <@$authorid> Tarafından Bakım Modu Açıldı
   > Sebebi **$message**
 ]
 $color[RED]
 $setGlobalUserVar[bakım;true]
 $setGlobalUserVar[bakımsbp;$message]
 $addCmdReactions[<a:true:868407110369697832>]
 $argsCheck[>1;Sebep Gir]
  $onlyForIDs[573504001732116490;Geliştiricim Değilsin]
  `
};