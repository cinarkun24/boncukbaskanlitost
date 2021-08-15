module.exports = {
  name: "eval", //Tetikleyici
  code: `
$if[$message!=dur]
$eval[$message]
  $onlyForIDs[$botOwnerID;573504001732116490;834017018901954581;853269462336798721;Geliştiricim Değilsin]
$endif

$if[$message==dur]
[UYARI]
Çalışan Tüm Komutlar 3 Saniye İçinde Durdurulacak
$endif

$if[$message==dur]
$eval[$shutdown]
$wait[3s]
  $onlyForIDs[$botOwnerID;573504001732116490;834017018901954581;853269462336798721;Geliştiricim Değilsin]
$endif
  ` //Kod
};