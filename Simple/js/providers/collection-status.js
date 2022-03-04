var hitsclient = (function(_app) {
  if (!_app.providers) {
    _app.providers = [];
  }

  _app.providers.push({
    name: "CollectionStatus",
    value: "CollectionStatuss",
    template: "<!-- Remember to insert RefIds of records that exist; and to hyphenate RefID as\n" +
      "     xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx -->\n" +
    "<CollectionStatus RefId=\"{RefId}}\">\n" +
"  <ReportingAuthority>Ballarat Diocese</ReportingAuthority>\n" +
"  <ReportingAuthoritySystem>Vic Catholic</ReportingAuthoritySystem>\n" +
"  <ReportingAuthorityCommonwealthId>012345</ReportingAuthorityCommonwealthId>\n" +
"  <SubmittedBy>XXXXXXXX</SubmittedBy>\n" +
"  <SubmissionTimestamp>2018-05-30T09:00:00</SubmissionTimestamp>\n" +
"  <AGCollection>FQ</AGCollection>\n" +
"  <CollectionYear>2018</CollectionYear>\n" +
"  <RoundCode>FQ1</RoundCode>\n" +
"  <AGReportingObjectResponseList>\n" +
"    <AGReportingObjectResponse>\n" +
"      <SubmittedRefId>{RefId}</SubmittedRefId>\n" +
"      <!-- Original Reporting RefId of the submission -->\n" +
"      <SIFRefId>{RefId}</SIFRefId>\n" +
"      <!-- AG assigned for a submission (they can be the same as the original submission but at the discretion of the AG) -->\n" +
"      <HTTPStatusCode>202</HTTPStatusCode>\n" +
"      <!-- Optional HTTP Individual Object Acceptance or not Status -->\n" +
"      <CommonwealthId>012345</CommonwealthId>\n" +
"      <EntityName>XXX Secondary College</EntityName>\n" +
"      <AGSubmissionStatusCode>Declared</AGSubmissionStatusCode>\n" +
"      <!-- Status of AG Processing - Internal to AG -->\n" +
"    </AGReportingObjectResponse>\n" +
"    <AGReportingObjectResponse>\n" +
"      <SubmittedRefId>{RefId}</SubmittedRefId>\n" +
"      <!-- Original Reporting RefId of the submission -->\n" +
"      <HTTPStatusCode>400</HTTPStatusCode>\n" +
"      <ErrorText>Item components do not add up. Malformed characters.</ErrorText>\n" +
"      <CommonwealthId>12387</CommonwealthId>\n" +
"      <EntityName>ABCXYZ Secondary College</EntityName>\n" +
"      <AGSubmissionStatusCode>In Progress</AGSubmissionStatusCode>\n" +
"      <AGRuleList>\n" +
"        <AGRule>\n" +
"          <AGRuleCode>WR-076</AGRuleCode>\n" +
"          <AGRuleComment>Cannot be ignored because Components do not add up to Total - Fix</AGRuleComment>\n" +
"          <AGRuleResponse />\n" +
"          <AGRuleStatus>Fail</AGRuleStatus>\n" +
"        </AGRule>\n" +
"      </AGRuleList>\n" +
"    </AGReportingObjectResponse>\n" +
"    <AGReportingObjectResponse>\n" +
"      <SubmittedRefId>{RefId}</SubmittedRefId>\n" +
"      <SIFRefId>{RefId}</SIFRefId>\n" +
"      <HTTPStatusCode>201</HTTPStatusCode>\n" +
"      <CommonwealthId>12388</CommonwealthId>\n" +
"      <EntityName>Ballarat Diocese</EntityName>\n" +
"      <AGSubmissionStatusCode>In Review</AGSubmissionStatusCode>\n" +
"    </AGReportingObjectResponse>\n" +
"  </AGReportingObjectResponseList>\n" +
"</CollectionStatus>\n" 
  });

  return _app;    
}(hitsclient || {}));
