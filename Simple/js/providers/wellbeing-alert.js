var hitsclient = (function(_app) {
  if (!_app.providers) {
    _app.providers = [];
  }

  _app.providers.push({
    name : "Wellbeing Alert",
    value : "WellbeingAlerts",
    template : 
      "<!-- Remember to insert RefIds of records that exist; and to hyphenate RefID as\n" +
      "     xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx -->\n" +
"<WellbeingAlert>\n" +
"  <StudentPersonalRefId>{RefId}</StudentPersonalRefId>\n" +
"  <SchoolInfoRefId>{RefId}</SchoolInfoRefId>\n" +
"  <Date>2017-11-01</Date>\n" +
"  <WellbeingAlertStartDate>2017-11-01</WellbeingAlertStartDate>\n" +
"  <WellbeingAlertCategory>M</WellbeingAlertCategory>\n" +
"  <WellbeingAlertDescription>This Student is allergic to peanuts</WellbeingAlertDescription>\n" +
"</WellbeingAlert>"
  });

  return _app;    
}(hitsclient || {}));
