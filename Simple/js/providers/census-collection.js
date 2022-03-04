var hitsclient = (function(_app) {
  if (!_app.providers) {
    _app.providers = [];
  }

  _app.providers.push({
    name: "CensusCollection",
    value: "CensusCollections",
    template: 
      "<!-- Remember to insert RefIds of records that exist; and to hyphenate RefID as\n" +
      "     xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx -->\n" +
    "<CensusCollection RefId=\"{RefId}\">\n" +
"  <CensusYear>2018</CensusYear>\n" +
"  <!-- Data Year -->\n" +
"  <RoundCode>Census1</RoundCode>\n" +
"  <SoftwareVendorInfo>\n" +
"    <!--Optional information about the Vendor -->\n" +
"    <SoftwareProduct>Civica</SoftwareProduct>\n" +
"    <SoftwareVersion>Websys 1.0</SoftwareVersion>\n" +
"  </SoftwareVendorInfo>\n" +
"  <CensusReportingList>\n" +
"    <CensusReporting>\n" +
"      <EntityLevel>School</EntityLevel>\n" +
"      <CommonwealthId>012345</CommonwealthId>\n" +
"      <!-- AGEID -->\n" +
"      <EntityName>XXX Secondary College</EntityName>\n" +
"      <EntityContact>\n" +
"        <Name Type=\"LGL\">\n" +
"          <FamilyName>Citizen</FamilyName>\n" +
"          <!-- Collection Contact Family Name -->\n" +
"          <GivenName>James</GivenName>\n" +
"          <!-- Collection Contact First Name -->\n" +
"        </Name>\n" +
"        <PositionTitle>Auditor</PositionTitle>\n" +
"        <!-- Collection Contact Position -->\n" +
"        <Email Type=\"01\">jcitizen@school.vic.edu.au</Email>\n" +
"        <!-- Collection Contact EmailAddress -->\n" +
"        <PhoneNumber Type=\"0096\">\n" +
"          <Number>03 1234-2678</Number>\n" +
"        </PhoneNumber>\n" +
"        <!-- Collection Contact Phone Number -->\n" +
"      </EntityContact>\n" +
"      <CensusStaffList>\n" +
"        <CensusStaff>\n" +
"          <StaffCohortId>1</StaffCohortId>\n" +
"          <StaffActivity>\n" +
"            <Code>1100</Code>\n" +
"          </StaffActivity>\n" +
"          <CohortGender>M</CohortGender>\n" +
"          <CohortIndigenousType>N</CohortIndigenousType>\n" +
"          <PrimaryFTE>0.5</PrimaryFTE>\n" +
"          <!-- To be provided if known. -->\n" +
"          <SecondaryFTE>0.5</SecondaryFTE>\n" +
"          <!-- To be provided if known. -->\n" +
"          <JobFTE>1.0</JobFTE>\n" +
"          <Headcount>5</Headcount>\n" +
"        </CensusStaff>\n" +
"        <CensusStaff>\n" +
"          <StaffCohortId>2</StaffCohortId>\n" +
"          <StaffActivity>\n" +
"            <Code>1100</Code>\n" +
"          </StaffActivity>\n" +
"          <CohortGender>F</CohortGender>\n" +
"          <CohortIndigenousType>N</CohortIndigenousType>\n" +
"          <PrimaryFTE>1.0</PrimaryFTE>\n" +
"          <!-- To be provided if known. -->\n" +
"          <SecondaryFTE>0</SecondaryFTE>\n" +
"          <!-- To be provided if known. -->\n" +
"          <JobFTE>1.0</JobFTE>\n" +
"          <Headcount>6</Headcount>\n" +
"        </CensusStaff>\n" +
"        <CensusStaff>\n" +
"          <StaffCohortId>3</StaffCohortId>\n" +
"          <StaffActivity>\n" +
"            <Code>1100</Code>\n" +
"          </StaffActivity>\n" +
"          <CohortGender>M</CohortGender>\n" +
"          <CohortIndigenousType>I</CohortIndigenousType>\n" +
"          <PrimaryFTE>0</PrimaryFTE>\n" +
"          <!-- To be provided if known. -->\n" +
"          <SecondaryFTE>1.0</SecondaryFTE>\n" +
"          <!-- To be provided if known. -->\n" +
"          <JobFTE>1.0</JobFTE>\n" +
"          <Headcount>6</Headcount>\n" +
"        </CensusStaff>\n" +
"        <CensusStaff>\n" +
"          <StaffCohortId>4</StaffCohortId>\n" +
"          <StaffActivity>\n" +
"            <Code>1103</Code>\n" +
"          </StaffActivity>\n" +
"          <CohortGender>M</CohortGender>\n" +
"          <CohortIndigenousType>I</CohortIndigenousType>\n" +
"          <PrimaryFTE>0.0</PrimaryFTE>\n" +
"          <!-- To be provided if known. -->\n" +
"          <SecondaryFTE>1.0</SecondaryFTE>\n" +
"          <!-- To be provided if known. -->\n" +
"          <JobFTE>1.0</JobFTE>\n" +
"          <Headcount>1</Headcount>\n" +
"        </CensusStaff>\n" +
"      </CensusStaffList>\n" +
"      <CensusStudentList>\n" +
"        <CensusStudent>\n" +
"          <StudentCohortId>1</StudentCohortId>\n" +
"          <YearLevel>\n" +
"            <Code>7</Code>\n" +
"          </YearLevel>\n" +
"          <CensusAge>13</CensusAge>\n" +
"          <CohortGender>M</CohortGender>\n" +
"          <CohortIndigenousType>I</CohortIndigenousType>\n" +
"          <EducationMode>D</EducationMode>\n" +
"          <StudentOnVisa>N</StudentOnVisa>\n" +
"          <OverseasStudent>Y</OverseasStudent>\n" +
"          <DisabilityLevelOfAdjustment>None</DisabilityLevelOfAdjustment>\n" +
"          <DisabilityCategory>None</DisabilityCategory>\n" +
"          <FTE>1.0</FTE>\n" +
"          <Headcount>1</Headcount>\n" +
"        </CensusStudent>\n" +
"        <CensusStudent>\n" +
"          <StudentCohortId>2</StudentCohortId>\n" +
"          <YearLevel>\n" +
"            <Code>7</Code>\n" +
"          </YearLevel>\n" +
"          <CensusAge>13</CensusAge>\n" +
"          <CohortGender>F</CohortGender>\n" +
"          <CohortIndigenousType>I</CohortIndigenousType>\n" +
"          <EducationMode>D</EducationMode>\n" +
"          <StudentOnVisa>N</StudentOnVisa>\n" +
"          <OverseasStudent>Y</OverseasStudent>\n" +
"          <DisabilityLevelOfAdjustment>None</DisabilityLevelOfAdjustment>\n" +
"          <DisabilityCategory>None</DisabilityCategory>\n" +
"          <FTE>1.0</FTE>\n" +
"          <Headcount>1</Headcount>\n" +
"        </CensusStudent>\n" +
"        <CensusStudent>\n" +
"          <StudentCohortId>3</StudentCohortId>\n" +
"          <YearLevel>\n" +
"            <Code>7</Code>\n" +
"          </YearLevel>\n" +
"          <CensusAge>13</CensusAge>\n" +
"          <CohortGender>M</CohortGender>\n" +
"          <CohortIndigenousType>N</CohortIndigenousType>\n" +
"          <EducationMode>D</EducationMode>\n" +
"          <StudentOnVisa>N</StudentOnVisa>\n" +
"          <OverseasStudent>N</OverseasStudent>\n" +
"          <DisabilityLevelOfAdjustment>None</DisabilityLevelOfAdjustment>\n" +
"          <DisabilityCategory>None</DisabilityCategory>\n" +
"          <FTE>1.0</FTE>\n" +
"          <Headcount>120</Headcount>\n" +
"        </CensusStudent>\n" +
"        <CensusStudent>\n" +
"          <StudentCohortId>4</StudentCohortId>\n" +
"          <YearLevel>\n" +
"            <Code>7</Code>\n" +
"          </YearLevel>\n" +
"          <CensusAge>13</CensusAge>\n" +
"          <CohortGender>M</CohortGender>\n" +
"          <CohortIndigenousType>I</CohortIndigenousType>\n" +
"          <EducationMode>D</EducationMode>\n" +
"          <StudentOnVisa>N</StudentOnVisa>\n" +
"          <OverseasStudent>N</OverseasStudent>\n" +
"          <DisabilityLevelOfAdjustment>Substantial</DisabilityLevelOfAdjustment>\n" +
"          <DisabilityCategory>Sensory</DisabilityCategory>\n" +
"          <FTE>1.0</FTE>\n" +
"          <Headcount>1</Headcount>\n" +
"        </CensusStudent>\n" +
"      </CensusStudentList>\n" +
"    </CensusReporting>\n" +
"  </CensusReportingList>\n" +
"</CensusCollection>\n" 
  });

  return _app;    
}(hitsclient || {}));
