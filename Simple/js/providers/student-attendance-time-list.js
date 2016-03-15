var hitsclient = (function(_app) {
  if (!_app.providers) {
    _app.providers = [];
  }

  _app.providers.push({
    name : "Student Attendance Time List",
    value : "StudentAttendanceTimeLists",
    template : "" +
          "<!-- Remember to insert RefIds of records that exist; and to hyphenate RefID as\n" +
          "     xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx -->\n" +
          "<StudentAttendanceTimeList>\n" +
          "  <StudentPersonalRefId>{RefId}</StudentPersonalRefId>\n" +
          "  <SchoolInfoRefId>{RefId}</SchoolInfoRefId>\n" +
          "  <Date>2002-11-01</Date>\n" +
          "  <SchoolYear>2003</SchoolYear>\n" +
          "  <AttendanceTimes>\n" +
          "    <AttendanceTime>\n" +
          "      <AttendanceCode>\n" +
          "        <Code>200</Code>\n" +
          "        <OtherCodeList>\n" +
          "          <OtherCode Codeset=\"Local\">S</OtherCode>\n" +
          "          <OtherCode Codeset=\"Text\">C</OtherCode>\n" +
          "        </OtherCodeList>\n" +
          "      </AttendanceCode>\n" +
          "      <AttendanceStatus>01</AttendanceStatus>\n" +
          "      <StartTime>11:00:00</StartTime>\n" +
          "      <EndTime>12:05:00</EndTime>\n" +
          "      <AbsenceValue>0.167</AbsenceValue>\n" +
          "      <AttendanceNote>Left for Orthodontist appt. and returned to school afterward</AttendanceNote>\n" +
          "    </AttendanceTime>\n" +
          "    <AttendanceTime>\n" +
          "      <AttendanceCode>\n" +
          "        <Code>100</Code>\n" +
          "      </AttendanceCode>\n" +
          "      <AttendanceStatus>01</AttendanceStatus>\n" +
          "      <StartTime>09:00:00</StartTime>\n" +
          "      <EndTime>11:00:00</EndTime>\n" +
          "      <AttendanceNote />\n" +
          "    </AttendanceTime>\n" +
          "    <AttendanceTime>\n" +
          "      <AttendanceCode>\n" +
          "        <Code>100</Code>\n" +
          "      </AttendanceCode>\n" +
          "      <AttendanceStatus>01</AttendanceStatus>\n" +
          "      <StartTime>12:05:00</StartTime>\n" +
          "      <EndTime>15:30:00</EndTime>\n" +
          "    </AttendanceTime>\n" +
          "  </AttendanceTimes>\n" +
          "</StudentAttendanceTimeList>"
  });

  return _app;  
}(hitsclient || {}));
