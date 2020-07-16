var hitsclient = (function(_app) {
  if (!_app.providers) {
    _app.providers = [];
  }

  _app.providers.push({
    name : "Student Score Judgement Against Standard",
    value : "StudentScoreJudgementAgainstStandard",
    template : 
      "<!-- Remember to insert RefIds of records that exist; and to hyphenate RefID as\n" +
      "     xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx -->\n" +
"<StudentScoreJudgementAgainstStandard>\n" +
"</StudentScoreJudgementAgainstStandard>"
  });

  return _app;    
}(hitsclient || {}));
