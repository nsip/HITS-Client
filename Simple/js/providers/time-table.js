var hitsclient = (function(_app) {
  if (!_app.providers) {
    _app.providers = [];
  }

  _app.providers.push({
    name: "Time Table",
    value: "TimeTables",
    servicePaths : ["SchoolInfos/{}/TimeTables"],
    template: 
      "<!-- Remember to insert RefIds of records that exist; and to hyphenate RefID as\n" +
      "     xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx -->\n" +
      "<TimeTable>\n" +
      "  <SchoolInfoRefId>{RefId}</SchoolInfoRefId>\n" +
      "  <SchoolYear>2008</SchoolYear>\n" +
      "  <LocalId>2008S1</LocalId>\n" +
      "  <Title>2008 Semester 1</Title>\n" +
      "  <DaysPerCycle>5</DaysPerCycle>\n" +
      "  <PeriodsPerDay>6</PeriodsPerDay>\n" +
      "  <TeachingPeriodsPerDay>5</TeachingPeriodsPerDay>\n" +
      "  <SchoolLocalId>01011234</SchoolLocalId>\n" +
      "  <SchoolName>Newest Secondary College</SchoolName>\n" +
      "  <TimeTableCreationDate>2008-02-01</TimeTableCreationDate>\n" +
      "  <StartDate>2008-01-30</StartDate>\n" +
      "  <EndDate>2008-06-20</EndDate>\n" +
      "  <TimeTableDayList>\n" +
      "    <TimeTableDay>\n" +
      "      <DayId>1</DayId>\n" +
      "      <DayTitle>Monday</DayTitle>\n" +
      "      <TimeTablePeriodList>\n" +
      "        <TimeTablePeriod>\n" +
      "          <PeriodId>1</PeriodId>\n" +
      "          <PeriodTitle>P1</PeriodTitle>\n" +
      "        </TimeTablePeriod>\n" +
      "        <TimeTablePeriod>\n" +
      "          <PeriodId>2</PeriodId>\n" +
      "          <PeriodTitle>P2</PeriodTitle>\n" +
      "        </TimeTablePeriod>\n" +
      "        <TimeTablePeriod>\n" +
      "          <PeriodId>3</PeriodId>\n" +
      "          <PeriodTitle>P3</PeriodTitle>\n" +
      "        </TimeTablePeriod>\n" +
      "        <TimeTablePeriod>\n" +
      "          <PeriodId>4</PeriodId>\n" +
      "          <PeriodTitle>P4</PeriodTitle>\n" +
      "        </TimeTablePeriod>\n" +
      "        <TimeTablePeriod>\n" +
      "          <PeriodId>5</PeriodId>\n" +
      "          <PeriodTitle>P5</PeriodTitle>\n" +
      "        </TimeTablePeriod>\n" +
      "        <TimeTablePeriod>\n" +
      "          <PeriodId>6</PeriodId>\n" +
      "          <PeriodTitle>P6</PeriodTitle>\n" +
      "        </TimeTablePeriod>\n" +
      "      </TimeTablePeriodList>\n" +
      "    </TimeTableDay>\n" +
      "    <TimeTableDay>\n" +
      "      <DayId>2</DayId>\n" +
      "      <DayTitle>Tuesday</DayTitle>\n" +
      "      <TimeTablePeriodList>\n" +
      "        <TimeTablePeriod>\n" +
      "          <PeriodId>1</PeriodId>\n" +
      "          <PeriodTitle>P1</PeriodTitle>\n" +
      "        </TimeTablePeriod>\n" +
      "        <TimeTablePeriod>\n" +
      "          <PeriodId>2</PeriodId>\n" +
      "          <PeriodTitle>P2</PeriodTitle>\n" +
      "        </TimeTablePeriod>\n" +
      "        <TimeTablePeriod>\n" +
      "          <PeriodId>3</PeriodId>\n" +
      "          <PeriodTitle>P3</PeriodTitle>\n" +
      "        </TimeTablePeriod>\n" +
      "        <TimeTablePeriod>\n" +
      "          <PeriodId>4</PeriodId>\n" +
      "          <PeriodTitle>P4</PeriodTitle>\n" +
      "        </TimeTablePeriod>\n" +
      "        <TimeTablePeriod>\n" +
      "          <PeriodId>5</PeriodId>\n" +
      "          <PeriodTitle>P5</PeriodTitle>\n" +
      "        </TimeTablePeriod>\n" +
      "        <TimeTablePeriod>\n" +
      "          <PeriodId>6</PeriodId>\n" +
      "          <PeriodTitle>P6</PeriodTitle>\n" +
      "        </TimeTablePeriod>\n" +
      "      </TimeTablePeriodList>\n" +
      "    </TimeTableDay>\n" +
      "  </TimeTableDayList>\n" +
      "</TimeTable>\n"
  });

  return _app;    
}(hitsclient || {}));
