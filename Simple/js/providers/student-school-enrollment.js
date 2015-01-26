var hitsclient = (function(_app) {
  if (!_app.providers) {
    _app.providers = [];
  }

  _app.providers.push({
    name: "Student School Enrollment",
    value: "StudentSchoolEnrollments",
    template : 
      "<!-- Remember to insert RefIds of records that exist; and to hyphenate RefID as\n" +
      "     xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx -->\n" +
      "<StudentSchoolEnrollment>\n" +
      "  <StudentPersonalRefId>{RefId}</StudentPersonalRefId>\n" +
      "  <SchoolInfoRefId>{RefId}</SchoolInfoRefId>\n" +
      "  <MembershipType>01</MembershipType>\n" +
      "  <TimeFrame>C</TimeFrame>\n" +
      "  <SchoolYear>2004</SchoolYear>\n" +
      "  <EntryDate>2004-01-29</EntryDate>\n" +
      "  <YearLevel>\n" +
      "    <Code>10</Code>\n" +
      "  </YearLevel>\n" +
      "  <Homeroom SIF_RefObject=\"RoomInfo\">{RefId}</Homeroom>\n" +
      "  <Advisor SIF_RefObject=\"StaffPersonal\">{RefId}</Advisor>\n" +
      "  <FTE>1.00</FTE>\n" +
      "  <FTPTStatus>01</FTPTStatus>\n" +
      "  <StudentSubjectChoiceList>\n" +
      "    <StudentSubjectChoice>\n" +
      "       <PreferenceNumber>1</PreferenceNumber>\n" +
      "       <SubjectLocalId>212</SubjectLocalId>\n" +
      "    </StudentSubjectChoice>\n" +
      "    <StudentSubjectChoice>\n" +
      "       <PreferenceNumber>2</PreferenceNumber>\n" +
      "       <SubjectLocalId>124</SubjectLocalId>\n" +
      "    </StudentSubjectChoice>\n" +
      "  </StudentSubjectChoiceList>\n" +
      "</StudentSchoolEnrollment>\n"
  });

  return _app;    
}(hitsclient || {}));