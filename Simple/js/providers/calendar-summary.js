var hitsclient = (function(_app) {
  if (!_app.providers) {
    _app.providers = [];
  }

  _app.providers.push({
    name : "Calendar Summary",
    value : "CalendarSummarys",
    template : "" +
          "<!-- Remember to insert RefIds of records that exist; and to hyphenate RefID as\n" +
          "     xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx -->\n" +
          "<CalendarSummary RefId='{RefId}'>\n" +
          "    <SchoolInfoRefId>{RefId}</SchoolInfoRefId>\n" +
          "    <SchoolYear>2014</SchoolYear>\n" +
          "    <LocalId>2014ANID</LocalId>\n" +
          "    <Description>My Calendar Summary</Description>\n" +
          "    <DaysInSession>5</DaysInSession>\n" +
          "    <StartDate>2014-11-03</StartDate>\n" +
          "    <EndDate>2014-11-07</EndDate>\n" +
          "</CalendarSummary>"
  });

  return _app;  
}(hitsclient || {}));