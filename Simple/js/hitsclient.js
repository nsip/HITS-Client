/*
NAME
	TODO

COPYRIGHT
	National Schools Interoperability Programme
	Scott Penrose <scottp@dd.com.au>
	Ben Carter <Ben Carter <ben@systemic.com.au>

INSTALLATION / CONFIGURATION
	TODO

BUGS / TASKS
	* Add UUID Generate for manual XML Creation
	* Consider adding records, which School is it added to for security on SIF side?

*/

var hitsclient = (function(_app) {
	// var providerServer = "http://hits.dev.nsip.edu.au:8080/SIF3InfraREST/hits/";
	var providerServer = "http://hits.dev.nsip.edu.au/SIF3InfraREST/hits/";
	// var providerServer = "http://localhost:8080/SIF3InfraREST/hits/";

	// XXX Move this to separate file, to allow re-use of Infrastructure code with different Data sets / examples
	var providers = [
		{ 
			name : "School Info",
			value : "SchoolInfos",
			xml : ''
				+ '<SchoolInfo>' + "\n"
				+ '<LocalId>01011234</LocalId>' + "\n"
				+ '<StateProvinceId>01011234</StateProvinceId>' + "\n"
				+ '<SchoolName>Lincoln Secondary College</SchoolName>' + "\n"
				+ '<SchoolType>Pri/Sec</SchoolType>' + "\n"
				+ '<SchoolEmailList>' + "\n"
				+ '        <Email Type="01">jmiller@lsc.vic.edu.au</Email>' + "\n"
				+ '</SchoolEmailList>' + "\n"
				+ '<OperationalStatus>O</OperationalStatus>' + "\n"
				+ '<SchoolSector>NG</SchoolSector>' + "\n"
				+ '<AddressList>' + "\n"
				+ '      <Address Type="0123" Role="012B">' + "\n"
				+ '        <Street>' + "\n"
				+ '          <StreetNumber>23</StreetNumber>' + "\n"
				+ '          <StreetName>Nicholson Street</StreetName >' + "\n"
				+ '        </Street>' + "\n"
				+ '        <City>Carnegie</City>' + "\n"
				+ '        <StateProvince>VIC</StateProvince>' + "\n"
				+ '        <PostalCode>3004</PostalCode>' + "\n"
				+ '      </Address>  ' + "\n"
				+ ' </AddressList>' + "\n"
				+ '</SchoolInfo>' + "\n"


		},
		{
			name : "Student Personal",
			value : "StudentPersonals",
			xml : ''
				+ '<StudentPersonal>' + "\n"
				+ '<LocalId>S1234567</LocalId>' + "\n"
				+ '<StateProvinceId>ABC1234</StateProvinceId>' + "\n"
				+ '<PersonInfo>' + "\n"
				+ '  <Name Type="LGL">' + "\n"
				+ '    <FamilyName>Smith</FamilyName>' + "\n"
				+ '    <GivenName>Fred</GivenName>' + "\n"
				+ '    <FullName>Fred Smith</FullName>' + "\n"
				+ '  </Name>' + "\n"
				+ '  <Demographics>' + "\n"
				+ '    <Sex>1</Sex>' + "\n"
				+ '  </Demographics>' + "\n"
				+ '  <EmailList>' + "\n"
				+ '    <Email Type="01">fsmith@yahoo.com</Email>' + "\n"
				+ '    <Email Type="02">freddy@gmail.com</Email>' + "\n"
				+ '  </EmailList>' + "\n"
				+ '</PersonInfo>' + "\n"
				+ '<MostRecent>' + "\n"
				+ '  <YearLevel>' + "\n"
				+ '    <Code>P</Code>' + "\n"
				+ '  </YearLevel>' + "\n"
				+ '</MostRecent>' + "\n"
				+ '</StudentPersonal>' + "\n"
		},
		{ 
			name : "Staff Personal",
			value : "StaffPersonals",
			xml: ''
				+ '<StaffPersonal>' + "\n"
				+ '<LocalId>946379881</LocalId>' + "\n"
				+ '<StateProvinceId>C2345681</StateProvinceId>' + "\n"
				+ '<PersonInfo>' + "\n"
				+ '  <Name Type="LGL">' + "\n"
				+ '    <FamilyName>Smith</FamilyName>' + "\n"
				+ '    <GivenName>Fred</GivenName>' + "\n"
				+ '  </Name>' + "\n"
				+ '  <Demographics>' + "\n"
				+ '    <Sex>1</Sex>' + "\n"
				+ '  </Demographics>' + "\n"
				+ '  <EmailList>' + "\n"
				+ '    <Email Type="01">fsmith@yahoo.com</Email>' + "\n"
				+ '    <Email Type="02">freddy@gmail.com</Email>' + "\n"
				+ '  </EmailList>' + "\n"
				+ '</PersonInfo>' + "\n"
				+ '<EmploymentStatus>A</EmploymentStatus>' + "\n"
				+ '</StaffPersonal>' + "\n"
				+ '' + "\n"

		},
		{ 
			name : "Staff Assignment",
			value : "StaffAssignments",
			xml: ''
				+ '<StaffAssignment>' + "\n"
				+ '<SchoolInfoRefId>A8C3D3E34B359D75101D00AA001A1652</SchoolInfoRefId>' + "\n"
				+ '<SchoolYear>2008</SchoolYear>' + "\n"
				+ '<StaffPersonalRefId>D3E34B359D75101A8C3D00AA001A1651</StaffPersonalRefId>' + "\n"
				+ '<Description>VCE English Teacher</Description>' + "\n"
				+ '<PrimaryAssignment>Y</PrimaryAssignment>' + "\n"
				+ '<JobStartDate>2000-09-05</JobStartDate>' + "\n"
				+ '<JobEndDate>2001-06-25</JobEndDate>' + "\n"
				+ '<JobFTE>1.00</JobFTE>' + "\n"
				+ '<JobFunction>Teacher</JobFunction>' + "\n"
				+ '<StaffActivity>' + "\n"
				+ '  <Code>1100</Code>' + "\n"
				+ '</StaffActivity>' + "\n"
				+ '<StaffSubjectList>' + "\n"
				+ '  <StaffSubject>' + "\n"
				+ '    <PreferenceNumber>1</PreferenceNumber>' + "\n"
				+ '    <SubjectLocalId>English</SubjectLocalId>' + "\n"
				+ ' <TimeTableSubjectRefId>D3E34B359D75101A8C3D00AA001A1654</TimeTableSubjectRefId>' + "\n"
				+ '  </StaffSubject>' + "\n"
				+ '  <StaffSubject>' + "\n"
				+ '    <PreferenceNumber>2</PreferenceNumber>' + "\n"
				+ '    <SubjectLocalId>Mathematics</SubjectLocalId>' + "\n"
				+ ' <TimeTableSubjectRefId>D3E34B359D75101A8C3D00AA001A1656</TimeTableSubjectRefId>' + "\n"
				+ '  </StaffSubject>' + "\n"
				+ '  <StaffSubject>' + "\n"
				+ '    <PreferenceNumber>3</PreferenceNumber>' + "\n"
				+ '    <SubjectLocalId>Science</SubjectLocalId>' + "\n"
				+ ' <TimeTableSubjectRefId>D3E34B359D75101A8C3D00AA001A1658</TimeTableSubjectRefId>' + "\n"
				+ '  </StaffSubject>' + "\n"
				+ '</StaffSubjectList>' + "\n"
				+ '<YearLevels>' + "\n"
				+ '  <YearLevel>' + "\n"
				+ '    <Code>11</Code>' + "\n"
				+ '  </YearLevel>' + "\n"
				+ '  <YearLevel>' + "\n"
				+ '    <Code>12</Code>' + "\n"
				+ '  </YearLevel>' + "\n"
				+ '</YearLevels>' + "\n"
				+ '</StaffAssignment>' + "\n"

		},
		{ 
			name : "Teaching Group",
			value : "TeachingGroups" ,
			xml: ''
				+ '<TeachingGroup>' + "\n"
				+ '<SchoolYear>2008</SchoolYear>' + "\n"
				+ '<LocalId>20087ASPN</LocalId>' + "\n"
				+ '<ShortName>7A SPN</ShortName>' + "\n"
				+ '<SchoolInfoRefId>A8C3D3E34B359D75101D00AA001A1652</SchoolInfoRefId>' + "\n"
				+ '<StudentList>' + "\n"
				+ '  <TeachingGroupStudent>' + "\n"
				+ '    <StudentPersonalRefId>9897466F200E4BC1B9AED1507DA15CEF</StudentPersonalRefId>' + "\n"
				+ '    <StudentLocalId>SMI001</StudentLocalId>' + "\n"
				+ '    <Name Type="LGL">' + "\n"
				+ '      <FamilyName>Smith</FamilyName>' + "\n"
				+ '      <GivenName>Peter</GivenName>' + "\n"
				+ '    </Name>' + "\n"
				+ '  </TeachingGroupStudent>' + "\n"
				+ '  <TeachingGroupStudent>' + "\n"
				+ '    <StudentPersonalRefId>7C834EA9EDA12090347F83297E1C290D</StudentPersonalRefId>' + "\n"
				+ '    <StudentLocalId>SMI002</StudentLocalId>' + "\n"
				+ '    <Name Type="LGL">' + "\n"
				+ '      <FamilyName>Smith</FamilyName>' + "\n"
				+ '      <GivenName>Jennifer</GivenName>' + "\n"
				+ '    </Name>' + "\n"
				+ '  </TeachingGroupStudent>' + "\n"
				+ '  <TeachingGroupStudent>' + "\n"
				+ '    <StudentPersonalRefId>7C834EA9EDA12090347F83297E1C290E</StudentPersonalRefId>' + "\n"
				+ '    <StudentLocalId>SMI003</StudentLocalId>' + "\n"
				+ '    <Name Type="LGL">' + "\n"
				+ '      <FamilyName>Smith</FamilyName>' + "\n"
				+ '      <GivenName>Terence</GivenName>' + "\n"
				+ '    </Name>' + "\n"
				+ '  </TeachingGroupStudent>' + "\n"
				+ '</StudentList>' + "\n"
				+ '<TeacherList>' + "\n"
				+ '  <TeachingGroupTeacher>' + "\n"
				+ '    <StaffPersonalRefId>A8C3A2E35B359D75101D00AA001A0000</StaffPersonalRefId>' + "\n"
				+ '    <StaffLocalId>SMI1</StaffLocalId>' + "\n"
				+ '    <Name Type="LGL">' + "\n"
				+ '      <FamilyName>Smith</FamilyName>' + "\n"
				+ '      <GivenName>Thomas</GivenName>' + "\n"
				+ '    </Name>' + "\n"
				+ '    <Association>Class Teacher</Association>' + "\n"
				+ '  </TeachingGroupTeacher>' + "\n"
				+ '  <TeachingGroupTeacher>' + "\n"
				+ '    <StaffPersonalRefId>A8CCCCE35B359D75101D00AA001A0000</StaffPersonalRefId>' + "\n"
				+ '    <StaffLocalId>LONG2</StaffLocalId>' + "\n"
				+ '    <Name Type="LGL">' + "\n"
				+ '      <FamilyName>Long</FamilyName>' + "\n"
				+ '      <GivenName>Tamara</GivenName>' + "\n"
				+ '    </Name>' + "\n"
				+ '    <Association>Integration Aide</Association>' + "\n"
				+ '  </TeachingGroupTeacher>' + "\n"
				+ '</TeacherList>' + "\n"
				+ '<TeachingGroupPeriodList>' + "\n"
				+ '  <TeachingGroupPeriod>' + "\n"
				+ '    <DayId>M</DayId>' + "\n"
				+ '    <PeriodId>2</PeriodId>' + "\n"
				+ '  </TeachingGroupPeriod>' + "\n"
				+ '  <TeachingGroupPeriod>' + "\n"
				+ '    <DayId>F</DayId>' + "\n"
				+ '    <PeriodId>6</PeriodId>' + "\n"
				+ '  </TeachingGroupPeriod>' + "\n"
				+ '</TeachingGroupPeriodList>' + "\n"
				+ '</TeachingGroup>' + "\n"
		},

		{
			name: "Student School Enrollment",
			value: "StudentSchoolEnrollments",
			xml: ''
				+ '<StudentSchoolEnrollment>' + "\n"
				+ '<StudentPersonalRefId>D3E34B359D75101A8C3D00AA001A1652</StudentPersonalRefId>' + "\n"
				+ '<SchoolInfoRefId>D3E34B359D75101A8C3D00AA001A1651</SchoolInfoRefId>' + "\n"
				+ '<MembershipType>01</MembershipType>' + "\n"
				+ '<TimeFrame>C</TimeFrame>' + "\n"
				+ '<SchoolYear>2004</SchoolYear>' + "\n"
				+ '<EntryDate>2004-01-29</EntryDate>' + "\n"
				+ '<YearLevel>' + "\n"
				+ '  <Code>10</Code>' + "\n"
				+ '</YearLevel>' + "\n"
				+ '<Homeroom SIF_RefObject="RoomInfo">D7510D3E34B3591A8C3D00AA001A1651</Homeroom>' + "\n"
				+ '<Advisor SIF_RefObject="StaffPersonal">B359D3E34D75101A8C3D00AA001A1652</Advisor>' + "\n"
				+ '<FTE>1.00</FTE>' + "\n"
				+ '<FTPTStatus>01</FTPTStatus>' + "\n"
				+ '<StudentSubjectChoiceList>' + "\n"
				+ '  <StudentSubjectChoice>' + "\n"
				+ '     <PreferenceNumber>1</PreferenceNumber>' + "\n"
				+ '     <SubjectLocalId>212</SubjectLocalId>' + "\n"
				+ '  </StudentSubjectChoice>' + "\n"
				+ '  <StudentSubjectChoice>' + "\n"
				+ '     <PreferenceNumber>2</PreferenceNumber>' + "\n"
				+ '     <SubjectLocalId>124</SubjectLocalId>' + "\n"
				+ '  </StudentSubjectChoice>' + "\n"
				+ '</StudentSubjectChoiceList>' + "\n"
				+ '</StudentSchoolEnrollment>' + "\n"
		},

		{
			name: "Room Info",
			value: "RoomInfos",
			xml: ''
				+ '<RoomInfo>' + "\n"
				+ '<SchoolInfoRefId>A2E35B359D75101A8C3D00AA001A0000</SchoolInfoRefId>' + "\n"
				+ '<RoomNumber>101</RoomNumber>' + "\n"
				+ '<StaffList>' + "\n"
				+ '  <StaffPersonalRefId>A8C3A2E35B359D75101D00AA001A0000</StaffPersonalRefId>' + "\n"
				+ '</StaffList>' + "\n"
				+ '<Description>Room 101</Description>' + "\n"
				+ '<Building>Main A</Building>' + "\n"
				+ '<HomeroomNumber>10-HR-A</HomeroomNumber>' + "\n"
				+ '<Size>400</Size>' + "\n"
				+ '<Capacity>35</Capacity>' + "\n"
				+ '<RoomType>Classroom</RoomType>' + "\n"
				+ '</RoomInfo>' + "\n"
		},

		{
			name: "Time Table Subject",
			value: "TimeTableSubjects",
			xml: ''
				+ '<TimeTableSubject>' + "\n"
				+ '<SubjectLocalId>07AR</SubjectLocalId>' + "\n"
				+ '<AcademicYear>' + "\n"
				+ '  <Code>7</Code>' + "\n"
				+ '</AcademicYear>' + "\n"
				+ '<SubjectShortName>7 ART</SubjectShortName>' + "\n"
				+ '<SubjectLongName>Year 7 Art</SubjectLongName>' + "\n"
				+ '<SubjectType>E</SubjectType>' + "\n"
				+ '<ProposedMaxClassSize>10</ProposedMaxClassSize>' + "\n"
				+ '<ProposedMinClassSize>15</ProposedMinClassSize>' + "\n"
				+ '<SchoolInfoRefId>D3E34B359D75101A8C3D00AA001A163</SchoolInfoRefId>' + "\n"
				+ '<SchoolLocalId>32718</SchoolLocalId>' + "\n"
				+ '<Semester>2009</Semester >' + "\n"
				+ '<SchoolYear>2009</SchoolYear>' + "\n"
				+ '</TimeTableSubject>' + "\n"
		},

		{
			name: "Time Table",
			value: "TimeTables",
			xml: ''
				+ '<TimeTable>' + "\n"
				+ '<SchoolInfoRefId>F2256EE2B67F47D6AB4794D4DEE0D0AD</SchoolInfoRefId>' + "\n"
				+ '<SchoolYear>2008</SchoolYear>' + "\n"
				+ '<LocalId>2008S1</LocalId>' + "\n"
				+ '<Title>2008 Semester 1</Title>' + "\n"
				+ '<DaysPerCycle>5</DaysPerCycle>' + "\n"
				+ '<PeriodsPerDay>6</PeriodsPerDay>' + "\n"
				+ '<TeachingPeriodsPerDay>5</TeachingPeriodsPerDay>' + "\n"
				+ '<SchoolLocalId>01011234</SchoolLocalId>' + "\n"
				+ '<SchoolName>Newest Secondary College</SchoolName>' + "\n"
				+ '<TimeTableCreationDate>2008-02-01</TimeTableCreationDate>' + "\n"
				+ '<StartDate>2008-01-30</StartDate>' + "\n"
				+ '<EndDate>2008-06-20</EndDate>' + "\n"
				+ '<TimeTableDayList>' + "\n"
				+ '  <TimeTableDay>' + "\n"
				+ '    <DayId>1</DayId>' + "\n"
				+ '    <DayTitle>Monday</DayTitle>' + "\n"
				+ '    <TimeTablePeriodList>' + "\n"
				+ '      <TimeTablePeriod>' + "\n"
				+ '        <PeriodId>1</PeriodId>' + "\n"
				+ '        <PeriodTitle>P1</PeriodTitle>' + "\n"
				+ '      </TimeTablePeriod>' + "\n"
				+ '      <TimeTablePeriod>' + "\n"
				+ '        <PeriodId>2</PeriodId>' + "\n"
				+ '        <PeriodTitle>P2</PeriodTitle>' + "\n"
				+ '      </TimeTablePeriod>' + "\n"
				+ '      <TimeTablePeriod>' + "\n"
				+ '        <PeriodId>3</PeriodId>' + "\n"
				+ '        <PeriodTitle>P3</PeriodTitle>' + "\n"
				+ '      </TimeTablePeriod>' + "\n"
				+ '      <TimeTablePeriod>' + "\n"
				+ '        <PeriodId>4</PeriodId>' + "\n"
				+ '        <PeriodTitle>P4</PeriodTitle>' + "\n"
				+ '      </TimeTablePeriod>' + "\n"
				+ '      <TimeTablePeriod>' + "\n"
				+ '        <PeriodId>5</PeriodId>' + "\n"
				+ '        <PeriodTitle>P5</PeriodTitle>' + "\n"
				+ '      </TimeTablePeriod>' + "\n"
				+ '      <TimeTablePeriod>' + "\n"
				+ '        <PeriodId>6</PeriodId>' + "\n"
				+ '        <PeriodTitle>P6</PeriodTitle>' + "\n"
				+ '      </TimeTablePeriod>' + "\n"
				+ '    </TimeTablePeriodList>' + "\n"
				+ '  </TimeTableDay>' + "\n"
				+ '  <TimeTableDay>' + "\n"
				+ '    <DayId>2</DayId>' + "\n"
				+ '    <DayTitle>Tuesday</DayTitle>' + "\n"
				+ '    <TimeTablePeriodList>' + "\n"
				+ '      <TimeTablePeriod>' + "\n"
				+ '        <PeriodId>1</PeriodId>' + "\n"
				+ '        <PeriodTitle>P1</PeriodTitle>' + "\n"
				+ '      </TimeTablePeriod>' + "\n"
				+ '      <TimeTablePeriod>' + "\n"
				+ '        <PeriodId>2</PeriodId>' + "\n"
				+ '        <PeriodTitle>P2</PeriodTitle>' + "\n"
				+ '      </TimeTablePeriod>' + "\n"
				+ '      <TimeTablePeriod>' + "\n"
				+ '        <PeriodId>3</PeriodId>' + "\n"
				+ '        <PeriodTitle>P3</PeriodTitle>' + "\n"
				+ '      </TimeTablePeriod>' + "\n"
				+ '      <TimeTablePeriod>' + "\n"
				+ '        <PeriodId>4</PeriodId>' + "\n"
				+ '        <PeriodTitle>P4</PeriodTitle>' + "\n"
				+ '      </TimeTablePeriod>' + "\n"
				+ '      <TimeTablePeriod>' + "\n"
				+ '        <PeriodId>5</PeriodId>' + "\n"
				+ '        <PeriodTitle>P5</PeriodTitle>' + "\n"
				+ '      </TimeTablePeriod>' + "\n"
				+ '      <TimeTablePeriod>' + "\n"
				+ '        <PeriodId>6</PeriodId>' + "\n"
				+ '        <PeriodTitle>P6</PeriodTitle>' + "\n"
				+ '      </TimeTablePeriod>' + "\n"
				+ '    </TimeTablePeriodList>' + "\n"
				+ '  </TimeTableDay>' + "\n"
				+ '</TimeTableDayList>' + "\n"
				+ '</TimeTable>' + "\n"
		},

		{
			name: 'Time Table Cell',
			value: 'TimeTableCells',
			xml: ''
				+ '<TimeTableCell>' + "\n"
				+ '<TimeTableRefId>64A309DA063A2E35B359D75101A8C3D0</TimeTableRefId>' + "\n"
				+ '<TimeTableSubjectRefId>22860091719245B4AB0CF5B9DC19DE5C</TimeTableSubjectRefId>' + "\n"
				+ '<TeachingGroupRefId>64A309DA063A2E35B359D75101A8C3D1</TeachingGroupRefId>' + "\n"
				+ '<RoomInfoRefId>D3E34B359D75101A8C3D00AA001A1652</RoomInfoRefId>' + "\n"
				+ '<StaffPersonalRefId>D3E34F419D75101A8C3D00AA001A1652</StaffPersonalRefId>' + "\n"
				+ '<TimeTableLocalId>2008S1</TimeTableLocalId>' + "\n"
				+ '<SubjectLocalId>07AR</SubjectLocalId>' + "\n"
				+ '<TeachingGroupLocalId>20087ASPN 2008S1</TeachingGroupLocalId>' + "\n"
				+ '<RoomNumber>101</RoomNumber>' + "\n"
				+ '<StaffLocalId>946379881</StaffLocalId>' + "\n"
				+ '<DayId>1</DayId>' + "\n"
				+ '<PeriodId>1</PeriodId>' + "\n"
				+ '<CellType>T</CellType>' + "\n"
				+ '<SchoolInfoRefId>D3E34B359D75101A8C3D00AA001A1652</SchoolInfoRefId>' + "\n"
				+ '<SchoolLocalId>01011234</SchoolLocalId>' + "\n"
				+ '</TimeTableCell>' + "\n"
		},

		{
			name: "Scheduled Activity",
			value: "ScheduledActivitys",
			xml: ''
				+ '<ScheduledActivity SchoolInfoRefId="B7A34E561C97345C0A4E11BB112B2753">' + "\n"
				+ ' <TimeTableCellRefId>7345C0A4E1112B27531B2B7A34E561C9B</TimeTableCellRefId >' + "\n"
				+ ' <DayId>1</DayId>' + "\n"
				+ ' <TimeTableRefId>45C0A7531B2B7A7334E561C9B4E1112B2</TimeTableRefId>' + "\n"
				+ ' <SchoolYear>2007</SchoolYear>' + "\n"
				+ ' <ActivityDate>2014-10-10</ActivityDate>' + "\n"
				+ ' <StartTime>12:05:00</StartTime>' + "\n"
				+ ' <FinishTime>13:30:00</FinishTime>' + "\n"
				+ ' <Teachers>' + "\n"
				+ '   <TeacherCover>' + "\n"
				+ '     <StaffPersonalRefId>98157AA013BA8C3D00AA012B359D7512</StaffPersonalRefId>' + "\n"
				+ '     <StaffPersonalLocalId>US8923</StaffPersonalLocalId>' + "\n"
				+ '     <StartTime>12:05:00</StartTime>' + "\n"
				+ '     <FinishTime>13:00:00</FinishTime>' + "\n"
				+ '     <Credit>In-lieu</Credit>' + "\n"
				+ '     <Supervision>MinimalSupervision</Supervision>' + "\n"
				+ '     <Weighting>0.5</Weighting>' + "\n"
				+ '   </TeacherCover>' + "\n"
				+ '   <TeacherCover>' + "\n"
				+ '     <StaffPersonalRefId>A75A00101A8C301D02E3A05B359D0A00</StaffPersonalRefId>' + "\n"
				+ '     <StaffPersonalLocalId>ZY3213</StaffPersonalLocalId>' + "\n"
				+ '     <StartTime>13:00:00</StartTime>' + "\n"
				+ '     <FinishTime>13:30:00</FinishTime>' + "\n"
				+ '     <Credit>Extra</Credit>' + "\n"
				+ '     <Supervision>MinimalSupervision</Supervision>' + "\n"
				+ '     <Weighting>0.5</Weighting>' + "\n"
				+ '   </TeacherCover>' + "\n"
				+ ' </Teachers>' + "\n"
				+ ' <Rooms>' + "\n"
				+ '   <RoomInfoRefId>11737EA4301CADCA75C87214A7C46BDB</RoomInfoRefId>' + "\n"
				+ ' </Rooms>' + "\n"
				+ ' <Type>Incursion</Type>' + "\n"
				+ ' <TeachingGroups>' + "\n"
				+ '   <TeachingGroupRefId>B234516384746B387459000F84723A00</TeachingGroupRefId>' + "\n"
				+ ' </TeachingGroups>' + "\n"
				+ '</ScheduledActivity>' + "\n"
		}
	];

	var methods = [];
	var loadMethodValues = function() {
	methods.push({ name : "Get One",
		executeMethod : executeGetOne,
		parameterBody : "getOne"
	});
	methods.push({ name : "Get Many",
		executeMethod : executeGetMany,
		parameterBody : "getMany"
	});	
	methods.push({ name : "Post One",
		executeMethod : executePostOne,
		parameterBody : "postOne"
	});	
	};

	/* TODO Consider using timestamp (although, is uuid needed?)
		function generateUUID(){
		    var d = new Date().getTime();
		    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
			var r = (d + Math.random()*16)%16 | 0;
			d = Math.floor(d/16);
			return (c=='x' ? r : (r&0x7|0x8)).toString(16);
		    });
		    return uuid;
		};	
	*/
	var uuid = function() {
		return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
			var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
			return v.toString(16);
		});
	};

	// TODO Consider using done instead of success
	var ajax = function (args) {
		args.success = function(result, status, xhr) { ajaxSuccess.call(this, result, status, xhr, args, args.callback); return true;};
		args.error = function(xhr, status, reason) { ajaxFailure.call(this, xhr, status, reason, args, args.callback); return true;};
		$.ajax(args);
	};

	var ajaxSuccess = function(result, status, xhr, args, callback) {
		if (callback) {
			callback.call(this, xhr, status, result, undefined, args);
		} 
		else {
			console.log(result);
			console.log(status);
			console.log(xhr);
		}
	};

	var ajaxFailure = function(xhr, status, reason, args, callback) {
		if (callback) {
			callback.call(this, xhr, status, undefined, reason, args);
		} 
		else {
			console.log(reason);
			console.log(status);
			console.log(xhr);
		}
	};

	var panelError = function(message) {
		var div = document.createElement("div");
		$(div).addClass("alert");
		$(div).addClass("alert-danger");
		$(div).addClass("alert-dismissable");
		$(div).html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button>" + message);
		$(".container .row:first").html(div);
	};

	var getSessionToken = function(zoneId, password) {
		var body = siftemplate.environment.create;

		var args = {};
		args.callback = getSessionTokenCallback;
		args.url = providerServer + "environments/environment";
		args.data = body.replace("${USER_TOKEN}",zoneId);
		args.dataType = "XML";
	//	args.contentType = "application/xml";
		args.type = "POST";
		var token = "HITS:" + password;
		token = Base64.encode(token);
		args.headers = {};
		args.headers["Content-Type"] = "application/xml";
		args.headers["Authorization"] = "Basic " + token;
		args.notifier = executeCall;
		ajax(args);
	};

	var getSessionTokenCallback = function(xhr, status, result, reason, args) {
		if (xhr.status == 409 || xhr.status == 201) {
			var sessionToken = getFirstXmlTagContents(xhr.responseText, "sessionToken");
			$("#sessionToken").val(sessionToken);
			args.notifier.call(this);
		} 
		else {
			var message = getFirstXmlTagContents(xhr.responseText, "message");
			if (message == null) {
				message = "Status " + xhr.status + " (" + reason + ")";
			}
			panelError(message);
		}
	};

	var validateEnvironment = function() {
		var zoneId = $("#zoneId").val();
		if (zoneId.length == 0) {
			panelError("Please enter a School Reference Id");
			$("#zoneId").parent("div").addClass("has-error");
			return false;
		} 
		else {
			$("#zoneId").parent("div").removeClass("has-error");
		}
		var password = $("#password").val();
		if (password.length == 0) {
			panelError("Please enter a Password");
			$("#password").parent("div").addClass("has-error");
			return false;
		} 
		else {
			$("#password").parent("div").removeClass("has-error");
		}
		var sessionToken = $("#sessionToken").val();
		if (sessionToken.length == 0) {
			getSessionToken(zoneId, password);
			return false;
		} 
		else {
			$("#password").parent("div").removeClass("has-error");
		}
		return true;
	}

	var validateProvider = function() {
		var providerOption = $("#provider option:selected");
		var provider = providerOption.data("provider");
		if (provider && provider != null) {
			$("#provider").parent("div").removeClass("has-error");
		} 
		else {
			panelError("Please select a Provider");
			$("#provider").parent("div").addClass("has-error");
			return false;
		}
		return true;
	}

	var validateMethod = function() {
		var methodOption = $("#method option:selected");
		var method = methodOption.data("method");
		if (method && method != null) {
			$("#method").parent("div").removeClass("has-error");
		} 	
		else {
			panelError("Please select a Method");
			$("#method").parent("div").addClass("has-error");
			return false;
		}
		return true;
	}

	var executeCall = function() {
		if (validateEnvironment() && validateProvider() && validateMethod()) {
			var zoneId = $("#zoneId").val();
			var password = $("#password").val();
			var sessionToken = $("#sessionToken").val();
			var provider = $("#provider option:selected").data("provider");
			var method = $("#method option:selected").data("method");
			method.executeMethod.call(this, zoneId, password, sessionToken, provider, method);
		}
	};

	var executePostOne = function(zoneId, password, sessionToken, provider, method) {
		var body = $("#postOneBody").val();
		if (body.length == 0) {
			panelError("Please enter a XML Body");
			$("#postOneBody").parent("div").addClass("has-error");
			return;
		} 
		else {
			$("#postOneBody").parent("div").removeClass("has-error");
		}

		var args = {};
		args.callback = executeCallback;
		args.url = providerServer + "requests/" + provider.value + "/" + provider.value;
		args.url = args.url.slice(0, - 1);	// Strip plural provider name
	//	args.contentType = "application/xml";
		args.dataType = "XML";
		args.type = "POST";
		var token = sessionToken + ":" + password;
		token = Base64.encode(token);
		args.token = token;
		args.headers = {};
		args.headers["Content-Type"] = "application/xml";
		args.headers["Authorization"] = "Basic " + token;
		args.data = body;
		ajax(args);
	};

	var executeGetOne = function(zoneId, password, sessionToken, provider, method) {
		var referenceId = $("#getOneReferenceId").val();
		if (referenceId.length == 0) {
			panelError("Please enter a Reference Id");
			$("#getOneReferenceId").parent("div").addClass("has-error");
			return;
		} 
		else {
			$("#getOneReferenceId").parent("div").removeClass("has-error");
		}

		var args = {};
		args.callback = executeCallback;
		args.url = providerServer + "requests/" + provider.value + "/" + referenceId;
	//	args.contentType = "application/xml";
		args.dataType = "XML";
		args.type = "GET";
		var token = sessionToken + ":" + password;
		token = Base64.encode(token);
		args.token = token;
		args.headers = {};
		args.headers["Content-Type"] = "application/xml";
		args.headers["Authorization"] = "Basic " + token;
		ajax(args);
	};

	var executeGetMany = function(zoneId, password, sessionToken, provider, method) {
		var recordsPerPage = $("#getManyRecordsPerPage").val();
		if (recordsPerPage.length == 0) {
			panelError("Please enter a value for Records per Page");
			$("#getManyRecordsPerPage").parent("div").addClass("has-error");
			return;
		} 
		else {
			$("#getManyRecordsPerPage").parent("div").removeClass("has-error");
		}
		var page = $("#getManyPage").val();
		if (recordsPerPage.length == 0) {
			panelError("Please enter a value for Page Number");
			$("#getManyPage").parent("div").addClass("has-error");
			return;
		} 
		else {
			$("#getManyPage").parent("div").removeClass("has-error");
		}
		page = new Number(page) - 1;
		if (page < 0) page = 0;


		var args = {};
		args.callback = executeCallback;
		args.url = providerServer + "requests/" + provider.value + "?page=" + page + "&pageSize=" + recordsPerPage;
	//	args.contentType = "application/xml";
		args.dataType = "XML";
		args.type = "GET";
		var token = sessionToken + ":" + password;
		token = Base64.encode(token);
		args.token = token;
		args.headers = {};
		args.headers["Content-Type"] = "application/xml";
		args.headers["Authorization"] = "Basic " + token;
		ajax(args);
	};

	var executeCallback = function(xhr, status, result, reason, args) {
		console.log(xhr);
		console.log(status);
		console.log(result);
		console.log(reason);
		$(".container .row:first").html("");
		$("#responseStatus").text(xhr.status);
		$("#responseStatusText").text(xhr.statusText);
		$("#response").text(xhr.responseText);
		if (args.url.indexOf("\?") > 0)	{
			$('#responseURL').text(args.url + '&accessToken=' + args.token);
			$('#responseURL').attr('href', args.url + '&accessToken=' + args.token);
		}
		else {
			$('#responseURL').text(args.url + '?accessToken=' + args.token);
			$('#responseURL').attr('href', args.url + '?accessToken=' + args.token);
		}
	};

	var getFirstXmlTagContents = function(xmlDocument, xmlTag) {
		var result = null;
		var regularExpression = new RegExp("<" + xmlTag + ">([^<]*)<","g");
		var matches = regularExpression.exec(xmlDocument);
		if (matches && matches != null && matches.length > 1) {
			result = matches[1];
		}
		return result;
	};

	var showParameters = function() {
		var methodOption = $("#method option:selected");
		var providerOption = $("#provider option:selected");
		var method = methodOption.data("method");
		var provider = providerOption.data("provider");
		$(".parameter-header").css("display","none");
		$(".parameter-block").css("display","none");
		if (method && method.parameterBody) {
			$(".parameter-header").css("display","");
			$("#" + method.parameterBody).css("display","");
		}
		// Optional parameter values from Provider / Method combination
		if (method && method.parameterBody == 'postOne') {
			$("#postOneBody").val(provider.xml ? provider.xml : '');
		}
	};

	var populateProviders = function() {
		$("#provider").html("<option></option>");
		for (var i = 0; i < providers.length; i++) {
			var provider = providers[i];
			var option = new Option(provider.name, provider.value);
			$(option).data("provider", provider);
			$("#provider").append(option);
		}
		$("#provider").on("change", showParameters);
	};

	var populateMethods = function() {
		$("#method").html("<option></option>");
		for (var i = 0; i < methods.length; i++) {
			var method = methods[i];
			var option = new Option(method.name, method.value);
			$(option).data("method", method);
			$("#method").append(option);
		}
		$("#method").on("change", showParameters);
	};

	_app.ready = function() {
		populateProviders();
		loadMethodValues();
		populateMethods();
		$("#execute").on("click", executeCall);
	};

	return _app;
}(hitsclient || {}));
