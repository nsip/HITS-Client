var hitsclient = (function(_app) {
  if (!_app.providers) {
    _app.providers = [];
  }

  _app.providers.push({
    name : "Wellbeing Appeal",
    value : "WellbeingAppeals",
    template : 
      "<!-- Remember to insert RefIds of records that exist; and to hyphenate RefID as\n" +
      "     xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx -->\n" +
"<WellbeingAppeal>\n" +
"  <StudentPersonalRefId>{RefId}</StudentPersonalRefId>\n" +
"  <SchoolInfoRefId>{RefId}</SchoolInfoRefId>\n" +
"  <WellbeingResponseRefId>{RefId}</WellbeingResponseRefId>\n" +
"  <AppealStatusCode>SU</AppealStatusCode>\n" +
"  <Date>2017-11-01</Date>\n" +
"  <AppealNotes>This Appeal was successful.</AppealNotes>\n" +
"</WellbeingAppeal>"
  });

  return _app;    
}(hitsclient || {}));
