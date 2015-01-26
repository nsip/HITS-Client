var hitsclient = (function(_app) {
  if (!_app.providers) {
    _app.providers = [];
  }

  _app.providers.push({
    name: "Time Table Subject",
    value: "TimeTableSubjects",
    template: 
      "<!-- Remember to insert RefIds of records that exist; and to hyphenate RefID as\n" +
      "     xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx -->\n" +
      "<TimeTableSubject>\n" +
      "  <SubjectLocalId>07AR</SubjectLocalId>\n" +
      "  <AcademicYear>\n" +
      "    <Code>7</Code>\n" +
      "  </AcademicYear>\n" +
      "  <SubjectShortName>7 ART</SubjectShortName>\n" +
      "  <SubjectLongName>Year 7 Art</SubjectLongName>\n" +
      "  <SubjectType>E</SubjectType>\n" +
      "  <ProposedMaxClassSize>10</ProposedMaxClassSize>\n" +
      "  <ProposedMinClassSize>15</ProposedMinClassSize>\n" +
      "  <SchoolInfoRefId>{RefId}</SchoolInfoRefId>\n" +
      "  <SchoolLocalId>32718</SchoolLocalId>\n" +
      "  <Semester>2009</Semester >\n" +
      "  <SchoolYear>2009</SchoolYear>\n" +
      "</TimeTableSubject>\n"
  });

  return _app;    
}(hitsclient || {}));