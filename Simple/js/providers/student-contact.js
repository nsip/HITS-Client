var hitsclient = (function(_app) {
  if (!_app.providers) {
    _app.providers = [];
  }

  _app.providers.push({
    name : "Student Contact Personal",
    value : "StudentContactPersonals",
    template : 
      "<!-- Remember to insert RefIds of records that exist; and to hyphenate RefID as\n" +
      "     xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx -->\n" +
      "<StudentContactPersonal>\n" +
      "    <LocalId>LocalId</LocalId>\n" +
      "    <PersonInfo>\n" +
      "        <Name>\n" +
      "            <Title>Mr</Title>\n" +
      "            <FamilyName>Tester</FamilyName>\n" +
      "            <GivenName>Fred</GivenName>\n" +
      "            <MiddleName>Middle</MiddleName>\n" +
      "            <PreferredFamilyName>PTester</PreferredFamilyName>\n" +
      "            <PreferredGivenName>PFred</PreferredGivenName>\n" +
      "            <FullName>Fred Tester</FullName>\n" +
      "        </Name>\n" +
      "        <Demographics/>\n" +
      "        <AddressList>\n" +
      "            <Address Type=\"0123\" Role=\"012B\">\n" +
      "                <Street>\n" +
      "                    <Line1>123 Address Line One</Line1>\n" +
      "                    <Line2>Address Line Two</Line2>\n" +
      "                </Street>\n" +
      "                <City>Perth</City>\n" +
      "                <StateProvince>WA</StateProvince>\n" +
      "                <PostalCode>6000</PostalCode>\n" +
      "                <GridLocation>\n" +
      "                    <Latitude>-31.952693</Latitude>\n" +
      "                    <Longitude>115.871971</Longitude>\n" +
      "                </GridLocation>\n" +
      "            </Address>\n" +
      "            <Address Type=\"0123\" Role=\"012B\">\n" +
      "                <Street>\n" +
      "                    <Line1>234 Address Line One</Line1>\n" +
      "                </Street>\n" +
      "                <City>Perth</City>\n" +
      "                <StateProvince>WA</StateProvince>\n" +
      "                <PostalCode>6000</PostalCode>\n" +
      "                <GridLocation>\n" +
      "                    <Latitude>-31.952693</Latitude>\n" +
      "                    <Longitude>115.871971</Longitude>\n" +
      "                </GridLocation>\n" +
      "            </Address>\n" +
      "        </AddressList>\n" +
      "        <PhoneNumberList>\n" +
      "            <PhoneNumber>\n" +
      "                <Number>+61400000000</Number>\n" +
      "            </PhoneNumber>\n" +
      "        </PhoneNumberList>\n" +
      "        <EmailList>\n" +
      "            <Email Type=\"06\">the.email@not.a.real.domain</Email>\n" +
      "        </EmailList>\n" +
      "    </PersonInfo>\n" +
      "    <EmploymentType>1</EmploymentType>\n" +
      "    <SchoolEducationalLevel>4</SchoolEducationalLevel>\n" +
      "    <NonSchoolEducation>7</NonSchoolEducation>\n" +
      "</StudentContactPersonal>\n"
  });

  return _app;  
}(hitsclient || {}));
