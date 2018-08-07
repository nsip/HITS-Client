var hitsclient = (function(_app) {
  if (!_app.providers) {
    _app.providers = [];
  }

  _app.providers.push({
    name : "Student Attendance Summary",
    value : "StudentAttendanceSummarys",
    servicePaths : ["StudentPersonals/{}/StudentAttendanceSummarys"],
    template : "" +
          "<!-- Remember to insert RefIds of records that exist; and to hyphenate RefID as\n" +
          "     xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx -->\n" +
          "<StudentAttendanceSummary StudentPersonalRefId='{RefId}' SchoolInfoRefId='{RefId}' SchoolYear='2014' StartDate='2014-11-17' EndDate='2014-11-22'>\n" +
          "    <StartDay>1</StartDay>\n" +
          "    <EndDay>2</EndDay>\n" +
          "    <FTE>1</FTE>\n" +
          "    <DaysAttended>5</DaysAttended>\n" +
          "    <ExcusedAbsences>0</ExcusedAbsences>\n" +
          "    <UnexcusedAbsences>0</UnexcusedAbsences>\n" +
          "    <DaysTardy>0</DaysTardy>\n" +
          "    <DaysInMembership>5</DaysInMembership>\n" +
          "</StudentAttendanceSummary>\n"
  });

  return _app;  
}(hitsclient || {}));
