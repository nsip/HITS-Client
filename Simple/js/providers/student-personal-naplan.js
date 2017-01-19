var hitsclient = (function(_app) {
  if (!_app.providers) {
    _app.providers = [];
  }

  _app.providers.push({
    name : "Student Personal (naplan)",
    value : "StudentPersonals",
    template : 
      "<StudentPersonal>\n" + 
      "  <LocalId>coqqg649</LocalId>\n" + 
      "  <StateProvinceId>94931</StateProvinceId>\n" + 
      "  <OtherIdList>\n" + 
      '    <OtherId Type="SectorStudentId">16447</OtherId>' + "\n" + 
      '    <OtherId Type="DiocesanStudentId">61853</OtherId>' + "\n" + 
      '    <OtherId Type="OtherStudentId">58922</OtherId>' + "\n" + 
      '    <OtherId Type="TAAStudentId">35034</OtherId>' + "\n" + 
      '    <OtherId Type="NationalStudentId">16497</OtherId>' + "\n" + 
      '    <OtherId Type="NAPPlatformStudentId">R100000000K</OtherId>' + "\n" + 
      '    <OtherId Type="PreviousLocalSchoolStudentId">83157</OtherId>' + "\n" + 
      '    <OtherId Type="PreviousSectorStudentId">92091</OtherId>' + "\n" + 
      '    <OtherId Type="PreviousDiocesanStudentId">38409</OtherId>' + "\n" + 
      '    <OtherId Type="PreviousOtherStudentId">95589</OtherId>' + "\n" + 
      '    <OtherId Type="PreviousTAAStudentId">57431</OtherId>' + "\n" + 
      '    <OtherId Type="PreviousStateProvinceId">17738</OtherId>' + "\n" + 
      '    <OtherId Type="PreviousNationalStudentId">53450</OtherId>' + "\n" + 
      '    <OtherId Type="PreviousNAPPlatformStudentId">98305</OtherId>' + "\n" + 
      "  </OtherIdList>\n" + 
      "  <PersonInfo>\n" + 
      '    <Name Type="LGL">' +"\n" + 
      "      <FamilyName>Wilson</FamilyName>\n" + 
      "      <GivenName>Laverne</GivenName>\n" + 
      "      <MiddleName></MiddleName>\n" + 
      "      <PreferredGivenName>Laverne</PreferredGivenName>\n" + 
      "    </Name>\n" + 
      "    <Demographics>\n" + 
      "      <IndigenousStatus>2</IndigenousStatus>\n" + 
      "      <Sex>2</Sex>\n" + 
      "      <BirthDate>2009-12-17</BirthDate>\n" + 
      "      <CountryOfBirth>1101</CountryOfBirth>\n" + 
      "      <CountriesOfCitizenship>\n" + 
      "        <CountryOfCitizenship>1101</CountryOfCitizenship>\n" + 
      "      </CountriesOfCitizenship>\n" + 
      "      <CountriesOfResidency>\n" + 
      "        <CountryOfResidency>1101</CountryOfResidency>\n" + 
      "      </CountriesOfResidency>\n" + 
      "      <AustralianCitizenshipStatus>1</AustralianCitizenshipStatus>\n" + 
      "      <EnglishProficiency>\n" + 
      "        <Code>1</Code>\n" + 
      "      </EnglishProficiency>\n" + 
      "      <LanguageList>\n" + 
      "        <Language>\n" + 
      "          <Code>1201</Code>\n" + 
      "          <LanguageType>1</LanguageType>\n" + 
      "        </Language>\n" + 
      "      </LanguageList>\n" + 
      "      <PermanentResident>P</PermanentResident>\n" + 
      "      <VisaSubClass>101</VisaSubClass>\n" + 
      "      <VisaStatisticalCode>05</VisaStatisticalCode>\n" + 
      "      <LBOTE>N</LBOTE>\n" + 
      "    </Demographics>\n" + 
      "    <AddressList>\n" + 
      '      <Address Type="0123" Role="012B">' + "\n" + 
      "        <Street>\n" + 
      "          <Line1>146 East State Street</Line1>\n" + 
      "        </Street>\n" + 
      "        <City>Ithaca</City>\n" + 
      "        <StateProvince>VIC</StateProvince>\n" + 
      "        <Country>1101</Country>\n" + 
      "        <PostalCode>9999</PostalCode>\n" + 
      "      </Address>\n" + 
      "    </AddressList>\n" + 
      "  </PersonInfo>\n" + 
      "  <MostRecent>\n" + 
      "    <SchoolLocalId>x72860</SchoolLocalId>\n" + 
      "    <HomeroomLocalId>043</HomeroomLocalId>\n" + 
      "    <YearLevel><Code>5</Code></YearLevel>\n" + 
      "    <FTE>1.00</FTE>\n" + 
      "    <Parent1Language>1201</Parent1Language>\n" + 
      "    <Parent2Language>2201</Parent2Language>\n" + 
      "    <Parent1EmploymentType>1</Parent1EmploymentType>\n" + 
      "    <Parent2EmploymentType>2</Parent2EmploymentType>\n" + 
      "    <Parent1SchoolEducationLevel>2</Parent1SchoolEducationLevel>\n" + 
      "    <Parent2SchoolEducationLevel>1</Parent2SchoolEducationLevel>\n" + 
      "    <Parent1NonSchoolEducation>6</Parent1NonSchoolEducation>\n" + 
      "    <Parent2NonSchoolEducation>7</Parent2NonSchoolEducation>\n" + 
      "    <LocalCampusId>01</LocalCampusId>\n" + 
      "    <SchoolACARAId>21212</SchoolACARAId>\n" + 
      "    <TestLevel><Code>5</Code></TestLevel>\n" + 
      "    <Homegroup>5B</Homegroup>\n" + 
      "    <ClassCode>5E</ClassCode>\n" + 
      "    <MembershipType>01</MembershipType>\n" + 
      "    <FFPOS>1</FFPOS>\n" + 
      "    <ReportingSchoolId>21212</ReportingSchoolId>\n" + 
      "    <OtherEnrollmentSchoolACARAId>21212</OtherEnrollmentSchoolACARAId>\n" + 
      "  </MostRecent>\n" + 
      "  <HomeSchooledStudent>N</HomeSchooledStudent>\n" + 
      "  <Sensitive>Y</Sensitive>\n" + 
      "  <OfflineDelivery>N</OfflineDelivery>\n" + 
      "</StudentPersonal>\n"  });

  return _app;    
}(hitsclient || {}));
