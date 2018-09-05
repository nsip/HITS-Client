var hitsclient = (function(_app) {
  if (!_app.providers) {
    _app.providers = [];
  }

  _app.providers.push({
    name : "Student Personal",
    value : "StudentPersonals",
    servicePaths : [ "SchoolInfos/{}/StudentPersonals", "TeachingGroups/{}/StudentPersonals"],
    template : 
      "<!-- Remember to insert RefIds of records that exist; and to hyphenate RefID as\n" +
      "     xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx -->\n" +
      "<StudentPersonal>\n" +
      "  <LocalId>S1234567</LocalId>\n" +
      "  <StateProvinceId>ABC1234</StateProvinceId>\n" +
      "  <PersonInfo>\n" +
      "    <Name Type=\"LGL\">\n" +
      "      <FamilyName>Smith</FamilyName>\n" +
      "      <GivenName>Fred</GivenName>\n" +
      "      <FullName>Fred Smith</FullName>\n" +
      "    </Name>\n" +
      "    <Demographics>\n" +
      "      <Sex>1</Sex>\n" +
      "    </Demographics>\n" +
      "    <EmailList>\n" +
      "      <Email Type=\"01\">fsmith@yahoo.com</Email>\n" +
      "      <Email Type=\"02\">freddy@gmail.com</Email>\n" +
      "    </EmailList>\n" +
      "  </PersonInfo>\n" +
      "  <MostRecent>\n" +
      "    <YearLevel>\n" +
      "      <Code>P</Code>\n" +
      "    </YearLevel>\n" +
      "  </MostRecent>\n" +
      "</StudentPersonal>\n"
  });

  return _app;    
}(hitsclient || {}));
