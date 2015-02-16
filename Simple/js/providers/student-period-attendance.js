var hitsclient = (function(_app) {
  if (!_app.providers) {
    _app.providers = [];
  }

  _app.providers.push({
    name : "Student Period Attendance",
    value : "StudentPeriodAttendances",
    template : "" +
          "<!-- Remember to insert RefIds of records that exist; and to hyphenate RefID as\n" +
          "     xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx -->\n" +
          "<StudentPeriodAttendance RefId=\"{RefId}\">\n" +
          "  <StudentPersonalRefId>{RefId}</StudentPersonalRefId>\n" +
          "  <SchoolInfoRefId>{RefId}</SchoolInfoRefId>\n" +
          "  <Date>2014-11-24</Date>\n" +
          "  <SessionInfoRefId>{RefId}</SessionInfoRefId>\n" +
          "  <TimetablePeriod>0</TimetablePeriod>\n" +
          "  <TimeIn>09:30:00</TimeIn>\n" +
          "  <TimeOut>10:30:00</TimeOut>\n" +
          "  <AttendanceCode>\n" +
          "    <Code>100</Code>\n" +
          "  </AttendanceCode>\n" +
          "  <AttendanceStatus>NA</AttendanceStatus>\n" +
          "  <SchoolYear>2015</SchoolYear>\n" +
          "  <AuditInfo>\n" +
          "    <CreationUser Type=\"School Admin\">\n" +
          "      <UserId>userId</UserId>\n" +
          "    </CreationUser>\n" +
          "    <CreationDateTime>2015-03-02T09:20:22+08:00</CreationDateTime>\n" +
          "  </AuditInfo>\n" +
          "  <AttendanceComment>A Comment</AttendanceComment>\n" +
          "</StudentPeriodAttendance>"
  });

  return _app;  
}(hitsclient || {}));