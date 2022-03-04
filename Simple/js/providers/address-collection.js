var hitsclient = (function(_app) {
  if (!_app.providers) {
    _app.providers = [];
  }

  _app.providers.push({
    name: "AddressCollection",
    value: "AddressCollections",
    template: 
      "<!-- Remember to insert RefIds of records that exist; and to hyphenate RefID as\n" +
      "     xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx -->\n" +
      "<AddressCollection RefId=\"{RefId}\">\n" +
    "  <AddressCollectionYear>2019</AddressCollectionYear>\n" +
"  <!-- Data Year -->\n" +
"  <RoundCode>SES1</RoundCode>\n" +
"  <SoftwareVendorInfo>\n" +
"    <!--Optional information about the Vendor -->\n" +
"    <SoftwareProduct>Civica</SoftwareProduct>\n" +
"    <SoftwareVersion>Websys 1.0</SoftwareVersion>\n" +
"  </SoftwareVendorInfo>\n" +
"  <AddressCollectionReportingList>\n" +
"    <AddressCollectionReporting>\n" +
"      <CommonwealthId>012345</CommonwealthId>\n" +
"      <!-- AGEID -->\n" +
"      <EntityName>XXX Secondary College</EntityName>\n" +
"      <EntityContact>\n" +
"        <Name Type=\"LGL\">\n" +
"          <FamilyName>Citizen</FamilyName>\n" +
"          <!-- Collection Contact Family Name -->\n" +
"          <GivenName>John</GivenName>\n" +
"          <!-- Collection Contact First Name -->\n" +
"        </Name>\n" +
"        <PositionTitle>Auditor</PositionTitle>\n" +
"        <!-- Collection Contact Position -->\n" +
"        <Email Type=\"01\">jcitizen@school.vic.edu.au</Email>\n" +
"        <!-- Collection Contact EmailAddress -->\n" +
"        <PhoneNumber Type=\"0096\">\n" +
"          <Number>03 1234-2678</Number>\n" +
"        </PhoneNumber>\n" +
"        <!-- Collection Contact Phone Number-->\n" +
"      </EntityContact>\n" +
"      <AGContextualQuestionList>\n" +
"        <AGContextualQuestion>\n" +
"          <AGContextCode>AC001</AGContextCode>\n" +
"          <AGAnswer>Yes</AGAnswer>\n" +
"        </AGContextualQuestion>\n" +
"        <AGContextualQuestion>\n" +
"          <AGContextCode>AC002</AGContextCode>\n" +
"          <AGAnswer>Primary</AGAnswer>\n" +
"        </AGContextualQuestion>\n" +
"      </AGContextualQuestionList>\n" +
"      <AddressCollectionStudentList>\n" +
"        <AddressCollectionStudent>\n" +
"          <LocalId>12345</LocalId>\n" +
"          <EducationLevel>Primary</EducationLevel>\n" +
"          <BoardingStatus>D</BoardingStatus>\n" +
"          <ReportingParent2>Y</ReportingParent2>\n" +
"          <StudentAddress Type=\"0123\" Role=\"012B\">\n" +
"            <Street>\n" +
"              <Line1>The House</Line1>\n" +
"              <Line2>2921 Warburton Hwy</Line2>\n" +
"            </Street>\n" +
"            <City>Chicago</City>\n" +
"            <StateProvince>WA</StateProvince>\n" +
"            <PostalCode>60611</PostalCode>\n" +
"          </StudentAddress>\n" +
"          <Parent1>\n" +
"            <ParentName Type=\"LGL\">\n" +
"              <FamilyName>Miller</FamilyName>\n" +
"              <!-- Collection Parent Family Name -->\n" +
"              <GivenName>James</GivenName>\n" +
"              <!-- Collection Parent First Name -->\n" +
"              <PreferredGivenName>Jim</PreferredGivenName>\n" +
"              <!-- Collection Parent Preferred First Name -->\n" +
"            </ParentName>\n" +
"            <AddressSameAsStudent>Y</AddressSameAsStudent>\n" +
"            <ParentAddress Type=\"0123\" Role=\"012B\">\n" +
"              <Street>\n" +
"                <Line1>The House</Line1>\n" +
"                <Line2>2921 Warburton Hwy</Line2>\n" +
"              </Street>\n" +
"              <City>Chicago</City>\n" +
"              <StateProvince>WA</StateProvince>\n" +
"              <PostalCode>60611</PostalCode>\n" +
"            </ParentAddress>\n" +
"          </Parent1>\n" +
"          <Parent2>\n" +
"            <ParentName Type=\"LGL\">\n" +
"              <FamilyName>Miller</FamilyName>\n" +
"              <!-- Collection Parent Family Name -->\n" +
"              <GivenName>Samantha</GivenName>\n" +
"              <!-- Collection Parent First Name -->\n" +
"              <PreferredGivenName>Sam</PreferredGivenName>\n" +
"              <!-- Collection Parent Preferred First Name -->\n" +
"            </ParentName>\n" +
"            <AddressSameAsStudent>Y</AddressSameAsStudent>\n" +
"            <ParentAddress Type=\"0123\" Role=\"012B\">\n" +
"              <Street>\n" +
"                <Line1>The House</Line1>\n" +
"                <Line2>2921 Warburton Hwy</Line2>\n" +
"              </Street>\n" +
"              <City>Chicago</City>\n" +
"              <StateProvince>WA</StateProvince>\n" +
"              <PostalCode>60611</PostalCode>\n" +
"            </ParentAddress>\n" +
"          </Parent2>\n" +
"        </AddressCollectionStudent>\n" +
"      </AddressCollectionStudentList>\n" +
"    </AddressCollectionReporting>\n" +
"  </AddressCollectionReportingList>\n" +
"</AddressCollection>\n"
  });

  return _app;    
}(hitsclient || {}));
