var hitsclient = (function(_app) {
  if (!_app.providers) {
    _app.providers = [];
  }

  _app.providers.push({
    name : "Scheduled Activity",
    value : "ScheduledActivitys",
    servicePaths: ["StaffPersonals/{}/ScheduledActivitys", "StudentPersonals/{}/ScheduledActivitys", "TeachingGroups/{}/ScheduledActivitys"],
    template : "" +
          "<!-- Remember to insert RefIds of records that exist; and to hyphenate RefID as\n" +
          "     xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx -->\n" +
          "<ScheduledActivity>\n" +
          "<SchoolInfoRefId>{RefId}</SchoolInfoRefId>\n" +
          " <TimeTableCellRefId>{RefId}</TimeTableCellRefId>\n" +
          " <DayId>1</DayId>\n" +
          " <PeriodId>1</PeriodId>\n" +
          " <TimeTableRefId>{RefId}</TimeTableRefId>\n" +
          " <ActivityDate>2014-10-10</ActivityDate>\n" +
          " <StartTime>12:05:00</StartTime>\n" +
          " <FinishTime>13:30:00</FinishTime>\n" +
          " <CellType>Classroom</CellType>\n" +
          " <TimeTableSubjectRefId>{RefId}</TimeTableSubjectRefId>\n" +
          " <TeacherList>\n" +
          "   <TeacherCover>\n" +
          "     <StaffPersonalRefId>{RefId}</StaffPersonalRefId>\n" +
          "     <StaffLocalId>US8923</StaffLocalId>\n" +
          "     <StartTime>12:05:00</StartTime>\n" +
          "     <FinishTime>13:00:00</FinishTime>\n" +
          "     <Credit>In-lieu</Credit>\n" +
          "     <Supervision>MinimalSupervision</Supervision>\n" +
          "     <Weighting>0.5</Weighting>\n" +
          "   </TeacherCover>\n" +
          "   \n" +
          " </TeacherList>\n" +
          " <RoomList>\n" +
          "   <RoomInfoRefId>{RefId}</RoomInfoRefId>\n" +
          " </RoomList>\n" +
          " <ActivityType>Incursion</ActivityType>\n" +
          " <TeachingGroupList>\n" +
          "   <TeachingGroupRefId>{RefId}</TeachingGroupRefId>\n" +
          " </TeachingGroupList>\n" +
          "</ScheduledActivity>\n"
  });

  return _app;  
}(hitsclient || {}));
