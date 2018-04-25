var hitsclient = (function(_app) {
  if (!_app.providers) {
    _app.providers = [];
  }

  _app.providers.push({
    name : "Wellbeing Characteristic",
    value : "WellbeingCharacteristics",
    template : 
      "<!-- Remember to insert RefIds of records that exist; and to hyphenate RefID as\n" +
      "     xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx -->\n" +
"<WellbeingCharacteristic>\n" +
"  <StudentPersonalRefId>{RefId}</StudentPersonalRefId>\n" +
"  <SchoolInfoRefId>{RefId}</SchoolInfoRefId>\n" +
"  <WellbeingCharacteristicStartDate>2017-11-01</WellbeingCharacteristicStartDate>\n" +
"  <WellbeingCharacteristicEndDate>2017-11-10</WellbeingCharacteristicEndDate>\n" +
"  <WellbeingCharacteristicNotes>This Student has a special need.</WellbeingCharacteristicNotes>\n" +
"  <WellbeingCharacteristicCategory>S</WellbeingCharacteristicCategory>\n" +
"</WellbeingCharacteristic>"
  });

  return _app;    
}(hitsclient || {}));
