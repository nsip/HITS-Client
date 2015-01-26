var hitsclient = (function(_app) {
  if (!_app.providers) {
    _app.providers = [];
  }

  _app.providers.push({
    name : "Student Daily Attendance",
    value : "StudentDailyAttendances",
    template : "" +
          "<!-- Remember to insert RefIds of records that exist; and to hyphenate RefID as\n" +
          "     xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx -->\n" +
          "<StudentDailyAttendance RefId='{RefId}'>\n" +
          "   <StudentPersonalRefId>{RefId}</StudentPersonalRefId>\n" +
          "   <SchoolInfoRefId>{RefId}</SchoolInfoRefId>\n" +
          "   <Date>2014-11-24</Date>\n" +
          "   <SchoolYear>2014</SchoolYear>\n" +
          "   <DayValue>Full</DayValue>\n" +
          "   <AttendanceCode>\n" +
          "     <Code>SomeCode</Code>\n" +
          "     <OtherCodeList>\n" +
          "       <OtherCode codeset='Local'>SomeOtherCode</OtherCode>\n" +
          "     </OtherCodeList>\n" +
          "   </AttendanceCode>\n" +
          "   <AttendanceStatus>Full</AttendanceStatus>\n" +
          "   <TimeIn>09:00:00</TimeIn>\n" +
          "   <TimeOut>15:30:00</TimeOut>\n" +
          "   <AbsenceValue>0.0</AbsenceValue>\n" +
          "   <AttendanceNote>Was at School</AttendanceNote>\n" +
          "</StudentDailyAttendance>"
  });

  return _app;  
}(hitsclient || {}));