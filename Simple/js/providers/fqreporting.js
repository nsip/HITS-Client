var hitsclient = (function(_app) {
  if (!_app.providers) {
    _app.providers = [];
  }

  _app.providers.push({
    name: "FQReporting",
    value: "FQReportings",
    template: 
      "<!-- Remember to insert RefIds of records that exist; and to hyphenate RefID as\n" +
      "     xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx -->\n" +
      "<FQReportingObject RefId=\"{RefId}\">\n" +
      "    <FQYear>2018</FQYear> <!-- Data Year -->\n" +
      "    <ReportingAuthority>Ballarat Diocese</ReportingAuthority>\n" +
      "    <ReportingAuthoritySystem>Vic Catholic</ReportingAuthoritySystem>\n" +
      "    <ReportingAuthorityCommonwealthId>012345</ReportingAuthorityCommonwealthId>\n" +
      "    <SystemSubmission>N</SystemSubmission>\n" +
      "    <SoftwareVendorInfo>  <!--Optional information about the Vendor -->\n" +
      "       <SoftwareProduct>MYOB</SoftwareProduct>\n" +
      "       <SoftwareVersion>11.0</SoftwareVersion>\n" +
      "    </SoftwareVendorInfo>\n" +
      "    <EntityLevel>School</EntityLevel>\n" +
      "    <SchoolInfoRefId>{RefId}</SchoolInfoRefId>  <!-- Optional - if it exists.  If a School will be a SchoolInfoRefId -->\n" +
      "    <LocalId>01011234</LocalId>\n" +
      "    <StateProvinceId>01011234</StateProvinceId>\n" +
      "    <CommonwealthId>012345</CommonwealthId> <!-- AGEID -->\n" +
      "    <ACARAId>1234</ACARAId>\n" +
      "    <EntityName>XXX Secondary College</EntityName>\n" +
      "    <EntityContact>\n" +
      "        <Name Type=\"LGL\">\n" +
      "            <FamilyName>Miller</FamilyName> <!-- Collection Contact Family Name -->\n" +
      "            <GivenName>James</GivenName> <!-- Collection Contact First Name -->\n" +
      "        </Name>\n" +
      "        <PositionTitle>Auditor</PositionTitle> <!-- Collection Contact Position -->\n" +
      "        <Email Type=\"01\">some.email@not.a.real.domain</Email> <!-- Collection Contact Email Address -->\n" +
      "        <PhoneNumber Type=\"0096\"><Number>0400 000 000</Number></PhoneNumber> <!-- Collection Contact Telephone Number -->\n" +
      "    </EntityContact>\n" +
      "    <FQContextualQuestionList>\n" +
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
      "      <FQRuleList>\n" +
      "        <FQRule>\n" +
      "          <FQRuleCode>WR-076</FQRuleCode>\n" +
      "          <FQRuleComment>I ignored this rule because</FQRuleComment>\n" +
      "        </FQRule>\n" +
      "      </FQRuleList>\n" +
      "    </FQReportingObject>\n"
  });

  return _app;    
}(hitsclient || {}));
