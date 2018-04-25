var hitsclient = (function(_app) {
  if (!_app.providers) {
    _app.providers = [];
  }

  _app.providers.push({
    name : "Wellbeing Event",
    value : "WellbeingEvents",
    template : 
      "<!-- Remember to insert RefIds of records that exist; and to hyphenate RefID as\n" +
      "     xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx -->\n" +
"<WellbeingEvent>\n" +
"  <StudentPersonalRefId>{RefId}</StudentPersonalRefId>\n" +
"  <SchoolInfoRefId>{RefId}</SchoolInfoRefId>\n" +
"  <WellbeingEventCategoryClass>P</WellbeingEventCategoryClass>\n" +
"  <WellbeingEventDate>2017-11-01</WellbeingEventDate>\n" +
"  <WellbeingEventTimePeriod>AM</WellbeingEventTimePeriod>\n" +
"</WellbeingEvent>"
  });

  return _app;    
}(hitsclient || {}));
