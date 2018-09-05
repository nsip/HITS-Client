var hitsclient = (function(_app) {
  if (!_app.providers) {
    _app.providers = [];
  }

  _app.providers.push({
    name : "Teaching Group",
    value : "TeachingGroups",
    servicePaths : ["SchoolInfos/{}/StaffPersonals/{}/TeachingGroups", "SchoolInfos/{}/TeachingGroups", "StaffPersonals/{}/TeachingGroups", "StudentPersonals/{}/TeachingGroups", "TimeTableSubjects/{}/TeachingGroups"],
    template : 
      "<!-- Remember to insert RefIds of records that exist; and to hyphenate RefID as\n" +
      "     xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx -->\n" +
      "<TeachingGroup>\n" +
      "  <SchoolYear>2008</SchoolYear>\n" +
      "  <LocalId>20087ASPN</LocalId>\n" +
      "  <ShortName>7A SPN</ShortName>\n" +
      "  <SchoolInfoRefId>{RefId}</SchoolInfoRefId>\n" +
      "  <StudentList>\n" +
      "    <TeachingGroupStudent>\n" +
      "      <StudentPersonalRefId>{RefId}</StudentPersonalRefId>\n" +
      "      <StudentLocalId>SMI001</StudentLocalId>\n" +
      "      <Name Type=\"LGL\">\n" +
      "        <FamilyName>Smith</FamilyName>\n" +
      "        <GivenName>Peter</GivenName>\n" +
      "      </Name>\n" +
      "    </TeachingGroupStudent>\n" +
      "    <TeachingGroupStudent>\n" +
      "      <StudentPersonalRefId>{RefId}</StudentPersonalRefId>\n" +
      "      <StudentLocalId>SMI002</StudentLocalId>\n" +
      "      <Name Type=\"LGL\">\n" +
      "        <FamilyName>Smith</FamilyName>\n" +
      "        <GivenName>Jennifer</GivenName>\n" +
      "      </Name>\n" +
      "    </TeachingGroupStudent>\n" +
      "    <TeachingGroupStudent>\n" +
      "      <StudentPersonalRefId>{RefId}</StudentPersonalRefId>\n" +
      "      <StudentLocalId>SMI003</StudentLocalId>\n" +
      "      <Name Type=\"LGL\">\n" +
      "        <FamilyName>Smith</FamilyName>\n" +
      "        <GivenName>Terence</GivenName>\n" +
      "      </Name>\n" +
      "    </TeachingGroupStudent>\n" +
      "  </StudentList>\n" +
      "  <TeacherList>\n" +
      "    <TeachingGroupTeacher>\n" +
      "      <StaffPersonalRefId>{RefId}</StaffPersonalRefId>\n" +
      "      <StaffLocalId>SMI1</StaffLocalId>\n" +
      "      <Name Type=\"LGL\">\n" +
      "        <FamilyName>Smith</FamilyName>\n" +
      "        <GivenName>Thomas</GivenName>\n" +
      "      </Name>\n" +
      "      <Association>Class Teacher</Association>\n" +
      "    </TeachingGroupTeacher>\n" +
      "    <TeachingGroupTeacher>\n" +
      "      <StaffPersonalRefId>{RefId}</StaffPersonalRefId>\n" +
      "      <StaffLocalId>LONG2</StaffLocalId>\n" +
      "      <Name Type=\"LGL\">\n" +
      "        <FamilyName>Long</FamilyName>\n" +
      "        <GivenName>Tamara</GivenName>\n" +
      "      </Name>\n" +
      "      <Association>Integration Aide</Association>\n" +
      "    </TeachingGroupTeacher>\n" +
      "  </TeacherList>\n" +
      "  <TeachingGroupPeriodList>\n" +
      "    <TeachingGroupPeriod>\n" +
      "      <DayId>M</DayId>\n" +
      "      <PeriodId>2</PeriodId>\n" +
      "    </TeachingGroupPeriod>\n" +
      "    <TeachingGroupPeriod>\n" +
      "      <DayId>F</DayId>\n" +
      "      <PeriodId>6</PeriodId>\n" +
      "    </TeachingGroupPeriod>\n" +
      "  </TeachingGroupPeriodList>\n" +
      "</TeachingGroup>\n"
  });

  return _app;    
}(hitsclient || {}));
