var hitsclient = (function(_app) {
  if (!_app.providers) {
    _app.providers = [];
  }

  _app.providers.push({
    name : "Term Info",
    value : "TermInfos",
    template : 
      "<!-- Remember to insert RefIds of records that exist; and to hyphenate RefID as\n" +
      "     xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx -->\n" +
"<TermInfo>\n" +
"  <SchoolInfoRefId>{RefId}</SchoolInfoRefId>\n" +
"  <SchoolYear>2012</SchoolYear>\n" +
"  <StartDate>2012-01-05</StartDate>\n" +
"  <EndDate>2012-04-01</EndDate>\n" +
"  <Description>First Term 2012</Description>\n" +
"  <RelativeDuration>0.2500</RelativeDuration>\n" +
"  <TermCode>Sp2004</TermCode>\n" +
"  <Track>PreK</Track>\n" +
"  <TermSpan>0833</TermSpan>\n" +
"</TermInfo>"
  });

  return _app;    
}(hitsclient || {}));
