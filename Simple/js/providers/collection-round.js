var hitsclient = (function(_app) {
  if (!_app.providers) {
    _app.providers = [];
  }

  _app.providers.push({
    name: "CollectionRound",
    value: "CollectionRounds",
    template: 
      "<!-- Remember to insert RefIds of records that exist; and to hyphenate RefID as\n" +
      "     xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx -->\n" +
    "<CollectionRound RefId="{RefId}">\n" +
"  <AGCollection>STATS</AGCollection>\n" +
"  <CollectionYear>2018</CollectionYear>\n" +
"  <AGRoundList>\n" +
"    <AGRound>\n" +
"      <RoundCode>STATS1</RoundCode>\n" +
"      <RoundName>Student Attendance Semester 1</RoundName>\n" +
"      <StartDate>2019-06-28</StartDate>\n" +
"      <DueDate>2019-08-02</DueDate>\n" +
"      <EndDate>2019-10-01</EndDate>\n" +
"    </AGRound>\n" +
"    <AGRound>\n" +
"      <RoundCode>STATS2 </RoundCode>\n" +
"      <RoundName>Student Attendance Term 3</RoundName>\n" +
"      <StartDate>2019-09-20</StartDate>\n" +
"      <DueDate>2019-10-18</DueDate>\n" +
"      <EndDate>2019-12-31</EndDate>\n" +
"    </AGRound>\n" +
"  </AGRoundList>\n" +
"</CollectionRound>\n"
  });

  return _app;    
}(hitsclient || {}));
