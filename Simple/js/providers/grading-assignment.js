var hitsclient = (function(_app) {
  if (!_app.providers) {
    _app.providers = [];
  }

  _app.providers.push({
    name : "Grading Assignment",
    value : "GradingAssignments",
    template : 
      "<!-- Remember to insert RefIds of records that exist; and to hyphenate RefID as\n" +
      "     xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx -->\n" +
      "<GradingAssignment>\n" +
      "    <TeachingGroupRefId>{RefId}</TeachingGroupRefId>\n" +
      "    <SchoolInfoRefId>{RefId}</SchoolInfoRefId>\n" +
      "    <GradingCategory>GC</GradingCategory>\n" +
      "    <Description>Description</Description>\n" +
      "    <PointsPossible>80</PointsPossible>\n" +
      "    <CreateDate>2015-07-01</CreateDate>\n" +
      "    <DueDate>2015-10-01</DueDate>\n" +
      "    <Weight>75</Weight>\n" +
      "    <MaxAttemptsAllowed>1</MaxAttemptsAllowed>\n" +
      "    <DetailedDescriptionURL>http://www.google.com</DetailedDescriptionURL>\n" +
      "</GradingAssignment>\n"
  });

  return _app;  
}(hitsclient || {}));
