var hitsclient = (function(_app) {
  if (!_app.providers) {
    _app.providers = [];
  }

  _app.providers.push({
    name : "Calendar Date",
    value : "CalendarDates",
    template : "" +
          "<!-- Remember to insert RefIds of records that exist; and to hyphenate RefID as\n" +
          "     xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx -->\n" +
          "<CalendarDate CalendarSummaryRefId='{RefId}' Date='2014-11-06'>\n" +
          "  <CalendarDateRefId>{RefId}</CalendarDateRefId>\n" +
          "  <SchoolInfoRefId>{RefId}</SchoolInfoRefId>\n" +
          "  <SchoolYear>2014</SchoolYear>\n" +
          "  <CalendarDateType>\n" +
          "    <Code>INST</Code>\n" +
          "    <OtherCodeList>\n" +
          "        <OtherCode Codeset='Other'>MYCODE</OtherCode>\n" +
          "    </OtherCodeList>\n" +
          "  </CalendarDateType>\n" +
          "  <CalendarDateNumber>1</CalendarDateNumber>\n" +
          "  <StudentAttendance>\n" +
          "    <CountsTowardAttendance>Yes</CountsTowardAttendance>\n" +
          "    <AttendanceValue>1.0</AttendanceValue>\n" +
          "  </StudentAttendance>\n" +
          "</CalendarDate>"
  });

  return _app;  
}(hitsclient || {}));