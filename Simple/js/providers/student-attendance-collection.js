var hitsclient = (function(_app) {
  if (!_app.providers) {
    _app.providers = [];
  }

  _app.providers.push({
    name: "StudentAttendanceCollection",
    value: "StudentAttendanceCollections",
    template: 
      "<!-- Remember to insert RefIds of records that exist; and to hyphenate RefID as\n" +
      "     xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx -->\n" +
    "<StudentAttendanceCollection RefId=\"{RefId}\">\n" +
"  <StudentAttendanceCollectionYear>2020</StudentAttendanceCollectionYear>\n" +
"  <!-- Data Year -->\n" +
"  <RoundCode>Semester1</RoundCode>\n" +
"  <SoftwareVendorInfo>\n" +
"    <!--Optional information about the Vendor -->\n" +
"    <SoftwareProduct>Software</SoftwareProduct>\n" +
"    <SoftwareVersion>Websys 1.0</SoftwareVersion>\n" +
"  </SoftwareVendorInfo>\n" +
"  <StudentAttendanceCollectionReportingList>\n" +
"    <StudentAttendanceCollectionReporting>\n" +
"      <CommonwealthId>24680</CommonwealthId>\n" +
"      <!-- AGEID -->\n" +
"      <EntityName>XXX Secondary College</EntityName>\n" +
"      <EntityContact>\n" +
"        <Name Type=\"LGL\">\n" +
"          <FamilyName>Citizen</FamilyName>\n" +
"          <!-- Collection Contact Family Name -->\n" +
"          <GivenName>John</GivenName>\n" +
"          <!-- Collection Contact First Name -->\n" +
"        </Name>\n" +
"        <PositionTitle>BusinessManager</PositionTitle>\n" +
"        <!-- Collection Contact Position -->\n" +
"        <Email Type=\"01\">jcitizen@school.vic.edu.au</Email>\n" +
"        <!-- Collection Contact EmailAddress -->\n" +
"        <PhoneNumber Type=\"0096\">\n" +
"          <Number>03 1234-5678</Number>\n" +
"        </PhoneNumber>\n" +
"        <!-- Collection Contact Phone Number-->\n" +
"      </EntityContact>\n" +
"      <StatsCohortYearLevelList>\n" +
"        <StatsCohortYearLevel>\n" +
"          <CohortYearLevel>\n" +
"            <Code>1</Code>\n" +
"          </CohortYearLevel>\n" +
"          <StatsCohortList>\n" +
"            <StatsCohort>\n" +
"              <StatsCohortId>1000</StatsCohortId>\n" +
"              <StatsIndigenousStudentType>T</StatsIndigenousStudentType>\n" +
"              <CohortGender>M</CohortGender>\n" +
"              <DaysInReferencePeriod>120</DaysInReferencePeriod>\n" +
"              <PossibleSchoolDays>3600</PossibleSchoolDays>\n" +
"              <AttendanceDays>3400</AttendanceDays>\n" +
"              <AttendanceLess90Percent>10</AttendanceLess90Percent>\n" +
"              <AttendanceGTE90Percent>20</AttendanceGTE90Percent>\n" +
"              <PossibleSchoolDaysGT90PercentAttendance>2400</PossibleSchoolDaysGT90PercentAttendance>\n" +
"            </StatsCohort>\n" +
"            <StatsCohort>\n" +
"              <StatsCohortId>1001</StatsCohortId>\n" +
"              <StatsIndigenousStudentType>T</StatsIndigenousStudentType>\n" +
"              <CohortGender>F</CohortGender>\n" +
"              <DaysInReferencePeriod>120</DaysInReferencePeriod>\n" +
"              <PossibleSchoolDays>3600</PossibleSchoolDays>\n" +
"              <AttendanceDays>3300</AttendanceDays>\n" +
"              <AttendanceLess90Percent>10</AttendanceLess90Percent>\n" +
"              <AttendanceGTE90Percent>20</AttendanceGTE90Percent>\n" +
"              <PossibleSchoolDaysGT90PercentAttendance>2400</PossibleSchoolDaysGT90PercentAttendance>\n" +
"            </StatsCohort>\n" +
"            <StatsCohort>\n" +
"              <StatsCohortId>1002</StatsCohortId>\n" +
"              <StatsIndigenousStudentType>T</StatsIndigenousStudentType>\n" +
"              <CohortGender>X</CohortGender>\n" +
"              <DaysInReferencePeriod>120</DaysInReferencePeriod>\n" +
"              <PossibleSchoolDays>120</PossibleSchoolDays>\n" +
"              <AttendanceDays>118</AttendanceDays>\n" +
"              <AttendanceLess90Percent>0</AttendanceLess90Percent>\n" +
"              <AttendanceGTE90Percent>1</AttendanceGTE90Percent>\n" +
"              <PossibleSchoolDaysGT90PercentAttendance>120</PossibleSchoolDaysGT90PercentAttendance>\n" +
"            </StatsCohort>\n" +
"            <StatsCohort>\n" +
"              <StatsCohortId>1003</StatsCohortId>\n" +
"              <StatsIndigenousStudentType>I</StatsIndigenousStudentType>\n" +
"              <CohortGender>M</CohortGender>\n" +
"              <DaysInReferencePeriod>120</DaysInReferencePeriod>\n" +
"              <PossibleSchoolDays>240</PossibleSchoolDays>\n" +
"              <AttendanceDays>235</AttendanceDays>\n" +
"              <AttendanceLess90Percent>0</AttendanceLess90Percent>\n" +
"              <AttendanceGTE90Percent>2</AttendanceGTE90Percent>\n" +
"              <PossibleSchoolDaysGT90PercentAttendance>240</PossibleSchoolDaysGT90PercentAttendance>\n" +
"            </StatsCohort>\n" +
"            <StatsCohort>\n" +
"              <StatsCohortId>1004</StatsCohortId>\n" +
"              <StatsIndigenousStudentType>I</StatsIndigenousStudentType>\n" +
"              <CohortGender>F</CohortGender>\n" +
"              <DaysInReferencePeriod>120</DaysInReferencePeriod>\n" +
"              <PossibleSchoolDays>120</PossibleSchoolDays>\n" +
"              <AttendanceDays>120</AttendanceDays>\n" +
"              <AttendanceLess90Percent>0</AttendanceLess90Percent>\n" +
"              <AttendanceGTE90Percent>1</AttendanceGTE90Percent>\n" +
"              <PossibleSchoolDaysGT90PercentAttendance>120</PossibleSchoolDaysGT90PercentAttendance>\n" +
"            </StatsCohort>\n" +
"            <StatsCohort>\n" +
"              <StatsCohortId>1005</StatsCohortId>\n" +
"              <StatsIndigenousStudentType>I</StatsIndigenousStudentType>\n" +
"              <CohortGender>X</CohortGender>\n" +
"              <DaysInReferencePeriod>120</DaysInReferencePeriod>\n" +
"              <PossibleSchoolDays>120</PossibleSchoolDays>\n" +
"              <AttendanceDays>80</AttendanceDays>\n" +
"              <AttendanceLess90Percent>1</AttendanceLess90Percent>\n" +
"              <AttendanceGTE90Percent>0</AttendanceGTE90Percent>\n" +
"              <PossibleSchoolDaysGT90PercentAttendance>0</PossibleSchoolDaysGT90PercentAttendance>\n" +
"            </StatsCohort>\n" +
"          </StatsCohortList>\n" +
"        </StatsCohortYearLevel>\n" +
"        <StatsCohortYearLevel>\n" +
"          <CohortYearLevel>\n" +
"            <Code>2</Code>\n" +
"          </CohortYearLevel>\n" +
"          <StatsCohortList>\n" +
"            <StatsCohort>\n" +
"              <StatsCohortId>1006</StatsCohortId>\n" +
"              <StatsIndigenousStudentType>T</StatsIndigenousStudentType>\n" +
"              <CohortGender>M</CohortGender>\n" +
"              <DaysInReferencePeriod>120</DaysInReferencePeriod>\n" +
"              <PossibleSchoolDays>1200</PossibleSchoolDays>\n" +
"              <AttendanceDays>1200</AttendanceDays>\n" +
"              <AttendanceLess90Percent>10</AttendanceLess90Percent>\n" +
"              <AttendanceGTE90Percent>20</AttendanceGTE90Percent>\n" +
"              <PossibleSchoolDaysGT90PercentAttendance>2400</PossibleSchoolDaysGT90PercentAttendance>\n" +
"            </StatsCohort>\n" +
"            <StatsCohort>\n" +
"              <StatsCohortId>1007</StatsCohortId>\n" +
"              <StatsIndigenousStudentType>T</StatsIndigenousStudentType>\n" +
"              <CohortGender>F</CohortGender>\n" +
"              <DaysInReferencePeriod>120</DaysInReferencePeriod>\n" +
"              <PossibleSchoolDays>3600</PossibleSchoolDays>\n" +
"              <AttendanceDays>120</AttendanceDays>\n" +
"              <AttendanceLess90Percent>10</AttendanceLess90Percent>\n" +
"              <AttendanceGTE90Percent>20</AttendanceGTE90Percent>\n" +
"              <PossibleSchoolDaysGT90PercentAttendance>2400</PossibleSchoolDaysGT90PercentAttendance>\n" +
"            </StatsCohort>\n" +
"            <StatsCohort>\n" +
"              <StatsCohortId>1008</StatsCohortId>\n" +
"              <StatsIndigenousStudentType>T</StatsIndigenousStudentType>\n" +
"              <CohortGender>X</CohortGender>\n" +
"              <DaysInReferencePeriod>120</DaysInReferencePeriod>\n" +
"              <PossibleSchoolDays>100</PossibleSchoolDays>\n" +
"              <AttendanceDays>99</AttendanceDays>\n" +
"              <AttendanceLess90Percent>0</AttendanceLess90Percent>\n" +
"              <AttendanceGTE90Percent>1</AttendanceGTE90Percent>\n" +
"              <PossibleSchoolDaysGT90PercentAttendance>100</PossibleSchoolDaysGT90PercentAttendance>\n" +
"            </StatsCohort>\n" +
"            <StatsCohort>\n" +
"              <StatsCohortId>1009</StatsCohortId>\n" +
"              <StatsIndigenousStudentType>I</StatsIndigenousStudentType>\n" +
"              <CohortGender>M</CohortGender>\n" +
"              <DaysInReferencePeriod>120</DaysInReferencePeriod>\n" +
"              <PossibleSchoolDays>600</PossibleSchoolDays>\n" +
"              <AttendanceDays>580</AttendanceDays>\n" +
"              <AttendanceLess90Percent>1</AttendanceLess90Percent>\n" +
"              <AttendanceGTE90Percent>4</AttendanceGTE90Percent>\n" +
"              <PossibleSchoolDaysGT90PercentAttendance>480</PossibleSchoolDaysGT90PercentAttendance>\n" +
"            </StatsCohort>\n" +
"            <StatsCohort>\n" +
"              <StatsCohortId>1010</StatsCohortId>\n" +
"              <StatsIndigenousStudentType>I</StatsIndigenousStudentType>\n" +
"              <CohortGender>F</CohortGender>\n" +
"              <DaysInReferencePeriod>120</DaysInReferencePeriod>\n" +
"              <PossibleSchoolDays>720</PossibleSchoolDays>\n" +
"              <AttendanceDays>710</AttendanceDays>\n" +
"              <AttendanceLess90Percent>0</AttendanceLess90Percent>\n" +
"              <AttendanceGTE90Percent>6</AttendanceGTE90Percent>\n" +
"              <PossibleSchoolDaysGT90PercentAttendance>720</PossibleSchoolDaysGT90PercentAttendance>\n" +
"            </StatsCohort>\n" +
"            <StatsCohort>\n" +
"              <StatsCohortId>1011</StatsCohortId>\n" +
"              <StatsIndigenousStudentType>I</StatsIndigenousStudentType>\n" +
"              <CohortGender>X</CohortGender>\n" +
"              <DaysInReferencePeriod>120</DaysInReferencePeriod>\n" +
"              <PossibleSchoolDays>120</PossibleSchoolDays>\n" +
"              <AttendanceDays>120</AttendanceDays>\n" +
"              <AttendanceLess90Percent>0</AttendanceLess90Percent>\n" +
"              <AttendanceGTE90Percent>1</AttendanceGTE90Percent>\n" +
"              <PossibleSchoolDaysGT90PercentAttendance>120</PossibleSchoolDaysGT90PercentAttendance>\n" +
"            </StatsCohort>\n" +
"          </StatsCohortList>\n" +
"        </StatsCohortYearLevel>\n" +
"      </StatsCohortYearLevelList>\n" +
"    </StudentAttendanceCollectionReporting>\n" +
"  </StudentAttendanceCollectionReportingList>\n" +
"</StudentAttendanceCollection>\n"
  });

  return _app;    
}(hitsclient || {}));
