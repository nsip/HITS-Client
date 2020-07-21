var hitsclient = (function(_app) {
  if (!_app.providers) {
    _app.providers = [];
  }

  _app.providers.push({
    name : "Student Score Judgement Against Standard",
    value : "StudentScoreJudgementAgainstStandards",
    template : 
      "<!-- Remember to insert RefIds of records that exist; and to hyphenate RefID as\n" +
      "     xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx -->\n" +
"<StudentScoreJudgementAgainstStandard>\n" +
"  <SchoolYear>2018</SchoolYear>\n" +
"  <TermInfoRefId>{RefId}</TermInfoRefId>\n" +
"  <StudentPersonalRefId>{RefId}</StudentPersonalRefId>\n" +
"  <YearLevel>\n" +
"    <Code>10</Code>\n" +
"  </YearLevel>\n" +
"  <TeachingGroupRefId>{RefId}</TeachingGroupRefId>\n" +
"  <StaffPersonalRefId>{RefId}</StaffPersonalRefId>\n" +
"  <CurriculumCode>AUSVELS</CurriculumCode>\n" +
"  <CurriculumNodeCode>MATNUM</CurriculumNodeCode>\n" +
"  <Score>10</Score>\n" +
"  <SpecialCircumstanceLocalCode>SCMP</SpecialCircumstanceLocalCode>\n" +
"  <ManagedPathwayLocalCode>MPOMP</ManagedPathwayLocalCode>\n" +
"  <SchoolInfoRefId>{RefId}</SchoolInfoRefId>\n" +
"</StudentScoreJudgementAgainstStandard>"
  });

  return _app;    
}(hitsclient || {}));
