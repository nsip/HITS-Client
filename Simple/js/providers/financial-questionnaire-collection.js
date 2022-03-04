var hitsclient = (function(_app) {
  if (!_app.providers) {
    _app.providers = [];
  }

  _app.providers.push({
    name: "Financial Questionnaire Collection",
    value: "FinancialQuestionnaireCollections",
    template: "<!-- Remember to insert RefIds of records that exist; and to hyphenate RefID as\n" +
      "     xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx -->\n" +
"<FinancialQuestionnaireCollection RefId=\"{RefId}}\">\n" +
"  <FQYear>2018</FQYear>\n" +
"  <!-- Data Year -->\n" +
"  <RoundCode>FQ1</RoundCode>\n" +
"  <SoftwareVendorInfo>\n" +
"    <!--Optional information about the Vendor -->\n" +
"    <SoftwareProduct>MYOB</SoftwareProduct>\n" +
"    <SoftwareVersion>11.0</SoftwareVersion>\n" +
"  </SoftwareVendorInfo>\n" +
"  <FQReportingList>\n" +
"    <FQReporting>\n" +
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
"          <Number>03 1234-5678</Number>\n" +
"        </PhoneNumber>\n" +
"        <!-- Collection Contact Phone Number -->\n" +
"      </EntityContact>\n" +
"      <FQContextualQuestionList>\n" +
"        <FQContextualQuestion>\n" +
"          <FQContext>GI.010</FQContext>\n" +
"          <FQAnswer>Cash</FQAnswer>\n" +
"        </FQContextualQuestion>\n" +
"        <FQContextualQuestion>\n" +
"          <FQContext>GI.015</FQContext>\n" +
"          <FQAnswer>No</FQAnswer>\n" +
"        </FQContextualQuestion>\n" +
"      </FQContextualQuestionList>\n" +
"      <FQItemList>\n" +
"        <FQItem>\n" +
"          <FQItemCode>RI.010</FQItemCode>\n" +
"          <TuitionAmount>119827</TuitionAmount>\n" +
"          <BoardingAmount>119827</BoardingAmount>\n" +
"          <SystemAmount>12345</SystemAmount>\n" +
"          <DioceseAmount>76543</DioceseAmount>\n" +
"        </FQItem>\n" +
"        <FQItem>\n" +
"          <FQItemCode>RI.020</FQItemCode>\n" +
"          <TuitionAmount>119827</TuitionAmount>\n" +
"          <BoardingAmount>119827</BoardingAmount>\n" +
"          <SystemAmount>12345</SystemAmount>\n" +
"          <DioceseAmount>76543</DioceseAmount>\n" +
"        </FQItem>\n" +
"        <FQItem>\n" +
"          <FQItemCode>RI.030</FQItemCode>\n" +
"          <TuitionAmount>119827</TuitionAmount>\n" +
"          <BoardingAmount>119827</BoardingAmount>\n" +
"          <SystemAmount>12345</SystemAmount>\n" +
"          <DioceseAmount>76543</DioceseAmount>\n" +
"        </FQItem>\n" +
"      </FQItemList>\n" +
"      <AGRuleList>\n" +
"        <AGRule>\n" +
"          <AGRuleCode>WR-076</AGRuleCode>\n" +
"          <AGRuleComment>I ignored this rule because</AGRuleComment>\n" +
"        </AGRule>\n" +
"      </AGRuleList>\n" +
"    </FQReporting>\n" +
"    <FQReporting>\n" +
"      <CommonwealthId>12387</CommonwealthId>\n" +
"      <EntityName>ABCXYZ Secondary College</EntityName>\n" +
"      <EntityContact>\n" +
"        <Name Type=\"LGL\">\n" +
"          <FamilyName>Citizen</FamilyName>\n" +
"          <GivenName>John</GivenName>\n" +
"        </Name>\n" +
"        <PositionTitle>Auditor</PositionTitle>\n" +
"        <Email Type=\"01\">jcitizen@school.vic.edu.au</Email>\n" +
"        <PhoneNumber Type=\"0096\">\n" +
"          <Number>03 1234-5678</Number>\n" +
"        </PhoneNumber>\n" +
"      </EntityContact>\n" +
"      <FQContextualQuestionList>\n" +
"        <FQContextualQuestion>\n" +
"          <FQContext>GI.010</FQContext>\n" +
"          <FQAnswer>Cash</FQAnswer>\n" +
"        </FQContextualQuestion>\n" +
"        <FQContextualQuestion>\n" +
"          <FQContext>GI.015</FQContext>\n" +
"          <FQAnswer>No</FQAnswer>\n" +
"        </FQContextualQuestion>\n" +
"      </FQContextualQuestionList>\n" +
"      <FQItemList>\n" +
"        <FQItem>\n" +
"          <FQItemCode>RI.010</FQItemCode>\n" +
"          <TuitionAmount>119827</TuitionAmount>\n" +
"          <BoardingAmount>119827</BoardingAmount>\n" +
"          <SystemAmount>12345</SystemAmount>\n" +
"          <DioceseAmount>76543</DioceseAmount>\n" +
"        </FQItem>\n" +
"        <FQItem>\n" +
"          <FQItemCode>RI.020</FQItemCode>\n" +
"          <TuitionAmount>119827</TuitionAmount>\n" +
"          <BoardingAmount>119827</BoardingAmount>\n" +
"          <SystemAmount>12345</SystemAmount>\n" +
"          <DioceseAmount>76543</DioceseAmount>\n" +
"        </FQItem>\n" +
"        <FQItem>\n" +
"          <FQItemCode>RI.030</FQItemCode>\n" +
"          <TuitionAmount>119827</TuitionAmount>\n" +
"          <BoardingAmount>119827</BoardingAmount>\n" +
"          <SystemAmount>12345</SystemAmount>\n" +
"          <DioceseAmount>76543</DioceseAmount>\n" +
"        </FQItem>\n" +
"      </FQItemList>\n" +
"      <AGRuleList>\n" +
"        <AGRule>\n" +
"          <AGRuleCode>WR-076</AGRuleCode>\n" +
"          <AGRuleComment>I ignored this rule because</AGRuleComment>\n" +
"        </AGRule>\n" +
"      </AGRuleList>\n" +
"    </FQReporting>\n" +
"    <FQReporting>\n" +
"      <CommonwealthId>12388</CommonwealthId>\n" +
"      <EntityName>Ballarat Diocese</EntityName>\n" +
"      <EntityContact>\n" +
"        <Name Type=\"LGL\">\n" +
"          <FamilyName>Citizen</FamilyName>\n" +
"          <GivenName>John</GivenName>\n" +
"        </Name>\n" +
"        <PositionTitle>Auditor</PositionTitle>\n" +
"        <Email Type=\"01\">jcitizeb@school.vic.edu.au</Email>\n" +
"        <PhoneNumber Type=\"0096\">\n" +
"          <Number>03 1234-5678</Number>\n" +
"        </PhoneNumber>\n" +
"      </EntityContact>\n" +
"      <FQContextualQuestionList>\n" +
"        <FQContextualQuestion>\n" +
"          <FQContext>GI.010</FQContext>\n" +
"          <FQAnswer>Cash</FQAnswer>\n" +
"        </FQContextualQuestion>\n" +
"        <FQContextualQuestion>\n" +
"          <FQContext>GI.015</FQContext>\n" +
"          <FQAnswer>No</FQAnswer>\n" +
"        </FQContextualQuestion>\n" +
"      </FQContextualQuestionList>\n" +
"      <FQItemList>\n" +
"        <FQItem>\n" +
"          <FQItemCode>RI.010</FQItemCode>\n" +
"          <TuitionAmount>119827</TuitionAmount>\n" +
"          <BoardingAmount>119827</BoardingAmount>\n" +
"          <SystemAmount>12345</SystemAmount>\n" +
"          <DioceseAmount>76543</DioceseAmount>\n" +
"        </FQItem>\n" +
"        <FQItem>\n" +
"          <FQItemCode>RI.020</FQItemCode>\n" +
"          <TuitionAmount>119827</TuitionAmount>\n" +
"          <BoardingAmount>119827</BoardingAmount>\n" +
"          <SystemAmount>12345</SystemAmount>\n" +
"          <DioceseAmount>76543</DioceseAmount>\n" +
"        </FQItem>\n" +
"        <FQItem>\n" +
"          <FQItemCode>RI.030</FQItemCode>\n" +
"          <TuitionAmount>119827</TuitionAmount>\n" +
"          <BoardingAmount>119827</BoardingAmount>\n" +
"          <SystemAmount>12345</SystemAmount>\n" +
"          <DioceseAmount>76543</DioceseAmount>\n" +
"        </FQItem>\n" +
"      </FQItemList>\n" +
"      <AGRuleList>\n" +
"        <AGRule>\n" +
"          <AGRuleCode>WR-076</AGRuleCode>\n" +
"          <AGRuleComment>I ignored this rule because</AGRuleComment>\n" +
"        </AGRule>\n" +
"      </AGRuleList>\n" +
"    </FQReporting>\n" +
"  </FQReportingList>\n" +
"</FinancialQuestionnaireCollection>\n"
  });

  return _app;    
}(hitsclient || {}));
