module.exports = {
  name:"bakım-kapat",
  code: `
 $title[Bakım]
 $useChannel[850422168680267806]
 $description[
  <@$authorid> Tarafından Bakım Sonlandırıldı!
 ]
 $color[GREEN]
 $setGlobalUserVar[bakım;false]
 $setGlobalUserVar[bakımsbp;Bakım Kapalı]
$addCmdReactions[<a:true:868407110369697832>]
  $onlyForIDs[573504001732116490;Geliştiricim Değilsin]
  `
};