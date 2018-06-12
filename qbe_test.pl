# script to test QBE support of HITS

use LWP::Curl;
$token = $ARGV[0]; # set token

$baseURL = "http://hitstest.dev.nsip.edu.au";
#$baseURL = "http://hits.nsip.edu.au";

# curl -H "authorization: Basic ZmZhODMzNjEtMGExOC00NDk5LTgyNjMtYjMwNjI4MGRjZDRlOmYhOWIzZTQyMGJiMDdkYTJkOTBkYjQ3OWVm" -H "methodOverride: GET" --data "<StudentDailyAttendance><Date>2014-11-24</Date><SchoolYear>2014</SchoolYear></StudentDailyAttendance>" http://hits.nsip.edu.au/SIF3InfraREST/hits/requests/StudentDailyAttendances

$studentpersonal_refid = post("StudentPersonal", qq{<StudentPersonal> <LocalId>S1234567</LocalId> <StateProvinceId>ABC1234</StateProvinceId> <PersonInfo> <Name Type="LGL"> <FamilyName>Smith</FamilyName> <GivenName>Fred</GivenName> <FullName>Fred Smith</FullName> </Name> <Demographics> <Sex>1</Sex> </Demographics> <EmailList> <Email Type="01">fsmith\@yahoo.com</Email> <Email Type="02">freddy\@gmail.com</Email> </EmailList> </PersonInfo> <MostRecent> <YearLevel> <Code>P</Code> </YearLevel> </MostRecent> </StudentPersonal>}, "RefId");
$schoolinfo_refid = post("SchoolInfo", qq{<SchoolInfo> <LocalId>01011234</LocalId> <StateProvinceId>01011234</StateProvinceId> <SchoolName>Lincoln Secondary College</SchoolName> <SchoolType>Pri/Sec</SchoolType> <SchoolEmailList> <Email Type="01">jmiller\@lsc.vic.edu.au</Email> </SchoolEmailList> <AddressList> <Address Type="0123" Role="012B"> <Street> <StreetNumber>23</StreetNumber> <StreetName>Nicholson Street</StreetName > </Street> <City>Carnegie</City> <StateProvince>VIC</StateProvince> <PostalCode>3004</PostalCode> </Address>  </AddressList> <OperationalStatus>O</OperationalStatus> <SchoolSector>NG</SchoolSector> </SchoolInfo>}, "RefId");
$staffpersonal_refid = post("StaffPersonal", qq{<StaffPersonal> <LocalId>946379881</LocalId> <StateProvinceId>C2345681</StateProvinceId> <PersonInfo> <Name Type="LGL"> <FamilyName>Smith</FamilyName> <GivenName>Fred</GivenName> </Name> <Demographics> <Sex>1</Sex> </Demographics> <EmailList> <Email Type="01">fsmith\@yahoo.com</Email> <Email Type="02">freddy\@gmail.com</Email> </EmailList> </PersonInfo> <EmploymentStatus>A</EmploymentStatus> </StaffPersonal>}, "RefId");
$roominfo_refid = post("RoomInfo", qq{<RoomInfo> <SchoolInfoRefId>$schoolinfo_refid</SchoolInfoRefId> <LocalId>LocalId</LocalId> <RoomNumber>101</RoomNumber> <StaffList> <StaffPersonalRefId>$staffpersonal_refid</StaffPersonalRefId> </StaffList> <Description>Room 101</Description> <Building>Main A</Building> <HomeroomNumber>10-HR-A</HomeroomNumber> <Size>400</Size> <Capacity>35</Capacity> <RoomType>Classroom</RoomType> </RoomInfo>}, "RefId");
$timetablesubject_refid = post("TimeTableSubject", qq{<TimeTableSubject> <SubjectLocalId>07AR</SubjectLocalId> <AcademicYear> <Code>7</Code> </AcademicYear> <SubjectShortName>7 ART</SubjectShortName> <SubjectLongName>Year 7 Art</SubjectLongName> <SubjectType>E</SubjectType> <ProposedMaxClassSize>15</ProposedMaxClassSize> <ProposedMinClassSize>10</ProposedMinClassSize> <SchoolInfoRefId>$schoolinfo_refid</SchoolInfoRefId> <SchoolLocalId>32718</SchoolLocalId> <Semester>1</Semester> <SchoolYear>2009</SchoolYear> </TimeTableSubject>}, "RefId");
$timetablesubject_range_refid = post("TimeTableSubject", qq{<TimeTableSubject> <SubjectLocalId>07AR</SubjectLocalId> <AcademicYearRange> <Start><Code>8</Code></Start> <End><Code>9</Code></End> </AcademicYearRange> <SubjectShortName>7 ART</SubjectShortName> <SubjectLongName>Year 7 Art</SubjectLongName> <SubjectType>E</SubjectType> <ProposedMaxClassSize>15</ProposedMaxClassSize> <ProposedMinClassSize>10</ProposedMinClassSize> <SchoolInfoRefId>$schoolinfo_refid</SchoolInfoRefId> <SchoolLocalId>32718</SchoolLocalId> <Semester>1</Semester> <SchoolYear>2009</SchoolYear> </TimeTableSubject>}, "RefId");
$teachinggroup_refid = post("TeachingGroup", qq{<TeachingGroup> <SchoolYear>2008</SchoolYear> <LocalId>20087ASPN</LocalId> <ShortName>7A SPN</ShortName> <SchoolInfoRefId>$schoolinfo_refid</SchoolInfoRefId> <TimeTableSubjectRefId>$timetablesubject_refid</TimeTableSubjectRefId> <TimeTableSubjectLocalId>XYZZY</TimeTableSubjectLocalId> <StudentList> <TeachingGroupStudent> <StudentPersonalRefId>$studentpersonal_refid</StudentPersonalRefId> <StudentLocalId>SMI001</StudentLocalId> <Name Type="LGL"> <FamilyName>Smith</FamilyName> <GivenName>Peter</GivenName> </Name> </TeachingGroupStudent> </StudentList> <TeacherList> <TeachingGroupTeacher> <StaffPersonalRefId>$staffpersonal_refid</StaffPersonalRefId> <StaffLocalId>SMI1</StaffLocalId> <Name Type="LGL"> <FamilyName>Smith</FamilyName> <GivenName>Thomas</GivenName> </Name> <Association>Class Teacher</Association> </TeachingGroupTeacher> </TeacherList> <TeachingGroupPeriodList> <TeachingGroupPeriod> <DayId>M</DayId> <PeriodId>2</PeriodId> </TeachingGroupPeriod> <TeachingGroupPeriod> <DayId>F</DayId> <PeriodId>6</PeriodId> </TeachingGroupPeriod> </TeachingGroupPeriodList> </TeachingGroup>}, "RefId");
$studentschoolenrollment_refid = post("StudentSchoolEnrollment", qq{<StudentSchoolEnrollment> <StudentPersonalRefId>$studentpersonal_refid</StudentPersonalRefId> <SchoolInfoRefId>$schoolinfo_refid</SchoolInfoRefId> <MembershipType>01</MembershipType> <TimeFrame>C</TimeFrame> <SchoolYear>2004</SchoolYear> <EntryDate>2004-01-29</EntryDate> <YearLevel> <Code>10</Code> </YearLevel> <FTE>1.00</FTE> <FTPTStatus>01</FTPTStatus> <StudentSubjectChoiceList> <StudentSubjectChoice> <PreferenceNumber>1</PreferenceNumber> <SubjectLocalId>212</SubjectLocalId> </StudentSubjectChoice> <StudentSubjectChoice> <PreferenceNumber>2</PreferenceNumber> <SubjectLocalId>124</SubjectLocalId> </StudentSubjectChoice> </StudentSubjectChoiceList> </StudentSchoolEnrollment>}, "RefId");
$staffassignment_refid = post("StaffAssignment", qq{<StaffAssignment> <SchoolInfoRefId>$schoolinfo_refid</SchoolInfoRefId> <SchoolYear>2008</SchoolYear> <StaffPersonalRefId>$staffpersonal_refid</StaffPersonalRefId> <Description>VCE English Teacher</Description> <PrimaryAssignment>Y</PrimaryAssignment> <JobStartDate>2000-09-05</JobStartDate> <JobEndDate>2001-06-25</JobEndDate> <JobFTE>1.00</JobFTE> <JobFunction>Teacher</JobFunction> <StaffActivity> <Code>1100</Code> </StaffActivity> <YearLevels> <YearLevel> <Code>11</Code> </YearLevel> <YearLevel> <Code>12</Code> </YearLevel> </YearLevels> </StaffAssignment>}, "RefId");
$studentdailyattendance_refid = post("StudentDailyAttendance", qq{<StudentDailyAttendance> <StudentPersonalRefId>$studentpersonal_refid</StudentPersonalRefId> <SchoolInfoRefId>$schoolinfo_refid</SchoolInfoRefId> <Date>2014-11-24</Date> <SchoolYear>2014</SchoolYear> <DayValue>Full</DayValue> <AttendanceCode> <Code>SomeCode</Code> <OtherCodeList> <OtherCode codeset="Local">SomeOtherCode</OtherCode> </OtherCodeList> </AttendanceCode> <AttendanceStatus>Full</AttendanceStatus> <TimeIn>09:00:00</TimeIn> <TimeOut>15:30:00</TimeOut> <AbsenceValue>0.0</AbsenceValue> <AttendanceNote>Was at School</AttendanceNote> </StudentDailyAttendance>}, "RefId");
$studentcontactpersonal_refid = post("StudentContactPersonal", qq{<StudentContactPersonal> <LocalId>LocalId</LocalId> <PersonInfo> <Name> <Title>Mr</Title> <FamilyName>Tester</FamilyName> <GivenName>Fred</GivenName> <MiddleName>Middle</MiddleName> <PreferredFamilyName>PTester</PreferredFamilyName> <PreferredGivenName>PFred</PreferredGivenName> <FullName>Fred Tester</FullName> </Name> <Demographics/> <AddressList> <Address Type="0123" Role="012B"> <Street> <Line1>123 Address Line One</Line1> <Line2>Address Line Two</Line2> </Street> <City>Perth</City> <StateProvince>WA</StateProvince> <PostalCode>6000</PostalCode> <GridLocation> <Latitude>-31.952693</Latitude> <Longitude>115.871971</Longitude> </GridLocation> </Address> <Address Type="0123" Role="012B"> <Street> <Line1>234 Address Line One</Line1> </Street> <City>Perth</City> <StateProvince>WA</StateProvince> <PostalCode>6000</PostalCode> <GridLocation> <Latitude>-31.952693</Latitude> <Longitude>115.871971</Longitude> </GridLocation> </Address> </AddressList> <PhoneNumberList> <PhoneNumber> <Number>+61400000000</Number> </PhoneNumber> </PhoneNumberList> <EmailList> <Email Type="06">the.email\@not.a.real.domain</Email> </EmailList> </PersonInfo> <EmploymentType>1</EmploymentType> <SchoolEducationalLevel>4</SchoolEducationalLevel> <NonSchoolEducation>7</NonSchoolEducation> </StudentContactPersonal>}, "RefId");
$studentcontactrelationship_refid = post("StudentContactRelationship", qq{<StudentContactRelationship StudentPersonalRefId="$studentpersonal_refid" StudentContactpersonalRefId="$studentcontactpersonal_refid"> <Relationship> <Code>01</Code> </Relationship> <ContactFlags> <ParentLegalGuardian>Y</ParentLegalGuardian> <PickupRights>Y</PickupRights> <LivesWith>Y</LivesWith> <AccessToRecords>Y</AccessToRecords> <EmergencyContact>Y</EmergencyContact> <HasCustody>Y</HasCustody> <DisciplinaryContact>Y</DisciplinaryContact> <PrimaryCareProvider>Y</PrimaryCareProvider> <FeesBilling>Y</FeesBilling> <FamilyMail>Y</FamilyMail> <InterventionOrder>N</InterventionOrder> </ContactFlags> </StudentContactRelationship>}, "StudentContactRelationshipRefId");
$timetable_refid = post("TimeTable", qq{<TimeTable> <SchoolInfoRefId>$schoolinfo_refid</SchoolInfoRefId> <SchoolYear>2008</SchoolYear> <LocalId>2008S1</LocalId> <Title>2008 Semester 1</Title> <DaysPerCycle>5</DaysPerCycle> <PeriodsPerDay>6</PeriodsPerDay> <TeachingPeriodsPerDay>5</TeachingPeriodsPerDay> <SchoolLocalId>01011234</SchoolLocalId> <SchoolName>Newest Secondary College</SchoolName> <TimeTableCreationDate>2008-02-01</TimeTableCreationDate> <StartDate>2008-01-30</StartDate> <EndDate>2008-06-20</EndDate> <TimeTableDayList> <TimeTableDay> <DayId>1</DayId> <DayTitle>Monday</DayTitle> <TimeTablePeriodList> <TimeTablePeriod> <PeriodId>1</PeriodId> <PeriodTitle>P1</PeriodTitle> </TimeTablePeriod> <TimeTablePeriod> <PeriodId>2</PeriodId> <PeriodTitle>P2</PeriodTitle> </TimeTablePeriod> <TimeTablePeriod> <PeriodId>3</PeriodId> <PeriodTitle>P3</PeriodTitle> </TimeTablePeriod> <TimeTablePeriod> <PeriodId>4</PeriodId> <PeriodTitle>P4</PeriodTitle> </TimeTablePeriod> <TimeTablePeriod> <PeriodId>5</PeriodId> <PeriodTitle>P5</PeriodTitle> </TimeTablePeriod> <TimeTablePeriod> <PeriodId>6</PeriodId> <PeriodTitle>P6</PeriodTitle> </TimeTablePeriod> </TimeTablePeriodList> </TimeTableDay> <TimeTableDay> <DayId>2</DayId> <DayTitle>Tuesday</DayTitle> <TimeTablePeriodList> <TimeTablePeriod> <PeriodId>1</PeriodId> <PeriodTitle>P1</PeriodTitle> </TimeTablePeriod> <TimeTablePeriod> <PeriodId>2</PeriodId> <PeriodTitle>P2</PeriodTitle> </TimeTablePeriod> <TimeTablePeriod> <PeriodId>3</PeriodId> <PeriodTitle>P3</PeriodTitle> </TimeTablePeriod> <TimeTablePeriod> <PeriodId>4</PeriodId> <PeriodTitle>P4</PeriodTitle> </TimeTablePeriod> <TimeTablePeriod> <PeriodId>5</PeriodId> <PeriodTitle>P5</PeriodTitle> </TimeTablePeriod> <TimeTablePeriod> <PeriodId>6</PeriodId> <PeriodTitle>P6</PeriodTitle> </TimeTablePeriod> </TimeTablePeriodList> </TimeTableDay> </TimeTableDayList> </TimeTable>}, "RefId");
$timetablecell_refid = post("TimeTableCell", qq{<TimeTableCell> <TimeTableRefId>$timetable_refid</TimeTableRefId> <TimeTableSubjectRefId>$timetablesubject_refid</TimeTableSubjectRefId> <TeachingGroupRefId>$teachinggroup_refid</TeachingGroupRefId> <StaffPersonalRefId>$staffpersonal_refid</StaffPersonalRefId> <TimeTableLocalId>2008S1</TimeTableLocalId> <SubjectLocalId>07AR</SubjectLocalId> <TeachingGroupLocalId>20087ASPN 2008S1</TeachingGroupLocalId> <RoomNumber>101</RoomNumber> <StaffLocalId>946379881</StaffLocalId> <DayId>1</DayId> <PeriodId>1</PeriodId> <CellType>T</CellType> <SchoolInfoRefId>$schoolinfo_refid</SchoolInfoRefId> <SchoolLocalId>01011234</SchoolLocalId> </TimeTableCell>}, "RefId");
$scheduledactivity_refid = post("ScheduledActivity", qq{<ScheduledActivity> <SchoolInfoRefId>$schoolinfo_refid</SchoolInfoRefId> <TimeTableCellRefId>$timetablecell_refid</TimeTableCellRefId> <DayId>1</DayId> <PeriodId>1</PeriodId> <TimeTableRefId>$timetable_refid</TimeTableRefId> <ActivityDate>2014-10-10</ActivityDate> <StartTime>12:05:00</StartTime> <FinishTime>13:30:00</FinishTime> <CellType>Classroom</CellType> <TimeTableSubjectRefId>$timetablesubject_refid</TimeTableSubjectRefId> <TeacherList> <TeacherCover> <StaffPersonalRefId>$staffpersonal_refid</StaffPersonalRefId> <StaffLocalId>US8923</StaffLocalId> <StartTime>12:05:00</StartTime> <FinishTime>13:00:00</FinishTime> <Credit>In-lieu</Credit> <Supervision>MinimalSupervision</Supervision> <Weighting>0.5</Weighting> </TeacherCover> </TeacherList> <RoomList> <RoomInfoRefId>$roominfo_refid</RoomInfoRefId> </RoomList> <ActivityType>Incursion</ActivityType> <StudentList> <StudentPersonalRefId>$studentpersonal_refid</StudentPersonalRefId> </StudentList><TeachingGroupList> <TeachingGroupRefId>$teachinggroup_refid</TeachingGroupRefId> </TeachingGroupList> </ScheduledActivity>}, "RefId");
$studentattendancesummary_refid = post("StudentAttendanceSummary", qq{<StudentAttendanceSummary StudentPersonalRefId="$studentpersonal_refid" SchoolInfoRefId="$schoolinfo_refid" SchoolYear="2014" StartDate="2014-11-17" EndDate="2014-11-22"> <StartDay>1</StartDay> <EndDay>2</EndDay> <FTE>1</FTE> <DaysAttended>5</DaysAttended> <ExcusedAbsences>0</ExcusedAbsences> <UnexcusedAbsences>0</UnexcusedAbsences> <DaysTardy>0</DaysTardy> <DaysInMembership>5</DaysInMembership> </StudentAttendanceSummary>}, "StudentAttendanceSummaryRefId");
$studentattendancetimelist_refid = post("StudentAttendanceTimeList", qq{<StudentAttendanceTimeList> <StudentPersonalRefId>$studentpersonal_refid</StudentPersonalRefId> <SchoolInfoRefId>$schoolinfo_refid</SchoolInfoRefId> <Date>2002-11-01</Date> <SchoolYear>2003</SchoolYear> <AttendanceTimes> <AttendanceTime> <AttendanceType>RC</AttendanceType> <AttendanceCode> <Code>100</Code> </AttendanceCode> <AttendanceStatus>NA</AttendanceStatus> <StartTime>09:00:00</StartTime> <EndTime>15:00:00</EndTime> <DurationValue>1.000</DurationValue> </AttendanceTime> <AttendanceTime> <AttendanceType>LA</AttendanceType> <AttendanceCode> <Code>102</Code> </AttendanceCode> <AttendanceStatus>02</AttendanceStatus> <StartTime>09:00:00</StartTime> <EndTime>09:30:00</EndTime> <AttendanceNote>No acceptable excuse given</AttendanceNote> </AttendanceTime> </AttendanceTimes> <PeriodAttendances> <PeriodAttendance> <AttendanceType>CR</AttendanceType> <AttendanceCode> <Code>102</Code> </AttendanceCode> <AttendanceStatus>02</AttendanceStatus> <TimetablePeriod>P1</TimetablePeriod> <DayId>1</DayId> <StartTime>09:00:00</StartTime> <EndTime>10:00:00</EndTime> <TimeTableSubjectRefId>$timetablesubject_refid</TimeTableSubjectRefId> <TeacherList> <TeacherCover> <StaffPersonalRefId>$staffpersonal_refid</StaffPersonalRefId> </TeacherCover> </TeacherList> <RoomList> <RoomInfoRefId>$roominfo_refid</RoomInfoRefId> </RoomList> </PeriodAttendance> </PeriodAttendances> </StudentAttendanceTimeList>}, "RefId");
$chargedlocationinfo_refid = post("ChargedLocationInfo", qq{<ChargedLocationInfo> <LocationType>School</LocationType> <SiteCategory>Campus</SiteCategory> <Name>Main Campus</Name> <Description>Description</Description> <LocalId>LocalId</LocalId> <StateProvinceId>JurisdictionId</StateProvinceId> <SchoolInfoRefId>$schoolinfo_refid</SchoolInfoRefId> <AddressList> <Address Type="0123" Role="012B"> <Street> <Line1>1 Address Street</Line1> </Street> <City>Perth</City> <StateProvince>WA</StateProvince> <PostalCode>6000</PostalCode> <GridLocation> <Latitude>-31.952693</Latitude> <Longitude>115.871971</Longitude> </GridLocation> </Address> </AddressList> <PhoneNumberList> <PhoneNumber Type="0096"> <Number>0894463125</Number> </PhoneNumber> </PhoneNumberList> </ChargedLocationInfo>}, "RefId");
$parent_financialaccount_refid = post("FinancialAccount", qq{<FinancialAccount> <ChargedLocationInfoRefId>$chargedlocationinfo_refid</ChargedLocationInfoRefId> <AccountNumber>43242244L</AccountNumber> <Name>Account Name</Name> <Description>Account Description</Description> <ClassType>Asset</ClassType> <CreationDate>2015-06-21</CreationDate> <CreationTime>11:32:00</CreationTime> </FinancialAccount>}, "RefId");
$financialaccount_refid = post("FinancialAccount", qq{<FinancialAccount> <ParentAccountRefId>$parent_financialaccount_refid</ParentAccountRefId> <ChargedLocationInfoRefId>$chargedlocationinfo_refid</ChargedLocationInfoRefId> <AccountNumber>43242244L</AccountNumber> <Name>Account Name</Name> <Description>Account Description</Description> <ClassType>Asset</ClassType> <CreationDate>2015-06-21</CreationDate> <CreationTime>11:32:00</CreationTime> </FinancialAccount>}, "RefId");
$vendorinfo_refid = post("VendorInfo", qq{<VendorInfo> <Name>Vendor Inc Pty Ltd</Name> <ContactInfo> <Name Type="LGL"> <FamilyName>Jones</FamilyName> <GivenName>Jack</GivenName> <MiddleName>Jim</MiddleName> </Name> <PositionTitle>Position Title</PositionTitle> <Role>Role</Role> <Address Type="0123" Role="012B"> <Street> <Line1>43 Some Street</Line1> </Street> <City>Perth</City> <StateProvince>WA</StateProvince> <PostalCode>6000</PostalCode> <GridLocation> <Latitude>-31.952693</Latitude> <Longitude>115.871971</Longitude> </GridLocation> </Address> <EmailList> <Email Type="06">email\@not.a.real.domain</Email> </EmailList> <PhoneNumberList> <PhoneNumber Type="0096"> <Number>08 9455 3382</Number> </PhoneNumber> </PhoneNumberList> </ContactInfo> <CustomerId>434443L</CustomerId> <ABN>25 348404 20404</ABN> <RegisteredForGST>Y</RegisteredForGST> <PaymentTerms>30</PaymentTerms> <BPay>34205890508302390409</BPay> <BSB>444-333</BSB> <AccountNumber>4394958</AccountNumber> <AccountName>John Smith</AccountName> </VendorInfo>}, "RefId");
$debtor_refid = post("Debtor", qq{<Debtor> <BilledEntity SIF_RefObject="VendorInfo">$vendorinfo_refid</BilledEntity> <AddressList> <Address Type="0123" Role="012B"> <Street> <Line1>1 Billed Street</Line1> </Street> <City>Perth</City> <StateProvince>WA</StateProvince> <PostalCode>6000</PostalCode> <GridLocation> <Latitude>-31.952693</Latitude> <Longitude>115.871971</Longitude> </GridLocation> </Address> </AddressList> <BillingName>Billing Name</BillingName> <BillingNote>Billing Note</BillingNote> <Discount>0.05</Discount> </Debtor>}, "RefId");
$debtor_student_refid = post("Debtor", qq{<Debtor> <BilledEntity SIF_RefObject="StudentPersonal">$studentpersonal_refid</BilledEntity> <AddressList> <Address Type="0123" Role="012B"> <Street> <Line1>1 Billed Street</Line1> </Street> <City>Perth</City> <StateProvince>WA</StateProvince> <PostalCode>6000</PostalCode> <GridLocation> <Latitude>-31.952693</Latitude> <Longitude>115.871971</Longitude> </GridLocation> </Address> </AddressList> <BillingName>Billing Name</BillingName> <BillingNote>Billing Note</BillingNote> <Discount>0.05</Discount> </Debtor>}, "RefId");
$debtor_staff_refid = post("Debtor", qq{<Debtor> <BilledEntity SIF_RefObject="StaffPersonal">$staffpersonal_refid</BilledEntity> <AddressList> <Address Type="0123" Role="012B"> <Street> <Line1>1 Billed Street</Line1> </Street> <City>Perth</City> <StateProvince>WA</StateProvince> <PostalCode>6000</PostalCode> <GridLocation> <Latitude>-31.952693</Latitude> <Longitude>115.871971</Longitude> </GridLocation> </Address> </AddressList> <BillingName>Billing Name</BillingName> <BillingNote>Billing Note</BillingNote> <Discount>0.05</Discount> </Debtor>}, "RefId");
$debtor_studentcontact_refid = post("Debtor", qq{<Debtor> <BilledEntity SIF_RefObject="StudentContactPersonal">$studentcontactpersonal_refid</BilledEntity> <AddressList> <Address Type="0123" Role="012B"> <Street> <Line1>1 Billed Street</Line1> </Street> <City>Perth</City> <StateProvince>WA</StateProvince> <PostalCode>6000</PostalCode> <GridLocation> <Latitude>-31.952693</Latitude> <Longitude>115.871971</Longitude> </GridLocation> </Address> </AddressList> <BillingName>Billing Name</BillingName> <BillingNote>Billing Note</BillingNote> <Discount>0.05</Discount> </Debtor>}, "RefId");
$purchaseorder_refid = post("PurchaseOrder", qq{<PurchaseOrder> <FormNumber>3</FormNumber> <VendorInfoRefId>$vendorinfo_refid</VendorInfoRefId> <ChargedLocationInfoRefId>$chargedlocationinfo_refid</ChargedLocationInfoRefId> <EmployeePersonalRefId>$staffpersonal_refid</EmployeePersonalRefId> <PurchasingItems> <PurchasingItem> <ItemNumber>123156</ItemNumber> <ItemDescription>Description</ItemDescription> <Quantity>3</Quantity> <UnitCost Currency="AUD">20.00</UnitCost> <QuantityDelivered>3</QuantityDelivered> <ExpenseAccounts> <ExpenseAccount> <AccountCode>Code</AccountCode> <Amount Currency="AUD">60.00</Amount> <FinancialAccountRefId>$financialaccount_refid</FinancialAccountRefId> <AccountingPeriod>201504</AccountingPeriod> </ExpenseAccount> </ExpenseAccounts> </PurchasingItem> </PurchasingItems> <CreationDate>2015-02-23</CreationDate> <TaxRate>0.1</TaxRate> <TaxAmount Currency="AUD">8.00</TaxAmount> <UpdateDate>2015-09-01</UpdateDate> <FullyDelivered>Y</FullyDelivered> </PurchaseOrder>}, "RefId");
$invoice_refid = post("Invoice", qq{<Invoice> <InvoicedEntity SIF_RefObject="Debtor">$debtor_refid</InvoicedEntity> <FormNumber>8BC001</FormNumber> <BillingDate>2015-07-01</BillingDate> <TransactionDescription>Textbooks</TransactionDescription> <BilledAmount Type="Debit" Currency="AUD">320.00</BilledAmount> <Ledger>Sundry</Ledger> <ChargedLocationInfoRefId>$chargedlocationinfo_refid</ChargedLocationInfoRefId> <TaxRate>0.10</TaxRate> <TaxType>GST</TaxType> <TaxAmount Currency="AUD">29.09</TaxAmount> <CreatedBy>Created By</CreatedBy> <ApprovedBy>Approved By</ApprovedBy> <ItemDetail>4 Textbooks</ItemDetail> <DueDate>2015-10-22</DueDate> <FinancialAccountRefIdList> <FinancialAccountRefId>$financialaccount_refid</FinancialAccountRefId> </FinancialAccountRefIdList> <AccountingPeriod>2015Q3</AccountingPeriod> <RelatedPurchaseOrderRefId>$purchaseorder_refid</RelatedPurchaseOrderRefId> <PurchasingItems> <PurchasingItem> <ItemNumber>XYZ123</ItemNumber> <ItemDescription>Widget</ItemDescription> <Quantity>4</Quantity> <UnitCost Currency="AUD">80.00</UnitCost> </PurchasingItem> </PurchasingItems> <Voluntary>N</Voluntary> </Invoice>}, "RefId");
$paymentreceipt_refid = post("PaymentReceipt", qq{<PaymentReceipt> <TransactionType>Creditor payment</TransactionType> <InvoiceRefId>$invoice_refid</InvoiceRefId> <VendorInfoRefId>$vendorinfo_refid</VendorInfoRefId> <DebtorRefId>$debtor_refid</DebtorRefId> <ChargedLocationInfoRefId>$chargedlocationinfo_refid</ChargedLocationInfoRefId> <TransactionDate>2015-06-23</TransactionDate> <TransactionAmount Type="Debit" Currency="AUD">25.00</TransactionAmount> <ReceivedTransactionId>201546</ReceivedTransactionId> <FinancialAccountRefIdList> <FinancialAccountRefId>$financialaccount_refid</FinancialAccountRefId> </FinancialAccountRefIdList> <TransactionDescription>Some description</TransactionDescription> <TaxRate>0.10</TaxRate> <TaxAmount Currency="AUD">2.50</TaxAmount> <TransactionMethod>Cash</TransactionMethod> <ChequeNumber>23593032</ChequeNumber> <TransactionNote>Transaction note goes here</TransactionNote> <AccountingPeriod>2015Q3</AccountingPeriod> </PaymentReceipt>}, "RefId");
$journal_refid = post("Journal", qq{<Journal> <DebitFinancialAccountRefId>$financialaccount_refid</DebitFinancialAccountRefId> <CreditFinancialAccountRefId>$financialaccount_refid</CreditFinancialAccountRefId> <OriginatingTransactionRefId SIF_RefObject="Invoice">$invoice_refid</OriginatingTransactionRefId> <Amount Currency="AUD">400.00</Amount> <GSTCodeOriginal>G6</GSTCodeOriginal> <GSTCodeReplacement>G6</GSTCodeReplacement> <Note>Journal Note</Note> <CreatedDate>2015-04-20</CreatedDate> <ApprovedDate>2015-06-22</ApprovedDate> <CreatedBy>James Smith</CreatedBy> <ApprovedBy>John Smith</ApprovedBy> </Journal>}, "RefId");
$gradingassignment_refid = post("GradingAssignment", qq{ <GradingAssignment> <TeachingGroupRefId>$teachinggroup_refid</TeachingGroupRefId> <SchoolInfoRefId>$schoolinfo_refid</SchoolInfoRefId> <GradingCategory>GC</GradingCategory> <Description>Description</Description> <PointsPossible>80</PointsPossible> <CreateDate>2015-07-01</CreateDate> <DueDate>2015-10-01</DueDate> <Weight>75</Weight> <MaxAttemptsAllowed>1</MaxAttemptsAllowed> <DetailedDescriptionURL>http://www.google.com</DetailedDescriptionURL> </GradingAssignment>}, "RefId");
$gradingassignmentscore_refid = post("GradingAssignmentScore", qq{ <GradingAssignmentScore> <StudentPersonalRefId>$studentpersonal_refid</StudentPersonalRefId> <StudentPersonalLocalId>s0004432</StudentPersonalLocalId> <TeachingGroupRefId>$teachinggroup_refid</TeachingGroupRefId> <SchoolInfoRefId>$schoolinfo_refid</SchoolInfoRefId> <GradingAssignmentRefId>$gradingassignment_refid</GradingAssignmentRefId> <ScorePoints>24</ScorePoints> <ScorePercent>0.96</ScorePercent> <ScoreLetter>A+</ScoreLetter> <ScoreDescription>High Distinction</ScoreDescription> </GradingAssignmentScore>}, "RefId");
$calendarsummary_refid = post("CalendarSummary", qq{ <CalendarSummary> <SchoolInfoRefId>$schoolinfo_refid</SchoolInfoRefId> <SchoolYear>2014</SchoolYear> <LocalId>2014ANID</LocalId> <Description>My Calendar Summary</Description> <DaysInSession>5</DaysInSession> <StartDate>2014-11-03</StartDate> <EndDate>2014-11-07</EndDate> </CalendarSummary>}, "RefId");
$calendardate_refid = post("CalendarDate", qq{ <CalendarDate CalendarSummaryRefId='$calendardate_refid' Date='2014-11-06'> <SchoolInfoRefId>$schoolinfo_refid</SchoolInfoRefId> <SchoolYear>2014</SchoolYear> <CalendarDateType> <Code>INST</Code> <OtherCodeList> <OtherCode Codeset='Other'>MYCODE</OtherCode> </OtherCodeList> </CalendarDateType> <CalendarDateNumber>1</CalendarDateNumber> <StudentAttendance> <CountsTowardAttendance>Yes</CountsTowardAttendance> <AttendanceValue>1.0</AttendanceValue> </StudentAttendance> </CalendarDate>}, "RefId");
$naptest_refid = post("NAPTest", qq{ <NAPTest> <TestContent> <NAPTestLocalId>NAPLAN-2017-0001-Reading</NAPTestLocalId> <TestName>NAPLAN Reading Yr 3, 2017</TestName> <TestLevel> <Code>3</Code> </TestLevel> <TestType>Normal</TestType> <Domain>Reading</Domain> <TestYear>2017</TestYear> <StagesCount>3</StagesCount> <DomainBands> <Band1Lower>0</Band1Lower> <Band1Upper>258</Band1Upper> <Band2Lower>258</Band2Lower> <Band2Upper>318</Band2Upper> <Band3Lower>318</Band3Lower> <Band3Upper>368</Band3Upper> <Band4Lower>368</Band4Lower> <Band4Upper>417</Band4Upper> <Band5Lower>417</Band5Lower> <Band5Upper>466</Band5Upper> <Band6Lower>466</Band6Lower> <Band6Upper>526</Band6Upper> <Band7Lower>526</Band7Lower> <Band7Upper>574</Band7Upper> <Band8Lower>574</Band8Lower> <Band8Upper>633</Band8Upper> <Band9Lower>633</Band9Lower> <Band9Upper>681</Band9Upper> <Band10Lower>681</Band10Lower> <Band10Upper>999</Band10Upper> </DomainBands> <DomainProficiency> <Level1Lower>10</Level1Lower> <Level1Upper>20</Level1Upper> <Level2Lower>30</Level2Lower> <Level2Upper>40</Level2Upper> <Level3Lower>50</Level3Lower> <Level3Upper>60</Level3Upper> <Level4Lower>70</Level4Lower> <Level4Upper>80</Level4Upper> </DomainProficiency> </TestContent> </NAPTest>}, "RefId");
$naptestitem_refid = post("NAPTestItem", qq{ <NAPTestItem> <TestItemContent> <NAPTestItemLocalId>NAPLAN-2017-0005-Language Conventions: Spelling-S2-01-01</NAPTestItemLocalId> <ItemType>MC</ItemType> <Subdomain>Spelling</Subdomain> <ItemDescriptor>Descriptor #1</ItemDescriptor> <ReleasedStatus>false</ReleasedStatus> <MarkingType>AS</MarkingType> <MultipleChoiceOptionCount>4</MultipleChoiceOptionCount> <CorrectAnswer>7</CorrectAnswer> <MaximumScore>1</MaximumScore> <ItemDifficulty>3</ItemDifficulty> <ItemDifficultyLogit5>.8</ItemDifficultyLogit5> <ItemDifficultyLogit62>.9</ItemDifficultyLogit62> <ItemDifficultyLogit5SE>.8</ItemDifficultyLogit5SE> <ItemDifficultyLogit62SE>.9</ItemDifficultyLogit62SE> <ItemProficiencyBand>3</ItemProficiencyBand> <ItemProficiencyLevel>C</ItemProficiencyLevel> <ExemplarURL>http://example.com/n3.xml</ExemplarURL> <ContentDescriptionList> <ContentDescription>MNA32</ContentDescription> <ContentDescription>MNA37</ContentDescription> </ContentDescriptionList> </TestItemContent> </NAPTestItem>}, "RefId");
$naptestlet_refid = post("NAPTestlet", qq{ <NAPTestlet> <NAPTestRefId>$naptest_refid</NAPTestRefId> <NAPTestLocalId>NAPLAN-2017-0004-Language Conventions: Grammar and Punctuation</NAPTestLocalId> <TestletContent> <NAPTestletLocalId>NAPLAN-2017-0004-Language Conventions: Grammar and Punctuation-C-00</NAPTestletLocalId> <TestletName>Testlet C-1 for Language Conventions: Grammar and Punctuation Yr 3</TestletName> <Node>C</Node> <LocationInStage>1</LocationInStage> <TestletMaximumScore>12</TestletMaximumScore> </TestletContent> <TestItemList> <TestItem> <TestItemRefId>$naptestitem_refid</TestItemRefId> <TestItemLocalId>NAPLAN-2017-0004-Language Conventions: Grammar and Punctuation-C-00-00</TestItemLocalId> <SequenceNumber>1</SequenceNumber> </TestItem> </TestItemList> </NAPTestlet> "}, "RefId");
$naptestscoresummary_refid = post("NAPTestScoreSummary", qq{ <NAPTestScoreSummary> <SchoolInfoRefId>$schoolinfo_refid</SchoolInfoRefId> <SchoolACARAId>21212</SchoolACARAId> <NAPTestRefId>$naptest_refid</NAPTestRefId> <NAPTestLocalId>NAPLAN-2017-0004-Language Conventions: Grammar and Punctuation</NAPTestLocalId> <DomainNationalAverage>399</DomainNationalAverage> <DomainSchoolAverage>404</DomainSchoolAverage> <DomainJurisdictionAverage>402</DomainJurisdictionAverage> <DomainTopNational60Percent>416</DomainTopNational60Percent> <DomainBottomNational60Percent>376</DomainBottomNational60Percent> </NAPTestScoreSummary> }, "RefId");
$napeventstudentlink_refid = post("NAPEventStudentLink", qq{ <NAPEventStudentLink> <StudentPersonalRefId>$studentpersonal_refid</StudentPersonalRefId> <PlatformStudentIdentifier>R100000004R</PlatformStudentIdentifier> <SchoolInfoRefId>$schoolinfo_refid</SchoolInfoRefId> <SchoolACARAId>21212</SchoolACARAId> <NAPTestRefId>$naptest_refid</NAPTestRefId> <NAPTestLocalId>NAPLAN-2017-0004-Language Conventions: Grammar and Punctuation</NAPTestLocalId> <SchoolSector>NG</SchoolSector> <System>0001</System> <SchoolGeolocation>11</SchoolGeolocation> <ReportingSchoolName>Podunk High School</ReportingSchoolName> <NAPJurisdiction>1</NAPJurisdiction> <ParticipationCode>P</ParticipationCode> <ParticipationText>Present</ParticipationText> <Device>iPad</Device> <Date>2017-06-01</Date> <StartTime>09:00:00</StartTime> <LapsedTimeTest>PT2H57M32S</LapsedTimeTest> <PersonalDetailsChanged>false</PersonalDetailsChanged> <PSIOtherIdMatch>false</PSIOtherIdMatch> <PossibleDuplicate>false</PossibleDuplicate> <DOBRange>false</DOBRange> </NAPEventStudentLink>}, "RefId");
$napstudentresponseset_refid = post("NAPStudentResponseSet", qq{ <NAPStudentResponseSet> <ReportExclusionFlag>false</ReportExclusionFlag> <CalibrationSampleFlag>false</CalibrationSampleFlag> <EquatingSampleFlag>false</EquatingSampleFlag> <PathTakenForDomain>A-D-F</PathTakenForDomain> <ParallelTest>A0-D1-F0</ParallelTest> <StudentPersonalRefId>$studentpersonal_refid</StudentPersonalRefId> <PlatformStudentIdentifier>R100000004R</PlatformStudentIdentifier> <NAPTestRefId>$naptest_refid</NAPTestRefId> <NAPTestLocalId>NAPLAN-2017-0001-Reading</NAPTestLocalId> <DomainScore> <RawScore>30.00</RawScore> <ScaledScoreValue>440.00</ScaledScoreValue> <ScaledScoreLogitValue>20.94</ScaledScoreLogitValue> <ScaledScoreStandardError>22.17</ScaledScoreStandardError> <ScaledScoreLogitStandardError>20.60</ScaledScoreLogitStandardError> <StudentDomainBand>6</StudentDomainBand> <StudentProficiency>Proficient</StudentProficiency> <PlausibleScaledValueList> <PlausibleScaledValue>14</PlausibleScaledValue> <PlausibleScaledValue>15</PlausibleScaledValue> <PlausibleScaledValue>16</PlausibleScaledValue> <PlausibleScaledValue>17</PlausibleScaledValue> <PlausibleScaledValue>18</PlausibleScaledValue> </PlausibleScaledValueList> </DomainScore> <TestletList> <Testlet> <NAPTestletRefId>$naptestlet_refid</NAPTestletRefId> <NAPTestletLocalId>NAPLAN-2017-0001-Reading-A-00</NAPTestletLocalId> <TestletSubScore>11</TestletSubScore> <ItemResponseList> <ItemResponse> <NAPTestItemRefId>$naptestitem_refid</NAPTestItemRefId> <NAPTestItemLocalId>NAPLAN-2017-0001-Reading-A-00-00</NAPTestItemLocalId> <Response>A</Response> <ResponseCorrectness>Correct</ResponseCorrectness> <Score>1</Score> <LapsedTimeItem>PT50S</LapsedTimeItem> <SequenceNumber>1</SequenceNumber> <ItemWeight>1</ItemWeight> </ItemResponse> </ItemResponseList> </Testlet> </TestletList> </NAPStudentResponseSet>}, "RefId");

%qbe = (
  "StudentDailyAttendance" =>
  [ "<StudentPersonalRefId>{STUDENTPERSONAL}</StudentPersonalRefId>", "<Date>2014-11-24</Date>", "<SchoolYear>2014</SchoolYear>", "<SchoolInfoRefId>{SCHOOLINFO}</SchoolInfoRefId>", ],
  "StudentAttendanceSummary" =>
  [ "<StudentAttendanceSummary StudentPersonalRefId='{STUDENTPERSONAL}'></StudentAttendanceSummary>", "<StudentAttendanceSummary><StartDate>2014-11-17</StartDate></StudentAttendanceSummary", "<StudentAttendanceSummary<EndDate>2014-11-22</EndDate></StudentAttendanceSummary", "<StudentAttendanceSummary<SchoolYear>2014</SchoolYear></StudentAttendanceSummary", ],
  "StudentAttendanceTimeList" =>
  [ "<StudentPersonalRefId>{STUDENTPERSONAL}</StudentPersonalRefId>", "<Date>2014-11-24</Date>", "<SchoolYear>2014</SchoolYear>", ],
  "Invoice" =>
  [ "<FormNumber>8BC001</FormNumber>", "<BillingDate>2015-07-01</BillingDate>", "<DueDate>2015-10-22</DueDate>", ],
  "PaymentReceipt" =>
  [ "<TransactionType>Creditor payment</TransactionType>", "<VendorInfoRefId>{VENDORINFO}</VendorInfoRefId>", "<DebtorRefId>{DEBTOR}</DebtorRefId>", "<TransactionDate>2015-06-23</TransactionDate>" ],
  "PurchaseOrder" =>
  [ "<FormNumber>3</FormNumber>", "<VendorInfoRefId>{VENDORINFO}</VendorInfoRefId>", ],
  "Journal" =>
  [ "<DebitFinancialAccountRefId>{FINANCIALACCOUNT}</DebitFinancialAccountRefId>", "<CreditFinancialAccountRefId>{FINANCIALACCOUNT}</CreditFinancialAccountRefId>", ],
  "StudentPersonal" =>
  [ "<LocalId>S1234567</LocalId>", "<PersonInfo><Name><FamilyName>Smith</FamilyName></Name></PersonInfo>", "<PersonInfo><Name><GivenName>Fred</GivenName></Name></PersonInfo>", ],
  "StudentSchoolEnrollment" =>
  [ "<TimeFrame>C</TimeFrame>", "<YearLevel><Code>10</Code></YearLevel>", ],
  "StudentContactPersonal" =>
  [ "<LocalId>LocalId</LocalId>", "<PersonInfo><Name><FamilyName>Tester</FamilyName></Name></PersonInfo>", "<PersonInfo><Name><GivenName>Fred</GivenName></Name></PersonInfo>", ],
  "StudentContactRelationship" =>
  [ "<StudentContactRelationship StudentPersonalRefId='{STUDENTPERSONAL}'></StudentContactRelationship>",  "<StudentContactRelationship StudentContactPersonalRefId='{STUDENTCONTACTPERSONAL}'></StudentContactRelationship>", ],
  "GradingAssignment" =>
  [ "<TeachingGroupRefId>{TEACHINGGROUP}</TeachingGroupRefId>", "<GradingCategory>GC</GradingCategory>", "<DueDate>2015-10-01</DueDate>" ],
  "GradingAssignmentScore" =>
  [ "<StudentPersonalRefId>{STUDENTPERSONAL}</StudentPersonalRefId>", "<TeachingGroupRefId>{TEACHINGGROUP}</TeachingGroupRefId>", "<GradingAssignmentRefId>{GRADINGASSIGNMENT}</GradingAssignmentRefId>" ],
  #"NAPTest" =>
  #[ "<TestContent><TestLevel><Code>3</Code></TestLevel></TestContent>", "<TestContent><Domain>Reading</Domain></TestContent>" ],
  #"NAPEventStudentLink" =>
  #[ "<StudentPersonalRefId>{STUDENTPERSONAL}</StudentPersonalRefId>", "<SchoolACARAId>21212</SchoolACARAId>", "<NAPTestRefId>{NAPTEST}</NAPTestRefId>" ],
  #"NAPStudentResponseSet" =>
  #[ "<StudentPersonalRefId>{STUDENTPERSONAL}</StudentPersonalRefId>", "<PlatformStudentIdentifier>R100000004R</PlatformStudentIdentifier>", "<NAPTestRefId>{NAPTEST}</NAPTestRefId>" ],
  "TimeTableCell" =>
  [ "<TimeTableRefId>{TIMETABLE}</TimeTableRefId>", "<TeachingGroupRefId>{TEACHINGGROUP}</TeachingGroupRefId>", "<SubjectLocalId>07AR</SubjectLocalId>" ],
  "SchoolInfo" =>
  [ "<LocalId>01011234</LocalId>", ],
  "StaffPersonal" =>
  [ "<LocalId>946379881</LocalId>", ],
  "CalendarDate" =>
  [ "<CalendarDate CalendarSummaryRefId='{CALENDARSUMMARY}'></CalendarDate>", "<CalendarDate Date='2014-11-06'></CalendarDate>", "<CalendarDate><CalendarDateType><Code>INST</Code></CalendarDateType></CalendarDate>", "<CalendarDate>  <StudentAttendance><CountsTowardsAttendance>Yes</CountsTowardsAttendance></StudentAttendance></CalendarDate>", ],
  "FinancialAccount" =>
  [ "<ParentAccountRefId>{PARENTFINANCIALACCOUNT}</ParentAccountRefId>", "<AccountNumber>43242244L</AccountNumber>", "<ClassType>Asset</ClassType>" ],
  "VendorInfo" =>
  [ "<Name>Vendor Inc Pty Ltd</Name>", "<CustomerId>434443L</CustomerId>", "<ABN>25 348404 20404</ABN>" ],
  "Debtor" =>
  [ "<BilledEntity SIF_RefObject='VendorInfo'></BilledEntity>", ],
  "ChargedLocationInfo" =>
  [ "<LocationType>School</LocationType>", "<LocalId>LocalId</LocalId>", ],
  "TeachingGroup" =>
  [ "<LocalId>20087ASPN</LocalId>", "<ShortName>7A SPN</ShortName>", "<SchoolLocalId>SMI001</StudentLocalId>", "<TimeTableSubjectLocalId>XYZZY</TimeTableSubjectLocalId>", ],
  "RoomInfo" =>
  [ "<LocalId>LocalId</LocalId>", "<RoomNumber>101</RoomNumber>", "<Capacity>35</Capacity>", ],
  "TimeTableSubject" =>
  [ "<SubjectLocalId>07AR</SubjectLocalId>", "<AcademicYear><Code>7</Code></AcademicYear>", "<AcademicYearRange><Start><Code>8</Code></Start></AcademicYearRange>", "<AcademicYearRange><End><Code>9</Code></End></AcademicYearRange>", "<SubjectShortName>7 ART</SubjectShortName>", "<Semester>1</Semester>", "<SchoolYear>2009</SchoolYear>" ],
);


$failed = 0;
$total = 0;
foreach $object (keys %qbe) {
  foreach $query (@{$qbe{$object}}) {
    $query =~ s/\{STUDENTPERSONAL\}/$studentpersonal_refid/;
    $query =~ s/\{STUDENTCONTACTPERSONAL\}/$studentcontactpersonal_refid/;
    $query =~ s/\{SCHOOLINFO\}/$schoolinfo_refid/;
    $query =~ s/\{STAFFPERSONAL\}/$staffpersonal_refid/;
    $query =~ s/\{TEACHINGGROUP\}/$teachinggroup_refid/;
    $query =~ s/\{TIMETABLE\}/$timetable_refid/;
    $query =~ s/\{TIMETABLESUBJECT\}/$timetablesubject_refid/;
    $query =~ s/\{PURCHASEORDER\}/$purchaseorder_refid/;
    $query =~ s/\{INVOICE\}/$invoice_refid/;
    $query =~ s/\{CHARGEDLOCATIONINFO\}/$chargedlocationinfo_refid/;
    $query =~ s/\{STUDENTCONTACTPERSONAL\}/$studentcontactpersonal_refid/;
    $query =~ s/\{VENDORINFO\}/$vendorinfo_refid/;
    $query =~ s/\{DEBTOR\}/$debtor_refid/;
    $query =~ s/\{FINANCIALACCOUNT\}/$financialaccount_refid/;
    $query =~ s/\{GRADINGASSIGNMENT\}/$gradingassignment_refid/;
    $query =~ s/\{NAPTEST\}/$naptest_refid/;
    $query =~ s/\{CALENDARSUMMARY\}/$calendarsummary_refid/;
    $query =~ s/\{PARENTFINANCIALACCOUNT\}/$parent_financialaccount_refid/;
    $query =  "<$object>$query</$object>" unless $object eq "StudentContactRelationship" or $object eq "StudentAttendanceSummary" or $object eq "CalendarDate";
    $url = qq(curl -i -s -X POST -H "authorization: Basic $token" -H "methodOverride: GET" -H "navigationpagesize: 10" -H "navigationpage: 1" --data "$query" "$baseURL/SIF3InfraREST/hits/requests/${object}s");
    $curl = `curl -i -s -X POST -H "authorization: Basic $token" -H "methodOverride: GET" -H "navigationpagesize: 10" -H "navigationpage: 1" --data "$query" "$baseURL/SIF3InfraREST/hits/requests/${object}s"`;
    #print $curl, "\n";
    $total++;
    if ($curl =~ m/HTTP\/1.1 204 No Content/) {
      printf "Failed query: $url\n";
      $failed++;
    }
    if ($curl =~ m/HTTP\/1.1 403 Forbidden/) {
      printf "Forbidden query: $url\n";
      $failed++;
    }
  }
}
printf "%d service path queries failed out of %d\n", $failed, $total;

sub post($$$) {
  my ($object, $body, $refid) = @_;
  #print qq(curl -i -X POST '$baseURL/SIF3InfraREST/hits/requests/${object}s/$object?access_token=$token&authenticationMethod=Basic' -d '$body');
  my $curl = `curl -i -X POST '$baseURL/SIF3InfraREST/hits/requests/${object}s/$object?access_token=$token&authenticationMethod=Basic' -d '$body'`;
  #print $curl;
  my ($studentpersonal_refid) = $curl =~ m/<$object [^>]*$refid="([^"]+)"/;
  print STDERR "no $object RefId returned from post\n" unless $studentpersonal_refid;
  return $studentpersonal_refid;
}
