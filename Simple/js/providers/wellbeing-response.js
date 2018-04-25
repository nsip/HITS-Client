var hitsclient = (function(_app) {
  if (!_app.providers) {
    _app.providers = [];
  }

  _app.providers.push({
    name : "Wellbeing Response",
    value : "WellbeingResponses",
    template : 
      "<!-- Remember to insert RefIds of records that exist; and to hyphenate RefID as\n" +
      "     xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx -->\n" +
"<WellbeingResponse>\n" +
"  <StudentPersonalRefId>{RefId}</StudentPersonalRefId>\n" +
"  <SchoolInfoRefId>{RefId}</SchoolInfoRefId>\n" +
"  <Date>2017-11-01</Date>\n" +
"  <WellbeingResponseStartDate>2017-11-01</WellbeingResponseStartDate>\n" +
"  <WellbeingResponseEndDate>2017-11-10</WellbeingResponseEndDate>\n" +
"  <WellbeingResponseCategory>S</WellbeingResponseCategory>\n" +
"  <WellbeingResponseNotes>This Student is to be withdrawn.</WellbeingResponseNotes>\n" +
"</WellbeingResponse>"
  });

  return _app;    
}(hitsclient || {}));
