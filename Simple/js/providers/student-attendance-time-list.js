var hitsclient = (function(_app) {
  if (!_app.providers) {
    _app.providers = [];
  }

  _app.providers.push({
    name : "Student Attendance Time List",
    value : "StudentAttendanceTimeLists",
    servicePaths : ["StudentPersonals/{}/StudentAttendanceTimeLists","SchoolInfos/{}/StudentAttendanceTimeLists","SchoolInfos/{}/StudentPersonals/{}/StudentAttendanceTimeLists"],
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
          "      <AttendanceType>RC</AttendanceType>\n" +
          "      <AttendanceCode>\n" +
          "        <Code>100</Code>\n" +
          "      </AttendanceCode>\n" +
          "      <AttendanceStatus>NA</AttendanceStatus>\n" +
          "      <StartTime>09:00:00</StartTime>\n" +
          "      <EndTime>15:00:00</EndTime>\n" +
          "      <DurationValue>1.000</DurationValue>\n" +
          "    </AttendanceTime>\n" +
          "    <AttendanceTime>\n" +
          "      <AttendanceType>LA</AttendanceType>\n" +
          "      <AttendanceCode>\n" +
          "        <Code>102</Code>\n" +
          "      </AttendanceCode>\n" +
          "      <AttendanceStatus>02</AttendanceStatus>\n" +
          "      <StartTime>09:00:00</StartTime>\n" +
          "      <EndTime>09:30:00</EndTime>\n" +
          "      <AttendanceNote>No acceptable excuse given</AttendanceNote>\n" +
          "    </AttendanceTime>\n" +
          "  </AttendanceTimes>\n" +
          "  <PeriodAttendances>\n" +
          "    <PeriodAttendance>\n" +
          "      <AttendanceType>CR</AttendanceType>\n" +
          "      <AttendanceCode>\n" +
          "        <Code>102</Code>\n" +
          "      </AttendanceCode>\n" +
          "      <AttendanceStatus>02</AttendanceStatus>\n" +
          "      <TimetablePeriod>P1</TimetablePeriod>\n" +
          "      <DayId>1</DayId>\n" +
          "      <StartTime>09:00:00</StartTime>\n" +
          "      <EndTime>10:00:00</EndTime>\n" +
          "      <TimeTableSubjectRefId>{RefId}</TimeTableSubjectRefId>\n" +
          "      <TeacherList>\n" +
          "        <TeacherCover>\n" +
          "          <StaffPersonalRefId>{RefId}</StaffPersonalRefId>\n" +
          "        </TeacherCover>\n" +
          "        <TeacherCover>\n" +
          "          <StaffPersonalRefId>{RefId}</StaffPersonalRefId>\n" +
          "        </TeacherCover>\n" +
          "      </TeacherList>\n" +
          "      <RoomList>\n" +
          "        <RoomInfoRefId>{RefId}</RoomInfoRefId>\n" +
          "      </RoomList>\n" +
          "    </PeriodAttendance>\n" +
          "    <PeriodAttendance>\n" +
          "      <AttendanceType>CR</AttendanceType>\n" +
          "      <AttendanceCode>\n" +
          "        <Code>100</Code>\n" +
          "      </AttendanceCode>\n" +
          "      <AttendanceStatus>NA</AttendanceStatus>\n" +
          "      <TimetablePeriod>P2</TimetablePeriod>\n" +
          "      <DayId>1</DayId>\n" +
          "      <StartTime>10:00:00</StartTime>\n" +
          "      <EndTime>11:00:00</EndTime>\n" +
          "      <TimeTableSubjectRefId>{RefId}</TimeTableSubjectRefId>\n" +
          "      <TeacherList>\n" +
          "        <TeacherCover>\n" +
          "          <StaffPersonalRefId>{RefId}</StaffPersonalRefId>\n" +
          "        </TeacherCover>\n" +
          "      </TeacherList>\n" +
          "      <RoomList>\n" +
          "        <RoomInfoRefId>{RefId}</RoomInfoRefId>\n" +
          "      </RoomList>\n" +
          "    </PeriodAttendance>\n" +
          "  </PeriodAttendances>\n" +
          "</StudentAttendanceTimeList>\n"
});

  return _app;  
}(hitsclient || {}));
