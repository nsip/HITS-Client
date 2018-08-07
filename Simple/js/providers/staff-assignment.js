var hitsclient = (function(_app) {
  if (!_app.providers) {
    _app.providers = [];
  }

  _app.providers.push({
    name : "Staff Assignment",
    value : "StaffAssignments",
    servicePaths : ["SchoolInfos/{}/StaffAssignments", "StaffPersonals/{}/StaffAssignments", ],
    template : 
      "<!-- Remember to insert RefIds of records that exist; and to hyphenate RefID as\n" +
      "     xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx -->\n" +
      "<StaffAssignment>\n" +
      "  <SchoolInfoRefId>{RefId}</SchoolInfoRefId>\n" +
      "  <SchoolYear>2008</SchoolYear>\n" +
      "  <StaffPersonalRefId>{RefId}</StaffPersonalRefId>\n" +
      "  <Description>VCE English Teacher</Description>\n" +
      "  <PrimaryAssignment>Y</PrimaryAssignment>\n" +
      "  <JobStartDate>2000-09-05</JobStartDate>\n" +
      "  <JobEndDate>2001-06-25</JobEndDate>\n" +
      "  <JobFTE>1.00</JobFTE>\n" +
      "  <JobFunction>Teacher</JobFunction>\n" +
      "  <StaffSubjectList>\n" +
      "    <StaffSubject>\n" +
      "      <PreferenceNumber>1</PreferenceNumber>\n" +
      "      <SubjectLocalId>English</SubjectLocalId>\n" +
      "      <TimeTableSubjectRefId>{RefId}</TimeTableSubjectRefId>\n" +
      "    </StaffSubject>\n" +
      "    <StaffSubject>\n" +
      "      <PreferenceNumber>2</PreferenceNumber>\n" +
      "      <SubjectLocalId>Mathematics</SubjectLocalId>\n" +
      "      <TimeTableSubjectRefId>{RefId}</TimeTableSubjectRefId>\n" +
      "    </StaffSubject>\n" +
      "    <StaffSubject>\n" +
      "      <PreferenceNumber>3</PreferenceNumber>\n" +
      "      <SubjectLocalId>Science</SubjectLocalId>\n" +
      "      <TimeTableSubjectRefId>{RefId}</TimeTableSubjectRefId>\n" +
      "    </StaffSubject>\n" +
      "  </StaffSubjectList>\n" +
      "  <StaffActivity>\n" +
      "    <Code>1100</Code>\n" +
      "  </StaffActivity>\n" +
      "  <YearLevels>\n" +
      "    <YearLevel>\n" +
      "      <Code>11</Code>\n" +
      "    </YearLevel>\n" +
      "    <YearLevel>\n" +
      "      <Code>12</Code>\n" +
      "    </YearLevel>\n" +
      "  </YearLevels>\n" +
      "</StaffAssignment>\n"
  });

  return _app;  
}(hitsclient || {}));
