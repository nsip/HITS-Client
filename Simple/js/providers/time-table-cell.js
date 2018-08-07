var hitsclient = (function(_app) {
  if (!_app.providers) {
    _app.providers = [];
  }

  _app.providers.push({
    name: 'Time Table Cell',
    value: 'TimeTableCells',
    servicePaths : ["SchoolInfos/{}/TimeTableCells"],
    template: 
      "<!-- Remember to insert RefIds of records that exist; and to hyphenate RefID as\n" +
      "     xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx -->\n" +
      "<TimeTableCell>\n" +
      "  <TimeTableRefId>{RefId}</TimeTableRefId>\n" +
      "  <TimeTableSubjectRefId>{RefId}</TimeTableSubjectRefId>\n" +
      "  <TeachingGroupRefId>{RefId}</TeachingGroupRefId>\n" +
      "  <RoomInfoRefId>{RefId}</RoomInfoRefId>\n" +
      "  <StaffPersonalRefId>{RefId}</StaffPersonalRefId>\n" +
      "  <TimeTableLocalId>2008S1</TimeTableLocalId>\n" +
      "  <SubjectLocalId>07AR</SubjectLocalId>\n" +
      "  <TeachingGroupLocalId>20087ASPN 2008S1</TeachingGroupLocalId>\n" +
      "  <RoomNumber>101</RoomNumber>\n" +
      "  <StaffLocalId>946379881</StaffLocalId>\n" +
      "  <DayId>1</DayId>\n" +
      "  <PeriodId>1</PeriodId>\n" +
      "  <CellType>T</CellType>\n" +
      "  <SchoolInfoRefId>{RefId}</SchoolInfoRefId>\n" +
      "  <SchoolLocalId>01011234</SchoolLocalId>\n" +
      "</TimeTableCell>\n"
  });

  return _app;    
}(hitsclient || {}));