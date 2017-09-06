var hitsclient = (function(_app) {
  if (!_app.providers) {
    _app.providers = [];
  }

  _app.providers.push({
    name : "School Info",
    value : "SchoolInfos",
    template : 
      "<!-- Remember to insert RefIds of records that exist; and to hyphenate RefID as\n" +
      "     xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx -->\n" +
      "<SchoolInfo>\n" +
      "  <LocalId>01011234</LocalId>\n" +
      "  <StateProvinceId>01011234</StateProvinceId>\n" +
      "  <SchoolName>Lincoln Secondary College</SchoolName>\n" +
      "  <SchoolType>Pri/Sec</SchoolType>\n" +
      "  <SchoolEmailList>\n" +
      "    <Email Type=\"01\">jmiller@lsc.vic.edu.au</Email>\n" +
      "  </SchoolEmailList>\n" +
      "  <AddressList>\n" +
      "    <Address Type=\"0123\" Role=\"012B\">\n" +
      "      <Street>\n" +
      "        <StreetNumber>23</StreetNumber>\n" +
      "        <StreetName>Nicholson Street</StreetName >\n" +
      "      </Street>\n" +
      "      <City>Carnegie</City>\n" +
      "      <StateProvince>VIC</StateProvince>\n" +
      "      <PostalCode>3004</PostalCode>\n" +
      "    </Address>  \n" +
      "  </AddressList>\n" +
      "  <OperationalStatus>O</OperationalStatus>\n" +
      "  <SchoolSector>NG</SchoolSector>\n" +
      "</SchoolInfo>\n"
  });

  return _app;  
}(hitsclient || {}));
