var hitsclient = (function(_app) {
  if (!_app.providers) {
    _app.providers = [];
  }

  _app.providers.push({
    name : "Session Info",
    value : "SessionInfos",
    template : 
      "<!-- Remember to insert RefIds of records that exist; and to hyphenate RefID as\n" +
      "     xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx -->\n" +
      "<SessionInfo>\n" +
      "  <SchoolInfoRefId>{RefId}</SchoolInfoRefId>\n" +
      "  <TimeTableCellRefId>{RefId}</TimeTableCellRefId>\n" +
      "  <SchoolYear>2015</SchoolYear>\n" +
      "  <LocalId>1245566</LocalId>\n" +
      "  <TimeTableSubjectLocalId>123456</TimeTableSubjectLocalId>\n" +
      "  <TeachingGroupLocalId>12356</TeachingGroupLocalId>\n" +
      "  <SchoolLocalId>124566</SchoolLocalId>\n" +
      "  <StaffPersonalLocalId>124555</StaffPersonalLocalId>\n" +
      "  <RoomNumber>604.741833843259</RoomNumber>\n" +
      "  <DayId>123455</DayId>\n" +
      "  <PeriodId>231555</PeriodId>\n" +
      "  <SessionDate>2015-01-01</SessionDate>\n" +
      "  <StartTime>08:30:00</StartTime>\n" +
      "  <FinishTime>15:30:00</FinishTime>\n" +
      "  <RollMarked>Y</RollMarked>\n" +
      "</SessionInfo>\n"
  });

  return _app;  
}(hitsclient || {}));
