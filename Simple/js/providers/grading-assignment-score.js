var hitsclient = (function(_app) {
  if (!_app.providers) {
    _app.providers = [];
  }

  _app.providers.push({
    name : "Grading Assignment Score",
    value : "GradingAssignmentScores",
    servicePaths: ["GradingAssignments/{}/GradingAssignmentScores","StudentPersonals/{}/GradingAssignmentScores"],
    template : 
      "<!-- Remember to insert RefIds of records that exist; and to hyphenate RefID as\n" +
      "     xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx -->\n" +
      "<GradingAssignmentScore>\n" +
      "    <StudentPersonalRefId>{RefId}</StudentPersonalRefId>\n" +
      "    <StudentPersonalLocalId>s0004432</StudentPersonalLocalId>\n" +
      "    <TeachingGroupRefId>{RefId}</TeachingGroupRefId>\n" +
      "    <SchoolInfoRefId>{RefId}</SchoolInfoRefId>\n" +
      "    <GradingAssignmentRefId>{RefId}</GradingAssignmentRefId>\n" +
      "    <ScorePoints>24</ScorePoints>\n" +
      "    <ScorePercent>0.96</ScorePercent>\n" +
      "    <ScoreLetter>A+</ScoreLetter>\n" +
      "    <ScoreDescription>High Distinction</ScoreDescription>\n" +
      "</GradingAssignmentScore>\n"
  });

  return _app;  
}(hitsclient || {}));
