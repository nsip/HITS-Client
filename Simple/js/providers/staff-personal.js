var hitsclient = (function(_app) {
  if (!_app.providers) {
    _app.providers = [];
  }

  _app.providers.push({
    name : "Staff Personal",
    value : "StaffPersonals",
    template : 
      "<StaffPersonal>\n" +
      "  <LocalId>946379881</LocalId>\n" +
      "  <StateProvinceId>C2345681</StateProvinceId>\n" +
      "  <PersonInfo>\n" +
      "    <Name Type=\"LGL\">\n" +
      "      <FamilyName>Smith</FamilyName>\n" +
      "      <GivenName>Fred</GivenName>\n" +
      "    </Name>\n" +
      "    <Demographics>\n" +
      "      <Sex>1</Sex>\n" +
      "    </Demographics>\n" +
      "    <EmailList>\n" +
      "      <Email Type=\"01\">fsmith@yahoo.com</Email>\n" +
      "      <Email Type=\"02\">freddy@gmail.com</Email>\n" +
      "    </EmailList>\n" +
      "  </PersonInfo>\n" +
      "  <EmploymentStatus>A</EmploymentStatus>\n" +
      "</StaffPersonal>\n"
  });

  return _app;  
}(hitsclient || {}));
